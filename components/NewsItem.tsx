import React from 'react';
import { View,StyleSheet,ScrollView,Image,Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


export default function NewsItem({item}:any) {

    const { title, image, url } =item;
    return (
     <View>
         
     </View>
    )
}


const Styles = StyleSheet.create({
    headerContentStyle : {
        flexDirection : 'column',
        justifyContent: 'space-around'
 
     },
     headerTextStyle : {
        fontSize : 18 
     },
     thumbnailStyle: {
        height : 50,
        width : 50  
     },
     thumbnailContainerStyle: {
       justifyContent: 'center',
       alignItems: 'center',
       marginLeft: 10,
       marginRight: 10
 
     },
     imageStyle: {
        height : 300,
        flex: 1,
        width:undefined
     }
 
  });
