import React, { useState } from "react";
import { FaMicrophoneAlt, FaVideo } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function SideBarIcons() {
	// determine  the path
	const location = useLocation();
	let target = location.pathname.split("/")[1];

	return (
		<div className="flex flex-row md:flex-col gap-4 items-center justify-center w-full">
			<Link
				to="/"
				className={`w-full flex items-center justify-center md:border-r-[5px] ${
					target === "" ? " border-[#00a389]" : " border-transparent"
				}`}
			>
				<AiFillHome
					className={`${
						target === "" ? "bg-[#e0f4f1] text-[#00a389]" : "text-[#bec4cd]"
					} py-4 px-4 rounded-xl cursor-pointer`}
					size={60}
				/>
			</Link>
			<Link
				to="/spaces"
				className={`w-full flex items-center justify-center md:border-r-[5px] ${
					target === "spaces" ? " border-[#00a389]" : " border-transparent"
				}`}
			>
				<FaMicrophoneAlt
					className={`${
						target === "spaces"
							? "bg-[#e0f4f1] text-[#00a389]"
							: "text-[#bec4cd]"
					} py-4 px-4 rounded-xl cursor-pointer`}
					size={60}
				/>
			</Link>
			<Link
				to="/video"
				className={`w-full flex items-center justify-center md:border-r-[5px] ${
					target === "video" ? " border-[#00a389]" : " border-transparent"
				}`}
			>
				<FaVideo
					className={`${
						target === "video"
							? "bg-[#e0f4f1] text-[#00a389]"
							: " text-[#bec4cd]"
					} py-4 px-4 rounded-xl cursor-pointer`}
					size={60}
				/>
			</Link>
		</div>
	);
}
