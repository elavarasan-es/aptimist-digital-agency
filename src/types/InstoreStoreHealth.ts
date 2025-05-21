export interface StoreHealthData {
    WeekProgressCircles: WeekProgressCircle[];
  }
  
  export interface WeekProgressCircle {
    day: string;
    highValue: number;
    normal: number;
  }
  