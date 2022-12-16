import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
	return (
		<form
			action=""
			className="flex flex-col gap-2 w-3/4 lg:w-2/6 xl:w-1/6 md:w-2/5"
		>
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
