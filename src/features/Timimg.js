import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../utils/colors';

export const Timing = ({ onChangeTime }) => {
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [selectedSecond, setSelectedSecond] = useState(null);

  const minutes = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString().padStart(2, '0'),
    value: i,
  }));

  const seconds = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString().padStart(2, '0'),
    value: i,
  }));

  const handleMinuteChange = (value) => {
    setSelectedMinute(value);
    onChangeTime(value, selectedSecond);
  };

  const handleSecondChange = (value) => {
    setSelectedSecond(value);
    onChangeTime(selectedMinute, value);
  };

  return (
    <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>Select Minutes:</Text>
      <RNPickerSelect
        onValueChange={handleMinuteChange}
        items={minutes}
        placeholder={{ label: 'Select minute', value: null }}
        style={pickerSelectStyles}
      />
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Select Seconds:</Text>
      <RNPickerSelect
        onValueChange={handleSecondChange}
        items={seconds}
        placeholder={{ label: 'Select second', value: null }}
        style={pickerSelectStyles}
      />
    </View>
  </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      padding: 10,
      backgroundColor: 'rgba(0,0,57, 0.5)',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 18,
    },
    label: {
      color: '#FFFFFF',
      fontSize: 13,
      marginRight: 10,
    },
  });
  
  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      fontSize: 14,
      width: 270,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderWidth: 0.5,
      borderColor: '#FFFFFF',
      borderRadius: 15,
      color: colors.white,
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: 'rgba(30,144,255, 0.5)',
    },
  });
