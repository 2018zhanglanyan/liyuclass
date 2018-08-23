import React,{ Component } from 'react';
import TodoList from './pages/todolist'
import 'antd/dist/antd.css';
//引入css
import './App.css';

class App extends Component{

  render(){
    return(
      <div className="App">
          <TodoList />    
      </div>        
    )
  }
}

export default App;