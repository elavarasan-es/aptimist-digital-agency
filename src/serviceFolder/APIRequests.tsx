import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadUserInfo } from '../redux/ReduxSlice/UserInfoSlice';
import { 
  AREA, CATERGORY, LOCATION, ASSIGMENTGROUP, TASK_NonManagement, ADDTASK, 
  TASK_UPDATE, EMPLOYEE_LIST, USER_INFO, TASK_ACTIONS, TASK_ReviewTask, 
  TASK_RevokeTask, CREATE_MESSAGE, EDIT_MESSAGE, END_MESSAGE, ACK_MESSAGE_USER_LIST, 
  MESSAGE_ACK, Message_Info, NoteDelete, NOTE_DISPLAY, Add_Note, API_BASE_URL, 
  Get_Shift_Times, Update_Shift_Times, CURRENT_SHIFT, EMPLOYEE_LEADER_BOARD, 
  DAILY_SHIFT_WIDGET, STREAK_WIDGET, DAILY_LEADERBOARD_WIDGET, WEEKLY_STORE_POINTS_WIDGET, 
  INSTORE_TASK_CHART, STORE_BOARD, TASK_STREAK, INSTORE_COMMUNICATION_SUMMARY, 
  INSTORE_STORE_HEALTH 
} from './APIConstants';
import { 
  axiosInstance, axiosInstanceCommunication, axiosInstanceReporting, axiosInstanceReportingAggre, axiosInstanceStoreDetail 
} from './axios/Api';
import { 
  loadDisplayTasks, filtertasks, loadInstoreDisplayTasks, instoreFiltertasks 
} from '../redux/ReduxSlice/tasksSlice';
import { loadDisplayMessages } from '../redux/ReduxSlice/MessageSlice';
import { loadMessageInfo } from '../redux/ReduxSlice/MessageInfoSlice';
import axios from 'axios';
import { FilterDataProps } from '../types/TaskTypes';
import { loadNotes } from '../redux/ReduxSlice/notesSlice';
import { updateMessageCreation, updateProfileChange } from '../redux/ReduxSlice/updateScreen';
import { loadStoreProfile } from '../redux/ReduxSlice/StoreProfileSlice';
import { StoreProfileType } from '../types/StoreProfileType';
import { loadTaskInfo, removeTaskInfo } from '../redux/ReduxSlice/InStoreTaskChartReport';
import { loadEmployeeInfo } from '../redux/ReduxSlice/InStoreEmployeeLeaderBoard';
import { LeaderboardEntry, WeeklyStorePoints } from '../types/BeretType';
import { loadStoreInfo } from '../redux/ReduxSlice/WeeklyStoreLeaderBoardSlice';
import { loadTaskStreakInfo, removeTaskStreakInfo } from '../redux/ReduxSlice/InStoreTaskStreakSlice';
import { loadCommunicationSummaryInfo, removeCommunicationSummaryInfo } from '../redux/ReduxSlice/InStoreCommunicationSummarySlice';
import { loadStoreHealthInfo, removeStoreHealthInfo } from '../redux/ReduxSlice/InStoreStoreHealthSlice';

export const API_LoadUserInfo = createAsyncThunk(
  'API_loadUserinfo',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(USER_INFO, { params: { id: value } })
      .then(response => {
        thunkAPI.dispatch(loadUserInfo(response.data));
        return JSON.stringify(response.status);
      })
      .catch(error => {
        console.log('Error:', error);
        return JSON.stringify(error);
      });
  }
);

export const API_Area = createAsyncThunk(
  'API_AreaDropdown',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(AREA)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
);

export const API_Category = createAsyncThunk(
  'API_CategoryDropdown',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(CATERGORY)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
);

export const API_AssignmentGroup = createAsyncThunk(
  'API_AssignmentGroupDropdown',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(ASSIGMENTGROUP)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
);

export const API_Location = createAsyncThunk(
  'API_LocationDropdown',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(LOCATION, { params: { id: value } })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
);

