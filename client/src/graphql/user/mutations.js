import { gql } from "@apollo/client";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			user {
				email
				id
				firstName
				lastName
				profileImage {
					url
				}
			}
			accessToken
		}
	}
`;

const REGISTER_USER = gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		createUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			email
			id
			firstName
			lastName
			profileImage {
				url
			}
		}
	}
`;

export { LOGIN_USER, REGISTER_USER };
