import users from './userList'
import addUser from './addUser'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  users,
  addUser,
})

export default rootReducer;
