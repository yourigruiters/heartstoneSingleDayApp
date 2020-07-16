export const setAccessToken = (accessToken) => {
	return {
		type: "SET_ACCESS_TOKEN",
		payload: accessToken,
	};
};

export const fetchAccessToken = () => {
	return (dispatch) => {
		return fetch("/accesstoken")
			.then((response) => response.json())
			.then((data) => {
				dispatch(setAccessToken(data.accessToken));
			});
	};
};
