import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.text}>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.length : 0,
    backgroundColor: colors.darkPowderBlue,

  },
  text: {
    color: colors.white,
  }
});
