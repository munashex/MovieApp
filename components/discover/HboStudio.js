import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function HboStudio() {
  return (
    <View style={{marginTop: 30}}>
        <Text style={styles.hboStudioContainer}>Hbo</Text>
        
        <TouchableOpacity style={styles.hboContainer}>
        <AntDesign name="right" size={20} color="white"></AntDesign>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    hboContainer: {
    position: "absolute",
    right: 15,
    
    
    },
    hboStudioContainer: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginTop: -2,
        marginLeft: 10
    }
})

export default HboStudio