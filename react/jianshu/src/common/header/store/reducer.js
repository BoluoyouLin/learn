import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes';

const defaultState = {
    focus: false
}

export default (state = defaultState, action) => {
    if(action.type === SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focus = true;
        return newState;
    }
    if(action.type === SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focus = false;
        return newState;
    }
    return state
}