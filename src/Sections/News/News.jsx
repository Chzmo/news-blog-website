import { Link } from "react-router-dom";
import Section from "./Section";
import SideNav from "./SideNav";

import image from "../../assets/images/newspaper-rec728.jpg.webp";
function News() {
	return (
		<div className='flex flex-col w-full mt-10 gap-4'>
			<div className='flex flex-col gap-[4%] w-full px-6 md:flex-row lg:px-4'>
				<div className='w-full md:w-[65%] flex flex-col gap-11'>
					<Section />
				</div>
				<div className='w-full md:w-[31%]'>
					<div className='w-full'>
						<SideNav />
					</div>
				</div>
			</div>
			<div className='w-full bg-[#f9f9f9] px-[10%] py-4'>
				<div className='flex items-center flex-col mb-4'>
					<small className='text-small text-slate-400'>- Advertisement -</small>
				</div>
				<Link className='w-full] '>
					<img
						src={image}
						className='h-full w-full object-cover hover:scale-[1.08] transition-all'
						alt=''
					/>
				</Link>
			</div>
		</div>
	);
}

export default News;
