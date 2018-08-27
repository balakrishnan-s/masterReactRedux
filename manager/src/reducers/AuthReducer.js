import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: 'bala@bala.com',
  password: 'password'
};
console.log(EMAIL_CHANGED);

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
          return { ...state, password: action.payload };
    default:
      return state;
  }
};
