import { Link } from "react-router-dom";
import { FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsCloudsFill, BsInstagram, BsYoutube } from "react-icons/bs";

function Navbar() {
	return (
		<div className='flex flex-col w-full bg-[#222222]'>
			<div className='mx-auto w-[80%]'>
				<div className='flex items-center py-1 px-1 justify-between text-[#fafafa] text-xs font-semibold'>
					<div className='flex gap-8 items-center'>
						<span className='flex items-center gap-2'>
							<BsCloudsFill size={20} /> 14.4
							<span>New York</span>
						</span>
						<span>Wednesday, January 17, 2024</span>
						<span className='flex gap-3 items-center'>
							<Link className='hover:text-[#4db2ec]' to={"#"}>
								Sign in / Join
							</Link>
							<Link className='hover:text-[#4db2ec]' to={"#"}>
								Blog
							</Link>
							<Link className='hover:text-[#4db2ec]' to={"#"}>
								Forum
							</Link>
							<Link className='hover:text-[#4db2ec]' to={"#"}>
								Buy now!
							</Link>
						</span>
					</div>
					<div className='flex gap-3'>
						<Link className='hover:text-[#4db2ec]' to={"#"}>
							<FaFacebookF />
						</Link>
						<Link className='hover:text-[#4db2ec]' to={"#"}>
							<BsInstagram />
						</Link>
						<Link className='hover:text-[#4db2ec]' to={"#"}>
							<FaXTwitter />
						</Link>
						<Link className='hover:text-[#4db2ec]' to={"#"}>
							<FaVimeoV />
						</Link>
						<Link className='hover:text-[#4db2ec]' to={"#"}>
							<BsYoutube />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
