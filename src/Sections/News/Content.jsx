import Card from "../../Components/Card/Card";
import image from "../../assets/images/house.webp";

function Content() {
	return (
		<div className='flex flex-col w-full mt-2'>
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
							/>
						</div>
					</div>
					<div className='flex w-full md:w-[48%]'>
						<div className='w-full flex flex-col gap-4'>
							{[1, 2, 3, 4].map((index) => (
								<>
									<Card key={index} />
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
