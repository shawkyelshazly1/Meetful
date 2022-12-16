const { UserModal } = require("../models"),
	consola = require("consola"),
	mongoose = require("mongoose");

// class user respository to interact with user on DB
class UserRepository {
	// create new User
	async CreateUser(userData) {
		try {
			let newUser = await new UserModal(userData);

			newUser = await newUser.save();

			return newUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// find User by ID
	async FindUserById(userId) {
		try {
			const existingUser = await UserModal.findById(
				mongoose.Types.ObjectId(userId),
				{ password: 0 }
			);

			return existingUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// find user by email
	async FindUserByEmail(userEmail) {
		try {
			const existingUser = await UserModal.findOne({ email: userEmail });

			return existingUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update user by ID
	async UpdateUserById(userId, userData) {
		try {
			const updatedUser = await UserModal.findByIdAndUpdate(
				mongoose.Types.ObjectId(userId),
				userData,
				{ new: true }
			);

			return updatedUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = UserRepository;
