import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_KioskDisplayTask } from '../../serviceFolder/APIRequests';
import { KioskTasksData } from '../../types/TaskTypes';

export interface TaskType {
  loading: boolean;
  infoTaskID?: string;
  taskCount: {
    to_do: any;
    inprogress: any;
    complete: any;
  };
  totalCount: {
    NonManagement: number;
    Management: number;
    ShiftSmart: number;
  };
  task: KioskTasksData;
}

const initialState: TaskType = {
  loading: false,
  taskCount: {
    to_do: 0,
    inprogress: 0,
    complete: 0,
  },
  totalCount: {
    NonManagement: 0,
    Management: 0,
    ShiftSmart: 0,
  },
  task: {
    count: {
      NonManagement: 0,
      Management: 0,
      ShiftSmart: 0,
    },
    assignmentgroup: 0,
    location: '',
    category: [],
    frequency: [],
    area: '',
    createdBy: '',
    status: [],
  },
};

const kioskTasksSlice = createSlice({
  name: 'kioskTasks',
  initialState,
  reducers: {
    Kiosk_loadDisplayTasks: (state, action: PayloadAction<KioskTasksData>) => {
      state.task = action.payload;
      state.loading = false;
    },
    addTaskID: (state, action: PayloadAction<string>) => {
      state.infoTaskID = action.payload;
    },
    taskCountUpdate: (state, action: PayloadAction<any>) => {
      state.taskCount = action.payload;
    },
    totalCountUpdate: (state, action: PayloadAction<any>) => {
      state.totalCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(API_KioskDisplayTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_KioskDisplayTask.fulfilled, (state, action: PayloadAction<KioskTasksData>) => {
        state.loading = false;
        state.task = action.payload; // Update tasks with API response
      });
  },
});

export const {
  Kiosk_loadDisplayTasks,
  addTaskID,
  taskCountUpdate,
  totalCountUpdate,
} = kioskTasksSlice.actions;

export const kioskTasksReducer = kioskTasksSlice.reducer;
