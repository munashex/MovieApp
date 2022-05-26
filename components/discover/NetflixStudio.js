import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function NetflixStudio() {
  return (
    <View style={{marginTop: 30}}>
        <Text style={styles.NetflixStudioContainer}>Netflix</Text>
        
        <TouchableOpacity style={styles.NetflixContainer}>
        <AntDesign name="right" size={20} color="white"></AntDesign>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    NetflixContainer: {
    position: "absolute",
    right: 15,
    
    
    },
    NetflixStudioContainer: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginTop: -2,
        marginLeft: 10
    }
})

export default NetflixStudio