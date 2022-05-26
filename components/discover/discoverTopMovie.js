import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function DiscoverTopMovie() {
  return (
    <ScrollView style={{position: "relative", top: 1}}>
        
   <View style={styles.movieslog}>
       <TouchableOpacity>
       <MaterialCommunityIcons name="movie" size={24} color="white" />
       <Text style={styles.movies}>Movies</Text>
       </TouchableOpacity>
   </View>

   <View style={styles.TvShowLog}>
     <TouchableOpacity>
     <Feather name="tv" size={24} color="white" />
     <Text style={styles.tvshow}>TV Shows</Text>
     </TouchableOpacity>
   </View>

<View style={styles.hdLog}>
  <TouchableOpacity>
  <MaterialIcons name="hd" size={30} color="white" />
  <Text style={styles.hd}>HD Shows</Text>
  </TouchableOpacity>
</View>
   

    </ScrollView>
  )
}

export default DiscoverTopMovie

const styles = StyleSheet.create({
   movies: {
color: "white",
marginLeft: 30,
marginTop: -23,
fontSize: 16
   },
   movieslog: {
       backgroundColor: "#2d2d2e",
       padding: 5,
       marginRight: 260,
       borderRadius: 5,
       marginLeft: 2,
       marginTop: 30
   }, 
   TvShowLog:{
    position: "absolute",
    left: 110,
    top: 29,
    backgroundColor: "#2d2d2e",
    paddingTop: 4,
    height: 35,
    paddingLeft: 7,
    paddingRight: 5,
    borderRadius: 5
       
   },
   tvshow:{
       color: "white",
       marginLeft: 30,
       bottom: 22,
       fontSize: 16,
       marginTop: -2
   },
   hd: {
     color: "white",
     fontSize: 16,
     marginLeft: 30,
     marginTop: -22
   },
   hdLog: {
     marginLeft: 234,
    bottom: 35,
    backgroundColor: "#2d2d2e",
    padding: 5,
    height: 35,
    borderRadius: 5,
    marginRight: 10
   }
})