const initialState = {
	favorites: [],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		default:
			return state;
	}
};

const FavoriteHandler = () => {};
