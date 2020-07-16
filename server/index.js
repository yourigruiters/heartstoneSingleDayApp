const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();

const port = 8080;

const clientDetails = require("./credentials");

app.use(bodyParser.json());

// Get access token
app.get("/accesstoken", (req, res) => {
	const URL = `https://eu.battle.net/oauth/token?client_id=${clientDetails.clientId}&client_secret=${clientDetails.clientSecret}`;

	fetch(URL, {
		body: "grant_type=client_credentials",
		headers: {
			Authorization:
				"Basic YzNjY2Y2ZWNjMmY5NDdhYmI0MTQ5MDFkZGQwYzY1Yjk6MVFWbmw0TDVnUkZ0aU91OHpmcTZKckI0dUNHUm9ERmY=",
			"Content-Type": "application/x-www-form-urlencoded",
		},
		method: "POST",
	})
		.then((res) => res.json())
		.then((data) => {
			const accessToken = { accessToken: data.access_token };
			res.send(accessToken);
		})
		.catch((e) => console.log("ERROR IN BACKEND", e));
});

// ALL DATA - Can be more specific
app.get("/api/cardsdata", (req, res) => {
	const accessToken = req.body.accessToken;
	const URL = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&order=desc&access_token=${accessToken}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log("Data from API", data);
			res.send(data);
		})
		.catch((e) => console.log("ERROR IN BACKEND", e));
});

// ALL DATA
app.get("/api/metadata/:accessToken", (req, res) => {
	console.log(req.params);
	const accessToken = req.params.accessToken;
	const URL = `https://eu.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=${accessToken}`;
	console.log("Hallo");
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log("METADATA FROM BACKEND", data);
			res.send(data);
		})
		.catch((e) => console.log("ERROR IN BACKEND", e));
});

// SPECIFY DECK CODE
app.get("/api/deck/:id/:accessToken", (req, res) => {
	console.log("PARAMS", req.params);
	const accessToken = req.params.accessToken;
	const deckId = req.params.id;
	const URL = `https://eu.api.blizzard.com/hearthstone/deck/${deckId}?locale=en_US&access_token=${accessToken}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			res.send(data);
		})
		.catch((e) => console.log("ERROR IN BACKEND", e));
});

// carcbacks - can specify one
app.get("/api/cardbacks", (req, res) => {
	const accessToken = req.body.accessToken;
	const URL = `https://eu.api.blizzard.com/hearthstone/cardbacks?access_token=${accessToken}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log("Data from API", data);
			res.send(data);
		})
		.catch((e) => console.log("ERROR IN BACKEND", e));
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
