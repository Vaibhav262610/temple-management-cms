"use client";

import { useState } from "react";
import TempleLayout from "@/components/TempleLayout";
import { submitContactForm, type ContactForm } from "@/lib/api";

export default function ContactUs() {
	const [formData, setFormData] = useState<ContactForm>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			await submitContactForm(formData);
			setSuccess(true);
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to submit contact form");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TempleLayout title="Contact Us">
			{/* Contact Info Section */}
			<div className="section section-padding">
				<div className="container">
					{success && (
						<div className="alert alert-success mb-4" role="alert">
							<h4 className="alert-heading">Message Sent Successfully!</h4>
							<p>
								Thank you for contacting us. We will get back to you within 24
								hours.
							</p>
						</div>
					)}

					{error && (
						<div className="alert alert-danger mb-4" role="alert">
							<h4 className="alert-heading">Error</h4>
							<p>{error}</p>
						</div>
					)}

					<div className="row">
						<div className="col-lg-4">
							<div className="sigma_icon-block icon-block-3 text-center">
								<div className="icon-wrapper">
									<i className="flaticon-temple"></i>
								</div>
								<div className="sigma_icon-block-content">
									<h5>Visit Temple</h5>
									<p>
										1101 Foran Lane
										<br />
										Aurora, IL 60506
										<br />
										United States
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block icon-block-3 text-center">
								<div className="icon-wrapper">
									<i className="flaticon-arti"></i>
								</div>
								<div className="sigma_icon-block-content">
									<h5>Call Us</h5>
									<p>
										<a href="tel:+16308971500">+1 (630) 897-1500</a>
										<br />
										Mon - Sun: 7:00 AM - 9:00 PM
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_icon-block icon-block-3 text-center">
								<div className="icon-wrapper">
									<i className="flaticon-pooja"></i>
								</div>
								<div className="sigma_icon-block-content">
									<h5>Email Us</h5>
									<p>
										<a href="mailto:pr@saisamsthanusa.org">
											pr@saisamsthanusa.org
										</a>
										<br />
										We&apos;ll respond within 24 hours
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="section pt-0 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="sigma_form style-2">
								<div className="section-title">
									<h4 className="title">Send Us a Message</h4>
									<p>
										Have questions or need assistance? Fill out the form below
										and we&apos;ll get back to you soon.
									</p>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<i className="far fa-user"></i>
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
												<i className="far fa-envelope"></i>
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
										<div className="col-lg-6">
											<div className="form-group">
												<i className="far fa-phone"></i>
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
										<div className="col-lg-6">
											<div className="form-group">
												<i className="far fa-pencil"></i>
												<input
													type="text"
													placeholder="Subject"
													value={formData.subject}
													onChange={(e) =>
														setFormData({
															...formData,
															subject: e.target.value,
														})
													}
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea
													placeholder="Enter Message"
													rows={6}
													value={formData.message}
													onChange={(e) =>
														setFormData({
															...formData,
															message: e.target.value,
														})
													}
													required></textarea>
											</div>
										</div>
										<div className="col-lg-12">
											<button
												type="submit"
												className="sigma_btn-custom"
												disabled={loading}>
												{loading ? "Sending..." : "Submit Message"}
												{!loading && (
													<i className="far fa-arrow-right ms-2"></i>
												)}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_info-wrapper style-26 ms-lg-4">
								<h5>Temple Hours</h5>
								<ul className="sigma_info style-1">
									<li>
										<strong>Monday - Friday</strong>
										<span>7:00 AM - 9:00 PM</span>
									</li>
									<li>
										<strong>Saturday - Sunday</strong>
										<span>7:00 AM - 9:00 PM</span>
									</li>
									<li>
										<strong>Morning Aarati</strong>
										<span>8:00 AM Daily</span>
									</li>
									<li>
										<strong>Evening Aarati</strong>
										<span>7:00 PM Daily</span>
									</li>
								</ul>
								<h5 className="mt-4">Follow Us</h5>
								<ul className="sigma_sm square">
									<li>
										<a href="#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="section pt-0">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.123456789!2d-88.32!3d41.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ1JzM2LjAiTiA4OMKwMTknMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
								width="100%"
								height="450"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"></iframe>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
