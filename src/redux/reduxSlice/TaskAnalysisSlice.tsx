import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chartTable, taskFilterProp } from './../../types/types'; // Corrected imports

export interface ReportProps {
  loading: boolean;
  taskFilter: taskFilterProp;
  graphTable: chartTable;
}

const initialState: ReportProps = {
  loading: false,
  taskFilter: {
    bu: [],
    region: [],
    district: [],
    store: [],
    area: [],
    assignmentGroup: [],
    frequency: [],
    priority: [],
    shift: [],
    timeFrame: [],
  },
  graphTable: {
    chart: {
      chartData: [],
      taskTrend: {
        totalCompletedTask: 0,
        totalAssignedTask: 0,
        completionRate: {
          previousRate: 0,
          currentRate: 0,
        },
      },
    },
    table: [],
  },
};

const taskAnalysisSlice = createSlice({
  name: 'taskAnalysis',
  initialState,
  reducers: {
    loadFilterData: (state, action: PayloadAction<taskFilterProp>) => {
      state.taskFilter = action.payload;
    },
    loadChartTable: (state, action: PayloadAction<[chartTable, any[]]>) => {
      state.graphTable.chart = action.payload[0];
      state.graphTable.table = action.payload[1];
    },
  },
});

export const { loadChartTable, loadFilterData } = taskAnalysisSlice.actions;
export const taskAnalysisSliceReducer = taskAnalysisSlice.reducer;
