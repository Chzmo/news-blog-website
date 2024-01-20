import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
						className='text-[#3d3d3d] font-[450] hover:cursor-pointer'
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

			<div className='flex flex-col'>
				<div className='w-full'></div>
			</div>
		</>
	);
}

export default Trending;
