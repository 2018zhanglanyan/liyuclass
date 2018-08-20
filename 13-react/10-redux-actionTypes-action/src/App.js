import React,{Component,Fragment}from 'react';
import store from './store/index.js';
import { changeValueAction,addItemAction,deleteItemAction } from './store/actionCreator.js';
import AppUI from './AppUI.js';
class App extends Component{

  constructor(props){
    super(props);
    //第一次初始化数据
    this.state=store.getState();
    //接受从store发来的数据
    store.subscribe(()=>{
      const state = this.setState(store.getState());
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(e){
    const action = changeValueAction(e.target.value);
    //发送给store的数据
    store.dispatch(action);
  }

  handleAdd(){
    const action = addItemAction();
    //发送给store的数据
    store.dispatch(action);
  }

  handleDelete(index){
    const action = deleteItemAction(index);
    //发送给store的数据
    store.dispatch(action);
  }

  render(){

    return(
       <AppUI 
          value=  {this.state.value}
          handleChange= {this.handleChange}
          handleAdd=  {this.handleAdd}
          list={this.state.list}
          handleDelete={this.handleDelete}
       />     
    )
  }

};
export default App;
