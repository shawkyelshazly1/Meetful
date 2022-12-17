const { NotAuthorizedGraphQLError } = require("../../utils/error"),
	consola = require("consola"),
	jwt = require("jsonwebtoken");
const passport = require("../../utils/passport");

const isAuthenticated = async (context) => {
	const authorization = context.req.headers["authorization"];

	if (!authorization) {
		if (context.req.isAuthenticated()) {
			context.req.payload = context.req.user;
		} else {
			return await NotAuthorizedGraphQLError();
		}
	} else {
		try {
			//extract token
			const accessToken = authorization.split(" ")[1];

			// extract payload
			const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

			// add user to req
			context.req.payload = payload;
		} catch (error) {
			consola.error(error);
			return await NotAuthorizedGraphQLError();
		}
	}
};

module.exports = { isAuthenticated };
