import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Button,Row,Col,List } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { changeValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js'

class App extends Component {
  componentDidMount(){
    this.props.handleInit();
  }
  render() {
    // console.log('render')
    return (
      <div className="App">
         <Row>
          <Col span={18} >
            <Input value={this.props.value} 
                   onChange={this.props.handleChange}
            /> 
          </Col>
          <Col span={6} >
            <Button type="primary" onClick={this.props.handleAdd}>增加</Button>
          </Col>
        </Row>
        <List
          style={{ marginTop: 10 }}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
        />
      </div>
    );
  }
}

//store里面的state映射到组件的props上
const mapStateToProps = (state)=>{
  return {
    value:state.value,
    list:state.list
  }
}

//把方法映射到组件的props上
const mapDispatchToProps = (dispatch)=>{
  return {
    handleChange:(e)=>{
      const action = changeValueAction(e.target.value);
      dispatch(action);
    },
    handleAdd:()=>{
      const action = addItemAction();
      dispatch(action)
    },
    handleDelete:(index)=>{
      const action = deleteItemAction(index);
      dispatch(action)
    },
    handleInit:()=>{
      const action = getInitDataAction();
      dispatch(action);
    }
  }
}


//connect方法是让指定的组件和store连接
export default connect(mapStateToProps,mapDispatchToProps)(App);
