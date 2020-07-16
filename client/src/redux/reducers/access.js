const initialState = "";

export const accessReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ACCESS_TOKEN":
			return action.payload;
		default:
			return state;
	}
};
