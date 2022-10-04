import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
  
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize"; 
import * as Font from "expo-font";
import { Header } from 'react-native-elements';



export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>

        <Header
          backgroundColor={'#5C39FF'}
          centerComponent={{
            text: 'Homework Reminder',
            style: { color: '#fff', fontSize: RFValue(30) },
          }}
        />

        <View>
      <TouchableOpacity style={styles.routeCard1} onPress={() => 
        this.props.navigation.navigate("Input")}>

        <Text style={styles.text1Style}>Input</Text>

      </TouchableOpacity>
        </View>
        <View>
      <TouchableOpacity style={styles.routeCard2} onPress={() =>
        this.props.navigation.navigate("Schedule")}>

        <Text style={styles.text1Style}>Schedule</Text>

      </TouchableOpacity>
      </View>
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
    margin: 50,
    padding: 50
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
    margin: 50,
    padding: 50
},

text1Style: {
  fontSize: RFValue(20),
},

})