import CameraIcon from '@assets/svg/camera-outline.svg';
import PersonIcon from '@assets/svg/person-circle-outline.svg';
import SunIcon from '@assets/svg/sunny-outline.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from '@screens/main/camera/CameraScreen';
import ProfileScreen from '@screens/main/profile/ProfileScreen';
import WeatherScreen from '@screens/main/weather/WeatherScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/styles';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <PersonIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CameraIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SunIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
