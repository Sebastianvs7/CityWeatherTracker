import { useAuth } from '@contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '@services/authService';
import { storageService } from '@services/storageService';
import React, { useEffect, useState } from 'react';
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
import { profileSchema } from '@/schemas/profile';
import { colors, globalStyles } from '@/styles';
import type { ProfileFormData } from '@/types/forms';
import type { User } from '@/types/user';

import styles from './styles';

export default function ProfileScreen() {
  const { refreshAuth } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
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

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    setLoading(true);
    const currentUser = await authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      // Reset form with user data
      reset({
        email: currentUser.email,
        password: currentUser.password,
        phoneNumber: currentUser.phoneNumber,
        cities:
          currentUser.cities && currentUser.cities.length > 0
            ? currentUser.cities
            : [{ name: '', address: { postCode: '' } }],
      });
    }
    setLoading(false);
  };

  const onSubmit = async (data: ProfileFormData) => {
    if (!user) return;

    const updatedUser: User = {
      email: data.email.trim(),
      password: data.password,
      phoneNumber: data.phoneNumber.trim(),
      cities: data.cities.map(city => ({
        name: city.name.trim(),
        address: { postCode: city.address.postCode.trim() },
      })),
    };

    try {
      await storageService.saveUserByEmail(user.email, updatedUser);
      await storageService.saveUser(updatedUser);
      setUser(updatedUser);
      setIsEditing(false);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  const handleCancel = () => {
    if (user) {
      reset({
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        cities:
          user.cities && user.cities.length > 0
            ? user.cities
            : [{ name: '', address: { postCode: '' } }],
      });
    }
    setIsEditing(false);
  };

  const handleAddCity = () => {
    append({ name: '', address: { postCode: '' } });
  };

  const handleRemoveCity = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await authService.logout();
          await refreshAuth();
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View style={globalStyles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={globalStyles.centerContainer}>
        <Text>No user data found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={globalStyles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={true}
      >
        <Text style={styles.title}>Profile</Text>
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
              {isEditing && (
                <TouchableOpacity
                  onPress={handleAddCity}
                  style={styles.addButton}
                >
                  <Text style={styles.addButtonText}>+ Add City</Text>
                </TouchableOpacity>
              )}
            </View>

            {fields.map((field, index) => (
              <Cities
                key={field.id}
                fields={fields}
                control={control}
                errors={errors}
                handleRemoveCity={handleRemoveCity}
              />
            ))}
          </View>

          {isEditing ? (
            <View style={globalStyles.buttonRow}>
              <TouchableOpacity
                style={[globalStyles.button, styles.cancelButton]}
                onPress={handleCancel}
              >
                <Text style={globalStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>
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
                  <Text style={globalStyles.buttonText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => setIsEditing(true)}
            >
              <Text style={globalStyles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={globalStyles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
