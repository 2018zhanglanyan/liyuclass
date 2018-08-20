import { CHANGE_VALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes.js';

export const changeValueAction = (payload)=>{
	return {
		type:CHANGE_VALUE,
		payload
	}
}
export const addItemAction = ()=>{
	return {
		type:ADD_ITEM
	}
}
export const deleteItemAction = (payload)=>{
	return {
		type:DELETE_ITEM,
		payload
	}
}
