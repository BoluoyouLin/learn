import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const loadHomeData = (data) => ({
    type: actionTypes.INIT_HOME_DATA,
    data
});

const getArticles = (list) => ({
    type: actionTypes.LOAD_MORE_DATA,
    list: fromJS(list)
});

export const initHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            dispatch(loadHomeData(res.data.data))
        })
    }
};

export const getMoreDate = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            dispatch(getArticles(res.data.data))
        })
    }
};

export const changeBackTopShow = (show) => ({
    type: actionTypes.CHANGE_BACK_TOP_SHOW,
    show
});
