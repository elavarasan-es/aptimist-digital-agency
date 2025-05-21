import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDetail } from './../types/TaskTypes'; // Corrected import

const initialStateValue: TaskDetail = {
  taskid: '',
  taskname: '',
  createdby: '',
  assignmentGroup: '',
  area: '',
  category: '',
  taskValue: '',
  attachmentList: '',
  isNonStealTask: '',
  startDate: '',
  endDate: '',
  completionValidation: '',
  frequency: '',
  recurrencePattern: '',
  sortingShift: '',
  duration: 0,
  assignedShift: '',
  whichDays: '',
  skinnedDays: '',
  rollover: '',
  details: '',
  taskImportance: '',
  createdDate: '',
  managementTaskStatus: '',
  externalId: '',
  locationRegion: [],
  locationDistrict: 0,
  locationStores: [1],
  locationType: '',
};

const TaskInfoDetailsSlice = createSlice({
  name: 'TaskInfoDetails',
  initialState: initialStateValue,
  reducers: {
    loadTaskInfo: (state, action: PayloadAction<TaskDetail>) => {
      return action.payload;
    },
    removeTaskInfo: () => {
      return initialStateValue;
    },
    createTaskData: (state, action: PayloadAction<TaskDetail>) => {
      return action.payload;
    },
  },
});

export const { loadTaskInfo, removeTaskInfo, createTaskData } = TaskInfoDetailsSlice.actions;
export default TaskInfoDetailsSlice.reducer;
