import { TouchableOpacity } from 'react-native';

import type { ButtonProps } from '@/types/components';

export default function Button({
  onPress,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} {...buttonProps}>
      {children}
    </TouchableOpacity>
  );
}
