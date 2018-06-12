//@flow
import {ADD_CITY, DELETE_CITY} from "../constants/ActionTypes";


export const addCity = (payload) => {
	return {
		type: ADD_CITY,
		payload
	}
};

export const deleteCity = (payload) => {
	return {
		type: DELETE_CITY,
		payload
	}
};
