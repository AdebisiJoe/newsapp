import React from 'react';
import { View,StyleSheet,ScrollView,Image,Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';



export default function NewsItem({item}:any,onPress:any) {

    const { title, image, url,author,source } =item;
    return (
     <View >
          <Card onPress={onPress}>
            <CardSection>
            <View style={Styles.thumbnailContainerStyle}>

                {image ?

                    <Image 
                    style={Styles.thumbnailStyle}
                    source={{ uri: image}} 
                    
                    /> 
                :
                    <Image 
                    style={Styles.thumbnailStyle}
                    source={require('../assets/images/newspaper.png')} 
                    
                    /> 
                }

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
        // justifyContent: 'space-around',
        justifyContent:'flex-start'
 
     },
     headerTextStyle : {
        flexDirection : 'column',
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
