import { ADD_SCORE, RECEIVE_SCORE } from "../actions/session_actions";

const initalState = {
    score: 0,
}

const scoreReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_SCORE:
            return {...state,
            score: action.data}
        case RECEIVE_SCORE:
            return state;
        default:
            return state;
    }
}

export default scoreReducer;
