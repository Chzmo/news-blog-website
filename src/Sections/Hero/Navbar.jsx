// import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import image from "../../assets/images/mobile-bg1.jpg";

const headings = [
	{ title: "NEWS" },
	{ title: "FASHION" },
	{ title: "GADGETS" },
	{ title: "LIFESTYLE" },
	{ title: "VIDEO" },
	{ title: "FEATURES" },
];

function Navbar() {
	const [sideNav, setSideNav] = useState("close");
	return (
		<>
			<div className='w-full shadow-md hidden md:block'>
				<div className='mx-auto max-w-[1070px] flex flex-col px-10 lg:px-0'>
					<div className='w-full'>
						<div className='flex justify-between font-[600]'>
							<div className='flex gap-4'>
								{headings.map((heading, index) => {
									return (
										<>
											<Link
												to={"/"}
												key={heading.title}
												className={
													index == 0
														? "p-2 px-3 border-b-[#4db2ec] border-b-[3px] text-[14px] font-bold"
														: "p-2 px-3 hover:border-b-[#4db2ec] hover:border-b-[3px] text-[14px] font-bold"
												}>
												<span>{heading.title}</span>
											</Link>
										</>
									);
								})}
							</div>
							<div className=' font-normal flex items-center justify-center'>
								<LuSearch size={20} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex md:hidden w-full bg-[#222222] text-white px-4 p-1'>
				<div className='w-full h-12 flex items-center justify-between'>
					<Link className='space-y-1' onClick={() => setSideNav("open")}>
						<div className='w-6 h-0.5 bg-white'></div>
						<div className='w-6 h-0.5 bg-white'></div>
						<div className='w-6 h-0.5 bg-white'></div>
					</Link>
					<Link>
						<IoSearchOutline size={20} />
					</Link>
				</div>
				{sideNav == "open" && (
					<>
						<div className='fixed top-0 left-0 w-full h-screen z-50'>
							<div className='w-full h-full relative'>
								<div className='absolute w-full h-full'>
									<img src={image} alt='' className='h-full w-full object-cover ' />
								</div>
							</div>
							<div className='top-0 left-0 w-full h-full absolute bg-neutral-900 opacity-[0.5] z-20'>
								<div className='flex flex-col w-full h-full p-4 gap-10'>
									<div className='flex w-full justify-end'>
										<Link onClick={() => setSideNav("close")}>
											<IoCloseOutline size={40} />
										</Link>
									</div>
									<div className='flex w-full justify-center text-2xl font-bold'>
										<Link onClick={() => setSideNav("close")}>Sign in</Link>
									</div>
									<div className='flex flex-col gap-3 text-2xl font-bold text-white'>
										<Link onClick={() => setSideNav("close")}>Blog</Link>
										<Link onClick={() => setSideNav("close")}>Forum</Link>
										<Link onClick={() => setSideNav("close")}>Buy now!</Link>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Navbar;
