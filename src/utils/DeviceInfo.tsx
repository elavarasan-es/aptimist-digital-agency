import DeviceInfo from 'react-native-device-info';
import { useWindowDimensions } from 'react-native';

interface DeviceInfoType {
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: string;
}

const getDeviceInfo = (): DeviceInfoType => {
  const isTablet = DeviceInfo.isTablet();
  const deviceType = DeviceInfo.getDeviceType();
  const isDesktop = deviceType === 'Desktop';

  return {
    isTablet,
    isDesktop,
    deviceType: isTablet ? 'Tablet' : isDesktop ? 'Desktop' : 'Mobile Phone',
  };
};

export function useIsLandscape(): boolean {
  const { height, width } = useWindowDimensions();
  return width > height;
}

export default getDeviceInfo;
