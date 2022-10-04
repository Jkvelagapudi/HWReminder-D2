import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput
  
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize"; 
import * as Font from "expo-font";





export default class InputScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
         <TextInput
        style={styles.inputText}
        placeholder="Assignment Name"
        keyboardType="numeric"
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5C39',
    
  },
  routeCard1: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: '#39DCFF',
    margin: 50
},
  routeCard2: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: '#79FF39',
    margin: 50
},

text1Style: {
  fontSize: RFValue(20),
},

inputText: {
  borderRadius: 10,
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
}

})