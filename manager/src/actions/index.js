import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

console.log(EMAIL_CHANGED);
export const emailChanged = (text) => {
  return {
      type: 'email_changed',
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'passord_changed',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      })
      .catch(() => {
        firebase.auth.createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
          })
          .catch(() => {

          });
      });
  };
};
