interface Rate {
    previousRate: number;
    currentRate: number;
  }
  
  interface PeriodData {
    activeUserRate: Rate;
    acknowledgmentRate: Rate;
    messagesSent: number;
  }
  
  interface ChartDataItem {
    value: number;
    label: string;
  }
  
  interface TaskTrend {
    chartData: ChartDataItem[];
    taskTrend: {
      oneDay: PeriodData;
      sevenDays: PeriodData;
    };
  }
  
  interface TableDataItem {
    parent?: string;
    recipientStores: number;
    messagesSent: number;
    responseTime: string;
    location: string;
    ackRate: string;
  }
  
  interface MessageData {
    msgInstanceId: string | null;
    msgSpecId: string;
    overAllStatus: string;
    createdBy: string;
    insStartDate: string;
    insStartDateTime: string;
    insEndDate: string;
    insEndDateTime: string;
    msgSubject: string;
    msgDetails: string;
    frequency: string;
    isAcknowledged: boolean | null;
    locationId: string;
    completedDate: string | null;
    attachment: string | null;
    msgType: string;
    totalCount: number;
    readCount: number;
    isViewed: boolean | null;
    msgInLine: string | null;
  }
  
  export interface CommunicationAnalysis {
    taskTrend: TaskTrend;
    tableData: TableDataItem[];
    data: MessageData[];
  }
  