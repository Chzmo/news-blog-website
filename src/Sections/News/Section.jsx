import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";

import image from "../../assets/images/house.webp";
import image_105 from "../../assets/images/105-218x150.jpg.webp";
import image_104 from "../../assets/images/104-218x150.jpg.webp";
import image_101 from "../../assets/images/101-218x150.jpg.webp";
import image_91 from "../../assets/images/91-218x150.jpg.webp";

import image_max from "../../assets/images/maxresdefault-7-485x360.jpg.webp";
import image_54 from "../../assets/images/54-485x360.jpg.webp";

const section_1 = [
	{
		image: image_105,
		content: "Have a look around this bold and colourful 1930s semi in London",
	},
	{
		image: image_104,
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
];

const section_2 = [
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
];

function Section() {
	return (
		<>
			{/* Start section_1 */}
			<div className='w-full flex flex-col gap-3'>
				<Heading
					hover_color={"hover:text-[#f9c100]"}
					border_color={"border-b-[2px] border-b-[#f9c100]"}
					bg_color={"bg-[#f9c100]"}
					text_color={"text-[#f9c100]"}
				/>
				<div className='flex flex-col w-full mt-2 gap-4'>
					<div className='w-full'>
						<div className='flex flex-col md:flex-row md:gap-[4%] w-full gap-4'>
							<div className='flex w-full md:w-[48%]'>
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
										hover_arrorw_color={"hover:bg-[#f9c100]"}
									/>
								</div>
							</div>
							<div className='flex w-full md:w-[48%]'>
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
												text_hover={"text-[#f9c100]"}
												text_size={"text-sm"}
											/>
										</>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End section_1 */}

			{/* Start section_2 */}
			<div className='w-full flex flex-col gap-3'>
				<Heading
					hover_color={"hover:text-[#3a863d]"}
					border_color={"border-b-[2px] border-b-[#3a863d]"}
					bg_color={"bg-[#3a863d]"}
					text_color={"text-[#3a863d]"}
				/>
				<div className='flex flex-col w-full mt-2 gap-4'>
					<div className='w-full'>
						<div className='flex flex-col md:flex-row md:gap-[4%] w-full gap-4'>
							{section_2.map(
								(section, index) =>
									index < 2 && (
										<>
											<div className='flex w-full md:w-[48%]'>
												<div className='w-full'>
													<Card
														key={index}
														image={section.image}
														content={
															"We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to..."
														}
														title={"Interior Designer and Maude Interiors by Yvonne Designs"}
														author={"author"}
														text_hover={"text-[#3a863d]"}
														// links={true}
														hover_arrorw_color={"hover:bg-[#3a863d]"}
													/>
												</div>
											</div>
										</>
									)
							)}
							{/* <div className='flex w-full md:w-[48%]'>
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
												text_hover={"text-[#3a863d]"}
												text_size={"text-sm"}
											/>
										</>
									))}
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* End section_2 */}
		</>
	);
}

export default Section;
