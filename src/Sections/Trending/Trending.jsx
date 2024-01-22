import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "../../Components/Image/Image";

import firstImage from "../../assets/images/h104-696x464.jpg.webp";
import secondImage from "../../assets/images/28-696x368.jpg.webp";
import thirdImage from "../../assets/images/54-1-696x405.jpg.webp";
import forthImage from "../../assets/images/43-2-696x464.jpg.webp";

function Trending() {
	const [bg_color, setbg_color] = useState("bg-[#222222] ");

	return (
		<>
			<div className='flex justify-center md:justify-between'>
				<div className='flex flex-col justify-center items-center md:flex-row p-3 md:p-5 gap-1 md:gap-3'>
					<Link
						className={
							bg_color + " text-white px-2 py-1 text-xs text-center flex items-center"
						}>
						TRENDING NOW
					</Link>
					<div
						className='text-[#3d3d3d] font-[450] hover:cursor-pointer text-center'
						onMouseEnter={() => setbg_color("bg-[#4db2ec] ")}
						onMouseLeave={() => setbg_color("bg-[#222222] ")}>
						Another Big Apartment Project Slated for Broad Ripple Company
					</div>
				</div>
				<div
					className='md:flex items-center gap-2 hidden'
					onMouseEnter={() => setbg_color("bg-[#4db2ec] ")}
					onMouseLeave={() => setbg_color("bg-[#222222] ")}>
					<Link className='border p-1 text-slate-300 hover:bg-[#4db2ec] hover:text-white'>
						<MdKeyboardArrowLeft size={15} />
					</Link>
					<Link className='border p-1 text-slate-300 hover:bg-[#4db2ec] hover:text-white'>
						<MdKeyboardArrowRight size={15} />
					</Link>
				</div>
			</div>

			<div className='flex flex-col md:flex-row gap-[2px]'>
				<div className='w-full h-[320px] md:w-[49%] md:h-[400px] lg:h-[470px]'>
					<Image
						image={firstImage}
						heading={"TRENDING NOW"}
						content={
							"WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City"
						}
						author={"Armin Vans"}
						date={"August 7, 2019"}
					/>
				</div>
				<div className='w-full h-[180px] md:w-[51%] md:h-[400px] lg:h-[470px] overflow-x-scroll md:overflow-hidden flex md:flex-col gap-[2px]'>
					<div className='w-[400px] md:w-full h-full md:h-[248px] lg:h-[298px] gap[2px]'>
						<div className='w-[340px] sm:w-[400px] h-full md:w-full'>
							<Image
								image={secondImage}
								heading={"GADGETS"}
								content={"Game Changing Virtual Reality Console Hits the Market"}
								author={"Armin Vans"}
								date={"August 7, 2019"}
							/>
						</div>
					</div>
					<div className='flex w-[800px] md:w-full md:h-[150px] lg:h-[200px] gap-[2px]'>
						<div className='w-[340px] sm:w-[400px] md:w-1/2 h-full'>
							<Image
								image={thirdImage}
								heading={"TRAVEL"}
								content={"Discover the Most Magical Sunset in Santorini"}
								author={"Armin Vans"}
								date={"August 7, 2019"}
							/>
						</div>
						<div className='w-[340px] sm:w-[400px] md:w-1/2 h-full'>
							<Image
								image={forthImage}
								heading={"REVIEWS"}
								content={"Computer Filters Noise to Make You a Better Listener"}
								author={"Armin Vans"}
								date={"August 7, 2019"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Trending;
