import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";

export default function Navbar() {
	return (
		<div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-0">
			<h1 className="font-semibold text-slate-400 text-3xl">EXPLORE SPACES</h1>
			<button className="text-lg font-medium flex flex-row gap-2 items-center justify-center rounded-full text-white bg-[#00a389] py-2 px-4">
				<FaMicrophoneAlt size={22} /> Create New Space
			</button>
		</div>
	);
}
