import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  API_DisplayTasks,
  API_FilterTasks,
  API_InstoreDisplayTasks,
  API_InstoreFilterTasks,
} from '../../serviceFolder/APIRequests';
import { InstoreTasksData, TasksData } from '../../types/TaskTypes';

export interface TasksType {
  loading: boolean;
  infoTaskID: string;
  task: TasksData;
  instoreTasks: InstoreTasksData;
}

const initialState: TasksType = {
  loading: false,
  infoTaskID: '',
  task: {
    count: {
      NonManagement: 0,
      Management: 0,
      ShiftSmart: 0,
    },
    assignmentGroup: 0,
    location: '',
    category: '',
    frequency: [],
    area: '',
    createdBy: '',
    status: [],
  },
  instoreTasks: {
    tasks: [],
    assignmentGroup: '',
    category: '',
    area: '',
    createdBy: '',
    status: [],
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    loadDisplayTasks: (state, action: PayloadAction<TasksData>) => {
      state.task = action.payload;
      state.loading = false;
    },
    loadInstoreDisplayTasks: (state, action: PayloadAction<InstoreTasksData>) => {
      state.instoreTasks = action.payload;
      state.loading = false;
    },
    addTaskID: (state, action: PayloadAction<string>) => {
      state.infoTaskID = action.payload;
    },
    filterTasks: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.task.assignmentGroup = action.payload;
      state.loading = false;
    },
    instoreFilterTasks: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.instoreTasks.tasks = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(API_DisplayTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_DisplayTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload; // Update tasks with API response
      })
      .addCase(API_FilterTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_FilterTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.task.assignmentGroup = action.payload; // Update tasks with API response
      })
      .addCase(API_InstoreDisplayTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_InstoreDisplayTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.instoreTasks = action.payload; // Update instore tasks with API response
      })
      .addCase(API_InstoreFilterTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(API_InstoreFilterTasks.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export const {
  loadDisplayTasks,
  addTaskID,
  loadInstoreDisplayTasks,
  instoreFilterTasks,
  filterTasks,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
