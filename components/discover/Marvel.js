import React from 'react-native';
import {ScrollView, Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import marvel from './marvelStudioData';
import { Divider} from 'react-native-paper';



const Marvel = () => {

    

    return (
        <ScrollView horizontal>
           {
               marvel && marvel.map((item) => {
                   return (
                    <View key={item.id} style={{marginTop: 5}}>
                       <TouchableOpacity>
                       <Image 
                       source={{uri: item.image}} 
                       style={styles.marvelPic}

                       />
                       <Text style={{color: "white", fontWeight: "bold"}}>
                       {item.name.length > 15 ? item.name.slice(0, 14) + '...' : item.name}
                       </Text>
                       <Text style={{color: "white"}}>{item.year}</Text>
                       </TouchableOpacity>
                     </View>
                   )
               })
           }
        </ScrollView>
    )
}

export default  Marvel 

const styles = StyleSheet.create({
    
    marvelPic: {
        height: 160,
        width: 110, 
        margin: 5
    }, 
    
})