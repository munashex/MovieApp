import React from 'react-native';
import {ScrollView, Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import hulu from './huluData';


const Hulu = () => {

    

    return (
        <ScrollView horizontal>
           {
               hulu && hulu.map((item) => {
                   return (
                    <View key={item.id} style={{marginTop: 5}}>
                       <TouchableOpacity>
                       <Image 
                       source={{uri: item.image}} 
                       style={styles.HuluPic}

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

export default  Hulu

const styles = StyleSheet.create({
    
    HuluPic: {
        height: 160,
        width: 110, 
        margin: 5,
    }, 
    
})