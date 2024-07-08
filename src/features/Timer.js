// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Vibration} from 'react-native';
// import { colors } from '../utils/colors';
// import { Countdown } from '../components/Countdown';
// import { Timing } from './Timimg';
// const ONE_SECOND_IN_MS = 1000;

// const PATTERN = [
//     1 * ONE_SECOND_IN_MS,
//     1 * ONE_SECOND_IN_MS,
//     1 * ONE_SECOND_IN_MS,
//     1 * ONE_SECOND_IN_MS,
//     1 * ONE_SECOND_IN_MS
// ];

// export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
//     const [isStarted, setIsStarted] = useState(false);
//     const [minutes, setMinutes] = useState(0.1);

//     return (
//     <View style={styles.container}>

        


//         <View style={styles.countdown}>
//             <View style={{padding: 40}}>
//                 <Text style={styles.text}>
//                     Focusing on: 
//                 </Text>
//                 <Text style={styles.task}>
//                     {focusSubject}
//                 </Text>
//             </View>


//             <Countdown 
//                 minutes={minutes}
//                 isPaused={!isStarted}
//                 onProgress={() => {}}
//                 onEnd={()=> {Vibration.vibrate(PATTERN)} }
//             />
//         </View>

//         <View style={styles.dropDown}>
//             <Timing />
//         </View>

        

//         <View style={styles.buttonWrapper}>
//             {!isStarted &&
//             <TouchableOpacity style={styles.roundButton} onPress={() => setIsStarted(true)}>
//                 <Text style={styles.buttonText}>Start</Text>
//             </TouchableOpacity>
//             }
//             {isStarted &&
//             <TouchableOpacity style={styles.roundButton} onPress={() => setIsStarted(false)}>
//                 <Text style={styles.buttonText}>Pause</Text>
//             </TouchableOpacity>
//             }

//         </View>
//     </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         paddingTop: 40,
//         paddingLeft: 5,
//         justifyContent: 'top',
//     },
//     countdown: {
//         flex: 0.4,
//         alignItems: 'center',
//         justifyContent: 'center'

//     },
//     dropDown: {
//         flex: 0.4,
//         marginTop: 15,
//         marginBottom: 15
//     },
//     buttonWrapper: {
//         flex: 0.3,
//         flexDirection: 'row',
//         padding: 15,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     roundButton: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: colors.white,
//         // backgroundColor: colors.openBlue,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     text: {
//         paddingLeft: 5,
//         paddingBottom: 5,
//         fontSize: 14,
//         color: colors.white,
//         textAlign: 'center'
//     },
//     task: {
//         paddingLeft: 5,
//         paddingBottom: 5,
//         fontSize: 18,
//         color: colors.white,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     }
// });





import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { colors } from '../utils/colors';
import { Countdown } from '../components/Countdown';
import { Timing } from './Timimg';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <View style={{ padding: 40 }}>
          <Text style={styles.text}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>

        <Countdown
          minutes={minutes + seconds / 60}
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => { Vibration.vibrate(PATTERN); }}
        />
      </View>

      <View style={styles.dropDown}>
        <Timing onChangeTime={handleChangeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <TouchableOpacity style={styles.roundButton} onPress={() => setIsStarted(true)}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.roundButton} onPress={() => setIsStarted(false)}>
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
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButton: {
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
