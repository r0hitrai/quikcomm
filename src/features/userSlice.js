// import create slice component from redux toolkit
import { createSlice } from '@reduxjs/toolkit';

// export user slice component
export const userSlice = createSlice({
  // slice name
  name: "user",
  // initial state for reducer
  initialState: {
    // user variable to null
    user: null,
  },
  // reducer object containing functions
  reducers: {
    // login function
    login: (state, action) => {
      state.user = action.payload;
    },
    // logout function
    logout: (state) => {
      state.user = null;
    },
  },
});

//export login and logout actions
export const { login, logout } = userSlice.actions;
// export user selector
export const selectUser = (state) => state.user.user;
// export user slice reducer
export default userSlice.reducer;