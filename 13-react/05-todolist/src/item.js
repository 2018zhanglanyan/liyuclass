import React, { Component } from 'react';

class Item extends Component{

	handleDelete(){
		// console.log(this.props.data);
		console.log(this.props.index);
		// this.props.handleDelete(this.props.index);
	}
	render (){
		return (
			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</li>
		)
	}
}

export default Item;