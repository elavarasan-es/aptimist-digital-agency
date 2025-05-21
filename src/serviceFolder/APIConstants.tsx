import Config from 'react-native-config';

const IS_DEV_ENV = _DEV_; // pointing to DEV ensure that set value as true

export const BASE_URL = IS_DEV_ENV ? Config.DEV_HOME_AGGR : Config.QA_HOME_AGGR;
export const BASE_URL_TASK_DETAIL = IS_DEV_ENV ? Config.DEV_TASK_MANAGEMENT : Config.QA_TASK_MANAGEMENT;
export const BASE_URL_MESSAGE = IS_DEV_ENV ? Config.DEV_COMMUNICATION_AGGR : Config.QA_COMMUNICATION_AGGR;
export const BASE_URL_MESSAGE_DETAIL = IS_DEV_ENV ? Config.DEV_COMMUNICATION_MANAGEMENT : Config.QA_COMMUNICATION_MANAGEMENT;
export const BASE_URL_STORE_DETAIL = IS_DEV_ENV ? Config.DEV_STORE_MANAGEMENT : Config.QA_STORE_MANAGEMENT;
export const BASE_URL_REPORTING = IS_DEV_ENV ? Config.DEV_REPORTING : Config.QA_REPORTING;
export const BASE_URL_REPORTING_AGGRE = IS_DEV_ENV ? Config.DEV_REPORTING_AGGR : Config.QA_REPORTING_AGGR;
export const BASE_URL_ATTACHMENT = IS_DEV_ENV ? Config.DEV_ATTACHMENT_SPEC : Config.QA_ATTACHMENT_SPEC;
export const BASE_URL_MESSAGE_ATTACHMENT = IS_DEV_ENV ? Config.DEV_MESSAGE_SPEC : Config.QA_MESSAGE_SPEC;

export const USER_INFO = 'bff/user-access';
export const CURRENT_SHIFT = 'bff/tasks/get-location-shift/';
export const AREA = 'bff/area';
export const LOCATION = 'bff/location-details';
export const ASSIGNMENT_GROUP = 'bff/assignment-group';
export const CATEGORY = 'bff/category';
export const TASKS_ABOVE_STORE = 'bff/tasks/display?id=';
export const TASKS_IN_STORE = 'bff/tasks/display/iostore?storeid=';
export const TASK_SPEC = `${BASE_URL}bff/tasks/info/`;
export const TASK_INFO = ${BASE_URL_TASK_DETAIL}tasks/;
export const COMPLETE_INFO = ${BASE_URL_TASK_DETAIL}gettask/;
export const TASK_NON_MANAGEMENT = 'bff/tasksinstance/display?locId=2705963&shift=S2&gssigmentgroup=ShiftSmart';
export const INSTORE_FILTER_TASKS = ${BASE_URL}bff/tasks/get-task/instore;
export const FILTER_TASKS = ${BASE_URL}bff/tasks/get-task;
export const ADD_TASK = 'bff/tasks/';
export const DELETE_TASK = 'bff/tasks/delete-task/';
export const TASK_UPDATE = 'bff/tasks/edit-task/';
export const EMPLOYEE_LIST = 'bff/getemplist';
export const TASK_ACTIONS = 'bff/tasks/instanceupdate';
export const TASK_REVOKE_TASK = ${BASE_URL}bff/tasks/revokedtasks/;
export const TASK_REVIEW_TASK = ${BASE_URL}bff/tasks/task-review/;
export const KIOSK_DISPLAY_TASK = ${BASE_URL}bff/tasksinstance/display?locid=;
export const REVOKED_TASK = ${BASE_URL}bff/tasks/taskrexake;

export const CREATE_MESSAGE = 'bff/message';
export const MESSAGE_ABOVE_STORE = ${BASE_URL_MESSAGE}bff/display;
export const MESSAGE_INFO = ${BASE_URL_MESSAGE_DETAIL}communication/messages/;
export const DELETE_MESSAGE = ${BASE_URL_MESSAGE}bff/delete-message/;
export const EDIT_MESSAGE = 'bff/edit-message/';
export const END_MESSAGE = 'bff/end-message/';
export const ACK_MESSAGE_USER_LIST = 'bff/get-employee';
export const MESSAGE_ACK = 'bff/msg-acknowledgement';
export const NOTE_DELETE = 'bff/notes/deletion/';
export const ADD_NOTE = 'bff/notes';
export const GET_SHIFT_TIMES = 'stlog';
export const UPDATE_SHIFT_TIMES = 'stlog/update-store-timings';
export const NOTE_DISPLAY = ${BASE_URL_MESSAGE}bff/notes/display/;
export const EMPLOYEE_LEADER_BOARD = 'reporting-aggr/get-daily-leaderboard/';
export const STORE_BOARD = 'reporting-aggr/get-weekly-store-leaderboard/';
export const INSTORE_TASK_CHART = 'reporting-aggr/get-chart';
export const TASK_STREAK = 'reporting/get-task-streak/';
export const INSTORE_COMMUNICATION_SUMMARY = 'reporting/communication-summary/';
export const INSTORE_STORE_HEALTH = 'reporting/get-store-health-circles/';

export const COMMUNICATION_ENDPOINT = {
  messageList: (locid: string) => bff/msginstance/display?locid=${locid},
  readMessage: (msginstanceId: string) => bff/urgent-message/${msginstanceId},
};

export const NON_STORE_COMMUNICATION_ENDPOINT = {
  messageList: (empid: string) => bff/display?id=${empid},
};

export const API_BASE_URL = ${BASE_URL}bff/tasks;
export const API_SHIFT_STATUS = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-shift-status;

export const getDailyLeaderboardURL = (storeId: string) => 
  ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-daily-leaderboard/${storeId};

export const getWeeklyStorePointsURL = (storeId: string) => 
  ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-weekly-store-points/${storeId};

export const DAILY_SHIFT_WIDGET = 'reporting-aggr/get-daily-status/';
export const STREAK_WIDGET = 'reporting-aggr/get-week-progress-circles/';
export const DAILY_LEADERBOARD_WIDGET = 'reporting-aggr/get-daily-leaderboard/';
export const WEEKLY_STORE_POINTS_WIDGET = 'reporting-aggr/get-weekly-store-points/';

export const COMPLETED_LEADERBOARD = ${BASE_URL_TASK_DETAIL}tasks/get-completed-tasks;
export const COMPLETED_LEADERBOARD_TASK_DETAILS = ${BASE_URL_TASK_DETAIL}tasks/get-completed-tasks/filter;

export const TASK_ANALYSIS = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-task-report-filter;
export const TASK_ANALYSIS_REPORT = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-task-report;

export const ENGAGEMENT_ANALYSIS = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-engagement-report-filter;
export const ENGAGEMENT_ANALYSIS_REPORT = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-engagement-analysis;

export const COMMUNICATION_ANALYSIS = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-communication-report-filter;
export const COMMUNICATION_ANALYSIS_REPORT = ${BASE_URL_REPORTING_AGGRE}reporting-aggr/get-communication-report-analysis;

export const COMMUNICATION_ANALYSIS_INFO = ${BASE_URL_REPORTING}reporting/get-communication-report-info;

export const ATTACHMENT_SPEC = ${BASE_URL_ATTACHMENT}images/download-image?id=;
export const ATTACHMENT_MESSAGE_SPEC = ${BASE_URL_MESSAGE_ATTACHMENT}images/download-image?id=;
