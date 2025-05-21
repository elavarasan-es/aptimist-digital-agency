import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Modes, RoleModeSliceState, StoreView } from '../../utils/types/UserRolesModel'; // Fixed typo in import path

const initialStateValue: RoleModeSliceState = {
  selectedStore: '',
  selectedMode: Modes.KIOSK,
  selectedView: StoreView.STORE_MGMT_VIEW,
};

const StoreDetailsSlice = createSlice({
  name: 'StoreDetails',
  initialState: initialStateValue,
  reducers: {
    setStore: (state, action: PayloadAction<string>) => {
      state.selectedStore = action.payload;
    },
    setMode: (state, action: PayloadAction<Modes>) => {
      state.selectedMode = action.payload;
    },
    setView: (state, action: PayloadAction<StoreView>) => {
      state.selectedView = action.payload;
    },
  },
});

export const { setStore, setMode, setView } = StoreDetailsSlice.actions;
export default StoreDetailsSlice.reducer;
