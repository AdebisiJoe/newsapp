import React from 'react';
import { View,StyleSheet,ScrollView,Image,Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


export default function NewsItem({item}:any) {

    const { title, image, url,author,source } =item;
    return (
     <View>
          <Card>
            <CardSection>
            <View style={Styles.thumbnailContainerStyle}>
                <Image 
                style={Styles.thumbnailStyle}
                source={{ uri: image}} 
                
                /> 
            </View>  
            <View style={Styles.headerContentStyle} >
                <Text style={Styles.headerTextStyle} >{title}</Text>
                <Text >{source}</Text>
            </View>
            
            </CardSection>
        </Card>
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
