import Hero from "../../Sections/Hero/Hero";
import News from "../../Sections/News/News";
import Trending from "../../Sections/Trending/Trending";
import Footer from "../../Sections/Footer/Footer";

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
			<Footer />
		</div>
	);
}

export default Home;
