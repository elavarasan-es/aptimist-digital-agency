export interface DuplicateTypes {
    name: string;
    createdBy: string;
    assignmentGroup: string;
    area: string;
    category: string;
    taskValue: string;
    attachmentIds: string;
    isNonStoreTask: boolean;
    startDate: string;
    endDate?: string;
    additionalDetails: string;
    completionValidation: string;
    frequency: string;
    recurrencePattern: string;
    startingShift: string;
    whichDays?: string;
    duration: number;
    skippedShift?: string;
    skippedDays?: string;
    rollOver?: string;
    taskImportance: string;
    locationBU: Location[];
    locationRegion: Location[];
    locationDistrict: Location[];
    createdDate: string;
    managementTaskStatus?: string;
    externalId?: string;
    locationStores: Location[];
  }
  
  export interface Location {
    keyId: string;
    keyValue: number;
  }
  
  // Example usage
  export const DuplicateJsonData = {
    name: 'Car Wash',
    createdBy: 'Prasanna',
    assignmentGroup: 'Management',
    area: 'FFF',
    category: 'Cleaning',
    taskValue: 'high',
    attachmentIds: 'task.jpeg',
    isNonStoreTask: false,
    startingShift: 'S1',
    skippedShift: 'S3',
    rollOver: '',
    taskImportance: 'new car',
    locationBU: [
      { keyId: 'NAUSSE', keyValue: 1700 },
      { keyId: 'NAUSGR', keyValue: 3100 }
    ],
    locationRegion: [
      { keyId: 'NAUSSE03', keyValue: 1730 },
      { keyId: 'NAUSGR04', keyValue: 3140 }
    ],
    locationDistrict: [
      { keyId: 'NAUSSE0302', keyValue: 1732 },
      { keyId: 'NAUSSE0303', keyValue: 1733 },
      { keyId: 'NAUSSE0304', keyValue: 1734 },
      { keyId: 'NAUSGR0401', keyValue: 3141 },
      { keyId: 'NAUSGR0402', keyValue: 3142 },
      { keyId: 'NAUSGR0403', keyValue: 3143 }
    ],
    createdDate: '2024-11-21',
    managementTaskStatus: '',
    externalId: '',
    locationStores: [
      { keyId: 'NAUSSE0302STORE', keyValue: 1732 },
      { keyId: 'NAUSSE0303STORE', keyValue: 1733 }
    ]
  };
  