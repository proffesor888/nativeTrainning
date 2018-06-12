//@flow

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import User from './src/components/User';
import CityList from './src/components/CityList';
import icon from "./src/assets/Small-world-network-example.png";
import ModalScreen from "./src/components/ModalScreen";

type Props = { /* ... */ };

type State = {
  cities: Array<{key: number, value: string}>,
  userInput:any,
  selectedItem:string|null,
};

export default class App extends Component<Props, State> {
  state = {
    cities: [],
    userInput: "",
    selectedItem: null,
  };
  changeText = (e: KeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({userInput: e});
  };
  addCity = (): void => {
    let mas = [...this.state.cities];
    mas.push({key: Math.random(), value: this.state.userInput});
    this.setState({userInput: "", cities: mas});
  };
  chooseCity = (city:string): void => {
    this.setState({selectedItem: city});
    //const cityList = this.state.cities.filter(item => item.value != city);
    //this.setState({cities: cityList});
  }
  closeModal = (): void => {
    this.setState({selectedItem: null});
  }
  deleteCity = (city:string): void => {
    const cityList = this.state.cities.filter(item => item.value != city);
    this.setState({cities: cityList, selectedItem: null});
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
          <CityList chooseCity={this.chooseCity} icon={icon} style={styles.cities} cities={this.state.cities}/>
          <ModalScreen image={icon} deleteCity={this.deleteCity} close={this.closeModal} show={this.state.selectedItem}/>
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
