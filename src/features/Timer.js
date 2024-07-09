

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { colors } from '../utils/colors';
import { Countdown } from '../components/Countdown';
import { Timing } from './Timimg';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChangeTime = (newMinutes, newSeconds) => {
    if (newMinutes !== null) {
      setMinutes(newMinutes);
    }
    if (newSeconds !== null) {
      setSeconds(newSeconds);
    }
  };


  const onEndTime = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setTimeout(() => {}, 200);
    reset;
  } 

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <View style={{ padding: 40 }}>
          <Text style={styles.text}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>

        <Countdown
          minutes = {minutes + seconds / 60}
          isPaused = {!isStarted}
          onProgress={() => {}}
          onEnd = {onEndTime}
        />
      </View>

      <View style={styles.dropDown}>
        <Timing onChangeTime={handleChangeTime} />
      </View>

      <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.resetBtn} onPress={() => clearSubject()}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

        {!isStarted ? (
          <TouchableOpacity style={styles.startBtn} onPress={() => setIsStarted(true)}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.startBtn} onPress={() => setIsStarted(false)}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 5,
    justifyContent: 'top',
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDown: {
    flex: 0.4,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  startBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
