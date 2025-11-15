export default function About() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						About Shirdi Sai Baba
					</h2>
					<div className="w-24 h-1 bg-red-700 mx-auto"></div>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Image placeholder */}
					<div className="relative">
						<div className="aspect-[4/3] bg-gradient-to-br from-orange-300 to-red-400 rounded-2xl shadow-xl flex items-center justify-center">
							<div className="text-center text-white">
								<div className="text-8xl mb-4">🕉️</div>
								<p className="text-2xl font-bold">Sai Baba Image</p>
							</div>
						</div>
					</div>

					{/* Content */}
					<div>
						<h3 className="text-3xl font-bold text-gray-900 mb-6">
							The Life and Teachings of Sai Baba
						</h3>
						<p className="text-gray-600 mb-4 leading-relaxed">
							Shirdi Sai Baba was an Indian spiritual master who is regarded by
							his devotees as a saint, fakir, and satguru. He is revered by both
							Hindu and Muslim devotees and during his lifetime, he was critical
							of both faiths.
						</p>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Sai Baba taught a moral code of love, forgiveness, helping others,
							charity, contentment, inner peace, and devotion to God and guru.
							His philosophy was Advaita Vedanta and his teachings consisted of
							elements both of this school as well as of bhakti and Islam.
						</p>

						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
									✓
								</div>
								<p className="text-gray-700">
									Promoted religious tolerance and harmony
								</p>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
									✓
								</div>
								<p className="text-gray-700">
									Emphasized selfless service to humanity
								</p>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
									✓
								</div>
								<p className="text-gray-700">
									Taught the path of devotion and surrender
								</p>
							</div>
						</div>

						<button className="mt-8 bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
