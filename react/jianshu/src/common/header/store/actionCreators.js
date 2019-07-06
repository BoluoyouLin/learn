import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data,
    totalPage : Math.ceil(data.length / 10)
});

export const getSearchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const getSearchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const initList = () => {
    return (dispatch) => {
        axios.get('/api/list.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log("热门推荐数据请求失败")
        })
    }
};

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})