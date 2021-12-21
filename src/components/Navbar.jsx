import React from "react";

const Navbar = () => {
	const toggleDarkModeHandler = (event) => {
		event.target.checked
			? document.querySelector("html").classList.add("dark")
			: document.querySelector("html").classList.remove("dark");
	};

	return (
		<div className=" bg-neutral-50 dark:bg-slate-800 dark:text-neutral-50 text-slate-900  shadow-lg w-full p-2 flex items-center">
			<span className="text-4xl font-bold p-4 flex-1">
				Assignment - React Developer
			</span>
			<div>
				<label className="relative flex justify-between items-center group p-2 text-xl font-semibold italic">
					Dark Mode
					<input
						type="checkbox"
						className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
						onChange={toggleDarkModeHandler}
					/>
					<span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-slate-800 rounded-full duration-300 ease-in-out peer-checked:bg-neutral-100 after:w-8 after:h-8 after:bg-slate-500 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:bg-neutral-50 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
