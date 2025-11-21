import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface FormGroupProps<T extends FieldValues> extends TextInputProps {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
  error?: { message?: string };
}
