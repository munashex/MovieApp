import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import calenderData from '../components/calender/calenderData';


function Calender({navigation}) {

const Item = ({name, image, season, time}) => {
  return (
    <TouchableOpacity>
    
      <Image source={{uri: image}} style={{height: 170, width: 100, margin: 10}}/>
      <Text style={{color: "white", position: "absolute", marginLeft: 117, marginTop: 12}}>{name}</Text>
      <Text style={{color: "grey", position: "absolute", marginTop: 30, marginLeft: 120}}>{season}</Text>
      <Text style={{color: "grey", position: "absolute", marginTop: 150, marginLeft: 290}}>{time}</Text>
    </TouchableOpacity>
  )
}

const renderData = ({item}) => {
  return (
    <Item
     name={item.name} 
     image={item.image}
     season={item.season}
     time={item.time}
    />
  )
}


  return (
    
    
      <View style={{backgroundColor: "black", height: "100%"}}>
        <View style={styles.calender}>
        <AntDesign name="arrowleft" size={30} color="white" 
          onPress={() => navigation.goBack()}
        />
        <Text style={{color: "white"}}>Today</Text>
        </View> 

        <FlatList 
          data={calenderData}
          renderItem={renderData}
        />
    </View>

    
  )
}

export default Calender

const styles = StyleSheet.create({
  calender: {
    flexDirection: "row",
   justifyContent: "space-between",
   margin: 12
  }
})