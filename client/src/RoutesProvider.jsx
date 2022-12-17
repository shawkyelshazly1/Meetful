import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Register from "./pages/auth/Register";
import PrivateRouter from "./pages/extras/PrivateRouter";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ExploreSpaces from "./pages/spaces/exploreSpaces/ExploreSpaces";
import Spaces from "./pages/spaces/space/Spaces";

export default function RoutesProvider() {
	return (
		<Router>
			<div className="flex mx-auto min-h-[100vh]">
				<Toaster />
				<Routes>
					{/* Private router to detect user auth status and direct accordingly */}

					<Route
						path="*"
						element={
							<PrivateRouter>
								<div className="flex w-full flex-col-reverse md:flex-row my-auto  min-h-[100vh] items-center">
									<SideBar />
									<Routes>
										<Route path="/" element={<Home />} />
										<Route path="/profile/:user_id" element={<Profile />} />
										<Route path="/spaces" element={<ExploreSpaces />} />
										<Route path="/spaces/:space_id" element={<Spaces />} />
									</Routes>
									<h1 className="text-2xl font-semibold font-Lobster text-[#40a798] md:hidden">
										MeetFull
										<span className=" text-slate-300 font-bold text-2xl">
											.
										</span>
									</h1>
								</div>
							</PrivateRouter>
						}
					/>
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
}
