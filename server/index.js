const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();

const port = 8080;

// Credentials cannot be directly accessed from downloading this application.
const clientDetails = require("./credentials");

app.use(bodyParser.json());

// Receive accessToken from Hearthstone API by using credentials
app.get("/accesstoken", (req, res) => {
  console.log("letsgo");
  const URL = `https://eu.battle.net/oauth/token?client_id=${clientDetails.clientId}&client_secret=${clientDetails.clientSecret}`;

  fetch(URL, {
    body: "grant_type=client_credentials",
    headers: {
      Authorization:
        "Basic YzNjY2Y2ZWNjMmY5NDdhYmI0MTQ5MDFkZGQwYzY1Yjk6MVFWbmw0TDVnUkZ0aU91OHpmcTZKckI0dUNHUm9ERmY=",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
    .then((res) => res.json())
    .then((data) => {
      const accessToken = { accessToken: data.access_token };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(accessToken));
    })
    .catch((error) => {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(error));
    });
});

// Recieve specific carddata by defining filters
app.get("/api/cardsdata/:accessToken", (req, res) => {
  const accessToken = req.params.accessToken;
  const URL = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&page=2&pageSize=100&order=desc&access_token=${accessToken}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(error));
    });
});

// Recieve all Hearthstone metadata
app.get("/api/metadata/:accessToken", (req, res) => {
  const accessToken = req.params.accessToken;
  const URL = `https://eu.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=${accessToken}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(error));
    });
});

// Recieve specific deck of cards
app.get("/api/deck/:id/:accessToken", (req, res) => {
  const accessToken = req.params.accessToken;
  const deckId = req.params.id;
  const URL = `https://eu.api.blizzard.com/hearthstone/deck/${deckId}?locale=en_US&access_token=${accessToken}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(error));
    });
});

// Recieve all Hearthstone cardbacks
app.get("/api/cardbacks/:accessToken", (req, res) => {
  const accessToken = req.params.accessToken;
  const URL = `https://eu.api.blizzard.com/hearthstone/cardbacks?access_token=${accessToken}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify(error));
    });
});

app.listen(port, () =>
  console.log(`Hearthstone app listening at http://localhost:${port}`)
);
