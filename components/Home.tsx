import  React,{useEffect} from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Ionicons,MaterialIcons,FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import Card from './Card';
import CardSection from './CardSection';

import news from '../api/homenews';

export default function Home() {

  const [newsList, setnewsList] = React.useState([]);
  const [tempNewsList, setTempNewsList] = React.useState([]);
 

  useEffect(() => {

      news.getNewsList().then((data)=>{
        console.log(data.data!.data);
        setnewsList(data.data!.data);
        setTempNewsList(data.data!.data);
        
      });
 
     
    
   }, [])

    return (
        <View style={styles.container}>

           {/* <View style={styles.topmenu}>
              <View style={styles.circle}>
                  <FontAwesome name="file-movie-o" size={40} color="white" style={{alignSelf:'center'}}/>
                  <Text>Hello</Text>
              </View>
              <View style={styles.circle}>
                  <FontAwesome name="file-movie-o" size={40} color="white" style={{alignSelf:'center'}}/>
                  <Text>Hello</Text>
              </View>
              <View style={styles.circle}>
                  <FontAwesome name="file-movie-o" size={40} color="white" style={{alignSelf:'center'}}/>
                  <Text>Hello</Text>
              </View>
           </View> */}


           <View style={styles.topmenu}>
              
           </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      
    },
    topmenu:{
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignContent:'space-between',
      marginTop:10,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    circle:{
      borderRadius:40,
      backgroundColor:'#F5922F',
      height:80,
      width:80

    }
  });
