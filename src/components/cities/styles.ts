import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  cityContainer: {
    ...globalStyles.cardSmall,
  },
  cityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cityLabel: {
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textSecondary,
  },
  removeButton: {
    padding: 4,
  },
  removeButtonText: {
    color: colors.error,
    fontSize: fonts.sizes.xs,
    fontFamily: fonts.regular,
  },
});
