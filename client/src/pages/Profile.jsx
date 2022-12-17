import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import S from "underscore.string";

export default function Profile() {
	const { currentUser } = useContext(CurrentUserContext);
	return (
		<div className="flex flex-col gap-4 w-full h-[96vh] md:h-[100vh] rounded-3xl px-6 py-6 border-l-2 border-[#eaebed]">
			<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
				<img
					src={currentUser.profileImage.url}
					alt=""
					className="w-52 aspect-square rounded-full border-4 border-[#40a798]"
				/>
				<h1 className="text-5xl md:text-6xl text-slate-300 font-extrabold font-">
					{S(currentUser.firstName + " " + currentUser.lastName)
						.toUpperCase()
						.value()}
				</h1>
			</div>
		</div>
	);
}
