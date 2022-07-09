// import store config component from redux toolit
import { configureStore } from '@reduxjs/toolkit';
// import user reducer component from features folder
import userReducer from '../features/userSlice';

// export configureStore for user data layer
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
