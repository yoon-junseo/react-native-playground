import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigations/types/types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <Button title="go to the list screen" onPress={() => navigation.navigate('List')} />
  </View>
);

export default HomeScreen;
