import { OPENWEATHER_API_KEY, OPENWEATHER_BASE_URL } from '@env';

import type { WeatherData } from '@/types/weather';

export const weatherService = {
  async getWeatherByCity(cityName: string): Promise<WeatherData> {
    if (!OPENWEATHER_API_KEY) {
      throw new Error('OpenWeatherMap API key is not set');
    }

    const url = `${OPENWEATHER_BASE_URL}?q=${encodeURIComponent(
      cityName,
    )}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  },
};
