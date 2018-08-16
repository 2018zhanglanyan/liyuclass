const express = require('express');

// console.log(express);

const app = express();

app.get('/',(req,res)=>{
	res.send("<h1>Hello 明天 你好</h1>");
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000');
})