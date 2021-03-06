import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
      <View style={{backgroundColor: '#6dd47e', flex:1,}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
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
  // view3:{
  //   backgroundColor: '#6dd47e',
  //   flex:1,
  // },
})