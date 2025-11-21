import SaveModal from '@components/save-modal/SaveModal';
import SavedCities from '@components/saved-cities/SavedCities';
import WeatherCard from '@components/weather-card/WeatherCard';
import WeatherSearch from '@components/weather-search/WeatherSearch';
import { authService } from '@services/authService';
import { storageService } from '@services/storageService';
import { weatherService } from '@services/weatherService';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SaveCityFormData, SearchFormData } from '@/types/forms';
import type { City } from '@/types/user';
import type { WeatherData } from '@/types/weather';

import styles from './styles';
import { globalStyles } from '@/styles';

export default function WeatherScreen({ navigation }: any) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [savedCities, setSavedCities] = useState<City[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);

  useEffect(() => {
    loadSavedCities();
  }, []);

  useEffect(() => {
    // Reload cities when screen comes into focus
    const unsubscribe = navigation.addListener('focus', () => {
      loadSavedCities();
    });
    return unsubscribe;
  }, [navigation]);

  const loadSavedCities = async () => {
    const user = await authService.getCurrentUser();
    if (user && user.cities) {
      setSavedCities(user.cities);
    }
  };

  const onSearchSubmit = async (data: SearchFormData) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const weatherDataResult = await weatherService.getWeatherByCity(
        data.cityName.trim(),
      );
      setWeatherData(weatherDataResult);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch weather data');
      Alert.alert('Error', err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleCityPress = (city: City) => {
    navigation.navigate('CityDetail', { city });
  };

  const isCitySaved = (cityName: string): boolean => {
    return savedCities.some(
      city => city.name.toLowerCase() === cityName.toLowerCase(),
    );
  };

  const handleSaveCity = () => {
    if (!weatherData) return;

    const cityNameToSave = weatherData.name.trim();

    if (isCitySaved(cityNameToSave)) {
      Alert.alert('Info', 'This city is already in your saved cities list');
      return;
    }

    setShowSaveModal(true);
  };

  const onSaveCitySubmit = async (data: SaveCityFormData) => {
    if (!weatherData) return;

    const user = await authService.getCurrentUser();
    if (!user) return;

    const newCity: City = {
      name: weatherData.name.trim(),
      address: { postCode: data.postCode.trim() },
    };

    const updatedCities = [...user.cities, newCity];
    const updatedUser = { ...user, cities: updatedCities };

    try {
      await storageService.saveUserByEmail(user.email, updatedUser);
      await storageService.saveUser(updatedUser);
      await loadSavedCities();
      setShowSaveModal(false);
      Alert.alert('Success', 'City saved successfully!');
    } catch {
      Alert.alert('Error', 'Failed to save city');
    }
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <Text style={styles.title}>Weather</Text>
      <ScrollView
        style={globalStyles.container}
        contentContainerStyle={globalStyles.contentContainer}
      >
        <WeatherSearch onSubmit={onSearchSubmit} loading={loading} />

        {weatherData && (
          <WeatherCard
            weatherData={weatherData}
            isSaved={isCitySaved(weatherData.name)}
            onSave={handleSaveCity}
          />
        )}

        {error && !weatherData && (
          <View style={styles.errorCard}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <SavedCities cities={savedCities} onCityPress={handleCityPress} />

        <SaveModal
          visible={showSaveModal}
          cityName={weatherData?.name || ''}
          onSubmit={onSaveCitySubmit}
          onClose={() => setShowSaveModal(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
