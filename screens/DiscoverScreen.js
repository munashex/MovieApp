import React from 'react';
import { View,  StyleSheet, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import DiscoverTopMovie from '../components/discover/discoverTopMovie';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import TopMovies from '../components/discover/TopMovies';
import Movies from '../components/discover/Movies'


const DiscoverScreen = ({navigation}) => {

    return (
        <View style={styles.discoverScreenContainer}>
        <StatusBar style={{backgroundColor: "black"}}/>
          <View style={styles.innerContainer}>
           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
           <EvilIcons name="navicon" size={32} color="white"/>
           </TouchableOpacity>
          </View>

          <View style={styles.innerContainer2}>
          <TouchableOpacity>
           <FontAwesome5 name="chromecast" size={24} color="white" />
           </TouchableOpacity>
          </View>
            
             
             <DiscoverTopMovie/>
            <ScrollView style={{position: "relative"}}>
            <TopMovies/>
            <Movies/>
            </ScrollView>
            
        
            
            
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
    discoverScreenContainer: {
        backgroundColor: "black",
        height: "100%",
    },
    innerContainer: {
         marginTop: 20,
         marginLeft: 20,
    },
    innerContainer2:{
        marginLeft: 316,
        marginTop: -27
    }
})