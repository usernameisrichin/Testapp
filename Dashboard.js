import React,{Component} from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions, 
	     TouchableOpacity, ActivityIndicator , SafeAreaView} from 'react-native';

var {height, width} = Dimensions.get('window');

import { createStackNavigator, createAppContainer } from 'react-navigation';


class DashboardScreen extends React.Component{
 static navigationOptions = {
    title: 'Dashboard',
 };
  	constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
  	return(
  		<SafeAreaView style={{flex: 1}}>
  			<View style={{ flex: 1, flexDirection: 'column',  justifyContent: 'center'}}>
  				<TouchableOpacity style={ styles.sportview1} onPress={() => this.props.navigation.navigate('Form',{name: 'Water'})}>
                <Text  style={styles.gamebtnname} >Water Consumption </Text>
                <Text style={ styles.boldsubtext } >No of Glass :{} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.sportview2} onPress={() => this.props.navigation.navigate('Form', {name: 'Workout'})}>
                <Text  style={styles.gamebtnname} >Work Out/ Exercise </Text>
                <Text style={ styles.boldsubtext } >{} mnts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.sportview3} onPress={() => this.props.navigation.navigate('Form',{name: 'Sleep'})}>
                <Text  style={styles.gamebtnname} >Sleep Tracker</Text>
                <Text style={ styles.boldsubtext } >{} hrs</Text>
                </TouchableOpacity>
  			</View>
  		</SafeAreaView>

  		)
  }
}

const styles=StyleSheet.create({
    sportview1: {
      padding: 1, 
      borderColor: '#2ECC71', 
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#2ECC71', 
      width: width/1.1, 
      height: 80,
      justifyContent: 'center',
      marginLeft: 10, 
      marginRight: 10,
  },
  sportview2: {
      padding: 1, 
      borderColor: '#ff8a65', 
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#ff8a65', 
      width: width/1.1, 
      height: 80,
      justifyContent: 'center', 
      marginRight: 10,
      marginLeft: 10,
  },
  sportview3: {
      padding: 1, 
      borderColor: '#3498db', 
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#3498db', 
      width: width/1.1, 
      height: 80,
      justifyContent: 'center',
      marginLeft: 10, 
      marginRight: 10,
  },
    boldsubtext:{
        color:'#FFFFFF', 
        fontSize: 10,
        width: 70,
        lineHeight: 8,
        padding: 4,
        margin:5,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Din Condensed',
        textAlign: 'center',

    },
    gamebtnname: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: 17,
      fontFamily: 'Din Condensed',
      color: '#FFFFFF',
      marginTop: 10
  },

   
})
