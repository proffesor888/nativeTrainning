//@flow

import React from 'react';
import { Modal, View, Button, Text, Image, StyleSheet} from 'react-native';

type Props = {
	deleteCity(str:string): void,
	show:string|any,
	image: any,
	close():void,
};

const ModalScreen = (props: Props) => {
	const {show, close, deleteCity, image} = props;
	const renderText = show !== null ? <Text>{show}</Text> : null;
	return (
		<Modal 
		visible={show != null}
		animationType="slide"
		onRequestClose={close}>
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image}/>
			</View>
				{renderText}
			<View>
				<Button 
				title="delete"
				onPress={() => deleteCity(show)} />
				<Button 
				title="close"
				onPress={close}
				/>
			</View>
		</Modal>
	)
};

const styles = StyleSheet.create({
	imageContainer: {
		flexDirection: 'row',
		//flex: 1,
		justifyContent: 'center',
	},
	image: {
		//flex: 1,
		//flexDirection: 'row',
		//width: 100,
		height: 90,
		marginTop: 90,
	}
})

export default ModalScreen;