import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Heading from "../../Components/Heading/Heading";
import adImage from "../../assets/images/newspaper-rec300d.jpg.webp";
import Card from "../../Components/Card/Card";

import image from "../../assets/images/house.webp";
import image_101 from "../../assets/images/101-218x150.jpg.webp";
import image_91 from "../../assets/images/91-218x150.jpg.webp";

import image_max from "../../assets/images/maxresdefault-7-485x360.jpg.webp";
import image_54 from "../../assets/images/54-485x360.jpg.webp";

const section_1 = [
	{
		image: image_101,
		content: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
	},
	{
		image: image_91,
		content: "Citroen Could Revive the Third Car for Loeb/Breen Winning Couple",
	},
];

const section_3 = [
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
		content: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
	},
];

function SideNav() {
	return (
		<div className='flex flex-col w-full gap-3 mt-4 md:mt-0 '>
			<Heading
				hover_color={"hover:text-[#222222] "}
				border_color={"border-b-[2px] border-b-[#222222]"}
				bg_color={"bg-[#222222] text-white"}
				text_color={"text-[#222222]"}
				heading_text={"STAY CONNECTED"}
				links={false}
			/>
			<div className='flex flex-col w-full gap-2'>
				<Link className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-slate-500 text-white p-2'>
							<FaFacebookF size={20} />
						</span>
						<span className='text-sm font-semibold'>435K Fans</span>
					</div>
					<div className='text-sm font-semibold'>LIKE</div>
				</Link>
				<Link className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-[#4DB2EC] text-white p-2'>
							<FaTwitter size={20} />
						</span>
						<span className='text-sm font-semibold'>303K Followers</span>
					</div>
					<div className='text-sm font-semibold'>FOLLOW</div>
				</Link>
				<Link className='flex items-center justify-between'>
					<div className='flex gap-3 items-center'>
						<span className='flex items-center justify-center bg-[#da513b] text-white p-2'>
							<FaPlay size={20} />
						</span>
						<span className='text-sm font-semibold'>253K Subscribers</span>
					</div>
					<div className='text-sm font-semibold'>SUBSCRIBE</div>
				</Link>
			</div>

			<div className='flex flex-col items-center w-full'>
				<div className='flex items-center'>
					<small className='text-small text-slate-400'>- Advertisement -</small>
				</div>
				<Link className='w-full  h-[260px] sm:h-[300px] md:h-[260px]'>
					<div className='flex w-full h-full relative overflow-hidden'>
						<img className='absolute w-full top-0 left-0 h-full m-4' src={adImage} />
					</div>
				</Link>
			</div>

			<div className='flex flex-col w-full mt-4 gap-3'>
				<Heading
					hover_color={"hover:text-[#4DB2EC] "}
					border_color={"border-b-[2px] border-b-[#4DB2EC]"}
					bg_color={"bg-[#4DB2EC] text-white"}
					text_color={"text-[#4DB2EC]"}
					heading_text={"MAKE IT MODERN"}
					links={false}
				/>
				<div className='w-full'>
					<div className='flex flex-col w-full mt-2 gap-4'>
						<div className='w-full'>
							<div className='flex flex-col md:grid md:grid-cols-2 md:gap-[2%] w-full'>
								{section_3.map(
									(section, index) =>
										index < 4 && (
											<>
												<div className='flex w-full'>
													<div className='w-full'>
														<Card
															key={index}
															image={section.image}
															image_class={"w-full h-[200px] sm:h-[230px] md:h-[100px]"}
															title={"Interior Designer and Maude Interiors by Yvonne Designs"}
															text_hover={" text-[#5b7587] "}
															text_size={"text-sm"}
														/>
													</div>
												</div>
											</>
										)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col gap-4 mt-4'>
				<Heading
					hover_color={"hover:text-[#f9c100] "}
					border_color={"border-b-[2px] border-b-[#f9c100]"}
					bg_color={"bg-[#f9c100] text-white"}
					text_color={"text-[#f9c100]"}
					heading_text={"LATEST REVIEWS"}
					links={false}
				/>
				<div className='flex w-full'>
					<div className='w-full'>
						<Card
							image={image}
							content={
								"We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to..."
							}
							title={"Interior Designer and Maude Interiors by Yvonne Designs"}
							author={"author"}
							text_hover={"text-[#f9c100]"}
							links={true}
						/>
					</div>
				</div>
				<div className='flex w-full'>
					<div className='w-full flex flex-col gap-4'>
						{section_1.map((section, index) => (
							<>
								<Card
									key={index}
									card_class={"flex gap-5 w-full"}
									image_class={
										"w-[100px] h-[90px] sm:w-[200px] sm:h-[140px] md:w-[100px] h-[60px] md:h-[80px]"
									}
									image={section.image}
									title={section.content}
									author={"author"}
									text_hover={" text-[#f9c100] "}
									text_size={"text-sm"}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideNav;
