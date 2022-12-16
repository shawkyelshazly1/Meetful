const { UserRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error");
const consola = require("consola");
const { hashPassword, generateAccessToken } = require("../utils/auth");
const bcryptjs = require("bcryptjs");

//classs to interact with user repository on DB
class UserService {
	constructor() {
		this.repository = new UserRepository();
	}

	// register user
	async registerUser(userData) {
		try {
			const { firstName, lastName, email, password, confirmPassword } =
				userData;

			// check if all data fields exists
			if (!firstName || !lastName || !email || !password || !confirmPassword)
				return await BadInputGraphQLError("User Data is required!");

			// check passwords match
			if (password !== confirmPassword)
				return await BadInputGraphQLError(
					"Password & Confirm Password doesn't match."
				);

			// check if user registered already with email
			const existingUser = await this.repository.FindUserByEmail(
				email.toLowerCase()
			);
			if (existingUser)
				return await BadInputGraphQLError("Email registered already.");

			// create new user if doesn't exist
			const newUser = await this.repository.CreateUser({
				firstName: firstName.toLowerCase(),
				lastName: lastName.toLowerCase(),
				email: email.toLowerCase(),
				password: await hashPassword(password),
			});

			return newUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// login user
	async loginUser(userData) {
		try {
			const { email, password } = userData;

			// validate data fields exist
			if (!email || !password)
				return await BadInputGraphQLError("Email & Password are required.");

			// check if email registered
			const existingUser = await this.repository.FindUserByEmail(
				email.toLowerCase()
			);
			if (!existingUser) return await BadInputGraphQLError("Email not found!");

			// validate password if user exists
			if (!(await bcryptjs.compare(password, existingUser.password)))
				return await BadInputGraphQLError("Incorrect Password!");

			// get user and create token
			const user = await this.repository.FindUserById(existingUser._id);

			// generate the access token
			const accessToken = await generateAccessToken(user);

			return { user, accessToken };
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user
	async getUser(userId) {
		try {
			// check valid params
			if (!userId) return await BadInputGraphQLError("User id is required.");

			// check if user exists
			const existingUser = await this.repository.FindUserById(userId);
			if (!existingUser || existingUser.error)
				return await BadInputGraphQLError("User not found!");
			else return existingUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// update user
	async updateUser(userId, userData) {
		try {
			// check valid params
			if (!userId || !userData)
				return await BadInputGraphQLError("User id & data are required.");

			// check if user exists
			const existingUser = await this.repository.FindUserById(userId);
			if (!existingUser || existingUser.error)
				return await BadInputGraphQLError("User not found!");

			// check if same authenticated user to allow editing
			if (String(existingUser._id) !== String(userId))
				return await NotAuthorizedGraphQLError("Not Authorized!");

			// #TODO: add option to update profile image here

			// update user and save in DB
			const updatedUser = await this.repository.UpdateUserById(
				userId,
				userData
			);

			return updatedUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = UserService;
