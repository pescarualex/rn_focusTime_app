import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import React, {useState} from 'react';

export default function App() {

  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style = {styles.container}>
      {!currentSubject ? <Focus addSubject = {setCurrentSubject} /> : 
        <View style={styles.timerContainer}>
          <Text style={styles.text}>I am going to render the timer for {currentSubject}.</Text>
          </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.length : 0,
    backgroundColor: colors.darkPowderBlue,

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
