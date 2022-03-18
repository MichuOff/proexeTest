import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { action } from 'commander';

const fetchUsers = () => {
  fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(response => response.json())
    .then(data => {return data})
}

export const getUsersAsync = createAsyncThunk('users/getUsersAsync',
  async () => {
    const response = await fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    if (response.ok) {
      const users = await response.json();
      return { users }
    }
  }
)

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
        email: action.payload.name,
      };
      state.push(newUser)
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user?.id !== action.payload?.id)
    }
  },
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => {
      return action.payload.users;
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;