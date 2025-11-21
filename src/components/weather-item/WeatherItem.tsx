import { Text, View } from 'react-native';

import type { WeatherItemProps } from '@/types/components';

import styles from './styles';

export default function WeatherItem({ label, value }: WeatherItemProps) {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherLabel}>{label}</Text>
      <Text style={styles.weatherValue}>{value}</Text>
    </View>
  );
}
