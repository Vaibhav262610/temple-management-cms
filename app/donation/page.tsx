"use client";

import { useState } from "react";
import TempleLayout from "@/components/TempleLayout";
import { submitDonation, type DonationForm } from "@/lib/api";

export default function Donation() {
	const [formData, setFormData] = useState<DonationForm>({
		name: "",
		email: "",
		phone: "",
		amount: 51,
		custom_amount: undefined,
		message: "",
	});
	const [selectedAmount, setSelectedAmount] = useState<string>("51");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleAmountChange = (amount: string) => {
		setSelectedAmount(amount);
		if (amount === "custom") {
			setFormData({ ...formData, amount: 0 });
		} else {
			setFormData({
				...formData,
				amount: parseInt(amount),
				custom_amount: undefined,
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		// Validate amount
		const finalAmount =
			selectedAmount === "custom" ? formData.custom_amount : formData.amount;
		if (!finalAmount || finalAmount <= 0) {
			setError("Please enter a valid donation amount");
			setLoading(false);
			return;
		}

		try {
			const donationData = {
				...formData,
				amount: finalAmount,
			};
			await submitDonation(donationData);
			setSuccess(true);
			setFormData({
				name: "",
				email: "",
				phone: "",
				amount: 51,
				custom_amount: undefined,
				message: "",
			});
			setSelectedAmount("51");
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to process donation");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TempleLayout title="Make a Donation">
			{/* Donation Intro */}
			<div className="section section-padding">
				<div className="container">
					{success && (
						<div className="alert alert-success mb-4" role="alert">
							<h4 className="alert-heading">Thank You for Your Donation!</h4>
							<p>
								Your generous contribution will help us continue our mission of
								service and spirituality. You will receive a confirmation email
								shortly.
							</p>
						</div>
					)}

					{error && (
						<div className="alert alert-danger mb-4" role="alert">
							<h4 className="alert-heading">Error</h4>
							<p>{error}</p>
						</div>
					)}

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
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label>Donation Amount *</label>
												<div className="sigma_donation-amount-wrapper">
													<input
														type="radio"
														name="amount"
														id="amount1"
														value="51"
														checked={selectedAmount === "51"}
														onChange={(e) => handleAmountChange(e.target.value)}
													/>
													<label htmlFor="amount1">$51</label>

													<input
														type="radio"
														name="amount"
														id="amount2"
														value="101"
														checked={selectedAmount === "101"}
														onChange={(e) => handleAmountChange(e.target.value)}
													/>
													<label htmlFor="amount2">$101</label>

													<input
														type="radio"
														name="amount"
														id="amount3"
														value="251"
														checked={selectedAmount === "251"}
														onChange={(e) => handleAmountChange(e.target.value)}
													/>
													<label htmlFor="amount3">$251</label>

													<input
														type="radio"
														name="amount"
														id="amount4"
														value="501"
														checked={selectedAmount === "501"}
														onChange={(e) => handleAmountChange(e.target.value)}
													/>
													<label htmlFor="amount4">$501</label>

													<input
														type="radio"
														name="amount"
														id="amount5"
														value="custom"
														checked={selectedAmount === "custom"}
														onChange={(e) => handleAmountChange(e.target.value)}
													/>
													<label htmlFor="amount5">Custom</label>
												</div>
											</div>
										</div>

										{selectedAmount === "custom" && (
											<div className="col-lg-12">
												<div className="form-group">
													<label>Custom Amount ($) *</label>
													<input
														type="number"
														placeholder="Enter custom amount"
														min="1"
														value={formData.custom_amount || ""}
														onChange={(e) =>
															setFormData({
																...formData,
																custom_amount:
																	parseInt(e.target.value) || undefined,
															})
														}
														required
													/>
												</div>
											</div>
										)}

										<div className="col-lg-6">
											<div className="form-group">
												<label>Full Name *</label>
												<input
													type="text"
													placeholder="Full Name"
													value={formData.name}
													onChange={(e) =>
														setFormData({ ...formData, name: e.target.value })
													}
													required
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<label>Email Address *</label>
												<input
													type="email"
													placeholder="Email Address"
													value={formData.email}
													onChange={(e) =>
														setFormData({ ...formData, email: e.target.value })
													}
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Phone Number</label>
												<input
													type="text"
													placeholder="Phone Number"
													value={formData.phone}
													onChange={(e) =>
														setFormData({ ...formData, phone: e.target.value })
													}
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Message (Optional)</label>
												<textarea
													placeholder="Any message or dedication..."
													rows={4}
													value={formData.message}
													onChange={(e) =>
														setFormData({
															...formData,
															message: e.target.value,
														})
													}></textarea>
											</div>
										</div>
										<div className="col-lg-12 text-center">
											<button
												type="submit"
												className="sigma_btn-custom"
												disabled={loading}>
												{loading ? "Processing..." : "Proceed to Payment"}
												{!loading && (
													<i className="far fa-arrow-right ms-2"></i>
												)}
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
