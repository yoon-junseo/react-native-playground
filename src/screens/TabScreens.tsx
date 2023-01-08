import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export const Mail = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Mail</Text>
  </View>
);

export const Meet = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Meet</Text>
  </View>
);

export const Settings = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Settings</Text>
  </View>
);
