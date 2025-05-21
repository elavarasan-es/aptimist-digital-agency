import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskStreak } from '../../types/TaskStreak'; // Adjust the path as needed

const initialStateValue: TaskStreak = {
  store: 0,
  currentStreak: 0,
  bestStreak: 0,
  taskCompletedDates: [],
};

const InStoreTaskStreakSlice = createSlice({
  name: 'InStoreTaskStreakSlice',
  initialState: initialStateValue,
  reducers: {
    loadTaskStreakinfo: (state, action: PayloadAction<TaskStreak>) => {
      return action.payload;
    },
    removeTaskStreakinfo: () => {
      return initialStateValue;
    },
  },
});

export const { loadTaskStreakinfo, removeTaskStreakinfo } = InStoreTaskStreakSlice.actions;

export default InStoreTaskStreakSlice.reducer;
