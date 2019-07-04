import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes';
import { initListData } from './actionCreators'
function* getTodoList() {
    try {
        const res = yield axios.get("./list,json")
        const action = initListData(res.data)
        put(action)
    }
    catch(e) {
        console.log("网络请求失败")
    }
}

function* mySaga() {
    yield takeEvery(GET_TODO_LIST, getTodoList);
}
  
  export default mySaga;