export interface EngagementFilterProp {
    bu: string;
    region: string[];
    district: string[];
    store: string[];
    area: string[];
    position?: string[];
    timeFrame: string;
    urgency?: string[];
  }
  
  // For chartData inside engagementChart interface
  interface TaskTrendTimeFrame {
    timeFrame: string;
    points: string;
  }
  
  interface TaskTrendRate {
    previousRate: any;
    currentRate: any;
  }
  
  type TaskTrend = TaskTrendTimeFrame | TaskTrendRate;
  
  interface ChartData {
    label: string;
    value: number;
  }
  
  // EngagementChart is a single object interface
  interface EngagementChart {
    chartData: ChartData[];
    taskTrend: TaskTrend[];
  }
  
  // Each row in TableData
  interface TableData {
    parent?: string;
    engagementRate: string;
    activeUserRate: string;
    totalActiveEmployees?: number;
    location?: string;
  }
  
  // Each employee inside a store
  interface Employee {
    name: string;
    taskPoints: number;
    commsPoints: number;
    totalPoints: number;
    lifetimePoints: number;
  }
  
  // Store with employees
  interface StoreEmployees {
    storeId: string;
    employees: Employee[];
  }
  
  // Final root object
  export interface EngagementChartTable {
    engagementChart: EngagementChart;
    employeeData: StoreEmployees[];
  }
  