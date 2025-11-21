module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@types': './src/types',
          '@utils': './src/utils',
          '@schemas': './src/schemas',
          '@styles': './src/styles',
          '@assets': './assets',
        },
      },
    ],
  ],
};
