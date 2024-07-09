import React, {useState} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { colors } from "../utils/colors"

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null)
    return (
    <View style= {styles.container}>
        <View style = { styles.inputContainer}>
            
            <Text style={styles.text}>What would you like to focus on? </Text>

            <View style = {styles.subject}>
                <TextInput 
                style = {styles.input} 
                onChangeText={setSubject}

                ></TextInput>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.roundButton} onPress={() => addSubject(subject)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer:{
        flex: 0.5, 
        paddingTop: 40,
        paddingLeft: 5,
        justifyContent: 'top',
    
    },
    input:{
        // flex: 1,
        width: 350,
        backgroundColor: colors.white,
        fontSize: 12,
        borderRadius: 10,
        marginRight: 5,
        padding: 5
    },
    text: {
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 12,
        color: colors.white
    },
    subject: {
        flexDirection: 'row'
    },

    containerBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.openBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

//changes