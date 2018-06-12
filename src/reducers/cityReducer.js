import {ADD_CITY, DELETE_CITY} from '../constants/ActionTypes';

const initialState = {
	cities: []
};

export default (state=initialState, action) {
	switch (action.type) {
		case ADD_CITY: {
			const newMas = [...state.cities, action.payload];
			return {
				...state, cities: newMas
			}
		};
		case DELETE_CITY: {
			const newMas = state.cities.filter(item => item.value !== action.payload);
			return {
				...state, cities: newMas
			}
		};
		default: {
			return state
		};
	}
}