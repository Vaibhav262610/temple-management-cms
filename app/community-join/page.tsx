"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";
import {
	submitCommunityApplication,
	getCommunities,
	type CommunityApplication,
} from "@/lib/api";

export default function CommunityJoin() {
	const [communities, setCommunities] = useState<any[]>([]);
	const [selectedCommunityId, setSelectedCommunityId] = useState("");
	const [loadingCommunities, setLoadingCommunities] = useState(true);
	const [showForm, setShowForm] = useState(false);

	const [formData, setFormData] = useState<CommunityApplication>({
		user_id: null,
		email: "",
		name: "",
		phone: "",
		message: "",
		why_join: "",
		skills: [],
		experience: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	// Fetch communities on mount
	useEffect(() => {
		const fetchCommunities = async () => {
			try {
				const data = await getCommunities();
				if (Array.isArray(data)) {
					setCommunities(data);
				} else if (data && Array.isArray(data.communities)) {
					setCommunities(data.communities);
				} else if (data && Array.isArray(data.data)) {
					setCommunities(data.data);
				} else {
					setCommunities([]);
				}
			} catch (err) {
				console.error("Failed to fetch communities:", err);
				setCommunities([]);
			} finally {
				setLoadingCommunities(false);
			}
		};
		fetchCommunities();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!selectedCommunityId) {
			setError("Please select a community");
			return;
		}

		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			await submitCommunityApplication(selectedCommunityId, formData);
			setSuccess(true);
			setFormData({
				user_id: null,
				email: "",
				name: "",
				phone: "",
				message: "",
				why_join: "",
				skills: [],
				experience: "",
			});
			setSelectedCommunityId("");
			setShowForm(false);
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to submit application");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TempleLayout title="Join Our Community">
			{/* Hero Section */}
			<div className="section section-padding bg-light">
				<div className="container">
					<div className="section-title text-center mb-5">
						<p className="subtitle">Get Involved</p>
						<h2 className="title">Join Our Temple Community</h2>
						<p className="text-muted">
							Be part of our spiritual family and contribute to our mission
						</p>
					</div>

					{success && (
						<div className="alert alert-success mb-5" role="alert">
							<h4 className="alert-heading">
								<i className="fas fa-check-circle me-2"></i>
								Application Submitted Successfully!
							</h4>
							<p className="mb-0">
								Thank you for your interest in joining our community. We will
								review your application and contact you soon.
							</p>
						</div>
					)}

					{/* Community Cards */}
					<div className="row g-4 mb-5">
						{/* Become a Volunteer Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-lift">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="flaticon-temple text-primary"
											style={{ fontSize: "4rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">
										Become a Volunteer
									</h5>
									<p className="card-text text-muted mb-4">
										Join our team and serve the community with dedication
									</p>
									<a href="/volunteer-apply" className="sigma_btn-custom">
										APPLY NOW
									</a>
								</div>
							</div>
						</div>

						{/* Make a Donation Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-lift">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="flaticon-pooja text-primary"
											style={{ fontSize: "4rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">
										Make a Donation
									</h5>
									<p className="card-text text-muted mb-4">
										Support our temple and charitable activities
									</p>
									<a href="/donation" className="sigma_btn-custom">
										DONATE
									</a>
								</div>
							</div>
						</div>

						{/* Contact Us Card */}
						<div className="col-lg-4 col-md-6">
							<div className="card h-100 shadow-sm border-0 text-center p-4 hover-lift">
								<div className="card-body">
									<div className="mb-4">
										<i
											className="flaticon-temple text-primary"
											style={{ fontSize: "4rem" }}></i>
									</div>
									<h5 className="card-title text-primary mb-3">Contact Us</h5>
									<p className="card-text text-muted mb-4">
										Get in touch with our temple team
									</p>
									<a href="/contact-us" className="sigma_btn-custom">
										CONTACT
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Join Community Button */}
					{!showForm && (
						<div className="text-center">
							<button
								onClick={() => setShowForm(true)}
								className="sigma_btn-custom btn-lg">
								<i className="fas fa-users me-2"></i>
								Join a Community Group
							</button>
						</div>
					)}

					{/* Application Form */}
					{showForm && (
						<div className="row mt-5">
							<div className="col-lg-8 mx-auto">
								<div className="card shadow border-0">
									<div className="card-body p-5">
										<div className="text-center mb-4">
											<h4 className="mb-2">Community Application Form</h4>
											<p className="text-muted">
												Fill out the form below to join a community
											</p>
										</div>

										{error && (
											<div className="alert alert-danger" role="alert">
												{error}
											</div>
										)}

										<form onSubmit={handleSubmit}>
											{/* Select Community */}
											<div className="mb-4">
												<label className="form-label fw-bold">
													Select Community{" "}
													<span className="text-danger">*</span>
												</label>
												{loadingCommunities ? (
													<p className="text-muted">Loading communities...</p>
												) : (
													<select
														className="form-select form-select-lg"
														value={selectedCommunityId}
														onChange={(e) =>
															setSelectedCommunityId(e.target.value)
														}
														required>
														<option value="">-- Choose a Community --</option>
														{Array.isArray(communities) &&
														communities.length > 0 ? (
															communities.map((community) => (
																<option key={community.id} value={community.id}>
																	{community.name}
																</option>
															))
														) : (
															<option value="" disabled>
																No communities available
															</option>
														)}
													</select>
												)}
											</div>

											{/* Name */}
											<div className="mb-4">
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

											{/* Email & Phone */}
											<div className="row mb-4">
												<div className="col-md-6">
													<label className="form-label fw-bold">
														Email <span className="text-danger">*</span>
													</label>
													<input
														type="email"
														className="form-control form-control-lg"
														placeholder="your.email@example.com"
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
												<div className="col-md-6">
													<label className="form-label fw-bold">
														Phone <span className="text-danger">*</span>
													</label>
													<input
														type="tel"
														className="form-control form-control-lg"
														placeholder="+1-555-0123"
														value={formData.phone}
														onChange={(e) =>
															setFormData({
																...formData,
																phone: e.target.value,
															})
														}
														required
													/>
												</div>
											</div>

											{/* Why Join */}
											<div className="mb-4">
												<label className="form-label fw-bold">
													Why do you want to join?{" "}
													<span className="text-danger">*</span>
												</label>
												<textarea
													className="form-control"
													rows={3}
													placeholder="Share your motivation for joining..."
													value={formData.why_join}
													onChange={(e) =>
														setFormData({
															...formData,
															why_join: e.target.value,
														})
													}
													required></textarea>
											</div>

											{/* Message */}
											<div className="mb-4">
												<label className="form-label fw-bold">
													Additional Message{" "}
													<span className="text-danger">*</span>
												</label>
												<textarea
													className="form-control"
													rows={3}
													placeholder="Tell us more about yourself..."
													value={formData.message}
													onChange={(e) =>
														setFormData({
															...formData,
															message: e.target.value,
														})
													}
													required></textarea>
											</div>

											{/* Experience */}
											<div className="mb-4">
												<label className="form-label fw-bold">
													Previous Experience{" "}
													<span className="text-danger">*</span>
												</label>
												<textarea
													className="form-control"
													rows={3}
													placeholder="Describe your relevant experience..."
													value={formData.experience}
													onChange={(e) =>
														setFormData({
															...formData,
															experience: e.target.value,
														})
													}
													required></textarea>
											</div>

											{/* Buttons */}
											<div className="d-flex gap-3 justify-content-center mt-5">
												<button
													type="button"
													className="btn btn-outline-secondary btn-lg px-5"
													onClick={() => setShowForm(false)}>
													Cancel
												</button>
												<button
													type="submit"
													className="sigma_btn-custom btn-lg px-5"
													disabled={loading || !selectedCommunityId}>
													{loading ? (
														<>
															<span className="spinner-border spinner-border-sm me-2"></span>
															Submitting...
														</>
													) : (
														<>
															Submit Application
															<i className="far fa-arrow-right ms-2"></i>
														</>
													)}
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<style jsx>{`
				.hover-lift {
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				.hover-lift:hover {
					transform: translateY(-10px);
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
				}
			`}</style>
		</TempleLayout>
	);
}
