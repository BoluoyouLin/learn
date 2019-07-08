import { fromJS } from 'immutable';
import { INIT_HOME_DATA } from './actionType';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    authorList:  []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case INIT_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.data.articleList),
                recommendList: fromJS(action.data.recommendList),
                authorList : fromJS(action.data.authorList)
            })
        default:
            return state
    }
} 