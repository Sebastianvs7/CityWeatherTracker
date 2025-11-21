import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    ...globalStyles.titleSmall,
    marginBottom: 8,
  },
  subtitle: {
    ...globalStyles.textSecondary,
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    color: colors.textPrimary,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: colors.secondary,
  },
  buttonCancelText: {
    color: colors.white,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
  },
  buttonSave: {
    backgroundColor: colors.success,
  },
  buttonSaveText: {
    color: colors.white,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
  },
  buttonDisabled: {
    ...globalStyles.buttonDisabled,
  },
  errorText: {
    ...globalStyles.errorText,
    fontSize: fonts.sizes.sm,
  },
});
