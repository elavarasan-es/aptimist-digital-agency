import { signOut } from '@okta/okta-react-native';
import { removeAuthState } from '../redux/ReduxSlice/authSlice';
import { removeUserInfo } from '../redux/ReduxSlice/UserInfoSlice';
import { AppDispatch } from '../redux/Store';
import { Platform, ToastAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

export const getTrueSkippedItems = (objs: any) => {
  const trueItems = Object.keys(objs)
    .filter(key => objs[key] === true)
    .join(', ');
  return trueItems || '';
};

export const formattedDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

export const performSignOut = async (
  ReduxDispatch: AppDispatch,
  navigation: any,
) => {
  const result = await signOut();
  if (result.resolve_type === 'signed_out') {
    if (Platform.OS === 'android') {
      ToastAndroid.show('You have been signed out', ToastAndroid.LONG);
    }
    ReduxDispatch(removeAuthState(''));
    ReduxDispatch(removeUserInfo(''));
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignInScreen' }],
    });
  }
};

export const CurrentShift = (): string => {
  const now = new Date();
  const localHours = now.getHours();
  let shift = '';
  if (localHours >= 6 && localHours < 13) {
    shift = 'S1';
  } else if (localHours >= 13 && localHours < 16) {
    shift = 'S2';
  } else {
    shift = 'S3';
  }
  return shift;
};

const jsonToCsv = (jsonData: any, columnHeaders: string[]) => {
  const csvRows: string[] = [];
  csvRows.push(columnHeaders.join(','));
  jsonData.forEach(item => {
    const values = columnHeaders.map(header => {
      const value = item[header];
      return `"${value ? value.toString().replace(/"/g, '""') : ''}"`;
    });
    csvRows.push(values.join(','));
  });
  return csvRows.join('\n');
};

export const exportJsonToCSV = async (
  jsonData: any,
  filename: string,
  columnHeadersArray: string[] = []
) => {
  const columnHeaders =
    columnHeadersArray.length <= 0 ? Object.keys(jsonData[0] || {}) : columnHeadersArray;
  const csvString = jsonToCsv(jsonData, columnHeaders);
  const filePath = `${RNFS.DocumentDirectoryPath}/${filename}`;
  // const filePath = `${RNFS.DownloadDirectoryPath}/${filename}`; // For Android

  try {
    await RNFS.writeFile(filePath, csvString, 'utf8');
    try {
      const res = await Share.open({ url: `file://${filePath}` });
      console.log(res);
      return true;
    } catch (err) {
      if (err) console.log(err);
      return false;
    }
  } catch (error) {
    console.error('Error saving CSV file:', error);
  }
};
