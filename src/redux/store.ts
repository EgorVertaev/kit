import { applyMiddleware, combineReducers, createStore} from "redux"
import authReducer from './Reducers/AuthReducer'
import contactsReducer from './Reducers/ContactReducer'
import userReducer from './Reducers/UserReducer'
import ticketsReducer from './Reducers/TicketsReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  user: userReducer,
  tickets: ticketsReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store