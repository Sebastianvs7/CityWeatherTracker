import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type { WeatherCardProps } from '@/types/components';

import styles from './styles';

export default function WeatherCard({
  weatherData,
  isSaved,
  onSave,
}: WeatherCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.city}>{weatherData.name}</Text>
          {isSaved && <Text style={styles.savedBadge}>Saved</Text>}
        </View>
        {!isSaved && (
          <TouchableOpacity style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveButtonText}>Save City</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
      <Text style={styles.description}>
        {weatherData.weather[0]?.description || 'N/A'}
      </Text>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Feels like</Text>
          <Text style={styles.detailValue}>
            {Math.round(weatherData.main.feels_like)}°C
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{weatherData.main.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Pressure</Text>
          <Text style={styles.detailValue}>
            {weatherData.main.pressure} hPa
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{weatherData.wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
}
