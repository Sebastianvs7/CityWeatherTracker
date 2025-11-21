import MainTabs from '@navigation/stacks/MainTabs';
import { createStackNavigator } from '@react-navigation/stack';
import CityDetailScreen from '@screens/main/city-detail/CityDetailScreen';

import { colors, fonts } from '@/styles';
import type { MainStackParamList } from '@/types/navigation';

const MainStackNav = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <MainStackNav.Navigator>
      <MainStackNav.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStackNav.Screen
        name="CityDetail"
        component={CityDetailScreen}
        options={{
          title: 'City Details',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontFamily: fonts.bold,
            fontWeight: fonts.weights.bold,
          },
        }}
      />
    </MainStackNav.Navigator>
  );
}
