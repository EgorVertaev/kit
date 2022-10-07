const LOG_OUT = "LOG_OUT"


const initialState = {
  login: null,
  password: null,
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_OUT: {

      return {
        ...state,
        isAuth: false
      }
    }

    default: return state
  }
}

export default authReducer

export const logOut = () => ({type: LOG_OUT })