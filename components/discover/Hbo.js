import React from 'react-native';
import {ScrollView, Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import hbo from './hboData';


const Hbo = () => {

    

    return (
        <ScrollView horizontal>
           {
               hbo && hbo.map((item) => {
                   return (
                    <View key={item.id} style={{marginTop: 5}}>
                       <TouchableOpacity>
                       <Image 
                       source={{uri: item.image}} 
                       style={styles.HboPic}

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

export default  Hbo

const styles = StyleSheet.create({
    
    HboPic: {
        height: 160,
        width: 110, 
        margin: 5,
    }, 
    
})