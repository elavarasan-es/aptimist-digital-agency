import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreHealthData } from '../../types/InStoreStoreHealth'; // Adjust the path to match your file structure

const initialStateValue: StoreHealthData = {
  WeekProgressCircles: [],
};

const InStoreStoreHealthSlice = createSlice({
  name: 'InStoreStoreHealth',
  initialState: initialStateValue,
  reducers: {
    loadStoreHealthInfo: (state, action: PayloadAction<StoreHealthData>) => {
      return action.payload;
    },
    removeStoreHealthInfo: () => {
      return initialStateValue;
    },
  },
});

export const { loadStoreHealthInfo, removeStoreHealthInfo } = InStoreStoreHealthSlice.actions;

export default InStoreStoreHealthSlice.reducer;
