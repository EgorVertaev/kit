import { IlogOut, IlogIn, IloginRequested, IloginRequestFailed } from './types';

export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED'


export const logOut = (): IlogOut => ({ type: LOG_OUT });
export const logIn = (): IlogIn => ({ type: LOG_IN });
export const loginRequested = (login: string, password: string): IloginRequested => ({type: LOGIN_REQUESTED, payload: {login,  password}})

export const loginRequestFailed = (message: string): IloginRequestFailed => ({type: LOGIN_REQUEST_FAILED, payload: {message}})