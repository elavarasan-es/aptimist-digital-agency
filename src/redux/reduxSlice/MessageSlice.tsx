import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_DisplayMessages } from '../../serviceFolder/APIRequests';
import { Message, MessageData } from '../../types/CommunicationTypes'; // Fixed the import typo (Communnication -> Communication)

export interface MessageType {
  loading: boolean;
  infoMessageID: string;
  message: MessageData;
  currentMessage: Message | null;
}

const initialState: MessageType = {
  loading: false,
  infoMessageID: "",
  currentMessage: null,
  message: {
    ActiveMessages: [0],  // Fixed typo (Actice -> Active)
    InactiveMessages: [], // Fixed typo (Inactice -> Inactive)
  },
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    loadDisplayMessages: (state, action: PayloadAction<MessageData>) => {
      state.message = action.payload;
      state.loading = false;
    },
    addMessageID: (state, action: PayloadAction<string>) => {
      state.infoMessageID = action.payload;
    },
    updateCurrentMessage: (state, action: PayloadAction<Message | null>) => {
      state.currentMessage = action.payload;
    },
    removeCurrentMessage: (state) => {
      return initialState; // Resetting state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(API_DisplayMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_DisplayMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload; // Update message with API response
      });
  },
});

export const { 
  loadDisplayMessages, 
  addMessageID, 
  updateCurrentMessage, 
  removeCurrentMessage 
} = messageSlice.actions;

export const messagesReducer = messageSlice.reducer;
