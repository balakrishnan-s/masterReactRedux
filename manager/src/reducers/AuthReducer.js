import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: "bala" };
console.log(EMAIL_CHANGED);
export default ( state =  INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, action.payload };
    default:
      return state;
  }
};
