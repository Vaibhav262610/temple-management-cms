"use client";
import { useState } from "react";
import TempleLayout from "@/components/TempleLayout";
import { submitDonation } from "@/lib/api";

export default function Donation() {
	const [donationAmount, setDonationAmount] = useState("100");
	const [paymentMethod, setPaymentMethod] = useState("online");
	const [selectedCampaign, setSelectedCampaign] = useState("1");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const campaigns = [
		{
			id: "1",
			title: "Temple Maintenance & Development",
			target: 50000,
		},
		{
			id: "2",
			title: "Community Food Program",
			target: 25000,
		},
		{
			id: "3",
			title: "Religious Education",
			target: 15000,
		},
		{
			id: "4",
			title: "Festival Celebrations",
			target: 20000,
		},
	];

	const predefinedAmounts = [15, 25, 45, 100, 500];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			const amount = parseFloat(donationAmount);

			if (!amount || amount <= 0) {
				setError("Please enter a valid donation amount");
				setLoading(false);
				return;
			}

			if (!formData.name || !formData.email) {
				setError("Please fill in all required fields");
				setLoading(false);
				return;
			}

			// Only send fields that exist in the database
			const donationData = {
				donor_name: formData.name,
				donor_email: formData.email,
				donor_phone: formData.phone || null,
				amount: amount,
			};

			console.log("Submitting donation:", donationData);
			const result = await submitDonation(donationData);
			console.log("Donation result:", result);

			setSuccess(true);
			setFormData({ name: "", email: "", phone: "", message: "" });
			setDonationAmount("100");

			// Scroll to top to show success message
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to process donation. Please try again.");
		} finally {
			setLoading(false);
		}
	};

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

			{/* Donation Form */}
			<div className="section section-padding light-bg pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<div className="sigma_form style-2">
								<div className="section-title text-center">
									<h4 className="title">Make Your Donation</h4>
									<p>Fill out the form below to complete your donation</p>
								</div>

								{/* Success Message */}
								{success && (
									<div className="alert alert-success mb-4" role="alert">
										<h5 className="alert-heading">
											Thank You for Your Donation!
										</h5>
										<p>
											Your generous contribution has been received. You will
											receive a confirmation email shortly.
										</p>
									</div>
								)}

								{/* Error Message */}
								{error && (
									<div className="alert alert-danger mb-4" role="alert">
										<strong>Error:</strong> {error}
									</div>
								)}

								<form onSubmit={handleSubmit}>
									<div className="row">
										{/* Donation Amount */}
										<div className="col-12">
											<div className="form-group mb-5">
												<h5>Donation Amount</h5>
												<div className="input-group">
													<div className="input-group-prepend">
														<button
															className="sigma_btn-custom shadow-none btn-sm"
															type="button">
															$
														</button>
													</div>
													<input
														className="form-control ms-0"
														placeholder="$100"
														type="text"
														value={donationAmount}
														onChange={(e) => setDonationAmount(e.target.value)}
													/>
												</div>
												<ul className="sigma_select-amount">
													{predefinedAmounts.map((amount) => (
														<li
															key={amount}
															className={
																donationAmount === amount.toString()
																	? "active"
																	: ""
															}
															onClick={() =>
																setDonationAmount(amount.toString())
															}>
															${amount}.00
														</li>
													))}
												</ul>
											</div>
										</div>

										{/* Payment Method */}
										<div className="col-12">
											<div className="form-group mb-5">
												<h5>Payment Method</h5>
												<div className="d-flex align-items-center">
													<div className="d-flex align-items-center">
														<input
															id="radio"
															name="radio"
															type="radio"
															value="online"
															checked={paymentMethod === "online"}
															onChange={(e) => setPaymentMethod(e.target.value)}
														/>
														<label className="mb-0" htmlFor="radio">
															Online Payment
														</label>
													</div>
													<div className="d-flex align-items-center ms-4">
														<input
															id="radio2"
															name="radio"
															type="radio"
															value="offline"
															checked={paymentMethod === "offline"}
															onChange={(e) => setPaymentMethod(e.target.value)}
														/>
														<label className="mb-0" htmlFor="radio2">
															Offline Payment
														</label>
													</div>
												</div>
											</div>
										</div>

										{/* Campaign Selection */}
										<div className="col-12">
											<div className="form-group">
												<h5>Campaigns</h5>
												<select
													className="form-control"
													value={selectedCampaign}
													onChange={(e) => setSelectedCampaign(e.target.value)}>
													{campaigns.map((campaign) => (
														<option key={campaign.id} value={campaign.id}>
															{campaign.title} - (Target: $
															{campaign.target.toLocaleString()})
														</option>
													))}
												</select>
											</div>
										</div>

										{/* Donator Details */}
										<div className="col-12">
											<div className="form-group">
												<h5>Donator Details</h5>
												<div className="row">
													<div className="col-lg-6">
														<input
															className="form-control"
															name="name"
															placeholder="Full Name"
															type="text"
															value={formData.name}
															onChange={(e) =>
																setFormData({
																	...formData,
																	name: e.target.value,
																})
															}
															required
														/>
													</div>
													<div className="col-lg-6 mt-3 mt-lg-0">
														<input
															className="form-control"
															name="email"
															placeholder="Email Address"
															type="email"
															value={formData.email}
															onChange={(e) =>
																setFormData({
																	...formData,
																	email: e.target.value,
																})
															}
															required
														/>
													</div>
													<div className="col-lg-12 mt-3">
														<input
															className="form-control"
															name="phone"
															placeholder="Phone Number (Optional)"
															type="tel"
															value={formData.phone}
															onChange={(e) =>
																setFormData({
																	...formData,
																	phone: e.target.value,
																})
															}
														/>
													</div>
												</div>
											</div>
										</div>

										{/* Message */}
										<div className="col-12">
											<div className="form-group">
												<h5>Message (Optional)</h5>
												<textarea
													className="form-control"
													name="message"
													placeholder="Enter Message"
													rows={6}
													value={formData.message}
													onChange={(e) =>
														setFormData({
															...formData,
															message: e.target.value,
														})
													}></textarea>
											</div>
										</div>

										{/* Submit Button */}
										<div className="col-lg-12 text-center">
											<button
												className="sigma_btn-custom"
												type="submit"
												disabled={loading}>
												{loading ? "Processing..." : "Donate Now"}
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
			<div className="section section-padding light-bg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-5">
							<div className="section-title text-end">
								<p className="subtitle">WAYS WE CAN HELP</p>
								<h4 className="title">Angels Ready To Help</h4>
							</div>
						</div>
						<div className="col-md-2 d-none d-md-block">
							<span className="vertical-seperator"></span>
						</div>
						<div className="col-md-5 d-none d-md-block">
							<p className="fw-600 mb-0 custom-secondary">
								Our mission is to share the Good of Hinduism, Loving, Faith and
								Serving. People ask questions related to Hinduism.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<a className="sigma_service style-3" href="/services">
								<div className="sigma_service-thumb">
									<img alt="img" src="/temple/assets/img/service/1.jpg" />
									<i className="flaticon-temple"></i>
								</div>
								<div className="sigma_service-body">
									<h5>About Temple</h5>
									<p>
										Temple is a place where Hindu worship our Bhagwan Ram,
										Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
									</p>
								</div>
							</a>
						</div>
						<div className="col-lg-6 col-md-6">
							<a className="sigma_service style-3" href="/services">
								<div className="sigma_service-thumb">
									<img alt="img" src="/temple/assets/img/service/2.jpg" />
									<i className="flaticon-pooja"></i>
								</div>
								<div className="sigma_service-body">
									<h5>Why Hindu Temple</h5>
									<p>
										Temple is a place where Hindu worship our Bhagwan Ram,
										Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
