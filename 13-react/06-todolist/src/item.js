import React, { Component } from 'react';
import PropTypes from 'pro-types';

class Item extends Component{

	handleDelete(){
		// console.log(this.props.data);
		// console.log(this.props.index);
		this.props.handleDelete(this.props.index);
	}
	render (){
		return (
			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</li>
		)
	}
	Item.PropTypes = {
		key:propTypes.Number,
		content:propTypes.String,
		index:propTypes.Number,
		handleDelete:propTypes.func
	}
}

export default Item;