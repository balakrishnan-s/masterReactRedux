import { EMAIL_CHANGED } from "./types";
console.log(EMAIL_CHANGED);
export const emailChanged = (text) => {
  return {
      type: 'email_changed',
      payload: text
  };
};
