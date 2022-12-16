import React from "react";
import Navbar from "./Navbar";
import SpaceCard from "./SpaceCard";

export default function ExploreSpaces() {
	return (
		<div className=" w-full h-[100vh] rounded-3xl px-4 py-4 border-l-2 border-[#eaebed] flex flex-col gap-8">
			<Navbar />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-y-scroll">
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
				<SpaceCard />
			</div>
		</div>
	);
}
