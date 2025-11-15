export default function VideoBroadcast() {
	const videos = [
		{
			title: "Varansi at Night",
			thumbnail:
				"https://images.pexels.com/photos/8773931/pexels-photo-8773931.jpeg",
		},
		{
			title: "Chaar Dhaam Yatra",
			thumbnail:
				"https://images.pexels.com/photos/27023262/pexels-photo-27023262.jpeg",
		},
		{
			title: "Mahashivratri Temple",
			thumbnail:
				"https://images.pexels.com/photos/28808373/pexels-photo-28808373.jpeg",
		},
		{
			title: "OM Mahashivratri",
			thumbnail:
				"https://images.pexels.com/photos/18331984/pexels-photo-18331984.jpeg",
		},
	];

	return (
		<section className="section section-padding pt-0">
			<div className="container mx-auto px-4">
				<div className="section-title text-center mb-12">
					<p className="subtitle mb-2">Watch Video</p>
					<h4 className="title">Sai Baba Live Broadcast</h4>
				</div>

				<div className="mb-12">
					<div className="grid lg:grid-cols-2 gap-0 items-center bg-white shadow-lg">
						<div className="relative aspect-video bg-gray-900 group cursor-pointer overflow-hidden">
							<img
								src="https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg"
								alt="Sai Baba Live Broadcast"
								className="w-full h-full object-cover"
								style={{ backgroundColor: "#CE9438" }}
							/>
							<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
								<a
									href="#"
									className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
									<i className="fas fa-play text-accent-red text-2xl ml-1"></i>
								</a>
							</div>
						</div>

						<div className="p-8 lg:p-12">
							<p className="text-primary text-sm mb-2 font-semibold">
								Aug 12, 2025
							</p>
							<h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
								Daily Aaratis and Spiritual Discourses
							</h4>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai
								Baba, following His teachings of love, compassion, and service
								to humanity. This is where you should start Temple is place
								where hindu worship consectetur adipisicing elit, sed do
							</p>
							<a
								href="#"
								className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition">
								Watch Video
							</a>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
					{videos.map((video, index) => (
						<div key={index} className="group cursor-pointer">
							<div className="relative aspect-video bg-gray-900 overflow-hidden mb-3 shadow-md">
								<img
									src={video.thumbnail}
									alt={video.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									style={{ backgroundColor: "#887168" }}
								/>
								<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
									<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
										<i className="fas fa-play text-accent-red ml-1"></i>
									</div>
								</div>
							</div>
							<h6 className="text-base font-semibold text-gray-900">
								{video.title}
							</h6>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}