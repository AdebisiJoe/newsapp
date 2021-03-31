import { Ionicons,MaterialIcons,FontAwesome5  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../components/Home';
import NewsList from '../components/NewsList';
import Profile from '../components/Profile';
import Location from '../components/Location';
import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList,TabFourParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

 

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon2 name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="NewsList"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-newspaper-sharp" color={color} />,
        }}
      />
    

      <BottomTab.Screen
        name="Location"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="location-sharp" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon3 name="user-alt" color={color} />,
        }}
      />

   </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon2(props: { name: React.ComponentProps<typeof MaterialIcons>['name']; color: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon3(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}:any) {

  const goBack = (): void => {
    navigation && navigation.goBack();
    
  };
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NewsListScreen"
        component={NewsList}
        options={{ 
          headerTitle: 'NewsList', 
          headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => {
              goBack()
            }}
          /> )
        }}
      />
    </TabTwoStack.Navigator>
  );
}


const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="LocationScreen"
        component={Location}
        options={{ headerTitle: 'Location' }}
      />
    </TabThreeStack.Navigator>
  );
}


const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerTitle: 'Profile' }}
      />
    </TabFourStack.Navigator>
  );
}
