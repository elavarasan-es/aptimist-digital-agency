import { combineReducers } from '@reduxjs/toolkit';
import { authSliceReducer } from './reduxSlice/AuthSlice';
import { userInfoSliceReducer } from './reduxSlice/UserInfoSlice';
import {modalSliceReducer} from './reduxSlice/ModalSlice'

const rootReducer = combineReducers({
  auth: authSliceReducer,
  userInfo:userInfoSliceReducer,
  modals:modalSliceReducer,
});

export default rootReducer;
