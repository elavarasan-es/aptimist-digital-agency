import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RevokeDetail } from '../../types/TaskTypes';

const initialStateValue: RevokeDetail = {
  taskId: '',
  taskInstanceId: '',
  taskName: '',
  completedBy: '',
  completedDate: '',
  attachment: null,
  assignmentGroup: '',
  shift: '',
  area: '',
  taskValue: '',
  assignedDate: '',
  notes: '',
  store: '',
};

const RevokelnfoSlice = createSlice({
  name: 'RevokeDetail',
  initialState: initialStateValue,
  reducers: {
    loadTaskInfo: (state, action: PayloadAction<RevokeDetail>) => {
      return action.payload;
    },
    removeTaskInfo: (state) => {
      return initialStateValue;
    },
    createTaskData: (state, action: PayloadAction<RevokeDetail>) => {
      return action.payload;
    },
  },
});

export const { loadTaskInfo, removeTaskInfo, createTaskData } = RevokelnfoSlice.actions;
export default RevokelnfoSlice.reducer;
