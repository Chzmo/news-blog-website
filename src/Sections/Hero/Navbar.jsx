import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const headings = [
	{ title: "NEWS" },
	{ title: "FASHION" },
	{ title: "GADGETS" },
	{ title: "LIFESTYLE" },
	{ title: "VIDEO" },
	{ title: "FEATURES" },
];

function Navbar() {
	return (
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
											key={index}
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
						<FaSearch />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
