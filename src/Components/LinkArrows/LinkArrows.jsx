/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function LinkArrows({ links, hover_arrorw_color }) {
	return (
		links && (
			<>
				<div className='md:flex items-center gap-2 hidden mt-4'>
					<Link
						className={`border p-1 text-slate-300  hover:text-white ${
							hover_arrorw_color || "hover:bg-[#f9c100]"
						}`}>
						<MdKeyboardArrowLeft size={15} />
					</Link>
					<Link
						className={`border p-1 text-slate-300  hover:text-white ${
							hover_arrorw_color || "hover:bg-[#f9c100]"
						}`}>
						<MdKeyboardArrowRight size={15} />
					</Link>
				</div>
			</>
		)
	);
}

export default LinkArrows;
