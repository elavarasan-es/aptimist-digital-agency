import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the import path as necessary

interface NavigationState {
  currentScreen: string;
}

const initialState: NavigationState = {
  currentScreen: 'Task', // Default screen
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<string>) => {
      state.currentScreen = action.payload; // Update the current screen
    },
  },
});

export const { navigate } = navigationSlice.actions;

export const selectCurrentScreen = (state: RootState) => state.navigation.currentScreen;

export default navigationSlice.reducer; // Ensure the reducer is exported correctly
