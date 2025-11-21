import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.error,
    textAlign: 'center',
    padding: 20,
  },
  cityName: {
    fontSize: fonts.sizes['3xl'],
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  postCode: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
  },
  weatherTitle: {
    ...globalStyles.titleSmall,
    marginBottom: 16,
  },
  weatherTemp: {
    fontSize: 56,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.primary,
    marginBottom: 8,
  },
  weatherDescription: {
    fontSize: fonts.sizes.xl,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    textTransform: 'capitalize',
    marginBottom: 24,
  },
  weatherGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 20,
  },
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
  coordinatesSection: {
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: 16,
    marginTop: 16,
  },
  coordinatesLabel: {
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.regular,
    color: colors.textTertiary,
    marginBottom: 4,
  },
  coordinatesValue: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textPrimary,
    fontWeight: fonts.weights.normal,
  },
});
