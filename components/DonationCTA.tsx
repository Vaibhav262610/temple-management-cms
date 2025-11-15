export default function DonationCTA() {
	return (
		<section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

			<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
				<div className="text-6xl mb-6">🙏</div>
				<h2 className="text-4xl font-bold mb-4">Support Our Temple</h2>
				<p className="text-xl mb-8 opacity-90">
					Your generous donations help us maintain the temple, conduct daily
					prayers, and serve the community with love and devotion.
				</p>

				<div className="flex flex-wrap gap-4 justify-center">
					<button className="bg-white text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
						Donate Now
					</button>
					<button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition">
						Learn More
					</button>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mt-12">
					<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl mb-2">🏛️</div>
						<h3 className="font-bold mb-2">Temple Maintenance</h3>
						<p className="text-sm opacity-90">
							Support daily upkeep and facilities
						</p>
					</div>
					<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl mb-2">🍛</div>
						<h3 className="font-bold mb-2">Prasadam Service</h3>
						<p className="text-sm opacity-90">Feed devotees and community</p>
					</div>
					<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl mb-2">📚</div>
						<h3 className="font-bold mb-2">Education Programs</h3>
						<p className="text-sm opacity-90">
							Spiritual classes and workshops
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
