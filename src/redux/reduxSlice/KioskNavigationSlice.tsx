import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the import path as necessary

interface NavigationState {
  kioskcurrentScreen: string;
}

const initialState: NavigationState = {
  kioskcurrentScreen: 'Home', // Default screen
};

const kioskNavigationSlice = createSlice({
  name: 'kiosknavigation',
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<string>) => {
      state.kioskcurrentScreen = action.payload; // Update the current screen
    },
  },
});

export const { navigate } = kioskNavigationSlice.actions;

export const selectCurrentScreen = (state: RootState) => state.kiosknavigation.kioskcurrentScreen;

export default kioskNavigationSlice.reducer; // Ensure the reducer is exported correctly
