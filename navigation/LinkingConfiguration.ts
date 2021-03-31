import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          NewsList: {
            screens: {
              NewsListScreen: 'NewsList',
            },
          },
          Location: {
            screens: {
              LocationScreen: 'Location',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'Profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
