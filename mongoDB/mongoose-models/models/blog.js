const mongoose = require('mongoose');

var db = mongoose.connection;

const BlogSchema = new mongoose.Schema({
	author:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	title:{
		type:String
	},
	content:{
		type:String
	}
});

BlogSchema.statics.findBlogs = function(query={},callback){
	this.find(query)
	.populate('author')
	.then((docs)=>{
		console.log(docs);
	})
}


const BlogModel = mongoose.model('Blog',BlogSchema);

module.exports = BlogModel;