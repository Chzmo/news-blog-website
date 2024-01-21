import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const data = {
	title: "DON'T MISS",
	categories: [
		"All",
		"Style Hunter",
		"Vogue",
		"Health & Fitness",
		"Travel",
		"Gadgets",
	],
};
function Heading() {
	const color = "#f9c100";
	const [bg_color, setBg_color] = useState("bg-[" + "#f9c100" + "]");
	return (
		<div
			className={`w-full flex justify-between border-b-[2px] border-b-[${color}]`}>
			<div className={"flex item-center p-[3px] text-[14px] " + bg_color}>
				{data.title}
				{bg_color}
			</div>
			<div className='flex item-center gap-3'>
				{data.categories.map((category, index) => (
					<Link
						key={index}
						className={`text-[#3d3d3d] text-sm hover:text-[${color}] font-medium ${
							index == 0 && "text-[${text_color}]"
						}`}>
						{category}
					</Link>
				))}
			</div>
		</div>
	);
}

export default Heading;
