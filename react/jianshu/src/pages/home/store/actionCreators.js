import { INIT_HOME_DATA } from './actionType';
import axios from 'axios';

const loadHomeData = (data) => ({
    type: INIT_HOME_DATA,
    data
})

export const initHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            dispatch(loadHomeData(res.data.data))
        })
    }
}
