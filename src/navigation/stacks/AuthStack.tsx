import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/auth/login/LoginScreen';
import RegisterScreen from '@screens/auth/register/RegisterScreen';

const AuthStackNav = createStackNavigator();

export default function AuthStack() {
  return (
    <AuthStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStackNav.Screen name="Login" component={LoginScreen} />
      <AuthStackNav.Screen name="Register" component={RegisterScreen} />
    </AuthStackNav.Navigator>
  );
}
