const http = require('http');

const fs = require('fs');

// const url = require('url');
// const queryString = require('queryString');

const server = http.createServer((req,res)=>{
	res.setHeader('Content-type','test/html','charset:UTF-8');
	res.end('error...');
	let pathName = req.url;
	if (pathName === '/index/html') {
		fs.readFile('./index.html',(err,data)=>{
			if (!err) {
				res.setHeader('Content-type','test/html','charset:UTF-8');
				res.end(data);
			}else{
				
			}
		})
	}else{

	}

})

/*res.setHeader('Content-type','test/html','charset:UTF-8');
res.end();*/
server.listen(3000,'127.0.0.1',()=>{
	console.log('http ..... 10.195.221.101');
})