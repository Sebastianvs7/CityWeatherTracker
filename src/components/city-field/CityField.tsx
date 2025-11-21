import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { Text, TextInput } from 'react-native';

import { globalStyles } from '@/styles';
import type { CityFieldProps } from '@/types/components';

export default function CityField<T extends FieldValues>({
  control,
  name,
  placeholder,
  error,
  editable = true,
}: CityFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <TextInput
            style={[globalStyles.input, error && globalStyles.inputError]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            editable={editable}
          />
          {error && (
            <Text style={globalStyles.errorText}>
              {error.message as string}
            </Text>
          )}
        </>
      )}
    />
  );
}
