import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import type { FormGroupProps } from '@/types/form-components';

import { globalStyles } from '@/styles/global';

export default function FormGroup<T extends FieldValues>({
  label,
  control,
  name,
  error,
  ...textInputProps
}: FormGroupProps<T>) {
  return (
    <View style={globalStyles.formGroup}>
      <Text style={globalStyles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[globalStyles.input, error && globalStyles.inputError]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...textInputProps}
          />
        )}
      />
      {error && <Text style={globalStyles.errorText}>{error.message}</Text>}
    </View>
  );
}
