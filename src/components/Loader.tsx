import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colors, globalStyles } from '@/styles';

export default function Loader() {
  return (
    <View style={globalStyles.centerContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}
