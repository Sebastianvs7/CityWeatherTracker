import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.section,
  },
  sectionTitle: {
    ...globalStyles.sectionTitle,
  },
  cityItem: {
    ...globalStyles.cardSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityItemName: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
  cityItemPostCode: {
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    marginTop: 4,
  },
  arrow: {
    fontSize: fonts.sizes.xl,
    fontFamily: fonts.regular,
    color: colors.primary,
  },
  emptyText: {
    ...globalStyles.emptyText,
  },
});
