import React,{Component} from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions, TextInput,TouchableOpacity, ActivityIndicator , SafeAreaView} from 'react-native';

var {height, width} = Dimensions.get('window');


class DashboardScreen extends React.Component{
 static navigationOptions = {
    title: 'Dashboard',
 };
  	constructor(props){
    super(props);
    this.state={date: '',
                value: '',
                key: props.navigation.state.params.name};
    this.onSave = this.onSave.bind(this);
  }

  onSave(){

  }

  render(){
  	return(
  		<SafeAreaView style={{flex: 1}}>
  			<View style={{ flex: 1, flexDirection: 'column',  justifyContent: 'center'}}>
        <View>
          <TextInput
              value={this.state.date}
              placeholder="Enter Date"
              keyboardType="default"
              underlineColorAndroid="#FFFFFF"
              onChangeText={(date) => this.setState({date})}
              />
  			</View>
        <View>
          <TextInput
              value={this.state.value}
              placeholder="Enter daily"
              keyboardType="default"
              underlineColorAndroid="#FFFFFF"
              onChangeText={(value) => this.setState({value})}
              />

        </View>	
        <TouchableOpacity
         style={styles.button}
         onPress={this.onSave}
       >
         <Text> Save</Text>
       </TouchableOpacity>
  			</View>
  		</SafeAreaView>

  		)
  }
}

const styles=StyleSheet.create({

  button: {
    alignItems: 'center',
    backgroundColor: '#439a7b',
    padding: 10
  },
    
})
