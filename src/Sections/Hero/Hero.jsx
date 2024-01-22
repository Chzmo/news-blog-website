import { Link } from "react-router-dom";

import Social from "./Social";
import Navbar from "./Navbar";

import logo from "../../assets/images/np12blue-retina.png.webp";
import advert from "../../assets/images/advert.jpg.webp";

function Hero() {
	return (
		<div className='flex flex-col gap-6'>
			<Social />
			<div className='mx-auto max-w-[1070px] hidden md:flex md:px-4 lg:px-0'>
				<div className='w-full flex items-center h-24 justify-between'>
					<Link className='max-w-[30%]'>
						<img className='w-full max-h-24 object-cover' src={logo} alt='logo' />
					</Link>
					<Link className='max-w-[70%]'>
						<img className='w-full ' src={advert} alt='img' />
					</Link>
				</div>
			</div>
			<Navbar />
		</div>
	);
}

export default Hero;
