import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'; 

const defaultState = fromJS({
    focus: false,
    list: [],
    mouse: false,
    page: 0,
    totalPage: 0
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focus', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focus', false)
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouse', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouse', false)
        case actionTypes.CHANGE_PAGE:
                    return state.set('page', action.page)
        default:
            return state
    }
}