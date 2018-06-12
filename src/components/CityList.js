//@flow

import React from "react";
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from "react-native";

type Props = {
	cities: Array<{key: number, value: string}>,
	chooseCity(str:string):void,
	icon: any
};


const CityList = (props: Props) =>  {
	const {cities, chooseCity, icon} = props;
	return (
		<View style={styles.cityContainer}>
		<FlatList
		data={cities}
		keyExtractor={(info) => info.key}
		renderItem={(info) => {
			return (
			<View style={{flexDirection: 'row'}}>
				<Image source={icon} style={{width: 30, height: 30}}/>
				<Text 
				style={styles.cities}
				onPress={() => chooseCity(info.item.value)}
				>
				{info.item.value}
				</Text>
			</View>
			)
		}}
		/>
		</View>
	)
}

const styles = StyleSheet.create({
	cityContainer: {
		flexDirection: 'column',
		flex: 1,
	},
	cities: {
		flex: 1,
		//flexDirection: 'row',
		margin: 5,
		fontSize: 20,
		backgroundColor: 'grey',
	}
})

export default CityList;