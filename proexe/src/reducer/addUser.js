import { ADD} from '../actions';
export default function addUser(state=null, action) {
  switch(action.type) {
    case ADD:
      console.log("ADDING USER :)", state)
      return action.items
    default:
      return state
  }
}