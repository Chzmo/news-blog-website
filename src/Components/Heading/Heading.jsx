/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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
	const hover_color = "hover:text-[#f9c100]";
	const border = "border-b-[2px] border-b-[#f9c100]";
	const bg_color = "bg-[#f9c100]";
	const text_color = "text-[#f9c100]";
	return (
		<div className={`w-full flex justify-between ${border}`}>
			<div className={"flex item-center p-[3px] text-[14px] " + bg_color}>
				{data.title}
			</div>
			<div className='flex item-center gap-3'>
				{data.categories.map((category, index) => (
					<Link
						key={index}
						className={`text-[#3d3d3d] text-sm font-medium ${hover_color} ${
							index == 0 && text_color
						}`}>
						{category}
					</Link>
				))}
			</div>
		</div>
	);
}

export default Heading;
