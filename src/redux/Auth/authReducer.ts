import { IAuthInitialState } from "../../types/types";
import { LOG_OUT, LOG_IN, LOGIN_REQUEST_FAILED, LOGIN_REQUESTED } from './authActions';
import { authActionsType } from "./types";

const initialState: IAuthInitialState = {
  login: "admin",
  password: "admin",
  isAuth: false,
  error: ''
};

const authReducer = (state = initialState, action: authActionsType) => {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case LOG_IN: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        error: action.payload.message
      }
    }
    
    case LOGIN_REQUESTED: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return state;
  }
};

export default authReducer;
