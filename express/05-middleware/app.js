const express = require('express');

// console.log(express);

const app = express();

app.use((req,res,next)=>{
	console.log('before A::');
	next();
	console.log('after A::');
})


app.use((req,res,next)=>{
	console.log('before B::');
	next();
	console.log('after B::');
})


app.use((req,res,next)=>{
	console.log('before C::');
	next();
	console.log('after C::');
})


app.get('/',(req,res)=>{
	res.send("<h1>Hello 明天 你好</h1>");
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000');
})