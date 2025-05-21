export interface CommunicationTypes {
    id: string;
    createdBy: string;
    sendDate: string;
    endDate: string;
    frequency: string;
    msgType: string;
    readCount?: number;
    totalCount?: number;
    msgSubject: string;
    msgDetails: string;
    status?: string;
    attachmentIds?: string | null;
    locationBU: LocationBu[];
    locationRegion: LocationRegion[];
    locationDistrict: LocationDistrict[];
    locationStores: string[];
  }
  
  export interface MessageData {
    activeMessages: CommunicationTypes[];
    inactiveMessages: CommunicationTypes[];
  }
  
  export interface LocationBu {
    keyValue: number;
    keyId: string;
  }
  
  export interface LocationRegion {
    keyId: string;
    keyValue: number;
  }
  
  export interface LocationDistrict {
    keyId: string;
    keyValue: number;
  }
  
  export interface Message {
    msgInstanceId: string;
    msgSpecId: string;
    createdBy: string;
    insStartDate: string;
    insEndDate: string;
    msgSubject: string;
    msgDetails: string;
    attachment: string;
    msgType: string;
    totalCount: number;
    readCount: number;
    frequency: 'Normal' | 'Urgent';
    isViewed: string;
  }
  
  export interface NoteType {
    sendBy: string;
    sendDate: string;
    sendDateTime: string;
    endDate: string;
    notesDescription: string;
    status: string;
    locationId: string;
    deleteBy: string;
    deletedDate: string;
  }
  