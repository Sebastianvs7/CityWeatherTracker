import { StyleSheet } from 'react-native';

import { colors, fonts } from '@/styles';

export default StyleSheet.create({
  weatherItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
  },
  weatherLabel: {
    fontSize: fonts.sizes.xs,
    fontFamily: fonts.regular,
    color: colors.textTertiary,
    marginBottom: 4,
  },
  weatherValue: {
    fontSize: fonts.sizes.lg,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
});
