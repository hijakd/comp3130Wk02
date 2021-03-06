import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
      <View style={styles.view3}/> 
      <View style={styles.view4}/>
      <View style={styles.view5}/>
      <View style={styles.view6}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    // justifyContent:'center', // justifies content along the "main axis"
    // justifyContent:'space-around', // justifies content along the "main axis" with 'padding' 
    justifyContent:'space-evenly', // alternatively use "space-evenly" 
    // alignItems:'center', // aligns items along the "cross axis"
    alignContent:'center',
    flexWrap:'wrap',

    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view1:{
    backgroundColor: '#293250',
    // flex:1,
    height:110,
    width:110,
  },
  view2:{
    backgroundColor: '#ffd55a',
    // flex:1,
    height:110,
    width:110,
  },
  view3:{
    backgroundColor: '#6dd47e',
    // flex:1,
    height:110,
    width:110,
  },
  view4:{
    backgroundColor: '#293351',
    // flex:1,
    height:110,
    width:110,
  },
  view5:{
    backgroundColor: '#ffd65b',
    // flex:1,
    height:110,
    width:110,
  },
  view6:{
    backgroundColor: '#6dd57f',
    // flex:1,
    height:110,
    width:110,
  },
})