const espress = require('express');

// console.log(express);

const app = espress();

app.get('/',(req,res,next)=>{
	console.log('home page...');
	next();
},(req,res)=>{
	console.log('home page next...');
	res.send('hello');
})


app.get('/ab?cd',function(req,res){
	res.send('ab?cd');
})

// app.get('/',(req,res)=>{
// 	res.send('get data...');
// });


app.post('/',(req,res)=>{
	res.send('post data...');
});

app.put('/',(req,res)=>{
	res.send('put data...');
});

app.delete('/',(req,res)=>{
	res.send('delete data...');
});


app.use(espress.static('public'));


app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000');
})
