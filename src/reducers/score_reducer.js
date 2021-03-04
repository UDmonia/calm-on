import { ADD_SCORE } from "../actions/session_actions";
import deviceStorage from "../services/device_storage";
//import { useDispatch } from "react-redux";
import { receiveScoreErrors } from "../actions/score";

const getFromStorage = () => async (dispatch) => {
  //const dispatch = useDispatch();   
  const promise1 = deviceStorage.get("score");
  var score;
  try {score = await Promise.resolve(promise1)} 
  catch (error) {
      dispatch(receiveScoreErrors(error))   
  }
  console.log(score);
  return score;
};

const initalState = {
  //score: 0,
  score: getFromStorage(),
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
