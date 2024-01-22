/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const data = {
	categories: ["All", "Travel", "Gadgets", "Style Hunter", "Health & Fitness"],
};

function Heading({
	hover_color,
	border_color,
	bg_color,
	text_color,
	heading_text,
	links = true,
}) {
	return (
		<div className={`w-full flex justify-between ${border_color}`}>
			<div
				className={
					"flex item-center p-[3px] px-3 text-[14px] font-medium " + bg_color
				}>
				{heading_text || "DON'T MISS"}
			</div>
			<div className='flex item-center gap-3'>
				{data.categories.map(
					(category, index) =>
						links && (
							<Link
								key={index}
								className={`text-[#3d3d3d] text-sm font-medium ${hover_color} ${
									index == 0 && text_color
								} ${index > 2 && "hidden md:flex"}`}>
								{category}
							</Link>
						)
				)}
			</div>
		</div>
	);
}

export default Heading;
