import { StyleSheet } from 'react-native';

import { colors } from './colors';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  // Typography
  title: {
    fontSize: fonts.sizes['4xl'],
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    marginBottom: 10,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  titleSmall: {
    fontSize: fonts.sizes.xl,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
  },
  text: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textPrimary,
  },
  textSecondary: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
  },
  textTertiary: {
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.regular,
    color: colors.textTertiary,
  },
  label: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    fontWeight: fonts.weights.bold,
    marginBottom: 8,
    color: colors.textPrimary,
  },
  errorText: {
    fontSize: fonts.sizes.xs,
    fontFamily: fonts.regular,
    color: colors.error,
    marginTop: 4,
  },

  // Form styles
  formGroup: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  inputError: {
    borderColor: colors.error,
  },

  // Button styles
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.sizes.lg,
    fontFamily: fonts.bold,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonError: {
    backgroundColor: colors.error,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: colors.primary,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
  },

  // Card styles
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSmall: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  // Section styles
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: fonts.sizes.xl,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Empty state
  emptyText: {
    color: colors.textTertiary,
    fontSize: fonts.sizes.sm,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 20,
  },

  // Loading
  loadingText: {
    marginTop: 16,
    fontSize: fonts.sizes.base,
    color: colors.textSecondary,
  },
});

// Export colors and fonts for direct use
export { colors, fonts };
