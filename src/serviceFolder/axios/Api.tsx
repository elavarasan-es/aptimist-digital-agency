import axios from 'axios';
import { 
  BASE_URL, 
  BASE_URL_MESSAGE, 
  BASE_URL_REPORTING, 
  BASE_URL_REPORTING_AGGRE, 
  BASE_URL_STORE_DETAIL 
} from '../APIConstants';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

export const axiosInstanceCommunication = axios.create({ baseURL: BASE_URL_MESSAGE });

export const axiosInstanceStoreDetail = axios.create({ baseURL: BASE_URL_STORE_DETAIL });

export const axiosInstanceReporting = axios.create({ baseURL: BASE_URL_REPORTING });

export const axiosInstanceReportingAggre = axios.create({ baseURL: BASE_URL_REPORTING_AGGRE });