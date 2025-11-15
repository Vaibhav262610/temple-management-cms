export default function Hero() {
	return (
		<section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-hidden">
			{/* Background temple silhouettes */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 text-gray-400 text-9xl">🕉️</div>
				<div className="absolute top-40 right-20 text-gray-400 text-7xl">
					🕉️
				</div>
				<div className="absolute bottom-40 left-1/4 text-gray-400 text-6xl">
					🕉️
				</div>
			</div>

			{/* Navigation arrows */}
			<button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-red-700 transition z-10">
				‹
			</button>
			<button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-red-700 transition z-10">
				›
			</button>

			<div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
					{/* Left side - Welcome card */}
					<div>
						<div className="bg-gradient-to-br from-[#8b6b7a] to-[#7d5a6e] text-white p-12 rounded-3xl shadow-2xl">
							<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
								Welcome to Shri
								<br />
								Shirdi Sai Baba
								<br />
								Mandir
							</h1>
							<p className="text-lg mb-8 opacity-90 leading-relaxed">
								Shirdi Mandir US — God is One. We are devotees of Shri Shirdi
								Sai Baba following His teachings of love, compassion and service
								to humanity.
							</p>

							<div className="flex flex-wrap gap-4">
								<button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2">
									BECOME A DEVOTEE
									<span>→</span>
								</button>
								<button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#7d5a6e] transition flex items-center gap-2">
									DONATE US
									<span>→</span>
								</button>
							</div>
						</div>
					</div>

					{/* Right side - Sai Baba image */}
					<div className="relative">
						<div className="relative">
							{/* Sai Baba image placeholder */}
							<div className="w-full max-w-lg mx-auto aspect-[3/4] bg-gradient-to-br from-orange-300 via-orange-400 to-red-400 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
								<div className="text-center">
									<div className="text-9xl mb-4">🙏</div>
									<p className="text-3xl font-bold text-white">Sai Baba</p>
									<p className="text-white/80 mt-2">Image Placeholder</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom decorative dots */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
				<div className="w-3 h-3 bg-red-600 rounded-full"></div>
				<div className="w-3 h-3 bg-gray-300 rounded-full"></div>
				<div className="w-3 h-3 bg-gray-300 rounded-full"></div>
			</div>
		</section>
	);
}
