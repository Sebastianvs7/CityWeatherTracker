import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import type { City } from './user';

export interface LoginScreenProps {
  navigation: any;
}

export interface RegisterScreenProps {
  navigation: any;
}

export type MainStackParamList = {
  MainTabs: undefined;
  CityDetail: {
    city: City;
  };
};

export type CityDetailScreenRouteProp = RouteProp<
  MainStackParamList,
  'CityDetail'
>;

export interface CityDetailScreenProps {
  route: CityDetailScreenRouteProp;
  navigation?: StackNavigationProp<MainStackParamList, 'CityDetail'>;
}
