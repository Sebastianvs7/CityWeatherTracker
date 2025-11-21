import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  title: {
    ...globalStyles.title,
    marginBottom: 10,
  },
  cancelButton: {
    flex: 1,
    ...globalStyles.buttonSecondary,
  },
  logoutButton: {
    ...globalStyles.button,
    ...globalStyles.buttonError,
    marginTop: 20,
  },
  addButton: {
    padding: 8,
  },
  addButtonText: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
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
