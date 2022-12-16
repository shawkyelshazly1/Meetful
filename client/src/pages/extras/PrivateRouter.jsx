import React from "react";
import Login from "../auth/Login";

export default function PrivateRouter({ children }) {
	const authLoading = false;
	const currentUser = "";

	// check if userauth loading to show loading component
	if (authLoading) return <>"Loading..."</>;

	// if not loading and userdoesn't exist direct to login page
	if (!currentUser) return <Login />;
	// else show app components and confirm auth
	else return children;
}
