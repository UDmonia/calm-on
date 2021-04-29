import { ADD_SCORE } from "../actions/session_actions";
import deviceStorage from "../services/device_storage";
//import { useDispatch } from "react-redux";
import { receiveScoreErrors } from "../actions/score";

/*
*This block of code will be used for local storage of best value
* This feature is still in development
*/


const initalState = {
  score: 0,
};



const scoreReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return { ...state, score: action.data };
    default:
      return state;
  }
};


export default scoreReducer;
