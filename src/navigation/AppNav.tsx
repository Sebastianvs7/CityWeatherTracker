import Loader from '@components/Loader';
import { useAuth } from '@contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';

import { colors } from '@/styles';

import AuthNavigator from './stacks/AuthStack';
import MainNavigator from './stacks/MainStack';

export default function AppNav() {
  const isDarkMode = useColorScheme() === 'dark';
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.primary}
      />
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
