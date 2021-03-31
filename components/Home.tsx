import  React,{useEffect} from 'react';
import { View,StyleSheet,Text } from 'react-native';


export default function Home() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
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
