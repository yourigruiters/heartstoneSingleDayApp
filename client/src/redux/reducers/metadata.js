export const metadataReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_METADATA":
      return action.payload;
    default:
      return state;
  }
};
