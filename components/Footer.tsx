export default function Footer() {
	const recentPosts = [
		{
			date: "May 20, 2025",
			title: "As we've all discovered by now, the world can change",
			image:
				"https://images.pexels.com/photos/27023262/pexels-photo-27023262.jpeg",
		},
		{
			date: "May 20, 2025",
			title: "Testimony love offering so blessed",
			image:
				"https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg",
		},
		{
			date: "May 20, 2025",
			title: "As we've all discovered by now, the world can change",
			image:
				"https://images.pexels.com/photos/28808373/pexels-photo-28808373.jpeg",
		},
	];

	return (
		<footer className="bg-primary text-white">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-bold mb-4">About Us</h3>
						<p className="text-sm text-white/80 mb-6 leading-relaxed">
							Shri Shirdi Sai Baba Mandir Chicago is dedicated to serving the
							Hindu community and spreading the divine teachings of Sai Baba.
						</p>
						<div className="space-y-3 text-sm">
							<p className="flex items-center gap-2">
								<span>📞</span> +1 (630) 897-1500
							</p>
							<p className="flex items-center gap-2">
								<span>✉️</span> pr@saisamsthanusa.org
							</p>
							<p className="flex items-center gap-2">
								<span>📍</span> 1101 Foran Lane, Aurora, IL 60506 USA
							</p>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Information</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Puja
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									About Mandir
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Media
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Volunteers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Donation
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Others</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Shop
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Checkout
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Donation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-white/80 hover:text-white transition">
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Recent Posts</h3>
						<div className="space-y-4">
							{recentPosts.map((post, index) => (
								<div key={index} className="flex gap-3">
									<div className="w-16 h-16 bg-white/20 rounded overflow-hidden flex-shrink-0">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-xs text-white/60 mb-1">📅 {post.date}</p>
										<p className="text-sm text-white/90 leading-tight">
											{post.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="bg-primary-dark py-4">
				<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-white/80">
						Copyright © Shri Shirdi Sai Baba Mandir - 2025
					</p>
					<div className="flex gap-3">
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition text-sm">
							f
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition text-sm">
							in
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition text-sm">
							🐦
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition text-sm">
							▶
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
