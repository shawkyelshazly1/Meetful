import React from "react";
import { RiGoogleFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
export default function ConnectSocial() {
	return (
		<div className="flex flex-col gap-3 w-3/4 lg:w-2/6 xl:w-1/6 md:w-2/5">
			<div className="flex flex-row gap-2 items-center">
				<hr className="flex-1 border-[1px]" />
				<p className="font-medium text-slate-400">OR</p>
				<hr className="flex-1 border-[1px]" />
			</div>
			<div className="flex flex-row gap-4 px-2 items-center justify-center">
				<RiGoogleFill
					onClick={() => {
						window.open("http://localhost:5000/auth/google", "_self");
					}}
					className="rounded-full p-2 border-2 border-red-400 text-red-400 cursor-pointer"
					size={50}
				/>
				<RiFacebookFill
					onClick={() => {
						window.open("http://localhost:5000/auth/facebook", "_self");
					}}
					className="rounded-full p-2 border-2 border-blue-500 text-blue-500 cursor-pointer"
					size={50}
				/>
				<RiTwitterFill
					className="rounded-full p-2 border-2 border-cyan-400 text-cyan-400 cursor-pointer"
					size={50}
				/>
			</div>
		</div>
	);
}
