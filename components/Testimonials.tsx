export default function Testimonials() {
	const testimonials = [
		{
			name: "Rajesh Kumar",
			role: "Regular Devotee",
			text: "The peace and spiritual energy at this temple is truly divine. Every visit brings me closer to Sai Baba and fills my heart with joy.",
			rating: 5,
			avatar: "👨",
		},
		{
			name: "Priya Sharma",
			role: "Community Member",
			text: "The priests are very knowledgeable and the aarti ceremonies are conducted with great devotion. A wonderful place for spiritual growth.",
			rating: 5,
			avatar: "👩",
		},
		{
			name: "Amit Patel",
			role: "Volunteer",
			text: "Being part of this temple community has been a blessing. The charitable programs and spiritual classes are excellent.",
			rating: 5,
			avatar: "👨",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">
						Sai Baba Mandir
						<br />
						Experiences
					</h2>
					<div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Hear from our devotees about their spiritual experiences and divine
						blessings
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
							{/* Rating stars */}
							<div className="flex gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<span key={i} className="text-yellow-400 text-xl">
										⭐
									</span>
								))}
							</div>

							{/* Testimonial text */}
							<p className="text-gray-200 mb-6 italic leading-relaxed">
								"{testimonial.text}"
							</p>

							{/* Author info */}
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-3xl">
									{testimonial.avatar}
								</div>
								<div>
									<h4 className="font-bold text-lg">{testimonial.name}</h4>
									<p className="text-sm text-gray-300">{testimonial.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
