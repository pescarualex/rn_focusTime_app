import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer';
import React, {useState} from 'react';

export default function App() {

  const [currentSubject, setCurrentSubject] = useState("test");

  return (
    <SafeAreaView style = {styles.container}>
      {!currentSubject ? (<Focus addSubject = {setCurrentSubject} />) : 
        (<Timer 
          focusSubject = {currentSubject}
          onTimerEnd = {() => {}}
          clearSubject = {() => {}}

        />)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.length : 0,
    backgroundColor: colors.navy,

  },
  timerContainer: {
    flex: 0.5, 
    paddingTop: 40,
    paddingLeft: 5,
    justifyContent: 'top',
  },
  text: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 12,
    color: colors.white
},
});
