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
    // function to set channel info
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

// export set channel info action
export const { setChannelInfo } = appSlice.actions;

// export channel Id and channel name selecter
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

// export app slice reducer
export default appSlice.reducer;