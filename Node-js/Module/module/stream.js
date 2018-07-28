
const { Readable } = require('stream');

class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 1000000;
    this._index = 1;
  }

  _read() {
    const i = this._index++;
    if (i > this._max)
      this.push(null);
    else {
      const str = '' + i;
      const buf = Buffer.from(str, 'ascii');
      this.push(buf);
    }
  }
}

const stream = require('stream');

// console.log(stream);

// 两种写法
// const {writable} = require('stream');
const Likereadble = require('stream').writable;

class Likereadble extends Likereadble(data,offsetLength){
	constructor(){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
	}
	_dispatch(){
		console.log(this.data,this.offsetLength);	
	}
}
let data = `aaaaaaaaaabbbbbbbbbb`;
