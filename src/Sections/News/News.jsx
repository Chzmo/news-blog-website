import Section from "./Section";
import SideNav from "./SideNav";

function News() {
	return (
		<div className='flex flex-col w-full mt-10 gap-4'>
			<div className='flex flex-col gap-[5%] w-full px-6 md:flex-row lg:px-0'>
				<div className='w-full md:w-[65%] flex flex-col gap-11'>
					<Section />
				</div>
				<div className='w-full md:w-[30%]'>
					<div className='w-full'>
						<SideNav />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
