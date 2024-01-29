import { Link } from "react-router-dom";
import Section from "./Section";
import SideNav from "./SideNav";

import image from "../../assets/images/newspaper-rec728.jpg.webp";
import Heading from "../../Components/Heading/Heading";
import Card from "../../Components/Card/Card";

// import image from "../../assets/images/house.webp";
import image_105 from "../../assets/images/105-218x150.jpg.webp";
import image_104 from "../../assets/images/104-218x150.jpg.webp";
import image_101 from "../../assets/images/101-218x150.jpg.webp";
import image_91 from "../../assets/images/91-218x150.jpg.webp";

import image_max from "../../assets/images/maxresdefault-7-485x360.jpg.webp";
import image_54 from "../../assets/images/54-485x360.jpg.webp";
import LinkArrows from "../../Components/LinkArrows/LinkArrows";

const section = [
	{
		image: image_max,
		content: "Have a look around this bold and colourful 1930s semi in London",
	},
	{
		image: image_54,
		content: "Outdoor Kitchen Decorating: Furnish and Accessorize with Flair",
	},
	{
		image: image_101,
		content: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
	},
	{
		image: image_91,
		content: "Citroen Could Revive the Third Car for Loeb/Breen Winning Couple",
	},
	{
		image: image_105,
		content: "Have a look around this bold and colourful 1930s semi in London",
	},
	{
		image: image_104,
		content: "Outdoor Kitchen Decorating: Furnish and Accessorize with Flair",
	},
];

function News() {
	return (
		<div className='flex flex-col w-full mt-10 gap-4'>
			<div className='flex flex-col gap-[4%] w-full px-6 md:flex-row lg:px-4'>
				<div className='w-full md:w-[65%] flex flex-col gap-11'>
					<Section />
				</div>
				<div className='w-full md:w-[31%]'>
					<div className='w-full'>
						<SideNav />
					</div>
				</div>
			</div>
			<div className='w-full bg-[#f9f9f9] px-[10%] py-4'>
				<div className='flex items-center flex-col mb-4'>
					<small className='text-small text-slate-400'>- Advertisement -</small>
				</div>
				<Link className='w-full] '>
					<img src={image} className='h-full w-full object-cover' alt='' />
				</Link>
			</div>
			<div className='flex flex-col gap-[4%] w-full px-6 md:flex-row lg:px-4 mt-5'>
				<div className='w-full md:w-[65%] flex flex-col gap-11'>
					{/* Start section */}
					<div className='w-full flex flex-col gap-3 '>
						<Heading
							hover_color={"hover:text-[#3a863d] "}
							border_color={"border-b-[2px] border-b-[#3a863d]"}
							bg_color={"bg-[#3a863d] text-white"}
							text_color={"text-[#3a863d]"}
							heading_text={"LIFESTYLE NEWS"}
						/>
						<div className='flex flex-col w-full mt-2 gap-4 mb-4'>
							<div className='w-full'>
								<div className='flex flex-col md:grid md:grid-cols-2 md:gap-[4%] w-full gap-4'>
									{section.map(
										(section, index) =>
											index < 4 && (
												<>
													<div className='flex w-full'>
														<div className='w-full'>
															<Card
																key={index}
																image={section.image}
																title={
																	"Interior Designer and Maude Interiors by Yvonne Designs"
																}
																author={"author"}
																text_hover={" text-[#3a863d] "}
																image_class={"w-full h-[200px] sm:h-[230px] md:h-[170px]"}
															/>
														</div>
													</div>
												</>
											)
									)}
								</div>
							</div>
						</div>
						<LinkArrows links={true} hover_arrorw_color={"hover:bg-[#3a863d]"} />
					</div>
					{/* End section */}
				</div>
				<div className='w-full md:w-[31%]'>
					<div className='w-full'>{/* <SideNav /> */}</div>
				</div>
			</div>
		</div>
	);
}

export default News;
