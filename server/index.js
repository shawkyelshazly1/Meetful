const express = require("express"),
	cors = require("cors"),
	consola = require("consola"),
	{ initDBConnection } = require("./database"),
	{ ApolloServer } = require("@apollo/server"),
	{ expressMiddleware } = require("@apollo/server/express4"),
	{ resolvers, typeDefs } = require("./graphql"),
	cookieParser = require("cookie-parser"),
	session = require("express-session"),
	passport = require("passport"),
	googleAuth = require("./routes/googleAuth"),
	facebookAuth = require("./routes/facebookAuth"),
	authRoutes = require("./routes/auth"),
	twitterAuth = require("./routes/twitterAuth");

// set env variables config
require("dotenv").config();

// main self invoking function to start the server
(async () => {
	// init express server instance
	const app = express();

	// init DB connection
	initDBConnection();

	// set express middlewares
	app.use(express.json());
	app.use(
		cors({
			origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
			credentials: true,
		})
	);
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));

	app.use(
		session({
			secret: process.env.APP_SECRET,
			saveUninitialized: true,
			resave: true,
		})
	);

	app.use(passport.initialize());
	app.use(passport.session());

	// setting passport config
	require("./utils/passport")(passport);

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

	// social login routes
	googleAuth(app);
	facebookAuth(app);
	twitterAuth(app);
	authRoutes(app);

	// start express server
	const httpServer = app.listen(process.env.PORT || 5000, () => {
		consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
	});
})();
