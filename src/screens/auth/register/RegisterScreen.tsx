import { useAuth } from '@contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '@services/authService';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Cities from '@/components/cities/Cities';
import FormGroup from '@/components/form-group/FormGroup';
import { registerSchema } from '@/schemas/auth';
import { colors, globalStyles } from '@/styles';
import type { RegisterFormData } from '@/types/forms';
import type { RegisterScreenProps } from '@/types/navigation';
import type { User } from '@/types/user';

import styles from './styles';

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const { refreshAuth } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      phoneNumber: '',
      cities: [{ name: '', address: { postCode: '' } }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cities',
  });

  const handleAddCity = () => {
    append({ name: '', address: { postCode: '' } });
  };

  const handleRemoveCity = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const onSubmit = async (data: RegisterFormData) => {
    const user: User = {
      email: data.email.trim(),
      password: data.password,
      phoneNumber: data.phoneNumber.trim(),
      cities: data.cities.map(city => ({
        name: city.name.trim(),
        address: { postCode: city.address.postCode.trim() },
      })),
    };

    const result = await authService.register(user);

    if (result.success) {
      await refreshAuth();
      Alert.alert('Success', 'Registration successful!');
    } else {
      Alert.alert('Error', result.error || 'Registration failed');
    }
  };

  const loginButtonHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}>Register</Text>
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={globalStyles.contentContainer}
        >
          <FormGroup
            label="Email"
            control={control}
            name="email"
            error={errors.email}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <FormGroup
            label="Password"
            control={control}
            name="password"
            error={errors.password}
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
          />

          <FormGroup
            label="Phone Number"
            control={control}
            name="phoneNumber"
            error={errors.phoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />

          <View style={globalStyles.formGroup}>
            <View style={globalStyles.sectionHeader}>
              <Text style={globalStyles.label}>Cities</Text>
              <TouchableOpacity
                onPress={handleAddCity}
                style={styles.addButton}
              >
                <Text style={styles.addButtonText}>+ Add City</Text>
              </TouchableOpacity>
            </View>

            <Cities
              fields={fields}
              control={control}
              errors={errors}
              handleRemoveCity={handleRemoveCity}
            />
            {errors.cities && typeof errors.cities.message === 'string' && (
              <Text style={globalStyles.errorText}>
                {errors.cities.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={[
              globalStyles.button,
              isSubmitting && globalStyles.buttonDisabled,
            ]}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <Text style={globalStyles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.linkButton}
            onPress={loginButtonHandler}
          >
            <Text style={globalStyles.linkText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
