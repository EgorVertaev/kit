import { applyMiddleware, combineReducers, createStore} from "redux"
import authReducer from './Auth/authReducer'
import contactsReducer from './Contacts/contactReducer'
import userReducer from './User/UserReducer'
import ticketsReducer from './Tickets/ticketsReducer'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga"
import { sagaContactWatcher } from "./Contacts/saga"
import { sagaTicketWatcher } from "./Tickets/saga"
import { fork } from 'redux-saga/effects'
import { authWatcher } from "./Auth/saga"


const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  user: userReducer,
  tickets: ticketsReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
export default store

function* rootSaga() {
  yield fork(sagaContactWatcher);
  yield fork(sagaTicketWatcher)
  yield fork(authWatcher)
}

sagaMiddleware.run(rootSaga)
