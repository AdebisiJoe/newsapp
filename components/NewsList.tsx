import React,{useEffect} from 'react';
import { View,StyleSheet,ScrollView,Text } from 'react-native';
import NewsItem from './NewsItem';

import news from '../api/news';
export default function NewsList() {

    const [newsList, setnewsList] = React.useState([]);

    useEffect(() => {

        news.getNewsList().then((data)=>{
          console.log(data.data!.data);
          setnewsList(data.data!.data);
          
        });
   
       
       return () => {
         
       }
     }, [])

     const renderNewsList=()=> {
        return newsList.map((newsitem:any) =>
     

           <NewsItem key={newsitem.title}  item={newsitem}  />
        
        );
      }
    return (
        <ScrollView>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
