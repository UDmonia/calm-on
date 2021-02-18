import {ADD_SCORE, RECEIVE_SCORE} from './session_actions'

export const addScore = (score) => ({
    type: ADD_SCORE,
    data: score,
})

export const receiveScore = (key) => ({
    type: RECEIVE_SCORE,
    key: key,
})