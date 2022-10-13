import { IAuthInitialState } from "../../types/types";
import { LOG_OUT, LOG_IN, authActionsType } from "../actionCreators";

const initialState: IAuthInitialState = {
  login: "admin",
  password: "admin",
  isAuth: false,
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

    default:
      return state;
  }
};

export default authReducer;
