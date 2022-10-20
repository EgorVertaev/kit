import { takeEvery, select, put } from "redux-saga/effects";
import { logIn, loginRequestFailed, LOGIN_REQUESTED } from "./authActions";
import { IloginRequested } from "./types";
import { IState, IAuthInitialState } from "../../types/types";
import { myToken } from "../../constants/constans";

function* authWorker(action: IloginRequested) {
  try {
    const state: IAuthInitialState = yield select(
      (state: IState) => state.auth
    );

    if (
      action.payload.login === state.login &&
      action.payload.password === state.password
    ) {
      yield localStorage.setItem("token", myToken);
      yield put(logIn());
    } else {
      throw new Error("login or password incorrect");
    }
  } catch (error: any) {
    yield put(loginRequestFailed(error.message));
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_REQUESTED, authWorker);
}
