import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_FetchNotes } from '../../serviceFolder/APIRequests';

interface Note {
  id: string;
  sendBy: string;
  sendDateTime: string;
  endDate: string;
  sendDate: string;
  notesDescription: string; // Fixed typo here from 'notes Description'
  status: string;
  locationId: string; // Fixed typo here from 'locationld'
  deletedBy: string;
  deletedDate: string; // Fixed typo here from 'deleted Date'
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    loadNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(API_FetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(API_FetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(API_FetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Ensure the action payload is properly typed
      });
  },
});

export const { loadNotes } = notesSlice.actions;
export default notesSlice.reducer;
