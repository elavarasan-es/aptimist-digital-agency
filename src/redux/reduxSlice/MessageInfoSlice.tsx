import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommunicationTypes } from '../../types/CommunicationTypes';

const initialStateValue: CommunicationTypes = {
  id: "",
  createdBy: "",
  sendDate: "",
  endDate: "",
  frequency: "",
  msgType: "",
  msgSubject: "",
  msgDetails: "",
  readCount: 0,
  totalCount: 1,
  status: "",
  attachmentids: null,
  locationBU: [],
  locationRegion: [],
  locationDistrict: [],
  locationStores: [],
};

const MessageInfoSlice = createSlice({
  name: 'messageInfoDetails',
  initialState: initialStateValue,
  reducers: {
    loadMessageInfo: (state, action: PayloadAction<CommunicationTypes>) => {
      return action.payload;
    },
    removeMessageInfo: () => {
      return initialStateValue;
    },
    createMessageData: (state, action: PayloadAction<CommunicationTypes>) => {
      return action.payload;
    },
  },
});

export const { loadMessageInfo, removeMessageInfo, createMessageData } = MessageInfoSlice.actions;

export default MessageInfoSlice.reducer;
