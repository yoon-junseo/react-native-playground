import React from 'react';
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigations/types/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <Button title="go to the list screen" onPress={() => navigation.navigate('List')} />
  </SafeAreaView>
);

export default HomeScreen;
