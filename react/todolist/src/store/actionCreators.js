import { INIT_LIST_DATA, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_TODO_LIST } from './actionTypes';

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

export const getTodoList = () => ({
    type: GET_TODO_LIST
})
