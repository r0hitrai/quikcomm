// import create slice component from redux toolkit
import { createSlice } from '@reduxjs/toolkit';

// export app slice component
export const appSlice = createSlice({
  // slice name
  name: "app",
  // initial state for reducer
  initialState: {
    // channel ID variable to null
    channelId: null,
    // channel name variable to null
    channelName: null,
  },
  // reducer object containing functions
  reducers: {
    // function to set channel ID
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
});

// export set channel Id action
export const { setChannelId } = appSlice.actions;

// export channel ID and channel name selecter
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

// export app slice reducer
export default appSlice.reducer;