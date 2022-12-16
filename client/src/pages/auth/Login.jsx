import React from "react";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
	return (
		<div className="flex w-full items-center flex-col gap-8 justify-center">
			<div className="flex flex-col gap-2 items-center justify-center">
				<h1 className="text-8xl font-medium font-Lobster text-[#40a798]">
					MeetFull<span className=" text-slate-300  text-9xl">.</span>
				</h1>
				<p className="font-medium text-slate-300 text-lg ">
					We Deliver Happiness
				</p>
			</div>
			<LoginForm />
		</div>
	);
}
