const userTypes = `
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		profileImage: Media
	}

	type LoginResponse {
		user: User!
		accessToken: String!
	}

	type Query {
		loadUser(userId: ID!): User!
		authUser: User!
	}

	
	type Mutation {
		createUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			confirmPassword: String!
		): User!

		loginUser(email: String!, password: String!): LoginResponse!
		updateUser(firstName: String!, lastName: String!): User!
	}
`;

module.exports = userTypes;
