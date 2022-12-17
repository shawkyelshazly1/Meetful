import { Menu } from "@headlessui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function UserDropDown() {
	const { logoutUser, currentUser } = useContext(CurrentUserContext);
	return (
		<Menu
			as="div"
			className="md:inline-block lg:inline-block relative  text-left z-[999] mr-16 md:mr-0"
		>
			<Menu.Button className=" ">
				<div className="flex flex-row gap-4 cursor-pointer">
					<img
						src={
							currentUser.profileImage !== null
								? currentUser.profileImage.url
								: "/profile_pic.jpg"
						}
						alt=""
						className="w-12 h-12 rounded-full object-cover"
					/>
				</div>
			</Menu.Button>
			<Menu.Items className="absolute border-[1px] flex  text-lg  font-medium flex-col w-[300%] md:w-[200%]  items-center  justify-center right-[15px] top-[-95px]  md:right-[-100px] md:top-[-30px] origin-top-right bg-white rounded-md shadow-lg ">
				<Menu.Item>
					{({ active }) => (
						<Link
							className={`${
								active && "text-white bg-[#00a389]  w-full text-center"
							} cursor-pointer py-2 px-6 rounded-lg`}
							to={`/profile/${currentUser.id}`}
						>
							Profile
						</Link>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<span
							className={`${
								active && "text-white bg-[#00a389]  w-full text-center"
							} cursor-pointer py-2 px-6 rounded-lg`}
							onClick={() => {
								logoutUser();
							}}
						>
							Logout
						</span>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
