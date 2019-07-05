import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        var newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        // eslint-disable-next-line no-redeclare
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = '' 
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        // eslint-disable-next-line no-redeclare
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState;
    }
    return state;
}

