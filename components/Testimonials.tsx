"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			name: "Mukesh Singh",
			text: "If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.",
			avatar: "https://i.pravatar.cc/100?u=mukesh",
		},
		{
			name: "Das Gupta",
			text: "If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.",
			avatar: "https://i.pravatar.cc/100?u=das",
		},
		{
			name: "R Patel",
			text: "If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.",
			avatar: "https://i.pravatar.cc/100?u=rpatel",
		},
	];

	const sideImages = [
		"https://i.pravatar.cc/150?u=side1",
		"https://i.pravatar.cc/150?u=side2",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [testimonials.length]);

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid lg:grid-cols-12 gap-12">
					{/* Left side - Title and description */}
					<div className="lg:col-span-5">
						<div className="section-title text-start">
							<p className="text-primary font-semibold mb-2">Testimonials</p>
							<h4 className="text-4xl font-bold text-gray-900 mb-4">
								Devotee Experiences with Sai Baba
							</h4>
							<p className="text-gray-600 leading-relaxed">
								Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai
								Baba, following His teachings of love, compassion, and service
								to humanity. This is where you should start Temple is place
								where hindu worship consectetur adipisicing elit, sed do Temple
								is place where hindu worship consectetur adipisicing elit, sed
								do
							</p>
						</div>
					</div>

					{/* Right side - Testimonial slider */}
					<div className="lg:col-span-7">
						<div className="relative">
							{/* Side images */}
							<div className="hidden lg:flex justify-center items-center gap-8 mb-8">
								<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
									<img
										src={sideImages[0]}
										alt="Testimonial"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
									<img
										src={sideImages[1]}
										alt="Testimonial"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* Quote icon */}
							<div className="text-accent-red text-6xl opacity-20 mb-4">
								<i className="flaticon-right-quote"></i>
							</div>

							{/* Testimonial content */}
							<div className="bg-white rounded-2xl p-8 relative">
								<p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
									{testimonials[currentIndex].text}
								</p>

								<div className="flex items-center gap-4">
									<cite className="not-italic font-bold text-gray-900 text-lg">
										{testimonials[currentIndex].name}
									</cite>
								</div>
							</div>

							{/* Indicators */}
							<div className="flex justify-center gap-2 mt-6">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`w-3 h-3 rounded-full transition ${
											currentIndex === index
												? "bg-accent-red w-8"
												: "bg-gray-300"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}