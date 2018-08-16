
const fs = require('fs');

const filePath = './001.json';

let add = (id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			// console.log('success');
			console.log(data);
			let obj = JSON.parse(data);
			obj.push({
				'id':id,
				'name':name
			});
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if (!err) {
					callback(null,data);
				}else{
					callback(err);
				}
			});
		}else{
			callback(err);
		}
	});
};


let get = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			// console.log('success');
			// console.log(data);
			let obj = JSON.parse(data);
			let result = null;
			for(key in obj){

			}
		}else{
			console.log('filed-2 file....');
		}
	});
};

let update = (id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			console.log(data);
			let result = null; 
		}else{
			console.log();
		}
	})
}

let remove = (id,callback)=>{

}

add(1,'Tom',(err,data)=>{
	if (!err) {
		console.log(data.toString());
	}else{
		console.log('add data filed...',err);
	}
});
/*
get(2,'leo',(err,data)=>{
	if (!err) {
		console.log(data);
	}else{
		console.log('add data filed...',err);
	}
});
*/