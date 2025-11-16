import TempleLayout from "@/components/TempleLayout";

export default function Puja() {
	return (
		<TempleLayout title="Puja Services">
			{/* Puja Grid */}
			<div className="section section-padding">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Our Services</p>
						<h4 className="title">Special Puja & Ceremonies</h4>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/1.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Sai Baba Aarati</a>
										</h5>
										<p className="blockquote bg-transparent">
											Daily morning and evening aarati with devotional songs
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/2.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Abhishekam</a>
										</h5>
										<p className="blockquote bg-transparent">
											Sacred bathing ceremony with milk, honey, and holy water
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/3.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Satyanarayan Puja</a>
										</h5>
										<p className="blockquote bg-transparent">
											Auspicious puja for prosperity and well-being
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/4.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Ganesh Puja</a>
										</h5>
										<p className="blockquote bg-transparent">
											Worship of Lord Ganesha for removing obstacles
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/5.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Lakshmi Puja</a>
										</h5>
										<p className="blockquote bg-transparent">
											Worship of Goddess Lakshmi for wealth and prosperity
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img src="/temple/assets/img/puja/6.jpg" alt="puja" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Navagraha Puja</a>
										</h5>
										<p className="blockquote bg-transparent">
											Worship of nine planets for astrological benefits
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Puja Booking */}
			<div className="section section-padding light-bg pt-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="section-title">
								<p className="subtitle">Book a Puja</p>
								<h3 className="title">Schedule Your Special Ceremony</h3>
							</div>
							<p>
								We offer personalized puja services for various occasions
								including birthdays, anniversaries, housewarmings, and other
								special events.
							</p>
							<ul className="sigma_list style-2">
								<li>Experienced priests and pandits</li>
								<li>Traditional Vedic rituals</li>
								<li>Customized ceremonies</li>
								<li>All puja materials provided</li>
								<li>Flexible scheduling</li>
							</ul>
							<div className="section-button d-flex">
								<a href="/contact-us" className="sigma_btn-custom">
									Book Now <i className="far fa-arrow-right"></i>
								</a>
								<a
									href="tel:+16308971500"
									className="sigma_btn-custom light ms-3">
									Call Us <i className="far fa-phone"></i>
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								src="/temple/assets/img/puja/1.jpg"
								alt="puja"
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Puja Timings */}
			<div className="section pt-0">
				<div className="container">
					<div className="section-title text-center">
						<h4 className="title">Daily Puja Schedule</h4>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="sigma_info-wrapper style-26">
								<h5>Morning Schedule</h5>
								<ul className="sigma_info style-1">
									<li>
										<strong>Kakad Aarati</strong>
										<span>5:00 AM</span>
									</li>
									<li>
										<strong>Abhishekam</strong>
										<span>6:00 AM</span>
									</li>
									<li>
										<strong>Morning Aarati</strong>
										<span>8:00 AM</span>
									</li>
									<li>
										<strong>Madhyan Aarati</strong>
										<span>12:00 PM</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="sigma_info-wrapper style-26">
								<h5>Evening Schedule</h5>
								<ul className="sigma_info style-1">
									<li>
										<strong>Dhoop Aarati</strong>
										<span>5:00 PM</span>
									</li>
									<li>
										<strong>Evening Aarati</strong>
										<span>7:00 PM</span>
									</li>
									<li>
										<strong>Shej Aarati</strong>
										<span>9:00 PM</span>
									</li>
									<li>
										<strong>Temple Closes</strong>
										<span>9:30 PM</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
