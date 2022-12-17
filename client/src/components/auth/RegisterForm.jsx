import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { REGISTER_USER } from "../../graphql/user/mutations";

export default function RegisterForm() {
	const navigate = useNavigate();

	// formData state
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	// login user mutation
	const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER, {
		onError: (error) => {
			toast.error(error.message, {
				position: "bottom-center",
			});
		},
		onCompleted: async ({ registerUser }) => {
			toast.success("Registered Successfully");
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
		registerUser({ variables: { ...formData } });
	};
	return (
		<form
			onSubmit={submitFormHandler}
			className="flex flex-col gap-2 min-w-3/4 lg:min-w-2/6 xl:min-w-1/6 md:min-w-2/5"
		>
			<div className="flex flex-row gap-3 items-center justify-center">
				<input
					type="text"
					className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
					placeholder="First Name"
					name="firstName"
					required
					value={formData.firstName}
					onChange={stateChangeHandler}
				/>
				<input
					type="text"
					className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
					placeholder="Last Name"
					name="lastName"
					required
					value={formData.lastName}
					onChange={stateChangeHandler}
				/>
			</div>
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
			<input
				type="password"
				className="py-2 px-2 focus:outline-none bg-white focus:border-[#40a798] border-gray-300 border-b-2 font-normal"
				placeholder="Confirm Password"
				name="confirmPassword"
				required
				value={formData.confirmPassword}
				onChange={stateChangeHandler}
			/>
			<button
				type="submit"
				className="rounded-lg w-full py-2 px-4 bg-[#40a798] text-white mt-6 text-lg font-medium"
			>
				Register
			</button>
			<p className="mt-3 ml-1 text-slate-400 font-normal">
				Already have an account?{" "}
				<Link to="/" className="text-[#40a798] font-bold">
					Login
				</Link>
			</p>
		</form>
	);
}
