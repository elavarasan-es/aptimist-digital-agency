import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { completeLeaderBoard } from './../../types/TaskTypes';

export interface TaskType {
  loading: boolean;
  taskDetails: completeLeaderBoard;
}

const initialState: TaskType = {
  loading: false,
  taskDetails: {
    reportDTO: [],
    area: '',
    taskValue: [],
    taskStatus: [],
    assignmentGroup: []
  }
};

const completeLeaderBoardSlice = createSlice({
  name: 'completeLeaderBoard',
  initialState,
  reducers: {
    loadCompleteDisplayTasks(
      state,
      action: PayloadAction<{
        area: string;
        taskValue: any[];
        taskStatus: any[];
        assignmentGroup: any[];
      }>
    ) {
      state.taskDetails.area = action.payload.area;
      state.taskDetails.taskValue = action.payload.taskValue;
      state.taskDetails.taskStatus = action.payload.taskStatus;
      state.taskDetails.assignmentGroup = action.payload.assignmentGroup;
      state.loading = false;
    },
    completeFilterTasks(state, action: PayloadAction<any[]>) {
      state.loading = true;
      state.taskDetails.reportDTO = action.payload;
      state.loading = false;
    }
  }
});

export const { loadCompleteDisplayTasks, completeFilterTasks } = completeLeaderBoardSlice.actions;
export const completeLeaderBoardReducer = completeLeaderBoardSlice.reducer;
