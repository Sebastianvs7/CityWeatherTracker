import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { saveCitySchema } from '@/schemas/weather';
import { colors } from '@/styles';
import type { SaveModalProps } from '@/types/components';
import type { SaveCityFormData } from '@/types/forms';

import styles from './styles';

export default function SaveModal({
  visible,
  cityName,
  onSubmit,
  onClose,
}: SaveModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SaveCityFormData>({
    resolver: yupResolver(saveCitySchema),
    defaultValues: {
      postCode: '',
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleFormSubmit = async (data: SaveCityFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Save City</Text>
          <Text style={styles.subtitle}>Enter post code for {cityName}</Text>
          <Controller
            control={control}
            name="postCode"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input, errors.postCode && styles.errorText]}
                  placeholder="Post code"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoFocus
                />
                {errors.postCode && (
                  <Text style={styles.errorText}>
                    {errors.postCode.message}
                  </Text>
                )}
              </>
            )}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={handleClose}
            >
              <Text style={styles.buttonCancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.buttonSave,
                isSubmitting && styles.buttonDisabled,
              ]}
              onPress={handleSubmit(handleFormSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <Text style={styles.buttonSaveText}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
