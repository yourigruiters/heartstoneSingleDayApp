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
			console.log("Data from API", data);
			res.json(data.access_token);
		})
		.catch((e) => console.log(e));
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
		.catch((e) => console.log(e));
});

// ALL DATA
app.get("/api/metadeta", (req, res) => {
	const accessToken = req.body.accessToken;
	const URL = `https://eu.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=${accessToken}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log("Data from API", data);
			res.send(data);
		})
		.catch((e) => console.log(e));
});

// SPECIFY DECK CODE
app.get("/api/deck", (req, res) => {
	const accessToken = req.body.accessToken;
	const URL = `https://eu.api.blizzard.com/hearthstone/deck/AAECAQcG%2Bwyd8AKS%2BAKggAOblAPanQMMS6IE%2Fweb8wLR9QKD%2BwKe%2BwKz%2FAL1gAOXlAOalAOSnwMA?locale=en_US&access_token=${accessToken}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log("Data from API", data);
			res.send(data);
		})
		.catch((e) => console.log(e));
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
		.catch((e) => console.log(e));
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
