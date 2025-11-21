import { useAuth } from '@contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '@services/authService';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FormGroup from '@/components/form-group/FormGroup';
import { loginSchema } from '@/schemas/auth';
import { colors, globalStyles } from '@/styles';
import type { LoginFormData } from '@/types/forms';
import type { LoginScreenProps } from '@/types/navigation';

import styles from './styles';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { refreshAuth } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await authService.login({
      email: data.email.trim(),
      password: data.password,
    });

    if (result.success && result.user) {
      await refreshAuth();
    } else {
      Alert.alert('Error', result.error || 'Login failed');
    }
  };

  const registerButtonHandler = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      enabled={true}
    >
      <View style={styles.container}>
        <Text style={globalStyles.title}>Login</Text>

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
            <Text style={globalStyles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.linkButton}
          onPress={registerButtonHandler}
        >
          <Text style={globalStyles.linkText}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
