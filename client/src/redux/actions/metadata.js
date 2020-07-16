export const setMetaData = (metadata) => {
	return {
		type: "SET_METADATA",
		payload: metadata,
	};
};

export const fetchMetaData = (accessToken) => {
	console.log("incoming");
	return (dispatch) => {
		console.log("incoming");
		return fetch(`/api/metadata/${accessToken}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				dispatch(setMetaData(data));
			});
	};
};
