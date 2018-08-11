const Router=require('express').Router;
const CategoryModel = require('../models/categoryModel.js');
const ArticleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
const router=Router();

router.get('/',(req,res)=>{
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((category)=>{
		let options = {
			page: req.query.page,//需要显示的页码
			model:ArticleModel, //操作的数据模型
			query:{}, //查询条件
			projection:'-_v', //投影，
			sort:{_id:-1}, //排序
			populate:[{path:'category',select:"name"},{path:'user',select:'username'}]
		}

		pagination(options)
		.then((data)=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				url:'/articles',
				category:category
			});	
		})
	})
});

//ajax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
	let options = {
		page: req.query.page,//需要显示的页码
		model:ArticleModel, //操作的数据模型
		query:{}, //查询条件
		projection:'-__v', //投影，
		sort:{_id:-1}, //排序
		populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
	}

	pagination(options)
	.then((data)=>{
		res.json({
			code:'0',
			data:data
		})
	})
});


// 显示详情页面

router.get("/view/:id",(req,res)=>{
	let id = req.params.id;
	/*
	ArticleModel.update({_id:id},{$inc:{click:1}})
	.then((raw)=>{
		ArticleModel.findById(id)
		.then((acticle)=>{
			console.log(acticle)
		})
	})
	*/

	ArticleModel.findByIdAndUpdate(id,{$inc:{click:1}},{new:true})
	.then((raw,acticle)=>{
		console.log(acticle);
	})
})

module.exports = router;