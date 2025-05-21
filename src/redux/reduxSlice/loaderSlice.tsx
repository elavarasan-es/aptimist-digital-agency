import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the import path as necessary

interface InitialState {
  isLoader: boolean;
}

const initialState: InitialState = {
  isLoader: true,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    updateLoaderState: (state, action: PayloadAction<boolean>) => {
      state.isLoader = action.payload;
    },
  },
});

export const { updateLoaderState } = loaderSlice.actions;

export const selectLoaderState = (state: RootState) => state.loader.isLoader;

export default loaderSlice.reducer;
