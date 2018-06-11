import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class User extends React.Component {
	state = {userInput: ""};
	
	render() {
		return (
			<View style={{flexDirection: 'row'}}>
				<TextInput
				style={{width: 200, padding: 10,}} 
				value={this.state.userInput}
				onChangeText={this.changeText}
				autoCorrect= {false}
				/>
				<Button 
          color='#ff1493'
          title="Add city"
          onPress={this.props.action(this.state.userInput)}
        />
			</View>
		)	
	}
}

