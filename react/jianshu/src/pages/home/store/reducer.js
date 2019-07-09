import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    authorList:  [],
    showBackTop: false
})

const changeHomeDate = (state, action) => {
    return state.merge({
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList),
        authorList : fromJS(action.data.authorList)
    })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.INIT_HOME_DATA:
            return changeHomeDate(state, action)
        case actionTypes.LOAD_MORE_DATA:
            return state.set('articleList',state.get('articleList').concat(action.list))
        case actionTypes.CHANGE_BACK_TOP_SHOW:
            return state.set('showBackTop', action.show)
        default:
            return state
    }
} 