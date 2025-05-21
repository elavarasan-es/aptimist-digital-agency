export interface ReportTaskChart {
    totalTask: number;
    totalCompleteTask: number;
    taskChartData: TaskChartDatum[];
  }
  
  export interface TaskChartDatum {
    stacks: Stack[];
    label: string;
  }
  
  export interface Stack {
    value: number;
    color: string;
  }
  

