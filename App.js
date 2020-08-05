import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
    return(
      <View style={styles.container}>
          <View style={styles.containerLeft}>
            <View style={styles.lolem1}><Text>Lolem1</Text></View>
            <View style={styles.lolem234}>
              <View style={styles.lolem24}>
                <View style={styles.lolem2}><Text>Lolem2</Text></View>
                <View style={styles.lolem4}><Text>lolem4</Text></View>
              </View>
              <View style={styles.lolem3}><Text>Lolem3</Text></View>
            </View>
            <View style={styles.lolem5}><Text>Lolem5</Text></View>
          </View>
          <View style={styles.containerRight}><Text>Lolem6</Text></View>
      </View>
    );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'pink',
    padding: 20,
    
  },
  containerLeft: {
      flex:2,
      margin:3,
      
  },
  containerRight: {
      flex:1,
      backgroundColor:'#10306F',
      margin:3,
  },
  lolem1: {
    flex: 2,
    backgroundColor:'#28B463',
    margin:3,
    padding:10
  },
  lolem234:{
    flex: 2,
    flexDirection:'row',
    margin:3,
  },
  lolem5:{
    flex: 1,
    backgroundColor:'#FA8072',
    margin:3,
    padding:10
  },
  lolem24:{
    flex:1,
    flexDirection:'column',
    margin:3,
    marginLeft:0
  },
  lolem3:{
    flex:1,
    backgroundColor:'#2C3E50',
    margin:3,
    padding:10
  },
  lolem2:{
    flex:1,
    backgroundColor:'#F573F3',
    margin:3,
    padding:10,
    marginLeft: 0
  },
  lolem4:{
    flex:1,
    backgroundColor:'#18DEE5',
    margin:3,
    padding:10
  }

  });
