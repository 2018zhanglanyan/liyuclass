const swig = require('swig');
class Index{
	index(req,res,...args){
		let template = swig.compileFile(__dirname+'/../View/Index/index.html');
		let html = template({});
		res.setHeader('Content-Type','text/html;charset=UTF-8');
		res.end(html);			
	}
}

module.exports = new Index();