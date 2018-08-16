const express = require('express');

// console.log(express);

// const userRouter = require('./routes/user.js');

const app = express();


// 两种写法  也可写入多个
app.use(express.static('public'));

// app.use('static/',express.static('public'));


app.use('/user',require('./routes/user.js'));
app.use('/blog',require('./routes/blog.js'));


app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})
