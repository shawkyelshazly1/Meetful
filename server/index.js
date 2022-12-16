const express = require("express"),
	cors = require("cors"),
	consola = require("consola"),
	{ initDBConnection } = require("./database"),
	{ ApolloServer } = require("@apollo/server"),
	{ expressMiddleware } = require("@apollo/server/express4"),
	{ resolvers, typeDefs } = require("./graphql");

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

	// setup Apollo Server
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	// start apollo server
	await server.start();

	// set graphql gateway
	app.use(
		"/graphql",
		expressMiddleware(server, {
			context: async ({ req, res }) => ({ req, res }),
		})
	);

	// start express server
	const httpServer = app.listen(process.env.PORT || 5000, () => {
		consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
	});
})();
