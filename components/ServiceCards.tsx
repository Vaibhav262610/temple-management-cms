export default function ServiceCards() {
	const services = [
		{
			title: "Temple",
			description:
				"Supporting children and families in need through Sai Baba inspired charitable programs",
			icon: "flaticon-temple",
			bgColor: "bg-white",
			textColor: "text-gray-900",
			border: true,
		},
		{
			title: "Puja",
			description:
				"Support our charitable activities and community service programs inspired by Sai Baba's teachings",
			icon: "flaticon-arti",
			bgColor: "bg-primary",
			textColor: "text-white",
			border: false,
		},
		{
			title: "Donation",
			description:
				"Support our charitable activities and community service programs inspired by Sai Baba's teachings",
			icon: "flaticon-pooja",
			bgColor: "bg-accent-red",
			textColor: "text-white",
			border: false,
		},
	];

	return (
		<section className="section section-padding">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<a
							key={index}
							href="#"
							className={`${service.bgColor} ${
								service.border ? "border border-gray-200" : ""
							} text-center p-8 hover:shadow-xl transition-all group`}>
							<div className="mb-6">
								<div className="relative inline-block">
									<i
										className={`${service.icon} ${
											service.bgColor === "bg-white"
												? "text-primary"
												: "text-white"
										} text-6xl`}></i>
									<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-current opacity-5 rounded-full -z-10"></span>
									<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-current opacity-5 rounded-full -z-10"></span>
								</div>
							</div>
							<div>
								<h5 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
									{service.title}
								</h5>
								<p
									className={`${service.textColor} ${
										service.bgColor === "bg-white" ? "opacity-70" : ""
									} leading-relaxed`}>
									{service.description}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}