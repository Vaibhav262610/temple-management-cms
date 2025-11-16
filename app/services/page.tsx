import TempleLayout from "@/components/TempleLayout";

export default function Services() {
	return (
		<TempleLayout title="Our Services">
			{/* Services Section */}
			<div className="section section-padding">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">What We Offer</p>
						<h4 className="title">Temple Services & Programs</h4>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 primary-bg">
								<div className="sigma_service-thumb">
									<i className="flaticon-temple text-white"></i>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Daily Aarati</h5>
									<p className="text-white">
										Morning and evening aarati ceremonies dedicated to Shri
										Shirdi Sai Baba with devotional songs and prayers.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 secondary-bg">
								<div className="sigma_service-thumb">
									<i className="flaticon-arti custom-primary"></i>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Special Pujas</h5>
									<p className="text-white">
										Customized puja services for special occasions, festivals,
										and personal ceremonies.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 bg-white border">
								<div className="sigma_service-thumb">
									<i className="flaticon-pooja"></i>
								</div>
								<div className="sigma_service-body">
									<h5>Spiritual Discourses</h5>
									<p>
										Regular spiritual talks and discussions on Sai Baba&apos;s
										teachings and Hindu philosophy.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 bg-white border">
								<div className="sigma_service-thumb">
									<i className="flaticon-temple"></i>
								</div>
								<div className="sigma_service-body">
									<h5>Festival Celebrations</h5>
									<p>
										Grand celebrations of major Hindu festivals including
										Diwali, Holi, Navratri, and more.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 primary-bg">
								<div className="sigma_service-thumb">
									<i className="flaticon-arti text-white"></i>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Community Service</h5>
									<p className="text-white">
										Charitable programs including food distribution, education
										support, and social welfare activities.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-1 secondary-bg">
								<div className="sigma_service-thumb">
									<i className="flaticon-pooja custom-primary"></i>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Youth Programs</h5>
									<p className="text-white">
										Educational and cultural programs for children and youth to
										learn about Hindu traditions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Schedule Section */}
			<div className="section pt-0 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="sigma_cta primary-bg">
								<img
									className="d-none d-lg-block"
									src="/temple/assets/img/cta/1.png"
									alt="cta"
								/>
								<div className="sigma_cta-content">
									<span className="fw-600 custom-secondary">
										Temple Timings
									</span>
									<h4 className="text-white">Daily Schedule</h4>
									<p className="text-white mb-0">
										Morning Aarati: 8:00 AM
										<br />
										Evening Aarati: 7:00 PM
										<br />
										Temple Open: 7:00 AM - 9:00 PM
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="sigma_cta secondary-bg">
								<img
									className="d-none d-lg-block"
									src="/temple/assets/img/cta/2.png"
									alt="cta"
								/>
								<div className="sigma_cta-content">
									<span className="fw-600 custom-primary">
										Special Services
									</span>
									<h4 className="text-white">Book a Puja</h4>
									<p className="text-white mb-0">
										Contact us to book special pujas
										<br />
										for your family occasions
										<br />
										Call: +1 (630) 897-1500
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="section section-padding light-bg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="section-title">
								<p className="subtitle">Join Us</p>
								<h3 className="title">Become Part of Our Community</h3>
							</div>
							<p>
								Experience the divine blessings of Shri Shirdi Sai Baba. Join
								our temple community for spiritual growth, cultural programs,
								and service opportunities.
							</p>
							<div className="section-button d-flex">
								<a href="/contact-us" className="sigma_btn-custom">
									Contact Us <i className="far fa-arrow-right"></i>
								</a>
								<a href="/donation" className="sigma_btn-custom light ms-3">
									Donate <i className="far fa-arrow-right"></i>
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								src="/temple/assets/img/about.jpg"
								alt="temple"
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
