import { gql } from "@apollo/client";

const AUTH_USER = gql`
	query authUser {
		authUser {
			id
			email
			firstName
			lastName
			profileImage {
				url
			}
		}
	}
`;

export { AUTH_USER };
