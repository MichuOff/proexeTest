import { createSlice } from '@reduxjs/toolkit';
import { action } from 'commander';

const fetchUsers = () => {
  fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(response => response.json())
    .then(data => {return data})
}

const userSlice = createSlice({
  name: "users",
  initialState: [
    fetchUsers()
  ],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
      };
      state.push(newUser)
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user?.id !== action.payload?.id)
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;