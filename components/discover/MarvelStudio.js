import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function MarvelStudio() {
  return (
    <View style={{marginTop: 12}}>
        <Text style={styles.marvelStudioContainer}>Marvel Studio</Text>
        
        <TouchableOpacity style={styles.marvelContainer}>
        <AntDesign name="right" size={20} color="white"></AntDesign>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    marvelContainer: {
    position: "absolute",
    right: 15,
    
    
    },
    marvelStudioContainer: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginTop: -2,
        marginLeft: 10
    }
})

export default MarvelStudio