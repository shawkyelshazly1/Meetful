import { useApolloClient, useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { AUTH_USER } from "../graphql/user/queries";

// create user context
export const CurrentUserContext = createContext(null);

// create currentuser provider
export const CurrentUserProvider = ({ children }) => {
	// initial states
	const [currentUser, setCurrentUser] = useState("");
	const [isAuthLoading, setIsAuthLoading] = useState(true);

	// apollo client instance
	const client = useApolloClient();

	const { refetch } = useQuery(AUTH_USER, {
		onError: (error) => {
			logoutUser();
		},
		onCompleted: async ({ authUser }) => {
			setIsAuthLoading(false);
			setCurrentUser(authUser);
		},
	});

	// use effect with no dpendencies to run on every page refresh to auth and fetch the current user if exists
	useEffect(() => {
		checkAuth();
	}, []);

	// function to check if user authenticated
	const checkAuth = () => {
		// load access token from local storage
		const token = localStorage.getItem("accessToken");

		if (token && token !== "") {
			refetch();
		} else {
			// if no token or invalid
			setIsAuthLoading(false);
			setCurrentUser(null);
		}
	};

	// logout function
	const logoutUser = () => {
		// remove token from localstorage
		localStorage.setItem("accessToken", "");
		setIsAuthLoading(false);
		setCurrentUser(null);
		client.clearStore();
	};

	// statevalues
	const stateValues = {
		currentUser,
		isAuthLoading,
		setCurrentUser,
		logoutUser,
		checkAuth,
	};

	return (
		<CurrentUserContext.Provider value={stateValues}>
			{children}
		</CurrentUserContext.Provider>
	);
};
