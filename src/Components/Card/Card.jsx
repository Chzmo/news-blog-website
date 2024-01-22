/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

function Card({
	image,
	content,
	author,
	title,
	text_hover,
	image_class,
	card_class,
	text_size,
}) {
	const [hover, setHover] = useState("text-[#3d3d3d]");

	return (
		<>
			<Link
				className={`${card_class || "flex flex-col gap-3 w-full"}`}
				onMouseEnter={() => setHover(text_hover)}
				onMouseLeave={() => setHover("text-[#3d3d3d]")}>
				<div
					className={`${
						image_class || "w-full h-[200px] sm:h-[230px] md:h-[250px]"
					}`}>
					<div className='flex w-full h-full relative overflow-hidden'>
						<img
							className='absolute w-full top-0 left-0 h-full object-cover'
							src={image}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2 flex-1'>
					{title ? (
						<>
							<Link
								className={`flex w-full font-semibold ${
									text_size || "text-xl "
								} ${hover}`}>
								<h5>{title}</h5>
							</Link>
						</>
					) : (
						<></>
					)}
					{author ? (
						<>
							<div className='flex w-full text-[#3d3d3d]'>
								<small>
									<b>Armin Vans</b> - August 7, 2019
								</small>
							</div>
						</>
					) : (
						<></>
					)}
					{content ? (
						<>
							<Link className={`flex w-full text-sm`}>
								<p>{content}</p>
							</Link>
						</>
					) : (
						<></>
					)}
				</div>
			</Link>
		</>
	);
}

export default Card;
