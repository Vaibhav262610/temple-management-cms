"use client";
import { useState, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";

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
		<section className="section bg-cream">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid lg:grid-cols-12 gap-16 items-center">
					{/* Left side - Title and description */}
					<div className="lg:col-span-5">
						<div className="text-start">
							<p className="subtitle text-primary mb-3">Testimonials</p>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Devotee Experiences with Sai Baba
							</h2>
							<p className="text-gray-600 text-base leading-relaxed">
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
							<div className="hidden lg:flex justify-center items-center gap-6 mb-10">
								<div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
									<OptimizedImage
										src={sideImages[0]}
										alt="Testimonial"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
									<OptimizedImage
										src={sideImages[1]}
										alt="Testimonial"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* Quote icon */}
							<div className="text-accent-red text-7xl opacity-15 mb-6 text-center lg:text-left">
								<i className="flaticon-right-quote"></i>
							</div>

							{/* Testimonial content */}
							<div className="bg-white rounded-xl shadow-md p-10 relative">
								<p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
									"{testimonials[currentIndex].text}"
								</p>

								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
										<OptimizedImage
											src={testimonials[currentIndex].avatar}
											alt={testimonials[currentIndex].name}
											className="w-full h-full object-cover"
										/>
									</div>
									<cite className="not-italic font-bold text-gray-900 text-xl">
										{testimonials[currentIndex].name}
									</cite>
								</div>
							</div>

							{/* Indicators */}
							<div className="flex justify-center gap-2.5 mt-8">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`h-2.5 rounded-full transition-all duration-300 ${
											currentIndex === index
												? "bg-accent-red w-10"
												: "bg-gray-300 w-2.5 hover:bg-gray-400"
										}`}
										aria-label={`Go to testimonial ${index + 1}`}
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