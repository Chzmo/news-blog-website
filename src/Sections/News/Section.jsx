import Heading from "../../Components/Heading/Heading";
import Content from "./Content";

function Section() {
	const hover_color = "hover:text-[#f9c100]";
	const border_color = "border-b-[2px] border-b-[#f9c100]";
	const bg_color = "bg-[#f9c100]";
	const text_color = "text-[#f9c100]";
	return (
		<div className='w-full flex flex-col gap-3'>
			<Heading
				hover_color={hover_color}
				border_color={border_color}
				bg_color={bg_color}
				text_color={text_color}
			/>
			<Content />
		</div>
	);
}

export default Section;
