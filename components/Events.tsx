export default function Events() {
	const blogPosts = [
		{
			title: "Education for all rural children are necessary.",
			date: "May 20, 2025",
			tags: ["Temple", "Love"],
			image:
				"https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwc2Nob29sfGVufDB8MHx8fDE3NjMyMzk3Nzd8MA&ixlib=rb-4.1.0&q=85",
			author: "Yesh Chopra",
			authorAvatar: "https://i.pravatar.cc/50?u=yesh",
			attribution: "Rewired Digital on Unsplash",
		},
		{
			title: "Reconstruct or new construct Temple",
			date: "May 20, 2025",
			tags: ["Temple", "Love"],
			image:
				"https://images.pexels.com/photos/27023262/pexels-photo-27023262.jpeg",
			author: "Yesh Chopra",
			authorAvatar: "https://i.pravatar.cc/50?u=yesh2",
			attribution: "Tanmoy Pal on Pexels",
		},
		{
			title: "Ensure child safety & health in World",
			date: "May 20, 2025",
			tags: ["Temple", "Love"],
			image:
				"https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg",
			author: "Yesh Chopra",
			authorAvatar: "https://i.pravatar.cc/50?u=yesh3",
			attribution: "Suraphat Nuea-on on Pexels",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-accent-red font-semibold mb-2">Blog</p>
					<h2 className="text-4xl font-bold mb-4">Sai Baba News</h2>
					<div className="w-24 h-1 bg-accent-red mx-auto mb-4"></div>
					<p className="text-gray-300">News Feed Updates</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
							{/* Image */}
							<div className="h-56 overflow-hidden">
								<img
									src={post.image}
									alt={`${post.title} - ${post.attribution}`}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									style={{ backgroundColor: "#887168" }}
								/>
							</div>

							{/* Content */}
							<div className="p-6">
								{/* Tags and date */}
								<div className="flex items-center gap-3 mb-3 text-sm">
									{post.tags.map((tag, i) => (
										<span key={i} className="text-accent-red font-semibold">
											{tag}
											{i < post.tags.length - 1 && ","}
										</span>
									))}
									<span className="text-gray-400">📅 {post.date}</span>
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-accent-red transition">
									{post.title}
								</h3>

								{/* Author */}
								<div className="flex items-center gap-3 pt-4 border-t border-gray-200">
									<div className="w-10 h-10 rounded-full overflow-hidden">
										<img
											src={post.authorAvatar}
											alt={post.author}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-sm text-gray-600">By</p>
										<p className="font-semibold text-gray-900">{post.author}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}