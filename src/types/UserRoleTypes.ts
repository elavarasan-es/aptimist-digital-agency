// Enums

export enum UserRole {
  NON_STORE = 'Non-Store',
  MANAGEMENT = 'Management',
  NON_MANAGEMENT = 'Non-Management',
}

export enum Modes {
  MANAGEMENT,
  KIOSK,
}

export enum StoreView {
  STORE_MGNT_VIEW = 'STORE_MGNT_VIEW',
  NON_STORE_VIEW = 'NON_STORE_VIEW',
}

export type RoleModeSliceState = {
  selectedStore: string;
  selectedMode: Modes;
  selectedView: StoreView;
};

export interface UserDetailsInfo {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  status: string;
  storeCoachRole: string;
  costCenter: string;
  stores: string;
  hierarchyCode: string;
  permissions: Permissions;
  storeList: string[];
}

export interface Permissions {
    help:string[];
    management:string[];
    communication:string[];
    reporting:string[];
    home:string[];
    apps:string[];
}
