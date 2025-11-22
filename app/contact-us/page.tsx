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
			{/* Hero Section */}
			<div className="section section-padding bg-light">
				<div className="container">
					<div className="section-title text-center mb-5">
						<p className="subtitle">Get In Touch</p>
						<h2 className="title">Contact Us</h2>
						<p className="text-muted">
							We'd love to hear from you. Reach out to us for any inquiries
						</p>
					</div>

					{success && (
						<div className="alert alert-success mb-5 shadow-sm" role="alert">
							<div className="d-flex align-items-center">
								<i className="fas fa-check-circle fa-2x text-success me-3"></i>
								<div>
									<h4 className="alert-heading mb-2">
										Message Sent Successfully!
									</h4>
									<p className="mb-0">
										Thank you for contacting us. We will get back to you soon.
									</p>
								</div>
							</div>
						</div>
					)}

					{error && (
						<div className="alert alert-danger mb-5 shadow-sm" role="alert">
							<div className="d-flex align-items-center">
								<i className="fas fa-exclamation-circle fa-2x text-danger me-3"></i>
								<div>
									<h4 className="alert-heading mb-2">Error</h4>
									<p className="mb-0">{error}</p>
								</div>
							</div>
						</div>
					)}

					{/* Contact Info Cards */}
					<div className="row g-4 mb-5">
						{/* Phone Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-card">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="fas fa-phone-alt text-primary"
											style={{ fontSize: "3rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">Phone</h5>
									<p className="card-text text-muted mb-2">
										<a
											href="tel:+16308971500"
											className="text-decoration-none text-dark">
											+1 (630) 897-1500
										</a>
									</p>
									<p className="text-muted small">
										Mon - Sun: 7:00 AM - 9:00 PM
									</p>
								</div>
							</div>
						</div>

						{/* Email Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-card">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="fas fa-envelope text-primary"
											style={{ fontSize: "3rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">Email</h5>
									<p className="card-text text-muted mb-2">
										<a
											href="mailto:pr@saisamsthanusa.org"
											className="text-decoration-none text-dark">
											pr@saisamsthanusa.org
										</a>
									</p>
									<p className="text-muted small">
										We'll respond within 24 hours
									</p>
								</div>
							</div>
						</div>

						{/* Address Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-card">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="fas fa-map-marker-alt text-primary"
											style={{ fontSize: "3rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">Address</h5>
									<p className="card-text text-muted mb-2">
										1101 Foran Lane
										<br />
										Aurora, IL 60506
										<br />
										USA
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="row">
						<div className="col-lg-10 mx-auto">
							<div className="card shadow border-0">
								<div className="card-body p-5">
									<div className="text-center mb-5">
										<h4 className="mb-2">Send Us a Message</h4>
										<p className="text-muted">
											Fill out the form below and we'll get back to you as soon
											as possible
										</p>
									</div>

									<form onSubmit={handleSubmit}>
										<div className="row g-4">
											{/* Name */}
											<div className="col-md-6">
												<label className="form-label fw-bold">
													Full Name <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="Enter your full name"
													value={formData.name}
													onChange={(e) =>
														setFormData({ ...formData, name: e.target.value })
													}
													required
												/>
											</div>

											{/* Email */}
											<div className="col-md-6">
												<label className="form-label fw-bold">
													Email Address <span className="text-danger">*</span>
												</label>
												<input
													type="email"
													className="form-control form-control-lg"
													placeholder="your.email@example.com"
													value={formData.email}
													onChange={(e) =>
														setFormData({ ...formData, email: e.target.value })
													}
													required
												/>
											</div>

											{/* Phone */}
											<div className="col-md-6">
												<label className="form-label fw-bold">
													Phone Number
												</label>
												<input
													type="tel"
													className="form-control form-control-lg"
													placeholder="+1 555-123-4567"
													value={formData.phone}
													onChange={(e) =>
														setFormData({ ...formData, phone: e.target.value })
													}
												/>
											</div>

											{/* Subject */}
											<div className="col-md-6">
												<label className="form-label fw-bold">
													Subject <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="What is this regarding?"
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

											{/* Message */}
											<div className="col-12">
												<label className="form-label fw-bold">
													Message <span className="text-danger">*</span>
												</label>
												<textarea
													className="form-control"
													rows={6}
													placeholder="Write your message here..."
													value={formData.message}
													onChange={(e) =>
														setFormData({
															...formData,
															message: e.target.value,
														})
													}
													required></textarea>
											</div>

											{/* Submit Button */}
											<div className="col-12 text-center pt-3">
												<button
													type="submit"
													className="sigma_btn-custom btn-lg px-5"
													disabled={loading}>
													{loading ? (
														<>
															<span className="spinner-border spinner-border-sm me-2"></span>
															Sending Message...
														</>
													) : (
														<>
															Send Message
															<i className="far fa-paper-plane ms-2"></i>
														</>
													)}
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					{/* Map Section */}
					<div className="row mt-5">
						<div className="col-12">
							<div className="card shadow border-0">
								<div className="card-body p-0">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.8157!2d-88.3200!3d41.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ1JzM4LjIiTiA4OMKwMTknMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
										width="100%"
										height="450"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.hover-card {
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.hover-card:hover {
					transform: translateY(-10px);
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
				}
			`}</style>
		</TempleLayout>
	);
}
