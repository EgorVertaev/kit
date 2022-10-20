import { LOG_OUT, LOG_IN, LOGIN_REQUESTED, LOGIN_REQUEST_FAILED } from "./authActions";

export type authActionsType = IlogOut | IlogIn | IloginRequestFailed | IloginRequested;

export interface IlogOut {
  type: typeof LOG_OUT;
}

export interface IlogIn {
  type: typeof LOG_IN;
}

export interface IloginRequested {
  type: typeof LOGIN_REQUESTED;
  payload: {
    login: string;
    password: string;
  }
}

export interface IloginRequestFailed {
  type: typeof LOGIN_REQUEST_FAILED;
  payload: {
    message: string;
  }
}
