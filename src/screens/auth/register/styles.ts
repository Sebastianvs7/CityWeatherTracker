import { StyleSheet } from 'react-native';

import { colors, fonts } from '@/styles';

const styles = StyleSheet.create({
  addButton: {
    padding: 8,
  },
  addButtonText: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
  },
});

export default styles;
