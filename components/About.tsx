"use client";
import { useState, useEffect, useRef } from "react";

export default function About() {
	const [count, setCount] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);
	const counterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					let start = 0;
					const end = 25;
					const duration = 2000;
					const increment = end / (duration / 16);

					const timer = setInterval(() => {
						start += increment;
						if (start >= end) {
							setCount(end);
							clearInterval(timer);
						} else {
							setCount(Math.floor(start));
						}
					}, 16);
				}
			},
			{ threshold: 0.5 }
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => observer.disconnect();
	}, [hasAnimated]);

	return (
		<section className="section pt-0">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-12 gap-0">
					{/* Left side - Counter */}
					<div className="lg:col-span-5 hidden lg:block">
						<div
							ref={counterRef}
							className="bg-cover bg-center bg-norepeat relative overflow-hidden h-full"
							style={{
								backgroundImage:
									"url(https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg)",
							}}>
							<div className="absolute inset-0 bg-primary/85"></div>
							<div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-12 min-h-[400px]">
								<h4 className="text-7xl font-bold mb-3">
									<b className="counter">{count}</b>
									<span className="text-5xl ml-1">+</span>
								</h4>
								<p className="text-xl">Devotees Served</p>
							</div>
						</div>
					</div>

					{/* Right side - Content */}
					<div className="lg:col-span-7 lg:pl-12">
						<div className="section-title mb-0 text-start">
							<p className="subtitle mb-3">Serving the Hindu Community</p>
							<h4 className="title mb-6">
								We Are Devotees of Shri Shirdi Sai Baba.
							</h4>
						</div>
						<p className="text-gray-700 mb-8 leading-relaxed bg-transparent border-l-4 border-gray-200 pl-4">
							Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai
							Baba, following His teachings of love, compassion, and service to
							humanity.
						</p>

						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="w-14 h-14 flex items-center justify-center">
										<i className="flaticon-temple text-primary text-4xl"></i>
									</div>
								</div>
								<div>
									<h5 className="text-xl font-bold text-gray-900 mb-2">
										Temple
									</h5>
									<p className="text-gray-600 leading-relaxed">
										Support our charitable activities and community service
										programs inspired by Sai Baba's teachings
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="w-14 h-14 flex items-center justify-center">
										<i className="flaticon-powder-1 text-primary text-4xl"></i>
									</div>
								</div>
								<div>
									<h5 className="text-xl font-bold text-gray-900 mb-2">
										Donation
									</h5>
									<p className="text-gray-600 leading-relaxed">
										Support our charitable activities and community service
										programs inspired by Sai Baba's teachings
									</p>
								</div>
							</div>
						</div>

						<a
							href="#"
							className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-50 transition">
							Learn More <i className="far fa-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}