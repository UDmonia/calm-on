import jwtDecode from "jwt-decode";
import axios from 'axios';

import SessionAPI from "../util/session_util";
import CashShopAPI from "../util/cashShop_util"
import {setCoins, setEquipped} from "./cashShop_actions"
import deviceStorage from "../services/device_storage";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const ADD_SCORE = "ADD_SCORE";
export const RECEIVE_SCORE_ERRORS = "RECEIVE_SCORE";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const getUser = (token, user) => {
  // console.log(user)
  // console.log("token:  " + token)
  const userJson = JSON.stringify(user)
  console.log("user1:  " + userJson)
  SessionAPI.setAuthToken(token);
  deviceStorage.save("jwt", token)
  deviceStorage.save("user",userJson);
  console.log('got user')
  return user;
};

export const register = (user) => (dispatch) => {
  // not sure if front end has password confirmation
  // !! mike is changing the data shape here so this part will change !!
  delete user.confirmPassword;
  user['birthDate'] = user.birthday;
  delete user.birthday
  user.credential = {
    username: user.email,
    password: user.password
  };
  delete user.password

  return SessionAPI.register(user)
    .then((res) => {
      const {user} = res.data.data

      CashShopAPI.setupUser(user['_id'])
        .then(resp=>{
          const { coins } = resp.data
          // save this info in redux
          console.log('coins', coins)
          dispatch(setCoins(coins))
          // dispatch to save coins
          // dispatch to save outfits
        })

      return dispatch(receiveUser(getUser(res.data.data.token,res.data.data.user)))
        }
      )
      .catch((e) => dispatch(receiveSessionErrors(e.response.data)));
}

export const login = (user) => (dispatch) => {
  user.username = user.email;
  delete user.email;

  return SessionAPI.login(user)
    .then((res) => {
      // !!mike is changing the data shape!!
      // instead of returning Object data {data: {...stuff we need...}}
      // just return Object data {...stuff we need...}
      CashShopAPI.fetchCoins()
      return dispatch(receiveUser(getUser(res.data.data.token, res.data.data.user)))
    })
    .catch((e) => {
      dispatch(receiveSessionErrors(e.response.data))
    });
};

// Retrieves token locally and returns the promise
const retrieveToken = () => {
  return deviceStorage.get('jwt');
};

// Calls /profile endpoint to change user info in the Profile tab
export const editProfile = (fields) => (dispatch) => {
  return retrieveToken()
    .then(token=>{
      return SessionAPI.editProfile(fields)
        .then(res=>{
          return dispatch(receiveUser(getUser(token,res.data.data.user)))
        })
        .catch((e) => dispatch(receiveSessionErrors(e.response.data)))
    })
};

export const logout = () => (dispatch) => {
  deviceStorage.delete("user");
  SessionAPI.setAuthToken(false);
  return dispatch(logoutUser());
};

// actually getUserFromDeviceStorage
export const getUserFromJWT = () => async (dispatch) => {
  const promise1 = deviceStorage.get("jwt")
  const promise2 = deviceStorage.get("user")
  var token;
  var userJson;
  try {[token, userJson] = await Promise.all([promise1, promise2])}
  catch (err) {
    dispatch(RECEIVE_SESSION_ERRORS(e))
  }
  // console.log("token: " + token)
  // console.log("userJson: " + userJson)

  const user = JSON.parse(userJson)
  if (user) return dispatch(receiveUser(getUser(token, user)))

}
  // deviceStorage
  //   .get("user")
  //   .then((userJson) => {
  //     //const decodedJwt = jwtDecode(token);
  //     const user = JSON.parse(userJson)
  //     if (user) return dispatch(receiveUser(user));
  //   })
  //   .catch((e) => console.log(e));

// Calls /profile endpoint to add name during registration
export const addName = (user) => (dispatch) =>{
  return retrieveToken()
  .then(token=>{
    return SessionAPI.addName(user)
    .then((res) => dispatch(receiveUser(getUser(token, res.data.data.user))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));
  })
}

// Mike is still working on this route
// Bascially pulls all current stored check-ins
export const checkin = (checkinDTO) => (dispatch) =>
  SessionAPI.checkin(checkinDTO)
  .then((res) => dispatch(receiveUser(getUser(res.data.token,res.data.user))))
  .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

// Still need the change password route, Mike is on it

// action for posting like or dislike
export const postLikeOrDislike = (req) => (dispatch) => {
}

// action for getting like or dislike
export const getLikeOrDislike = () => (dispatch) => {

}

// action for posting a comment about an activity
export const postComment = (comment) => (dispatch) => {

}