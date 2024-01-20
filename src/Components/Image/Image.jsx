/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Image({ image, heading, content, author, date }) {
	return (
		<div className='flex w-full h-full relative overflow-hidden'>
			<img
				className=' absolute w-full top-0 left-0 h-full object-cover'
				src={image}
			/>
			<div className='absolute w-full h-full left-0 top-0 flex flex-col justify-end'>
				<div className='z-60 relative text-white pb-4 pl-4 flex flex-col gap-2'>
					<div className='flex'>
						<Link className='bg-[#222222] text-white px-2 py-1 text-xs text-center flex items-center hover:bg-[#4db2ec]'>
							{heading}
						</Link>
					</div>
					<div className='text-[1rem] font-semibold text-sm md:text-xl md:max-w-[26rem]'>
						{content}
					</div>
					<div>
						<span>{author}</span> - <span>{date}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Image;
