import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
	return (
		<form
			action=""
			className="flex flex-col gap-2 min-w-3/4 lg:min-w-2/6 xl:min-w-1/6 md:min-w-2/5"
		>
			<div className="flex flex-row gap-3 items-center justify-center">
				<input
					type="text"
					className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
					placeholder="First Name"
					name="firstName"
				/>
				<input
					type="text"
					className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
					placeholder="Last Name"
					name="lastName"
				/>
			</div>
			<input
				type="text"
				className=" py-2 px-2 focus:outline-none focus:border-[#40a798] bg-white border-gray-300   border-b-2 font-normal"
				placeholder="Email"
				name="email"
			/>
			<input
				type="password"
				className="py-2 px-2 focus:outline-none bg-white focus:border-[#40a798] border-gray-300 border-b-2 font-normal"
				placeholder="Password"
				name="password"
			/>
			<input
				type="password"
				className="py-2 px-2 focus:outline-none bg-white focus:border-[#40a798] border-gray-300 border-b-2 font-normal"
				placeholder="Confirm Password"
				name="confirmPassword"
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
