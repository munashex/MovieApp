import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function Watchlist({navigation}) {
  return (
    <View style={{backgroundColor: "black", height: "100%"}}>

    <TouchableOpacity style={styles.icon}>
    <View>
     <AntDesign name="back" size={30} color="white"
        style={{
            marginLeft: 10
        }}
        onPress={() => navigation.goBack()}
    /> 
    </View>
    
    <View>
    <FontAwesome5 name="chromecast" size={24} color="white"
    style={{
            marginRight: 10
        }}
     /></View>
    
    </TouchableOpacity>

    <TouchableOpacity style={styles.category}>
        <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
        <Text style={styles.movies}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.tvshows}>Movies</Text>
        </TouchableOpacity>
    </TouchableOpacity>

    </View>
  )
}

export default Watchlist

const styles = StyleSheet.create({
    movies: {
        color: "white",
        marginRight: 10,
        fontSize: 20
    },
    tvshows: {
        color: "white",
        marginLeft: 10,
        fontSize: 20
    },
    category: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "center"
    },
    icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12
    }
})