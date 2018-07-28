
// global str = 'hello';
// console.log(global);
// console.log(module.exports);
// console.log(exports);
// console.log(module.exports === exports);
// window.str = str;

let str = 'hello';
let obj = {name:'Tom',age:18};
let fn = ()=>{
	console.log('function....');
}

// module.exports.str = str;
// module.exports.obj = obj;
// module.exports.fn = fn;

module.exports = {
	str : str,
	obj : obj,
	fn : fn
}