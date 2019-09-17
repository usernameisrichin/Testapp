import React from 'react'
import { View, Text, Button } from 'react-native'

import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import DashboardScreen from './Dashboard'
import HistoryScreen from './History'
import FormScreen from './form'
import createStore from './store';
import { persistStore } from 'redux-persist';
import {AsyncStorage } from 'react-native';
import { Provider } from 'react-redux'

const store = createStore();
const persistor = persistStore(store, {
  storage: AsyncStorage,
}, () => {
 console.log('restored')
});



const Tabs = createBottomTabNavigator(
  {
    Home: DashboardScreen,
    History: HistoryScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'History') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return null;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Tabs
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const StacksOverTabs = createStackNavigator(
	{
    Root: DrawerNavigator,
    Form: FormScreen,
  },
)

class App extends React.Component{
	render(){
    return(
      <Provider store={store} persistor={ persistor }>
        <StacksOverTabs/>
      </Provider>
    );
  }
}
export default App;

