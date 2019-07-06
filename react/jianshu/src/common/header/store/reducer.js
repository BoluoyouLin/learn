import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'; 

const defaultState = fromJS({
    focus: false,
    list: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focus', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focus', false)
        case actionTypes.CHANGE_LIST:
            return state.set('list', action.data)
        default:
            return state
    }
}