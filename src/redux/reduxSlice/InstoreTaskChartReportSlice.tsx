import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReportTaskChart } from '../../types/ReportTaskTypes'; // Adjust the path as needed

const initialStateValue: ReportTaskChart[] = [
  {
    totalTask: 0,
    totalCompleteTask: 0,
    taskChartData: [],
  },
  {
    totalTask: 0,
    totalCompleteTask: 0,
    taskChartData: [],
  },
];

const InStoreTaskChartReport = createSlice({
  name: 'InStoreTaskChartReport',
  initialState: initialStateValue,
  reducers: {
    loadTaskInfo: (state, action: PayloadAction<ReportTaskChart[]>) => {
      return action.payload;
    },
    removeTaskInfo: () => {
      return initialStateValue;
    },
  },
});

export const { loadTaskInfo, removeTaskInfo } = InStoreTaskChartReport.actions;

export default InStoreTaskChartReport.reducer;
