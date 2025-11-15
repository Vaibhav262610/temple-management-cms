"use client";
import { useState, useEffect } from "react";

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			title: "Welcome to Shri Shirdi Sai Baba Mandir",
			description:
				"Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.",
			image:
				"https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg",
			imagePosition: "right",
		},
		{
			title: "Experience the Divine Blessings of Sai Baba",
			description:
				"Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.",
			image:
				"https://images.pexels.com/photos/8773931/pexels-photo-8773931.jpeg",
			imagePosition: "left",
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	const currentSlideData = slides[currentSlide];

	return (
		<div
			className="relative min-h-screen bg-cover bg-center bg-norepeat"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/8773931/pexels-photo-8773931.jpeg)",
			}}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/30"></div>

			{/* Navigation arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent-red rounded-full flex items-center justify-center text-white hover:bg-red-700 transition z-20 shadow-lg"
				aria-label="Previous">
				<span className="text-2xl">‹</span>
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent-red rounded-full flex items-center justify-center text-white hover:bg-red-700 transition z-20 shadow-lg"
				aria-label="Next">
				<span className="text-2xl">›</span>
			</button>

			<div className="relative z-10 min-h-screen flex items-center">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-0 items-center">
						{/* Content Box */}
						<div
							className={`${
								currentSlideData.imagePosition === "left"
									? "lg:col-start-2"
									: ""
							}`}>
							<div className="bg-primary text-white p-10 lg:p-12 max-w-xl">
								<h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
									{currentSlideData.title}
								</h1>
								<p className="text-base mb-8 leading-relaxed border-l-4 border-white/30 pl-4 opacity-90">
									{currentSlideData.description}
								</p>

								<div className="flex flex-wrap gap-4">
									<a
										href="#"
										className="bg-accent-red text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition inline-flex items-center gap-2">
										Become a Devotee <i className="far fa-arrow-right"></i>
									</a>
									<a
										href="#"
										className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-primary transition inline-flex items-center gap-2">
										Donate Us <i className="far fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>

						{/* Image */}
						<div
							className={`hidden lg:flex ${
								currentSlideData.imagePosition === "left"
									? "lg:col-start-1 lg:row-start-1 justify-start"
									: "justify-end"
							}`}>
							<img
								src={currentSlideData.image}
								alt="Shirdi Sai Baba"
								className={`${
									currentSlideData.imagePosition === "right"
										? "w-1/2 mt-0"
										: "w-full max-w-md"
								} h-auto object-cover`}
								style={{ backgroundColor: "#CE9438" }}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Slide indicators */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-full transition ${
							currentSlide === index ? "bg-accent-red" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</div>
	);
}