export const Add_Task = createAsyncThunk(
  'API_TaskAdd',
  async (formData: any, employeeId: any, thunkAPI) => {
    return await axiosInstance
      .post(${ADDTASK}?employeeid=${employeeId}, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
);

export const Update_Task = createAsyncThunk(
  'API_TaskUpdate',
  async ({ formData, taskId }: { formData: any; taskId: any }, thunkAPI) => {
    return await axiosInstance
      .put(${TASK_UPDATE}${taskId}, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(response => {
        return JSON.stringify(response);
      })
      .catch(error => {
        console.error('Error:::', error);
        return error;
      });
  }
);

export const API_DisplayTasks = createAsyncThunk(
  'API_DisplayTasks',
  async (url: string, value: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(url, { params: { id: value } });
      thunkAPI.dispatch(loadDisplayTasks(response.data));
      return response.data;
    } catch (error: any) {
      console.error('Error fetching data:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const API_DisplayMessages = createAsyncThunk(
  'API_DisplayMessages',
  async ({ url, value }: { url: string; value: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(url, { params: { id: value } });
      thunkAPI.dispatch(loadDisplayMessages(response.data));
      return response.data;
    } catch (error: any) {
      console.error('Error fetching data:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const API_InstoreDisplayTasks = createAsyncThunk(
  'API_InstoreDisplayTasks',
  async ({ url }: { url: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(url);
      thunkAPI.dispatch(loadInstoreDisplayTasks(response.data));
      return response.data;
    } catch (error: any) {
      console.error('Error fetching InstoreDisplayTasks data:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const API_InstoreFilterTasks = createAsyncThunk(
  'API_InstoreFilterTasks',
  async (url: string, value: FilterDataProps, thunkAPI) => {
    try {
      const response = await axiosInstance.post(url, value, {
        headers: { 'Content-Type': 'application/json' }
      });
      thunkAPI.dispatch(instoreFiltertasks(response.data));
      return response.data;
    } catch (error: any) {
      console.error('Error instoreFiltertasks data:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const API_FilterTasks = createAsyncThunk(
  'API_FilterTasks',
  async (url: string, value: FilterDataProps, thunkAPI) => {
    try {
      const response = await axiosInstance.post(url, value, {
        headers: { 'Content-Type': 'application/json' }
      });
      thunkAPI.dispatch(filtertasks(response.data));
      return response.data;
    } catch (error: any) {
      console.error('Error filtering data:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const API_KioskDisplayTask = createAsyncThunk(
  'API_KioskDisplayTask',
  async (value: string, thunkAPI) => {
    return await axiosInstance
      .get(TASK_NonManagement)
      .then(response => {
        return response.status;
      })
      .catch(error => {
        console.log('Error', error);
        return error;
      });
  }
);

export const API_TaskInfo = async (url: string, id: string) => {
  try {
    const response = await axiosInstance.get(url + id);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }
};

export const API_Revoke = async (url: string, payload: any) => {
  try {
    const response = await axiosInstance.post(url, payload);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }
};

export const API_MessageInfo = createAsyncThunk(
  'API_MessageInfo',
  async (messageId: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(${Message_Info}${messageId});
      return response.data.data;
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
    thunkAPI.dispatch(loadMessageInfo(response.data.data));
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
);

export const API_EndTask = createAsyncThunk(
  'API_EndTask',
  async (taskId: string, thunkAPI) => {
    return await axiosInstance
      .post(bff/tasks/end-task/${taskId})
      .then(response => {
        return response.status;
      })
      .catch(error => {
        console.error('End Task Error:', error);
        return error;
      });
  }
);

export const API_Delete = createAsyncThunk(
  'API_Delete',
  async ({ endPoint, id }: { endPoint: string; id: string }, thunkAPI) => {
    return await axiosInstance
      .delete(${endPoint}${id})
      .then(response => {
        return JSON.stringify(response);
      })
      .catch(error => {
        return error;
      });
  }
);

export const API_LoadCheckOutTaskUserList = createAsyncThunk(
  'API_LoadCheckOutTaskUserList',
  async (storeId: string, taskType: string, thunkAPI) => {
    return await axiosInstance
      .get(${EMPLOYEE_LIST}/${storeId}/${taskType})
      .then(response => {
        return JSON.stringify(response);
      })
      .catch(error => {
        console.log('Error:', error);
        return JSON.stringify(error);
      });
  }
);
