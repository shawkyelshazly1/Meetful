const express = require("express"),
	cors = require("cors"),
	consola = require("consola");
const { initDBConnection } = require("./database");

// set env variables config
require("dotenv").config();

// main self invoking function to start the server
(async () => {
	// init express server instance
	const app = express();

	// init DB connection
	initDBConnection();

	// set express middlewares
	app.use(
		cors({
			origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
		})
	);
	app.use(express.json());

	// start express server
	const httpServer = app.listen(process.env.PORT || 5000, () => {
		consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
	});
})();
