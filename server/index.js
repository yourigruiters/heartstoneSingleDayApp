const express = require("express");
const fetch = require("node-fetch");

const app = express();

const port = 8080;

app.get("/setup", (req, res) => {
	fetch("https://swapi.dev/api/people/1/")
		.then((res) => res.json())
		.then((data) => res.send(data))
		.catch((e) => console.log(e));
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
