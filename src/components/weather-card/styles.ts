import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.card,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  city: {
    fontSize: fonts.sizes['2xl'],
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
  savedBadge: {
    backgroundColor: colors.success,
    color: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: fonts.sizes.xs,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    overflow: 'hidden',
  },
  saveButton: {
    backgroundColor: colors.success,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
  },
  temp: {
    fontSize: 48,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: fonts.sizes.lg,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    flex: 1,
    minWidth: '45%',
  },
  detailLabel: {
    fontSize: fonts.sizes.xs,
    fontFamily: fonts.regular,
    color: colors.textTertiary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
});
