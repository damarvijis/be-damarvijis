const express = require('express');
const app = express();

console.log("TEST WORKFLOW")

app.get("/", (_req, res) => {
	res.status(200).write("Damar BE App VPS!")
	res.end()
})

module.exports = app;