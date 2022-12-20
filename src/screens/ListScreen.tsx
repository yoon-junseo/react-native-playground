import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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

type ListScreenProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const ListScreen = ({ navigation }: ListScreenProps) => {
  const items = [
    {
      id: 1,
      name: 'pizza',
    },
    { id: 2, name: 'chicken' },
    { id: 3, name: 'salad' },
  ];

  const handlePress = (item: { id: number; name: string }) => {
    navigation.navigate('Detail', { id: item.id, name: item.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
      {items.map((item) => (
        <Button key={item.id} title={item.name} onPress={() => handlePress(item)} />
      ))}
    </View>
  );
};

export default ListScreen;
