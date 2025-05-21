import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreProfileType } from '../../types/StoreProfileType'; // Corrected import syntax
import { API_GET_STORE_DETAILS } from '../../serviceFolder/APIRequests'; // Corrected import syntax

export interface ProfileType {
  loading: boolean;
  profile: StoreProfileType;
}

const initialState: ProfileType = {
  loading: false,
  profile: {
    id: '',
    locationid: 0,
    locationaddress: '',
    locationcity: '',
    locationstate: '',
    locationzip: '',
    locationphone: 0,
    locationcounty: '',
    locationemail: '',
    marketid: 0,
    marketdesc: '',
    marketcode: '',
    regionid: 0,
    regioncode: '',
    regiondesc: '',
    businessunitid: 0,
    businessunitdesc: '',
    open: 0,
    businessunitcode: '',
    latitude: 0,
    longitude: 0,
    operatingstatus: '',
    financialstatus: '',
    operatingclassification: '',
    workforcemanagementstatus: '',
    timezoneinfo: '',
    S1_start_time: '',
    S1_end_time: '',
    S2_start_time: '',
    S2_end_time: '',
    S3_start_time: '',
    S3_end_time: '',
  },
};

const StoreProfileSlice = createSlice({
  name: 'storeprofiledetails',
  initialState: initialState,
  reducers: {
    loadStoreProfile: (state, action: PayloadAction<StoreProfileType>) => {
      state.profile = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(API_GET_STORE_DETAILS.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_GET_STORE_DETAILS.fulfilled, (state, action) => {
        state.profile = action.payload; // Assuming the API returns StoreProfileType
        state.loading = false;
      })
      .addCase(API_GET_STORE_DETAILS.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { loadStoreProfile } = StoreProfileSlice.actions;
export const profileReducer = StoreProfileSlice.reducer;
