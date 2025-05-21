import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { engagementFilterProp } from '../../types/engagementAnalysis';
import { CommunicationAnalysis } from '../../types/communicationAnalysis';

export interface ReportProps {
  loading: boolean;
  communicationFilter: engagementFilterProp;
  graphTable: CommunicationAnalysis;
}

const initialState: ReportProps = {
  loading: false,
  communicationFilter: {
    bu: 0,
    region: [],
    district: 0,
    store: '',
    timeFrame: [],
    area: '',
    urgency: ''
  },
  graphTable: {
    taskTrend: {
      oneDay: {
        activeUserRate: { previousRate: 0, currentRate: 0 },
        acknowledgmentRate: { previousRate: 0, currentRate: 0 },
        messagesSent: 0
      },
      sevenDays: {
        activeUserRate: { previousRate: 0, currentRate: 0 },
        acknowledgmentRate: { previousRate: 0, currentRate: 0 },
        messagesSent: 0
      }
    },
    tableData: [],
    data: []
  }
};

const communicationAnalysisSlice = createSlice({
  name: 'communicationAnalysis',
  initialState,
  reducers: {
    loadFilterData(state, action: PayloadAction<engagementFilterProp>) {
      state.communicationFilter = action.payload;
    },
    loadChartTable(
      state,
      action: PayloadAction<{
        taskTrend: CommunicationAnalysis['taskTrend'];
        tableData: any[];
        data: any[];
      }>
    ) {
      state.graphTable.taskTrend = action.payload.taskTrend;
      state.graphTable.tableData = action.payload.tableData;
      state.graphTable.data = action.payload.data;
    }
  }
});

export const { loadChartTable, loadFilterData } = communicationAnalysisSlice.actions;
export const communicationAnalysisSliceReducer = communicationAnalysisSlice.reducer;
