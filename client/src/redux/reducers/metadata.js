const initialState = {};

export const metadataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_METADATA":
			const newState = action.payload;
			return newState;
		default:
			return state;
	}
};
