import React from "react";
import { CgMediaLive } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function SpaceCard() {
	return (
		<Link
			to={"/spaces/4569asd87asd21"}
			className="flex flex-col gap-4 rounded-lg bg-[#00a389] text-white pt-2 cursor-pointer"
		>
			<p className="flex flex-row gap-1 items-center font-medium px-3">
				{" "}
				<span className="rounded-full h-3 w-3 bg-red-500"></span> Live
			</p>
			<h1 className="text-3xl font-medium px-3">
				What The World Wants from us?
			</h1>
			<div className="flex flex-row gap-2 items-center px-3">
				<div className="flex flex-row justify-evenly ml-[10px] ">
					<img
						src="/profile_pic.jpg"
						alt=""
						className="w-10 h-10 object-cover rounded-full ml-[-10px]"
					/>
					<img
						src="/profile_pic_2.jpg"
						alt=""
						className="w-10 h-10 object-cover rounded-full ml-[-10px]"
					/>
					<img
						src="/profile_pic.jpg"
						alt=""
						className="w-10 h-10 object-cover rounded-full ml-[-10px]"
					/>
					<img
						src="/profile_pic_2.jpg"
						alt=""
						className="w-10 h-10 object-cover rounded-full ml-[-10px]"
					/>
				</div>
				<p className="text-sm ">450 Listening</p>
			</div>
			<div className="bg-[#148976] px-3 rounded-b-lg flex flex-col gap-2 py-3">
				<div className="flex flex-row gap-2 items-center">
					<img
						src="/profile_pic.jpg"
						alt=""
						className="w-8 h-8 object-cover rounded-full"
					/>
					<h1 className="font-normal text-sm">Shawky Elshazly</h1>
					<p className="text-sm bg-white bg-opacity-30 px-1">Host</p>
				</div>
				<p className="text-sm font-light w-[90%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					repellendus...
				</p>
			</div>
		</Link>
	);
}
