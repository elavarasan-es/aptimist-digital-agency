import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { engagementChartTable, engagementFilterProp } from '../../types/engagementAnalysis';

export interface ReportProps {
  loading: boolean;
  engagementFilter: engagementFilterProp;
  graphTable: engagementChartTable;
}

const initialState: ReportProps = {
  loading: false,
  engagementFilter: {
    bu: 0,
    region: [],
    district: '',
    store: [],
    timeFrame: [],
    area: '',
    position: []
  },
  graphTable: {
    engagementChart: [
      {
        label: '0',
        value: 0
      }
    ],
    taskTrend: [
      {
        timeFrame: 'Weekly',
        points: '0',
        previousRate: 0,
        currentRate: 0
      }
    ],
    tableData: [],
    employeeData: 0
  }
};

const engagementAnalysisSlice = createSlice({
  name: 'engagementAnalysis',
  initialState,
  reducers: {
    loadFilterData(state, action: PayloadAction<engagementFilterProp>) {
      state.engagementFilter = action.payload;
    },
    loadChartTable(state, action: PayloadAction<engagementChartTable>) {
      state.graphTable.engagementChart = action.payload.engagementChart;
      state.graphTable.taskTrend = action.payload.taskTrend;
      state.graphTable.tableData = action.payload.tableData;
      state.graphTable.employeeData = action.payload.employeeData;
    }
  }
});

export const { loadChartTable, loadFilterData } = engagementAnalysisSlice.actions;
export const engagementAnalysisSliceReducer = engagementAnalysisSlice.reducer;
