import Hero from "../../Sections/Hero/Hero";
import News from "../../Sections/News/News";
import Trending from "../../Sections/Trending/Trending";

function Home() {
	return (
		<div>
			<Hero />
			<div className='flex flex-col w-full'>
				<div className='w-full'>
					<div className='mx-auto max-w-[1070px]'>
						<Trending />
						<News />
					</div>
				</div>
			</div>
			<div className='h-[40px]'></div>
		</div>
	);
}

export default Home;
