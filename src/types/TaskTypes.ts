/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TaskTypes {
    taskName: string;
    assignmentGroupID: {
      keyld: string;
      keyValue: string;
    };
    arealD: any;
    categoryID: any;
    location_BU?: any;
    location_store?: any;
    location_district?: any;
    location_region?: any;
    taskValue?: string;
    completionValidation?: string;
    recurrencePattern?: boolean;
    frequency?: string;
    additionalDetails?: string;
    [key: string]: any;
  }
  
  export interface AdhocDuplicateTaskTypes {
    taskName: string;
    assignmentGroupID: {
      keyld: string;
      keyValue: string;
    };
    areaID: any;
    categoryID: any;
    location_BU?: any;
    location_store?: any;
    location_district?: any;
    location_region?: any;
    taskValue?: string;
    completionValidation?: string;
    recurrencePattern?: boolean;
    frequency?: string;
    additionalDetails?: string;
    skippedShift?: any;
    startingShift?: any;
    [key: string]: any;
  }
  
  export interface DuplicateTaskTypes {
    taskName: string;
    assignmentGroupID: {
      keyld: string;
      keyValue: string;
    };
    areaID: any;
    categoryID: any;
    location_BU?: any;
    location_store?: string;
    location_district?: string;
    location_region?: string;
    taskValue?: string;
    completionValidation?: string;
    recurrencePattern?: boolean | string;
    frequency?: string;
    additionalDetails?: string;
    [key: string]: any;
  }
  
  export interface AdhocTaskTypes {
    taskName: string;
    assignmentGroupID: {
      keyld: string;
      keyValue: string;
    };
    arealD: {
      keyld: string;
      keyValue: string;
    };
    categoryID: {
      keyld: string;
      keyValue: string;
    };
    location_BU?: any;
    location_store?: string;
    location_district?: string;
    location_region?: string;
    taskValue?: string;
    completionValidation?: string;
    recurrencePattern?: boolean;
    frequency?: string;
    additionalDetails?: string;
    [key: string]: any;
  }
  
  export interface Location {
    keyID: string;
    keyValue: number;
  }
  
  export interface TaskDetail {
    taskid: string;
    taskname: string;
    createdby: string;
    assignmentgroup: string;
    area: string;
    category: string;
    taskvalue: string;
    attachmentids: string;
    isnonstoretask: string;
    startdate: string;
    enddate: string;
    completionvalidation: string;
    frequency: string;
    cecurrencerattern: string;
    startingshift: string;
    duration: number;
    skinnedshift: string;
    whichdays: string;
    skinneddays: string;
    rollover: string;
    details: string;
    trakimpertence: string;
    createddate: string;
    managementtaskstatus: string;
    externalid: string;
    locationby: Location[];
    locationtegion: Location;
    locationdistrict: Location;
    locationstores: string;
    locationtype: string;
  }
  
  export interface dropdown {
    taskid: string;
    taskName: string;
    createdBy: string;
    status: string;
    value: string;
    completionValidation?: string;
    area: string;
    frequency: string;
    startingShift?: string;
  }
  
  export interface assignmentGrn {
    [key: string]: dropdown[];
  }
  
  export interface TasksData {
    count: {
      NonManagement: number;
      Management: number;
      ShiftSmart: number;
    };
    assigmentarour: assignmentGrn;
    location: string[];
    category: string[];
    frequency: string[];
    area: string[];
    createdBy: string[];
    status: string[];
  }
  
  export interface InstoreTasksData {
    tasks: assignmentGrn;
    assigmentgroup: string[];
    category: string;
    area: string;
    createdBy: string[];
    status: string[];
  }
  
  export interface KioskTasksData {
    count: {
      NonManagement: number;
      Management: number;
      ShiftSmart: number;
    };
    assigmentgroup: assignmentGrn;
    location: string;
    category: string;
    frequency: string;
    area: string;
    createdBy: string;
    status: string[];
  }
  
  export interface FilterDataProps {
    location?: string[];
    category?: string[];
    frequency?: string;
    createdBy?: string[];
    area?: string[];
    status?: string;
    assignmentGroup?: string[];
  }
  
  export interface InstoreFilterDataProps {
    location?: string[];
    category?: string[];
    createdBy?: string[];
    area?: string[];
    status?: string[];
    assignmentGroup?: string[];
  }
  
  export interface taskAnalysisFilterProps {
    location_Region?: string[];
    location_District?: string[];
    shift?: string[];
    location_Bu?: string[];
    location_Store?: string[];
    priority?: string[];
    area?: string[];
    urgency?: string[];
    position?: string[];
    date?: string[];
    assignmentGroup?: string[];
    frequency?: string;
    timeFrame?: string[];
  }
  
  export interface TaskStatus {
    taskinstanceld: string[];
    Shift: string[];
    Status: string;
    Date: string[];
    ClaimedBy: string[];
    Notes: string;
    Attachment: string[];
  }
  
  export interface RevokeDetail {
    taskld: string;
    taskinstanceld: string;
    taskName: string;
    completedBy: string;
    completedDate: string;
    attachement: any;
    assignmentGroup: string;
    shift: string;
    area: string;
    taskValue: string;
    assignedDate: string;
    notes: string;
    store: string;
  }
  
  export interface ReportDTO {
    taskinstanceld: string | null;
    taskName: string;
    status: string;
    area: string;
    shift: string;
    assignmentGroup: string;
    completionTimestamp: string;
    completedBy: string | null;
    notes: string | null;
    attachments: any;
  }
  
  export interface completeLeaderBoard {
    reportDTO: ReportDTO[];
    area: string;
    taskValue: string;
    taskStatus: string[];
    assignmentGroup: string[];
  }
  