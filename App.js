import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <Focus />
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
