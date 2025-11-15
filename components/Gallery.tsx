"use client";
import { useState } from "react";

export default function Gallery() {
	const [activeFilter, setActiveFilter] = useState("*");

	const filters = [
		{ label: "All", value: "*" },
		{ label: "Durga Puja", value: "coaching" },
		{ label: "Raksha Bandhan", value: "stakeholder" },
		{ label: "Holi", value: "relations" },
	];

	const pujaImages = [
		{
			title: "Durga Puja",
			category: "coaching",
			image:
				"https://images.pexels.com/photos/30672285/pexels-photo-30672285.jpeg",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "Arto Suraj on Pexels",
		},
		{
			title: "Raksha Bandhan",
			category: "strategy",
			image: "https://images.pexels.com/photos/5017601/pexels-photo-5017601.jpeg",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "Arun Gulla on Pexels",
		},
		{
			title: "Janmashtmi",
			category: "coaching strategy",
			image:
				"https://images.unsplash.com/photo-1719997110887-91cfa49d7684?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxqYW5tYXNodGFtaSUyMGtyaXNobmElMjBmZXN0aXZhbCUyMGhpbmR1fGVufDB8MXx8Ymx1ZXwxNzYzMjM5Nzc2fDA&ixlib=rb-4.1.0&q=85",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "Ayush Patel on Unsplash",
		},
		{
			title: "Mahashivratri",
			category: "relations coaching",
			image:
				"https://images.pexels.com/photos/13624550/pexels-photo-13624550.jpeg",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "Santosh Saroj on Pexels",
		},
		{
			title: "Holi",
			category: "stakeholder strategy",
			image:
				"https://images.unsplash.com/photo-1703045199207-5312874d9e54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwdWphJTIwd29yc2hpcCUyMGhpbmR1JTIwcml0dWFsJTIwY2VyZW1vbnl8ZW58MHwxfHxvcmFuZ2V8MTc2MzIzOTc3Mnww&ixlib=rb-4.1.0&q=85",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "ARTO SURAJ on Unsplash",
		},
		{
			title: "Diwali",
			category: "stakeholder",
			image:
				"https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg",
			description:
				"Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
			attribution: "Jatin Jangid on Pexels",
		},
	];

	const filteredImages =
		activeFilter === "*"
			? pujaImages
			: pujaImages.filter((img) => img.category.includes(activeFilter));

	return (
		<section className="section section-padding bg-light-bg">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
					<div className="section-title text-start mb-6 lg:mb-0">
						<p className="subtitle mb-2">Puja</p>
						<h4 className="title mb-0">Sai Baba Pujas</h4>
					</div>

					{/* Filter buttons */}
					<div className="flex flex-wrap gap-3">
						{filters.map((filter) => (
							<h5
								key={filter.value}
								onClick={() => setActiveFilter(filter.value)}
								className={`cursor-pointer text-base font-semibold px-0 pb-2 border-b-2 transition ${
									activeFilter === filter.value
										? "text-primary border-primary"
										: "text-gray-600 border-transparent hover:text-primary"
								}`}>
								{filter.label}
							</h5>
						))}
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredImages.map((puja, index) => (
						<div
							key={index}
							className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all">
							<div className="aspect-[4/5] overflow-hidden">
								<img
									src={puja.image}
									alt={`${puja.title} - ${puja.attribution}`}
									className="w-full h-full object-cover"
									style={{ backgroundColor: "#E27415" }}
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
								<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
									<h5 className="text-xl font-bold text-white mb-2">
										<a href="#" className="hover:text-primary-light transition">
											{puja.title}
										</a>
									</h5>
									<p className="text-white/90 text-sm leading-relaxed bg-transparent">
										{puja.description}
									</p>
								</div>
								<a
									href="#"
									className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-primary hover:text-white">
									<i className="fal fa-plus text-xl"></i>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}