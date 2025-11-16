import TempleLayout from "@/components/TempleLayout";

export default function AboutUs() {
	return (
		<TempleLayout title="About Us">
			{/* About Section */}
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="sigma_about style-12">
								<div className="sigma_about-image-1">
									<img src="/temple/assets/img/about.jpg" alt="about" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="sigma_about style-12 ms-lg-4">
								<div className="section-title">
									<p className="subtitle">About Mandir</p>
									<h3 className="title">
										We Are Devotees of Shri Shirdi Sai Baba
									</h3>
								</div>
								<p className="blockquote bg-transparent">
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba, following His teachings of love, compassion, and
									service to humanity.
								</p>
								<p>
									Shri Shirdi Sai Baba Mandir Chicago is dedicated to serving
									the Hindu community and spreading the divine teachings of Sai
									Baba. Our temple provides a sacred space for worship,
									meditation, and spiritual growth.
								</p>
								<p>
									We organize regular pujas, festivals, and community service
									programs inspired by Sai Baba&apos;s message of universal love
									and brotherhood. Everyone is welcome to join us in our
									spiritual journey.
								</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="sigma_icon-block icon-block-3">
											<div className="icon-wrapper">
												<i className="flaticon-temple"></i>
											</div>
											<div className="sigma_icon-block-content">
												<h5>Temple Services</h5>
												<p>Daily aaratis and special puja ceremonies</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="sigma_icon-block icon-block-3">
											<div className="icon-wrapper">
												<i className="flaticon-powder-1"></i>
											</div>
											<div className="sigma_icon-block-content">
												<h5>Community Service</h5>
												<p>Charitable programs and social welfare activities</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="section pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center light icon-block-7">
								<i className="flaticon-temple"></i>
								<div className="sigma_icon-block-content">
									<h5 className="text-white">Our Mission</h5>
									<p className="text-white">
										To spread the teachings of Shri Shirdi Sai Baba and serve
										humanity with love and compassion.
									</p>
								</div>
								<span className="icon-wrapper">
									<i className="flaticon-temple"></i>
								</span>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center light icon-block-7">
								<i className="flaticon-arti"></i>
								<div className="sigma_icon-block-content">
									<h5 className="text-white">Our Vision</h5>
									<p className="text-white">
										To create a spiritual community that embodies Sai
										Baba&apos;s message of unity and service.
									</p>
								</div>
								<span className="icon-wrapper">
									<i className="flaticon-arti"></i>
								</span>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center light icon-block-7">
								<i className="flaticon-pooja"></i>
								<div className="sigma_icon-block-content">
									<h5 className="text-white">Our Values</h5>
									<p className="text-white">
										Faith, devotion, service, and universal brotherhood as
										taught by Sai Baba.
									</p>
								</div>
								<span className="icon-wrapper">
									<i className="flaticon-pooja"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Counter Section */}
			<div className="section section-padding light-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="sigma_counter style-2">
								<div className="sigma_counter-inner">
									<div className="sigma_counter-icon">
										<i className="flaticon-temple"></i>
									</div>
									<div className="sigma_counter-content">
										<span className="counter" data-from="0" data-to="25">
											25
										</span>
										<span>+</span>
										<p className="custom-primary">Years of Service</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="sigma_counter style-2">
								<div className="sigma_counter-inner">
									<div className="sigma_counter-icon">
										<i className="flaticon-arti"></i>
									</div>
									<div className="sigma_counter-content">
										<span className="counter" data-from="0" data-to="5000">
											5000
										</span>
										<span>+</span>
										<p className="custom-primary">Devotees</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="sigma_counter style-2">
								<div className="sigma_counter-inner">
									<div className="sigma_counter-icon">
										<i className="flaticon-pooja"></i>
									</div>
									<div className="sigma_counter-content">
										<span className="counter" data-from="0" data-to="100">
											100
										</span>
										<span>+</span>
										<p className="custom-primary">Events Annually</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="sigma_counter style-2">
								<div className="sigma_counter-inner">
									<div className="sigma_counter-icon">
										<i className="flaticon-temple"></i>
									</div>
									<div className="sigma_counter-content">
										<span className="counter" data-from="0" data-to="50">
											50
										</span>
										<span>+</span>
										<p className="custom-primary">Volunteers</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
