const Router=require('express').Router;

const UserModel = require('../models/userModle.js');

const router=Router();

//权限控制
router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请登录管理员账户</h1>')
	}
})

//显示管理员页面
router.get('/',(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
});


// 显示用户列表
router.get('/users',(req,res)=>{
	//获取所有用户的信息,分配给模板
	
	//需要显示的页码
	let page = req.query.page || 1;

	if(page <= 0){
		page = 1;
	}
	//每页显示条数
	let limit = 2;

	UserModel.estimatedDocumentCount({})
	.then((count)=>{
		let pages = Math.ceil(count / limit);
		if(page > pages){
			page = pages;
		}
		let list = [];

		for(let i = 1;i<=pages;i++){
			list.push(i);
		}
		
		let skip = (page - 1)*limit;

		UserModel.find({},'_id username isAdmin')
		.skip(skip)
		.limit(limit)
		.then((users)=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page*1,
				list:list
			});			
		})
	})
})

module.exports = router;
