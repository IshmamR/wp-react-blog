import React from 'react';

const Author = () => {
	return (
		<div className="flex flex-wrap w-full items-center text-center md:text-left font-sans p-8 md:p-24">
			<img className="mx-auto md:mx-0 w-10 h-10 rounded-full md:mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
			<div className="w-full md:w-auto md:flex-1">
				<p className="text-base font-bold text-base md:text-xl leading-none">TekX</p>
				<p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme</p>
			</div>
			<div className="w-full md:w-auto flex justify-center md:justify-end">
				<button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
			</div>
		</div>
	)
}

export default Author;