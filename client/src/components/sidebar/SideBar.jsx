import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SideBarIcons from "./SideBarIcons";
import UserDropDown from "./UserDropDown";

export default function SideBar() {
	const { logoutUser, currentUser } = useContext(CurrentUserContext);
	console.log(currentUser);
	return (
		<div className="fixed md:static bg-white md:bg-transparent flex md:border-t-0 border-t-2 w-full md:w-fit flex-row md:flex-col justify-between items-center  py-4 md:h-[100vh] xl:min-w-[5%] lg:min-w-[8%] md:min-w-[10%] min-w-[15%]">
			<h1 className="text-xl font-semibold font-Lobster text-[#40a798] hidden md:block">
				MeetFull<span className=" text-slate-300 font-bold text-2xl">.</span>
			</h1>
			<SideBarIcons />
			<UserDropDown />
		</div>
	);
}
