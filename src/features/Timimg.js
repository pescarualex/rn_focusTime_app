import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

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
      <Text style={styles.label}>Select Minutes</Text>
      <RNPickerSelect
        onValueChange={handleMinuteChange}
        items={minutes}
        placeholder={{ label: 'Select minute', value: null }}
        style={pickerSelectStyles}
      />
      <Text style={styles.label}>Select Seconds</Text>
      <RNPickerSelect
        onValueChange={handleSecondChange}
        items={seconds}
        placeholder={{ label: 'Select second', value: null }}
        style={pickerSelectStyles}
      />
      {/* <Text style={styles.result}>
        Selected: {selectedMinute !== null ? selectedMinute : '--'}:{selectedSecond !== null ? selectedSecond : '--'}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'left',
    alignItems: 'left',
    padding: 10,
    backgroundColor: '#000039',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10,
  },
//   result: {
//     color: '#FFFFFF',
//     fontSize: 24,
//     marginTop: 20,
//   },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    color: '#FFFFFF',
    paddingRight: 30,
    backgroundColor: '#1E90FF',
    marginVertical: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    color: '#FFFFFF',
    paddingRight: 30,
    backgroundColor: '#1E90FF',
    marginVertical: 10,
  },
});
