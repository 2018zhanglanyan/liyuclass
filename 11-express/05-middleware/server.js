const http = require('http');

function express(){
	let fns = [];
	let app = (req,res,)=>{
		let i = 0;
		function next(){
			let fn = fns[i++];
			if (!fn) {
				return;
			}
			fn(req,res,next);
		}
		next();
	}
	app.use = (fn)=>{
		fns.push(fn);
	}
	return app;
}


// app 其实就是一个处理请求的函数
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
	res.end('<h1></h1>');
})

const server = http.createServer(app);


server.listen(3000,'127.0.0.1',()=>{
	console.log('app ok 127.0.0.1:3000');
})