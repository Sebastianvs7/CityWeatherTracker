import { StyleSheet } from 'react-native';

import { fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    ...globalStyles.input,
    marginBottom: 12,
  },
  button: {
    ...globalStyles.button,
    marginTop: 0,
  },
  buttonDisabled: {
    ...globalStyles.buttonDisabled,
  },
  buttonText: {
    ...globalStyles.buttonText,
  },
  errorText: {
    ...globalStyles.errorText,
    fontSize: fonts.sizes.sm,
  },
});
