const { userTypes, userQueries, userMutations } = require("./scheme/user"),
	{ mediaTypes } = require("./scheme/media"),
	{ dateScalar } = require("./scheme/customScalars/dateScalar");

const typeDefs = `
	scalar Date

	${userTypes}
	${mediaTypes}
`;

const resolvers = {
	Query: {
		...userQueries,
	},
	Mutation: { ...userMutations },
	Date: dateScalar,
};

module.exports = { typeDefs, resolvers };
