import { useWindowDimensions } from 'react-native';

interface DeviceOrientationType {
  deviceWidth: number;
  deviceHeight: number;
}

const DeviceOrientation = (): DeviceOrientationType => {
  const { width, height } = useWindowDimensions();
  const deviceWidth = width;
  const deviceHeight = height;

  return {
    deviceWidth,
    deviceHeight,
  };
};

export default DeviceOrientation;
