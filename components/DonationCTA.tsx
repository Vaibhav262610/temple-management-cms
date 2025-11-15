export default function DonationCTA() {
	const donations = [
		{
			title: "Protecting Children",
			description:
				"Supporting children and families in need through Sai Baba inspired charitable programs",
			raised: 52384,
			goal: 85000,
			image:
				"https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg",
			attribution: "Suraphat Nuea-on on Pexels",
		},
		{
			title: "Donate Ngos",
			description:
				"Supporting children and families in need through Sai Baba inspired charitable programs",
			raised: 49444,
			goal: 78000,
			image:
				"https://images.pexels.com/photos/6995106/pexels-photo-6995106.jpeg",
			attribution: "Julia M Cameron on Pexels",
		},
		{
			title: "Feed The Poor",
			description:
				"Supporting children and families in need through Sai Baba inspired charitable programs",
			raised: 78334,
			goal: 96400,
			image:
				"https://images.pexels.com/photos/31095001/pexels-photo-31095001.jpeg",
			attribution: "King Shooter on Pexels",
		},
	];

	return (
		<section className="section section-padding pt-0">
			<div className="container mx-auto px-4">
				<div className="section-title text-center mb-12">
					<p className="subtitle mb-2">Make a Donation</p>
					<h4 className="title mb-4">Make a Donation to Help Community</h4>
					<p className="text-gray-600">Community Programs</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{donations.map((donation, index) => {
						const percentage = Math.round((donation.raised / donation.goal) * 100);
						return (
							<div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
								{/* Image */}
								<div className="overflow-hidden">
									<img
										src={donation.image}
										alt={`${donation.title} - ${donation.attribution}`}
										className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
										style={{ backgroundColor: "#887168" }}
									/>
								</div>

								{/* Content */}
								<div className="p-6">
									<h5 className="text-xl font-bold text-gray-900 mb-3">
										<a href="#" className="hover:text-primary transition">
											{donation.title}
										</a>
									</h5>
									<p className="text-gray-600 mb-6 leading-relaxed">
										{donation.description}
									</p>

									{/* Progress */}
									<div className="mb-6">
										<div className="flex justify-between text-sm mb-2 text-gray-600">
											<p>Raised: ${donation.raised.toLocaleString()}</p>
											<p>Goal: ${donation.goal.toLocaleString()}</p>
										</div>
										<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
											<div
												className="bg-accent-red h-full transition-all duration-500"
												style={{ width: `${percentage}%` }}></div>
										</div>
									</div>

									<a
										href="#"
										className="block w-full text-center bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition">
										Donate
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}