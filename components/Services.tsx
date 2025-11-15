export default function Services() {
	const services = [
		{
			title: "Daily Aarti",
			description:
				"Experience the divine atmosphere during our morning and evening aarti ceremonies",
			icon: "🪔",
			time: "6:00 AM & 7:00 PM",
		},
		{
			title: "Abhishekam",
			description:
				"Sacred ritual bathing of the deity performed with devotion every Thursday",
			icon: "💧",
			time: "Every Thursday",
		},
		{
			title: "Prasadam",
			description:
				"Receive blessed food offerings distributed to all devotees after prayers",
			icon: "🍛",
			time: "After Each Aarti",
		},
		{
			title: "Bhajan Sessions",
			description:
				"Join us for devotional singing and spiritual music every weekend",
			icon: "🎵",
			time: "Saturdays & Sundays",
		},
		{
			title: "Special Pujas",
			description:
				"Book personalized prayer ceremonies for special occasions and blessings",
			icon: "🙏",
			time: "By Appointment",
		},
		{
			title: "Spiritual Classes",
			description:
				"Learn about Sai Baba teachings, meditation, and spiritual practices",
			icon: "📚",
			time: "Every Saturday",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Wish Submitted by
						<br />
						From Community
					</h2>
					<div className="w-24 h-1 bg-red-700 mx-auto mb-4"></div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						We offer various spiritual services and programs to serve our
						devotees
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all">
							<div className="text-5xl mb-4">{service.icon}</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-4">{service.description}</p>
							<div className="text-sm text-red-700 font-semibold flex items-center gap-2">
								<span>🕐</span> {service.time}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
