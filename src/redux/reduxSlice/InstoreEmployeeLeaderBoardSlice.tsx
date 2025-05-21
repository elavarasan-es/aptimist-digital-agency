import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeLeaderBoard } from '../../types/EmployeeLeaderBoard'; // Adjust path if needed

const initialStateValue: EmployeeLeaderBoard = {
  StartDate: [""],
  EndDate: [""],
  LeaderboardEntry: [], // Assuming this is an array
};

const InStoreEmployeeLeaderBoardSlice = createSlice({
  name: 'InStoreEmployeeLeaderBoard',
  initialState: initialStateValue,
  reducers: {
    loadEmployeeInfo: (state, action: PayloadAction<EmployeeLeaderBoard>) => {
      return action.payload;
    },
    removeEmployeeInfo: () => {
      return initialStateValue;
    },
  },
});

export const {
  loadEmployeeInfo,
  removeEmployeeInfo,
} = InStoreEmployeeLeaderBoardSlice.actions;

export default InStoreEmployeeLeaderBoardSlice.reducer;
