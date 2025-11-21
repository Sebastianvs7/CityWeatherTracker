import { FieldArrayWithId } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import type { CitiesProps } from '@/types/components';
import type { RegisterFormData } from '@/types/forms';

import CityField from '../city-field/CityField';
import styles from './styles';

export default function Cities({
  fields,
  control,
  errors,
  handleRemoveCity,
}: CitiesProps) {
  return fields.map(
    (
      field: FieldArrayWithId<RegisterFormData, 'cities', 'id'>,
      index: number,
    ) => (
      <View key={field.id} style={styles.cityContainer}>
        <View style={styles.cityHeader}>
          <Text style={styles.cityLabel}>City {index + 1}</Text>
          {fields.length > 1 && (
            <TouchableOpacity
              onPress={() => handleRemoveCity(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
        <CityField
          control={control}
          name={`cities.${index}.name` as any}
          placeholder="City name"
          error={errors.cities?.[index]?.name}
        />
        <CityField
          control={control}
          name={`cities.${index}.address.postCode` as any}
          placeholder="Post code"
          error={errors.cities?.[index]?.address?.postCode}
        />
      </View>
    ),
  );
}
