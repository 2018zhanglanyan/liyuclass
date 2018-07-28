const http = require('http');

const url = require('url');
const querystring = require('querystring');
const util = require('util');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const server = http.creatServer((req,res)=>{
	// console.log(req.url);
	if (req.method.toUpperCase === 'POST') {
		console.log('aaa');
		let form = new formidable.IncomingForm();
		form.uploadDir = "./download/";
		form.keepExtensions = true;
		form.parse(req,function(err,fields,files){
			//改名
			let oldPath = './'+files.img.path;
			let extname = path.extname(oldPath);
			let newPath = './download'+(new Date()).getTime()+Math.random()+extname;
			fs.rename(oldPath,newPath,(err)=>{
				if (!err) {
					console.log('bbb');
					res.writeHead(200,{'content-type':'text/plain'});
					res.write('received upload:\n\n');
					res.end(util,inspect({fields:fields,files:files}));
				}
			})
		})
	}
	// else{
	// 	let path = req.url;
	// 	const Url = url.parse(path,true).query;
	// 	console.log(Url.name);
	// 	res.end('ok');
	// }
});