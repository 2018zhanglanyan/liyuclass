
// const buf = Buffer([0x10,0x20]);
// const buf = Buffer('1');

// buf[1] = 0x10;
// console.log(buf);
// console.log(Buffer);


const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const oEmitter = new MyEmitter();

let fn = ()=>{
	console.log('test');
}
let liuxiangming = ()=>{
	console.log('test1...');
}

oEmitter.on('test',fn);

oEmitter.on('test',()=>{
	console.log('test...');
});

oEmitter.removeListener('test',liuxiangming); 

oEmitter.emit('test');
