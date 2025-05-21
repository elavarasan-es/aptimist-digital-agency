import { StyleProp, ViewStyle } from 'react-native';

// ButtonTypes.ts (TypeScript)
export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  style?: StyleProp<ViewStyle>;
}
