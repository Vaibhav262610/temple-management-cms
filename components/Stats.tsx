export default function Stats() {
	return (
		<section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Why We Are the Best of
						<br />
						Our Shirdi Sai Baba
					</h2>
					<div className="w-24 h-1 bg-red-700 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Stat 1 */}
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-32 h-32 bg-gray-900 text-white rounded-full mb-6">
							<div className="text-center">
								<div className="text-5xl font-bold">25</div>
								<div className="text-xs">YEARS</div>
							</div>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-3">
							Years of Service
						</h3>
						<p className="text-gray-600">
							Serving the community with devotion and dedication for over two
							decades
						</p>
					</div>

					{/* Stat 2 */}
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-32 h-32 bg-gray-900 text-white rounded-full mb-6 text-5xl">
							🙏
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-3">
							Daily Worship
						</h3>
						<p className="text-gray-600">
							Traditional rituals and prayers performed with utmost devotion
							every single day
						</p>
					</div>

					{/* Stat 3 */}
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-32 h-32 bg-gray-900 text-white rounded-full mb-6 text-5xl">
							👥
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-3">
							Strong Community
						</h3>
						<p className="text-gray-600">
							Thousands of devotees visit us annually seeking blessings and
							spiritual peace
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
