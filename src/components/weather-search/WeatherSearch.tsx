import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { searchSchema } from '@/schemas/weather';
import { colors } from '@/styles';
import type { WeatherSearchProps } from '@/types/components';
import type { SearchFormData } from '@/types/forms';

import styles from './styles';

export default function WeatherSearch({
  onSubmit,
  loading,
}: WeatherSearchProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      cityName: '',
    },
  });

  const submitEditingHandler = () => {
    handleSubmit(onSubmit)();
    reset({
      cityName: '',
    });
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="cityName"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={[styles.input, errors.cityName && styles.errorText]}
              placeholder="Enter city name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmitEditing={submitEditingHandler}
            />
            {errors.cityName && (
              <Text style={styles.errorText}>{errors.cityName.message}</Text>
            )}
          </>
        )}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={submitEditingHandler}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.buttonText}>Get Weather</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
