import {ADD_SCORE, RECEIVE_SCORE_ERRORS} from './session_actions'

export const addScore = (score) => ({
    type: ADD_SCORE,
    data: score,
})

export const receiveScoreErrors = (error) => ({
    type: RECEIVE_SCORE_ERRORS,
    error,
})