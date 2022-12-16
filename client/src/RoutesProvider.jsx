import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Register from "./pages/auth/Register";
import PrivateRouter from "./pages/extras/PrivateRouter";
import Home from "./pages/Home";
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
								<div className="flex w-full flex-row my-auto  min-h-[100vh] items-center">
									<SideBar />
									<Routes>
										<Route path="/" element={<Home />} />
										<Route path="/spaces" element={<ExploreSpaces />} />
										<Route path="/spaces/:space_id" element={<Spaces />} />
									</Routes>
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
