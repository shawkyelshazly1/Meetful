import React from "react";
import SideBarIcons from "./SideBarIcons";

export default function SideBar() {
	return (
		<div className="flex flex-col justify-between items-center  py-4 h-[100vh] xl:min-w-[5%] lg:min-w-[8%] md:min-w-[10%] min-w-[15%]">
			<h1 className="text-xl font-semibold font-Lobster text-[#40a798] ">
				MeetFull<span className=" text-slate-300 font-bold text-2xl">.</span>
			</h1>
			<SideBarIcons />
			<img
				src="/profile_pic.jpg"
				alt=""
				className="w-12 h-12 rounded-full object-cover"
			/>
		</div>
	);
}
