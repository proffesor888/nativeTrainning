import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import User from './src/components/User';
import CityList from './src/components/CityList';
import icon from "./src/assets/Small-world-network-example.png";

export default class App extends React.Component {
  state = {
    cities: [],
    userInput: "",
  };
  changeText = e => {
    this.setState({userInput: e});
  };
  addCity = () => {
    let mas = [...this.state.cities];
    mas.push({key: Math.random(), value: this.state.userInput});
    this.setState({userInput: "", cities: mas});
  };
  deleteCity = (city) => {
    const cityList = this.state.cities.filter(item => item.value != city);
    this.setState({cities: cityList});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <View style={styles.input}>
            <TextInput
            style={{width: 200, padding: 10,}} 
            value={this.state.userInput}
            onChangeText={this.changeText}
            autoCorrect= {false}
            />
            <Button 
              color='#ff1493'
              title="Add city"
              onPress={this.addCity}
            />
          </View>
          <CityList deleteCity={this.deleteCity} icon={icon} style={styles.cities} cities={this.state.cities}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 50,
  },
  user: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //alignItems: 'center'
    marginLeft: 0
  },
  input: {
    //width: 200,
    flexDirection: 'row',
  },

});
