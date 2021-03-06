import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view1:{
    backgroundColor: '#293250',
    flex:1,
  },
  view2:{
    backgroundColor: '#ffd55a',
    flex:1,
  },
})