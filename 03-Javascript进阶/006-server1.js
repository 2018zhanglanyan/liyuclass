// 初识后端!!!
// 创建一个模块
var http = require('http');
// 创建一个读取文件的模块
var fs = require('fs');
// var 一个变量来接受调用http上的createServer方法时的返回结果,createServer接受的参数是一个函数,这个函数又有两个参数
// 一个接受的数据(req),一个是返回的数据(res),res上有一个end方法,end接受的参数就是显示到前端的内容!
var server = http.createServer(function(req,res){
	// html 可以解析html的默认标签样式
	// console.log('Hello nodejs');
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	// 给后端指明文件的地址
	var filepath = './' + req.url
	// fs上有一个readFile方法,接受两个参数,第一个是文件地址,第二个是回调函数.回调函数有两个参数,
	// 第一个是err错误时怎么办,第二个是找到的文件,在函数里要判断是否err,如果err怎么办,else怎么办.res.end就是把找到的文件在页面展示出来!
	fs.readFile(filepath,function(err,date){
		console.log(req.url)
		if (err) {
			console.log('err:::' + err);
			res.statusCode = 404;
			res.end('file is not found');
		}else{
			res.statusCode = 200;
			res.end(date);
		}
	})
		// plain就是一个纯文本
		// res.setHeader('Content-Type','text/plain')
		// res.statusCode = 404;
		// res.end('<h1>what is this? first study this knowlage,really diffculty 现在中文也能出现了</h1>');
});
// server上边有一个listen方法,它接受三个参数(第一个是运行的端口号"一般是3000",第二个运行的地址"一般是本机127.0.0.1或loaclhost",
// 第三个参数是一个回调函数"里面可以打印启动这个服务时的提示信息").
// http://127.0.0.1:3000/text.txt  http = 协议:// 127.0.0.1域名: :3000 端口号/ text.txt  资源文件
server.listen(3000,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:3000');
});