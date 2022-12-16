import React from "react";
import { BsMicMuteFill, BsSoundwave } from "react-icons/bs";

export default function SpeakerCard() {
	return (
		<div className="w-28 h-28  relative flex flex-col items-center gap-2">
			<img
				src="/profile_pic_2.jpg"
				alt=""
				className=" w-28 h-28 object-cover border-4 rounded-full border-[#00a389]"
			/>
			<BsMicMuteFill
				className="absolute right-0 bottom-2 text-red-500"
				size={35}
			/>
			<div className="flex flex-row gap-2 items-center">
				<BsSoundwave className="text-[#00a389] font-bold" size={20}/>
				Speaking
			</div>
		</div>
	);
}
