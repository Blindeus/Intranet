import { authTypes } from "../types/types";

const searchToken = localStorage.getItem("token");
const storedToken = searchToken ? searchToken : null;
export const initialState = {
  token: storedToken,
  logged: storedToken ? true : false,
};

export const authReducer = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case authTypes.login:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token,
        logged: true,
      };
    case authTypes.logout:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        logged: false,
      };
      
    default:
      return state;

  }
};
