import TempleLayout from "@/components/TempleLayout";

export default function Donation() {
	return (
		<TempleLayout title="Make a Donation">
			{/* Donation Intro */}
			<div className="section section-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="section-title">
								<p className="subtitle">Support Our Mission</p>
								<h3 className="title">Your Donation Makes a Difference</h3>
							</div>
							<p>
								Your generous contributions help us maintain the temple,
								organize spiritual programs, and serve the community through
								various charitable activities inspired by Sai Baba&apos;s
								teachings.
							</p>
							<p>
								Every donation, big or small, helps us continue our mission of
								spreading love, compassion, and service to humanity.
							</p>
							<ul className="sigma_list style-2">
								<li>Temple Maintenance & Operations</li>
								<li>Daily Puja & Aarati Services</li>
								<li>Festival Celebrations</li>
								<li>Community Service Programs</li>
								<li>Educational Activities</li>
								<li>Food Distribution</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<img
								src="/temple/assets/img/donation/5.jpg"
								alt="donation"
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Donation Options */}
			<div className="section pt-0">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Ways to Donate</p>
						<h4 className="title">Choose Your Donation Method</h4>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img src="/temple/assets/img/donation/5.jpg" alt="donation" />
								</div>
								<div className="sigma_service-body">
									<h5>General Donation</h5>
									<p>Support overall temple operations and maintenance</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Goal: $100,000</p>
										</div>
									</div>
									<a href="#" className="sigma_btn-custom">
										Donate Now
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img src="/temple/assets/img/donation/6.jpg" alt="donation" />
								</div>
								<div className="sigma_service-body">
									<h5>Puja Sponsorship</h5>
									<p>Sponsor special pujas and ceremonies</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Starting from $51</p>
										</div>
									</div>
									<a href="#" className="sigma_btn-custom">
										Sponsor Puja
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img src="/temple/assets/img/donation/7.jpg" alt="donation" />
								</div>
								<div className="sigma_service-body">
									<h5>Community Service</h5>
									<p>Support charitable and welfare programs</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Any Amount</p>
										</div>
									</div>
									<a href="#" className="sigma_btn-custom">
										Contribute
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Donation Form */}
			<div className="section section-padding light-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<div className="sigma_form style-2">
								<div className="section-title text-center">
									<h4 className="title">Make Your Donation</h4>
									<p>Fill out the form below to complete your donation</p>
								</div>
								<form>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label>Donation Amount</label>
												<div className="sigma_donation-amount-wrapper">
													<input
														type="radio"
														name="amount"
														id="amount1"
														value="51"
													/>
													<label htmlFor="amount1">$51</label>
													<input
														type="radio"
														name="amount"
														id="amount2"
														value="101"
													/>
													<label htmlFor="amount2">$101</label>
													<input
														type="radio"
														name="amount"
														id="amount3"
														value="251"
													/>
													<label htmlFor="amount3">$251</label>
													<input
														type="radio"
														name="amount"
														id="amount4"
														value="501"
													/>
													<label htmlFor="amount4">$501</label>
													<input
														type="radio"
														name="amount"
														id="amount5"
														value="custom"
													/>
													<label htmlFor="amount5">Custom</label>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="text"
													placeholder="Full Name"
													name="name"
													required
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="email"
													placeholder="Email Address"
													name="email"
													required
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="text"
													placeholder="Phone Number"
													name="phone"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="text"
													placeholder="Custom Amount"
													name="custom_amount"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea
													name="message"
													placeholder="Message (Optional)"
													rows={4}></textarea>
											</div>
										</div>
										<div className="col-lg-12 text-center">
											<button type="submit" className="sigma_btn-custom">
												Proceed to Payment{" "}
												<i className="far fa-arrow-right"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Other Ways to Donate */}
			<div className="section pt-0">
				<div className="container">
					<div className="section-title text-center">
						<h4 className="title">Other Ways to Donate</h4>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center">
								<i className="flaticon-temple"></i>
								<div className="sigma_icon-block-content">
									<h5>By Check</h5>
									<p>
										Mail your check to:
										<br />
										Shri Shirdi Sai Baba Mandir
										<br />
										1101 Foran Lane
										<br />
										Aurora, IL 60506
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center">
								<i className="flaticon-arti"></i>
								<div className="sigma_icon-block-content">
									<h5>Bank Transfer</h5>
									<p>
										Contact us for bank details
										<br />
										Call: +1 (630) 897-1500
										<br />
										Email: pr@saisamsthanusa.org
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block text-center">
								<i className="flaticon-pooja"></i>
								<div className="sigma_icon-block-content">
									<h5>In Person</h5>
									<p>
										Visit the temple during
										<br />
										operating hours
										<br />
										7:00 AM - 9:00 PM Daily
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
