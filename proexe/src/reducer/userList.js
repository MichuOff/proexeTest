import {USERS} from '../actions';
export default function users(state=null, action) {
  switch(action.type) {
    case USERS:
      console.log("USERS HERE", state);
      return action.items
    default:
      return state
  }
}
