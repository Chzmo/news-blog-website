import Section from "./Section";
import SideNav from "./SideNav";

function News() {
	return (
		<div className='flex flex-col w-full mt-4 gap-4'>
			<div className='flex gap-[5%] w-full'>
				<div className='w-[65%]'>
					<Section />
				</div>
				<div className='w-[30%]'>
					<div className='w-full'>
						<SideNav />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
