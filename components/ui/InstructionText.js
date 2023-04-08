import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

export default function InstructionText({ children, style }){
  return (

        <Text style={[ styles.InstructionText, style ]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    InstructionText:{

        fontFamily:'open-sans',
        color:Colors.accent500,
        fontSize: 24,
        
    },
})  
