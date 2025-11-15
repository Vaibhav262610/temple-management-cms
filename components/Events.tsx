export default function Events() {
	const events = [
		{
			title: "Ram Navami Celebration",
			date: "April 6, 2026",
			time: "8:00 AM - 8:00 PM",
			description:
				"Celebrate the birth of Lord Rama with special prayers, bhajans, and prasadam distribution",
			image: "🏛️",
		},
		{
			title: "Guru Purnima",
			date: "July 13, 2026",
			time: "7:00 AM - 9:00 PM",
			description:
				"Honor spiritual teachers and gurus with special ceremonies and devotional programs",
			image: "🙏",
		},
		{
			title: "Diwali Festival",
			date: "October 24, 2026",
			time: "6:00 AM - 10:00 PM",
			description:
				"Festival of lights celebration with special aarti, decorations, and community gathering",
			image: "🪔",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Explore Our
						<br />
						Upcoming Events
					</h2>
					<div className="w-24 h-1 bg-red-700 mx-auto mb-4"></div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Join us for our upcoming spiritual celebrations and community events
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
							{/* Event image placeholder */}
							<div className="h-48 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center text-white text-6xl">
								{event.image}
							</div>

							{/* Event details */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-3">
									{event.title}
								</h3>
								<div className="space-y-2 mb-4">
									<p className="text-red-700 font-semibold flex items-center gap-2">
										<span>📅</span> {event.date}
									</p>
									<p className="text-gray-600 flex items-center gap-2">
										<span>🕐</span> {event.time}
									</p>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{event.description}
								</p>
								<button className="mt-4 text-red-700 font-semibold hover:text-red-800">
									Learn More →
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
