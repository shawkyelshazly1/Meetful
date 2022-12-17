import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ListenerCard from "./ListenerCard";
import SpeakerCard from "./SpeakerCard";

export default function Spaces() {
	return (
		<div className=" w-full h-[96vh] md:h-[100vh] rounded-3xl px-4 py-4 border-l-2 border-[#eaebed] flex flex-col gap-6">
			<div className="flex flex-row gap-4 items-center">
				<IoIosArrowBack
					className="bg-[#f0f1f3] text-[#bec4cd] py-1 px-1  rounded-lg"
					size={40}
				/>
				<h1 className="text-2xl font-medium">What The World Wants From Us?</h1>
			</div>
			<hr className="border-[1px]" />
			<div className="flex flex-col flex-1 gap-4 justify-between">
				<h1 className="font-semibold text-slate-400 text-xl">SPEAKERS</h1>
				<div className="h-[35vh]  grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-14 md:grid-cols-5 md:gap-14 lg:grid-cols-7 lg:gap-14 xl:grid-cols-10 px-4 overflow-y-auto">
					<SpeakerCard />
				</div>
				<hr />
				<h1 className="font-semibold text-slate-400 text-xl">LISTENERS</h1>
				<div className="h-[35vh]  grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-14 md:grid-cols-5 md:gap-14 lg:grid-cols-7 lg:gap-14 xl:grid-cols-10 px-4 overflow-y-auto">
					<ListenerCard />
				</div>
			</div>
		</div>
	);
}
