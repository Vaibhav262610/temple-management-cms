export default function Gallery() {
	const galleryImages = [
		{
			title: "Temple Exterior",
			emoji: "🏛️",
			gradient: "from-orange-400 to-red-500",
		},
		{
			title: "Main Sanctum",
			emoji: "🕉️",
			gradient: "from-red-400 to-pink-500",
		},
		{
			title: "Aarti Ceremony",
			emoji: "🪔",
			gradient: "from-yellow-400 to-orange-500",
		},
		{
			title: "Festival Celebration",
			emoji: "🎉",
			gradient: "from-purple-400 to-pink-500",
		},
		{
			title: "Community Gathering",
			emoji: "👥",
			gradient: "from-blue-400 to-purple-500",
		},
		{
			title: "Prasadam Distribution",
			emoji: "🍛",
			gradient: "from-green-400 to-teal-500",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Explore Our
						<br />
						Temple Gallery
					</h2>
					<div className="w-24 h-1 bg-red-700 mx-auto mb-4"></div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Glimpses of our beautiful temple, spiritual celebrations, and
						community events
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
							<div
								className={`absolute inset-0 bg-gradient-to-br ${image.gradient} flex items-center justify-center`}>
								<div className="text-center text-white">
									<div className="text-7xl mb-3">{image.emoji}</div>
									<p className="text-xl font-bold">{image.title}</p>
								</div>
							</div>
							<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
