const { NotAuthorizedGraphQLError } = require("../../utils/error"),
	consola = require("consola"),
	jwt = require("jsonwebtoken");

const isAuthenticated = async (context) => {
	const authorization = context.req.headers["authorization"];

	// throw error if header not found
	if (!authorization) return await NotAuthorizedGraphQLError();

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
};

module.exports = { isAuthenticated };
