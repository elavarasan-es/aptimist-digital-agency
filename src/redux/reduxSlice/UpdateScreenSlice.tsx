import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the import path if needed

interface InitialState {
  updateTaskList: boolean;
  updateMessageList: boolean;
  updateProfile: boolean;
}

const initialState: InitialState = {
  updateTaskList: false,
  updateMessageList: false,
  updateProfile: false,
};

const updateScreenSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateTaskCreation: (state, action: PayloadAction<boolean>) => {
      state.updateTaskList = action.payload;
    },
    updateMessageCreation: (state, action: PayloadAction<boolean>) => {
      state.updateMessageList = action.payload;
    },
    updateProfileChange: (state, action: PayloadAction<boolean>) => {
      state.updateProfile = action.payload;
    },
  },
});

export const {
  updateTaskCreation,
  updateMessageCreation,
  updateProfileChange,
} = updateScreenSlice.actions;

export default updateScreenSlice.reducer;

// Optional selector
export const selectUpdateState = (state: RootState) => state.update;
