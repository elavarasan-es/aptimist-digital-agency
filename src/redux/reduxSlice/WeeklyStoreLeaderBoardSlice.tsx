import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreLeaderBoard } from '../../types/StoreLeaderBoardType'; // Adjust the path

const initialStateValue: StoreLeaderBoard = {
  WeeklyStoreLeaderBoard: [],
  StartDate: [""],
  EndDate: [""],
};

const WeeklyStoreLeaderBoardSlice = createSlice({
  name: 'WeeklyStoreLeaderBoard',
  initialState: initialStateValue,
  reducers: {
    loadStoreInfo: (state, action: PayloadAction<StoreLeaderBoard>) => {
      return action.payload;
    },
    removeStoreInfo: () => {
      return initialStateValue;
    },
  },
});

export const { loadStoreInfo, removeStoreInfo } = WeeklyStoreLeaderBoardSlice.actions;
export default WeeklyStoreLeaderBoardSlice.reducer;
