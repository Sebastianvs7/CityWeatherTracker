import { weatherService } from '@services/weatherService';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WeatherItem from '@/components/weather-item/WeatherItem';
import { colors, globalStyles } from '@/styles';
import type { CityDetailScreenProps } from '@/types/navigation';
import type { WeatherData } from '@/types/weather';

import styles from './styles';

export default function CityDetailScreen({ route }: CityDetailScreenProps) {
  const { city } = route.params;
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await weatherService.getWeatherByCity(
        city.name.toLowerCase(),
      );
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch weather data');
      Alert.alert('Error', err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={globalStyles.loadingText}>Loading weather data...</Text>
      </View>
    );
  }

  if (error && !weatherData) {
    return (
      <View style={globalStyles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={globalStyles.card}>
          <Text style={styles.cityName}>{city.name}</Text>
          <Text style={styles.postCode}>
            Post Code: {city.address.postCode}
          </Text>
        </View>

        {weatherData && (
          <View style={globalStyles.card}>
            <Text style={styles.weatherTitle}>Current Weather</Text>
            <Text style={styles.weatherTemp}>
              {Math.round(weatherData.main.temp)}°C
            </Text>
            <Text style={styles.weatherDescription}>
              {weatherData.weather[0]?.description || 'N/A'}
            </Text>

            <View style={styles.weatherGrid}>
              <WeatherItem
                label="Feels like"
                value={Math.round(weatherData.main.feels_like) + '°C'}
              />
              <WeatherItem
                label="Humidity"
                value={weatherData.main.humidity + '%'}
              />
              <WeatherItem
                label="Pressure"
                value={weatherData.main.pressure + ' hPa'}
              />
              <WeatherItem
                label="Wind Speed"
                value={weatherData.wind.speed + ' m/s'}
              />
            </View>

            <View style={styles.coordinatesSection}>
              <Text style={styles.coordinatesLabel}>Coordinates</Text>
              <Text style={styles.coordinatesValue}>
                Lat: {weatherData.coord.lat.toFixed(2)}, Lon:{' '}
                {weatherData.coord.lon.toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
