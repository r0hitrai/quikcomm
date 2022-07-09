// import store config component from redux toolit
import { configureStore } from '@reduxjs/toolkit';
// import user reducer component from features folder
import userReducer from '../features/userSlice';
// import app reducer component from features folder
import appReducer from '../features/appSlice';

// export configureStore for user data layer
export default configureStore({
  // set reducer parameter
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
