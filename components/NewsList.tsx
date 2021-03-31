import React,{useEffect} from 'react';
import { View,StyleSheet,ScrollView,Text,TextInput,FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import NewsItem from './NewsItem';

import news from '../api/news';

export default function NewsList() {

    const [newsList, setnewsList] = React.useState([]);
    const [text, onChangeText] = React.useState("");

    useEffect(() => {

        news.getNewsList().then((data)=>{
          console.log(data.data!.data);
          setnewsList(data.data!.data);
          
        });
   
       
       return () => {
         
       }
     }, [])

    

      const renderNewsItem = ({item}:any) => {
        
        return (
        
            <NewsItem   item={item}  />
          );
        };

       
          
        
          
         

   

    return (

        <ScrollView style={styles.container}>
            <TextInput 
             style={styles.input}
             onChangeText={onChangeText}
             placeholder="Search"
             value={text}
             />

            <FlatList
                data={newsList}
                renderItem={renderNewsItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
      },
  });


 
