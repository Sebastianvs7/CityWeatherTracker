import { StyleSheet } from 'react-native';

import { colors, fonts, globalStyles } from '@/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  message: {
    color: colors.white,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.regular,
    marginBottom: 20,
    textAlign: 'center',
  },
  loader: {
    marginVertical: 20,
  },
  button: {
    ...globalStyles.button,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.sizes.base,
    fontFamily: fonts.bold,
    fontWeight: fonts.weights.bold,
  },
  topControls: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'column',
    gap: 16,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderRadius: 4,
    opacity: 0.8,
  },
});
