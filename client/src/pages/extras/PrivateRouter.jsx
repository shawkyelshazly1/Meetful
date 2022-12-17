import React, { useContext } from "react";
import LoadingComponent from "../../components/extras/LoadingComponent";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Login from "../auth/Login";

export default function PrivateRouter({ children }) {
	const { currentUser, isAuthLoading } = useContext(CurrentUserContext);

	// check if userauth loading to show loading component
	if (isAuthLoading) return <LoadingComponent />;

	// if not loading and userdoesn't exist direct to login page
	if (!currentUser && !isAuthLoading) return <Login />;
	// else show app components and confirm auth
	else return children;
}
