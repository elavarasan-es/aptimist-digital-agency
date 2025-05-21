import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommunicationSummary } from '../../types/CommunicationSummary';

const initialStateValue: CommunicationSummary = {
  totalMessages: 0,
  readyBy: 0,
  avgReadRate: 0,
};

const InStoreCommunicationSummarySlice = createSlice({
  name: 'InStoreEmployeeLeaderBoard',
  initialState: initialStateValue,
  reducers: {
    loadCommunicationSummaryInfo: (
      state,
      action: PayloadAction<CommunicationSummary>
    ) => {
      return action.payload;
    },
    removeCommunicationSummaryInfo: () => {
      return initialStateValue;
    },
  },
});

export const {
  loadCommunicationSummaryInfo,
  removeCommunicationSummaryInfo,
} = InStoreCommunicationSummarySlice.actions;

export default InStoreCommunicationSummarySlice.reducer;
