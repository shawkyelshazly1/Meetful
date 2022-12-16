const { isAuthenticated } = require("../../middlewares/auth"),
	{ UserService } = require("../../../services");

const userService = new UserService();

const userMutation = {
	// register user
	createUser: async (_, args) => {
		const { firstName, lastName, email, password, confirmPassword } = args;
		return await userService.registerUser({
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		});
	},

	// login user
	loginUser: async (_, { email, password }) => {
		return await userService.loginUser({ email, password });
	},

	// update user
	updateUser: async (_, userData, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await userService.updateUser(userId, userData);
	},
};

module.exports = userMutation;
