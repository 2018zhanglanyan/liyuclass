const http = require('http');

const server = http.createServer((req,res)=>{
	let data = ['learn react','learn nodejs']
	res.end(JSON.stringify(data))
})

server.listen(3000,'127.0.0.1'()=>{
	console.log('server 127.0.0.1:3000');
})