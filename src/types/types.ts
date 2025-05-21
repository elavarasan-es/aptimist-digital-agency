export interface Task {
  startingShift?: string;
  whichDays?: string;
  taskId: string;
  frequency: string;
  startDate: string;
  endDate: string;
  recurrencePattern: boolean;
  duration: number;
  skippedDays: string;
  skippedShift: string;
  assignmentGroupID: string;
  categoryID: string;
  areaID: string;
  taskValue: string;
  name: string;
  details: string;
  attachmentIDs: string;
  completionValidation: string;
  rollover: boolean;
  currentStatus: string;
  createdBy: string;
  createdDate: string;
  external_Task_id: string;
  taskStatus: string;
  whyIsImportant: string;
}

export interface TaskData {
  taskId: any;
  frequency: string;
  startDate: string;
  endDate: string;
  recurrencePattern: boolean;
  duration: number;
  skippedDays: string;
  skippedShift: string;
  assignmentGroupID: string;
  categoryID: string;
  areaID: string;
  taskValue: string;
  name: string;
  details: string;
  attachmentIDs: string;
  completionValidation: string;
  rollover: boolean;
  currentStatus: string;
  createdBy: string;
  createdDate: string;
  external_Task_id: string;
  taskStatus: string;
  whyIsImportant: string;
}

export interface GroupedCategory {
  id: string;
  label: string;
  tasks?: TaskData[];
  keyId: string;
  keyValue: number;
}

export interface TaskFilterProp {
  bu: string;
  region: string[];
  district: string[];
  store: string[];
  area: string[];
  assignmentGroup: string[];
  frequency: string[];
  priority: string;
  shift: string;
  timeFrame: string[];
}

export interface ChartProp {
  value: any;
  label: any;
}

export interface Rate {
  previousRate: any;
  currentRate: any;
}

export interface ChartTrend {
  totalCompletedTask: any;
}

export interface TableProp {
  totalAssignedTask: any;
  completionRate: Rate;
  parent?: any;
  totalAssignedTasks: any;
  location: any;
  totalCompletedTasks: any;
  completionRateExtra: any;
}

export interface ChartData {
  chartData: ChartProp[];
  taskTrend: ChartTrend;
}

export interface ChartTable {
  chart: ChartData;
  table: TableProp;
}

export interface EnggPoints {
  points: any;
  timeFrame: any;
}

export interface EngagementChartTrend {
  engagementThreshold: any;
  engaPoints: any;
  activeUserRate: Rate;
  acknowledgmentRate: Rate;
}

export interface EngagementChartData {
  taskTrend: EngagementChartTrend;
}

export interface EngagementChartTable {
  chartData: ChartProp[];
  chart: EngagementChartData;
}
