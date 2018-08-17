import React, { Component } from 'react';

// 引入css
import './App.css';

// 定义组件
// 必须继承React.Component
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:'',
      list:['hahaha','xixixi']
    }
  }
  handleAdd(){
    console.log(this.state)
    this.setState({
      list:[...this.state.list,this.state.value],
      value:''
    })
  }
  handleChange(e){
    console.log(e.target.value);
    console.log(this.state);
    this.setState({
      value:e.target.value
    })
  }

  handleDelete(index){
    var list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }

  render() {

    return (
      /*
        <Fragment>
          <input />
          <button>提交</button>
        </Fragment>
        
        <div style={{background:"orange"}}>
          <input />
          <button>提交</button>
        </div>
      */
      <div className="box">
        <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleAdd.bind(this)} >提交</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (<li 
                      key={index}
                      onClick={this.handleDelete.bind(this,index)}
                      >
                        {item}
                      </li>)
            })
          }
        </ul>
      </div>
      
    );
  }
}

export default App;