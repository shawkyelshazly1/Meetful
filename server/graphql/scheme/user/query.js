const { isAuthenticated } = require("../../middlewares/auth"),
	{ UserService } = require("../../../services");

const userService = new UserService();

const userQuery = {
	// loadUser
	loadUser: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await userService.getUser(userId);
	},

	// authUser
	authUser: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await userService.getUser(userId);
	},
};

module.exports = userQuery;
