import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigations/types/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

type ItemScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const ItemScreen = ({ route }: ItemScreenProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Item</Text>
    <Text style={styles.text}>ID: {route.params.id}</Text>
    <Text style={styles.text}>Name: {route.params.name}</Text>
  </View>
);

export default ItemScreen;
