export interface EmployeeLeaderboard {
    startDate: string[];
    endDate: string[];
    leaderboardEntry: LeaderboardEntry[];
  }
  
  export interface LeaderboardEntry {
    empName: string;
    daily: number;
    weekly: number;
    period: number;
    lifetime: number;
  }
  