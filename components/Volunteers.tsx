"use client";
import { useState } from "react";

export default function Volunteers() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const volunteers = [
		{
			name: "Rakesh K Pandey",
			role: "Temple Pandit",
			avatar: "https://i.pravatar.cc/200?u=rakesh",
		},
		{
			name: "Yesh Chopra",
			role: "Temple Member",
			avatar: "https://i.pravatar.cc/200?u=yesh",
		},
		{
			name: "M Kapoor",
			role: "Temple Member",
			avatar: "https://i.pravatar.cc/200?u=kapoor",
		},
		{
			name: "Mohan Das",
			role: "Temple Member",
			avatar: "https://i.pravatar.cc/200?u=mohan",
		},
	];

	return (
		<section className="py-20 bg-cover bg-center bg-norepeat relative" style={{backgroundImage: 'url(https://images.pexels.com/photos/8773931/pexels-photo-8773931.jpeg)'}}>
			<div className="absolute inset-0 bg-gradient-to-br from-accent-coral/90 to-accent-red/90"></div>
			
			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<p className="text-white font-semibold mb-2">Who</p>
					<h2 className="text-4xl font-bold text-white mb-4">
						Sai Baba Mandir Volunteers
					</h2>
					<div className="w-24 h-1 bg-white mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{volunteers.map((volunteer, index) => (
						<div
							key={index}
							className="text-center group cursor-pointer"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}>
							<div className="relative mb-6 inline-block">
								<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white transition-all shadow-xl">
									<img
										src={volunteer.avatar}
										alt={volunteer.name}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									/>
								</div>
								
								{/* Social media icons on hover */}
								<div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
									<div className="bg-white/90 backdrop-blur-sm rounded-full p-4 flex gap-3">
										<a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition">
											<i className="fab fa-instagram"></i>
										</a>
									</div>
								</div>
							</div>
							<p className="text-sm text-white/80 mb-1">{volunteer.role}</p>
							<h5 className="text-xl font-bold text-white group-hover:text-white transition">
								<a href="#">{volunteer.name}</a>
							</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}