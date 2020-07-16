export const setMetaData = (metadata) => {
	return {
		type: "SET_METADATA",
		payload: metadata,
	};
};

export const fetchMetaData = (accessToken) => {
	return (dispatch) => {
		return fetch(`/api/metadata/${accessToken}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(setMetaData(data));
			});
	};
};
