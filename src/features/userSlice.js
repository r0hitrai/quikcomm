// import create slice component from redux toolkit
import { createSlice } from '@reduxjs/toolkit';

// export userSlice component
export const userSlice = createSlice({
  // name used in action types
  nam: "user",
  // initial state for the reducer
  initialState: {
    // user variable to null
    user: null,
  },
  // reducer object containing functions
  reducer: {
    // login function
    login: (state, action) => {
      state.user += action.payload;
    },
    // logout function
    logout: (state) => {
      state.user = null;
    },
  },
});

//export login and logout actions
export const { login, logout } = userSlice.actions;
// export user selection
export const selectUser = (state) => state.user.user;
// export userSlice reducer
export default userSlice.reducer;