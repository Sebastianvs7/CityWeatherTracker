import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '@/styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    ...globalStyles.title,
    marginBottom: 10,
  },
  errorCard: {
    backgroundColor: colors.errorLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  errorText: {
    ...globalStyles.errorText,
    fontSize: 14,
  },
});
