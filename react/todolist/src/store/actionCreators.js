import { INIT_LIST_DATA, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';
import axios from 'axios';

export const getChangeInputValueAction = ( value ) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = ( index ) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListData = ( data ) => ({
    type: INIT_LIST_DATA,
    data
})

export const getListData = () => {
    return (dispatch) => {
        axios.get("/list.json").then((res) => {
            const action = initListData(res.data)
            dispatch(action)
         })
    }
}