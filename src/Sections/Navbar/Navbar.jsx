import { BsCloudsFill } from "react-icons/bs";

function Navbar() {
	return (
		<div className='flex flex-col w-full bg-[#222222]'>
			<div className='mx-auto w-[80%]'>
				<div className='flex items-center py-1 px-1 justify-between text-[#fafafa] text-xs font-semibold'>
					<div className='flex gap-3'>
						<span>
							<BsCloudsFill />
						</span>
						<span>New York</span>
					</div>
					<div className='flex gap-3'></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
