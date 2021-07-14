const initialState = {};

export const metadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_METADATA":
      return action.payload;
    default:
      return state;
  }
};
