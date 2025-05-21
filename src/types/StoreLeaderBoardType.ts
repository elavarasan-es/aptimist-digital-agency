export interface WeeklyStoreLeaderBoard {
    store: string;
    taskPts: number;
    comPts: number;
    totalPts: number;
    totalEligiblePts: number;
  }
  
  export interface StoreLeaderBoard {
    StartDate: string[];
    EndDate: string[];
    WeeklyStoreLeaderBoard: WeeklyStoreLeaderBoard[];
  }
  