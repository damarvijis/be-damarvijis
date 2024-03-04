const express = require('express');
const app = express();

app.get("/", (_req, res) => {
	res.status(200).write("Damar app BE App VPS!")
	res.end()
})

module.exports = app;