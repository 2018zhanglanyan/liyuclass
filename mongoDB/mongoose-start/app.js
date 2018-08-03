const mongoose = require('mongoose');

// 1.链接数据库

mongoose.connect('mongodb://localhost:27017/kuazhu',{useNewUrlParser:true});

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
});

db.once('open',()=>{
	console.log('db connected ok....');

	// 2.定义schema
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		sex:String
	});

	// 3.用定义好的schema生成model
	// 注意：model的第一个参数会生成数据库中的集合的名称,数据库中会把它变成小写加复数
	const User = mongoose.model('User',UserSchema);

	// 4.用model操作数据库
})