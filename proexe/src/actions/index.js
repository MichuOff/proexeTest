export const USERS = "USERS";
export const ADD = "ADD"
export function users(items) {
  const action = {
    type: USERS,
    items,
  }
  return action;
}

export function addUser(items) {
  const action = {
    type: ADD,
    items,
  }
  return action;
}