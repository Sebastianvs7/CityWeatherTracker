import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import type { SavedCitiesProps } from '@/types/components';
import type { City } from '@/types/user';

import styles from './styles';

export default function SavedCities({ cities, onCityPress }: SavedCitiesProps) {
  const renderCityItem = ({ item }: { item: City }) => (
    <TouchableOpacity style={styles.cityItem} onPress={() => onCityPress(item)}>
      <View>
        <Text style={styles.cityItemName}>{item.name}</Text>
        <Text style={styles.cityItemPostCode}>{item.address.postCode}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Saved Cities</Text>
      {cities.length === 0 ? (
        <Text style={styles.emptyText}>
          No saved cities. Add cities in your profile.
        </Text>
      ) : (
        <FlatList
          data={cities}
          renderItem={renderCityItem}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}
