import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function HuluStudio() {
  return (
    <View style={{marginTop: 30}}>
        <Text style={styles.HuluStudioContainer}>Hulu</Text>
        
        <TouchableOpacity style={styles.HuluContainer}>
        <AntDesign name="right" size={20} color="white"></AntDesign>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    HuluContainer: {
    position: "absolute",
    right: 15,
    
    
    },
    HuluStudioContainer: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginTop: -2,
        marginLeft: 10
    }
})

export default HuluStudio