import { useMutation } from "@apollo/client";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../graphql/user/mutations";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function LoginForm() {
	const navigate = useNavigate();

	// formData state
	const [formData, setFormData] = useState({ email: "", password: "" });

	// current user context values
	const { setCurrentUser } = useContext(CurrentUserContext);

	// login user mutation
	const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
		onError: (error) => {
			toast.error(error.message, {
				position: "bottom-center",
			});
		},
		onCompleted: async ({ loginUser }) => {
			localStorage.setItem("accessToken", loginUser.accessToken);
			setCurrentUser(loginUser.user);
			toast.success("Logged in!");
			navigate("/");
		},
	});

	// state change function
	const stateChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// submit form handler
	const submitFormHandler = (e) => {
		e.preventDefault();
		loginUser({ variables: { ...formData } });
	};

	return (
		<form
			onSubmit={submitFormHandler}
			className="flex flex-col gap-2 w-3/4 lg:w-2/6 xl:w-1/6 md:w-2/5"
		>
			<input
				type="text"
				className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
				placeholder="Email"
				name="email"
				required
				value={formData.email}
				onChange={stateChangeHandler}
			/>
			<input
				type="password"
				className="py-2 px-2 focus:outline-none bg-white focus:border-[#40a798] border-gray-300 border-b-2 font-normal"
				placeholder="Password"
				name="password"
				required
				value={formData.password}
				onChange={stateChangeHandler}
			/>
			<button
				type="submit"
				className="rounded-lg w-full py-2 px-4 bg-[#40a798] text-white mt-6 text-lg font-medium"
			>
				Login
			</button>
			<p className="mt-3 ml-1 text-slate-400 font-normal">
				Don't have an account?{" "}
				<Link to="/register" className="text-[#40a798] font-bold">
					SignUp
				</Link>
			</p>
		</form>
	);
}
