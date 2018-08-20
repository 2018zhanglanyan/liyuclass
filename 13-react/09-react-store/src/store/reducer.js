const defaultState={
	value:'',
	list:['11','22']
}

export default (state=defaultState,action)=>{
	//判断发送过来的action的tpye，并作出相应的数据更改，最终返回数据
	if(action.type == 'change_value'){
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.value = action.payload;
		return Newstate
	}

	if(action.type == 'add_item'){
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.list.push(state.value);
		Newstate.value = ''
		return Newstate
	}

	if(action.type == 'delete_item'){
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.list.splice(action.index,1)
		return Newstate
	}
	return state;
}
