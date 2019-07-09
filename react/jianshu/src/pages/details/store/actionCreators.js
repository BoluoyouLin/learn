import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})

export const getArticle = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            let data = res.data.data;
            dispatch(changeDetail(data.title, data.content))
        })
    }
}