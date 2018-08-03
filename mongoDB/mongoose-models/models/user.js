const mongoose = require('mongoose');

const db = mongoose.connection;

const UserSchema = new mongose.Schema({
	name:{
		type:String,
		require:[true,'用户名必须'],
		maxlength:[10,'最多10个字符']，
		minlength:[10,'最小2个字符']
	},
	age:{
		type:Number,
		default:10
		min:[1,'最小是1'],
		max:[150,'最大是150']
	},
	sex:{
		type:String,
		enum:["male","female"]
	},
	locked:{
		type:Boolean,
	},
	createdAt:{
		type:Date,
		default:date.now
	},
	friends:{
		type:Array,
	}
});


UserModel.findPhone('17729250522',function(err,doc){
	console.log();
	console.log();
})

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;