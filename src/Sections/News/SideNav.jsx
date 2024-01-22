import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Heading from "../../Components/Heading/Heading";

function SideNav() {
	return (
		<div className='flex flex-col w-full gap-3 mt-4 md:mt-0 '>
			<Heading
				hover_color={"hover:text-[#222222] "}
				border_color={"border-b-[2px] border-b-[#222222]"}
				bg_color={"bg-[#222222] text-white"}
				text_color={"text-[#222222]"}
				heading_text={"STAY CONNECTED"}
				links={false}
			/>
			<div className='flex flex-col w-full gap-2'>
				<div className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-slate-500 text-white p-2'>
							<FaFacebookF size={20} />
						</span>
						<span>4353 Fans</span>
					</div>
					<div>LIKE</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-slate-500 text-white p-2'>
							<FaTwitter size={20} />
						</span>
						<span>4353 Fans</span>
					</div>
					<div>FOLLOW</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-[#da513b] text-white p-2'>
							<FaPlay size={20} />
						</span>
						<span>4353 Fans</span>
					</div>
					<div>SUBSCRIBE</div>
				</div>
			</div>
		</div>
	);
}

export default SideNav;
