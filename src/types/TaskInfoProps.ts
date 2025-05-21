interface Location {
    keyId: string;
    keyValue: number;
  }
  
  interface TaskSpec {
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
    duration: number;
    skippedshift: string;
    whichdays: string;
    skinneddays: string;
    validation: string;
    frequency: string;
    recurrencenattern: string;
    startingshift: string;
    rollover: string;
    details: string;
    taskimportance: string;
    createddate: string;
    managementtaskstatus: string;
    externalid: string;
    locationby: Location[];
    locationregion: Location;
    locationdistrict: Location[];
    locationstores: string[];
    locationtype: string;
  }
  
  interface RegionList {
    [key: string]: Location;
  }
  
  interface DistrictList {
    [key: string]: Location;
  }
  
  interface StoresList {
    [key: string]: string[];
  }
  
  export interface TaskInfoProps {
    taskSpec: TaskSpec;
    regionList: RegionList;
    disList: DistrictList;
    storesList: StoresList;
  }
  
  interface TaskinLine {
    type: string;
    shift: string;
    claimedBy: string;
    assignedDate: string;
    status: string;
  }
  
  export interface CompleteInfoTaskinfo {
    details?: string;
    taskimportance?: string;
    skippedshift?: string;
    whichdays?: string;
    startingshift?: string;
    skippeddays?: string;
    rollover?: string;
    taskinstanceld: string;
    taskSpecld: string;
    taskName: string;
    createdBy: string;
    completedBy: string;
    overAllStatus: string;
    completedDate: string;
    attachementids: string | null;
    taskLocationld: string;
    assignmentGroup: string;
    area: string;
    category: string;
    frequency: string;
    urgent: string;
    dueNow: string;
    insStartDate: string;
    insEndDate: string;
    taskValue: string;
    notes: string;
    isRevoked: string;
    completionValidation: string;
    taskinLine: TaskinLine;
  }
  