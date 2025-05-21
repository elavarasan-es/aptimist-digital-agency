import { createSlice } from '@reduxjs/toolkit';
import { UserDetailsInfo } from '../../types/UserRoleTypes';

const initialState: UserDetailsInfo = {
  id: '',
  employeeId: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  status: '',
  storeCoachRole: '',
  costCenter: '',
  stores: '',
  hierarchyCode: '',
  permissions: {
    help: [],
    management: [],
    communication: [],
    reporting: [],
    home: [],
    apps: [],
  },
  storeList: [],
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      return action.payload;
    },
    removeUserInfo: () => {
      return initialState;
    },
  },
});

export const {loadUserInfo,removeUserInfo} = userInfoSlice.actions;
export const  userInfoSliceReducer = userInfoSlice.reducer;
