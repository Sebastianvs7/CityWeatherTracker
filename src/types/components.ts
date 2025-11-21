import {
  Control,
  FieldArrayWithId,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { TouchableOpacityProps } from 'react-native';

import type {
  RegisterFormData,
  SaveCityFormData,
  SearchFormData,
} from './forms';
import type { City } from './user';
import type { WeatherData } from './weather';

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
}

export interface CityFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder: string;
  error?: FieldErrors<T>[string];
  editable?: boolean;
}

export interface CitiesProps {
  fields: FieldArrayWithId<RegisterFormData, 'cities', 'id'>[];
  control: Control<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  handleRemoveCity: (index: number) => void;
}

export interface SaveModalProps {
  visible: boolean;
  cityName: string;
  onSubmit: (data: SaveCityFormData) => Promise<void> | void;
  onClose: () => void;
}

export interface SavedCitiesProps {
  cities: City[];
  onCityPress: (city: City) => void;
}

export interface WeatherCardProps {
  weatherData: WeatherData;
  isSaved: boolean;
  onSave: () => void;
}

export interface WeatherItemProps {
  label: string;
  value: string;
}

export interface WeatherSearchProps {
  onSubmit: (data: SearchFormData) => void;
  loading: boolean;
}
