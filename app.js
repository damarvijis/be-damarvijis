const express = require('express');
const app = express();

app.get("/", (_req, res) => {
	res.status(200).write("Damar BE App VPS!")
	res.end()
})

app.get("/test", (_req, res) => {
	res.status(200).write("Damar BE TEST!")
	res.end()
})

module.exports = app;