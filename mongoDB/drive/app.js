const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);

// const assert = require('assert');
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

MongoClient.connect(url,{ useNewUrlParser: true } , function(err, client) {

  console.log("Connected successfully to server");	

  const db = client.db(dbName);

  // 插入
  const col = db.collection('wish');
  // const collection = db.collection('documents');

  col.insertMany([{content:"我想变美"},{content:"我想变瘦"}],function(err,result){
  	if (!err) {
  		console.log(result.result);
  	}else{
  		console.log('error...',err);
  	}
  	 client.close(result);
  });
 
  // col.find({"content":"我想变白"},{"content":"我想变瘦"},function(err,result){
  // 	if (!err) {
  // 		console.log(result.result);
  // 	}else{
  // 		console.log('error...',err);
  // 	}
  // 	// client.close(result);
  // });

  // col.updateOne({"content":"我想变白"},{"content":"我想变瘦"},function(err,result){
  // 	if (!err) {
  // 		console.log(result.result);
  // 	}else{
  // 		console.log('error...',err);
  // 	}
  // 	// client.close(result);
  // });

  // col.deleteOne({"content":"我想变白"},{"content":"我想变瘦"},function(err,result){
  // 	if (!err) {
  // 		console.log(result.result);
  // 	}else{
  // 		console.log('error...',err);
  // 	}
  // 	// client.close(result);
  // });

});
