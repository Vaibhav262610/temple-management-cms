"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";
import {
	submitVolunteerApplication,
	getCommunities,
	type VolunteerApplication,
} from "@/lib/api";

export default function VolunteerApply() {
	const [communities, setCommunities] = useState<any[]>([]);
	const [selectedCommunityId, setSelectedCommunityId] = useState("");
	const [loadingCommunities, setLoadingCommunities] = useState(true);

	const [formData, setFormData] = useState<VolunteerApplication>({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		skills: [],
		interests: [],
		motivation: "",
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

	const availableSkills = [
		"Photography",
		"Social Media",
		"Graphic Design",
		"Event Planning",
		"Cooking",
		"Music",
		"Teaching",
		"Translation",
		"IT Support",
		"Accounting",
	];

	const availableInterests = [
		"Marketing",
		"Documentation",
		"Event Photography",
		"Community Service",
		"Youth Programs",
		"Cultural Activities",
		"Temple Services",
		"Event Management",
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			await submitVolunteerApplication(formData);
			setSuccess(true);
			setFormData({
				first_name: "",
				last_name: "",
				email: "",
				phone: "",
				skills: [],
				interests: [],
				motivation: "",
				experience: "",
			});
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to submit application");
		} finally {
			setLoading(false);
		}
	};

	const handleSkillToggle = (skill: string) => {
		setFormData((prev) => ({
			...prev,
			skills: prev.skills.includes(skill)
				? prev.skills.filter((s) => s !== skill)
				: [...prev.skills, skill],
		}));
	};

	const handleInterestToggle = (interest: string) => {
		setFormData((prev) => ({
			...prev,
			interests: prev.interests.includes(interest)
				? prev.interests.filter((i) => i !== interest)
				: [...prev.interests, interest],
		}));
	};

	return (
		<TempleLayout title="Volunteer Application">
			{/* Hero Section */}
			<div className="section section-padding bg-light">
				<div className="container">
					<div className="section-title text-center mb-5">
						<p className="subtitle">Join Our Team</p>
						<h2 className="title">Become a Volunteer</h2>
						<p className="text-muted">
							Make a difference in our community through service and dedication
						</p>
					</div>

					{success && (
						<div className="alert alert-success mb-5 shadow-sm" role="alert">
							<div className="d-flex align-items-center">
								<i className="fas fa-check-circle fa-2x text-success me-3"></i>
								<div>
									<h4 className="alert-heading mb-2">
										Application Submitted Successfully!
									</h4>
									<p className="mb-0">
										Thank you for your interest in volunteering. We will review
										your application and contact you soon.
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

					{/* Application Form */}
					<div className="row">
						<div className="col-lg-10 mx-auto">
							<div className="card shadow border-0">
								<div className="card-body p-5">
									<form onSubmit={handleSubmit}>
										{/* Community Selection */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-users me-2"></i>
												Community Preference
											</h5>
											<label className="form-label fw-bold">
												Select Community (Optional)
											</label>
											<p className="text-muted small mb-3">
												Choose a community you'd like to be associated with
											</p>
											{loadingCommunities ? (
												<div className="text-center py-3">
													<div
														className="spinner-border text-primary"
														role="status">
														<span className="visually-hidden">Loading...</span>
													</div>
													<p className="text-muted mt-2">
														Loading communities...
													</p>
												</div>
											) : (
												<select
													className="form-select form-select-lg"
													value={selectedCommunityId}
													onChange={(e) =>
														setSelectedCommunityId(e.target.value)
													}>
													<option value="">
														-- No Community Preference --
													</option>
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

										{/* Personal Information */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-user me-2"></i>
												Personal Information
											</h5>
											<div className="row g-4">
												<div className="col-md-6">
													<label className="form-label fw-bold">
														First Name <span className="text-danger">*</span>
													</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder="Enter your first name"
														value={formData.first_name}
														onChange={(e) =>
															setFormData({
																...formData,
																first_name: e.target.value,
															})
														}
														required
													/>
												</div>
												<div className="col-md-6">
													<label className="form-label fw-bold">
														Last Name <span className="text-danger">*</span>
													</label>
													<input
														type="text"
														className="form-control form-control-lg"
														placeholder="Enter your last name"
														value={formData.last_name}
														onChange={(e) =>
															setFormData({
																...formData,
																last_name: e.target.value,
															})
														}
														required
													/>
												</div>
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
														Phone Number <span className="text-danger">*</span>
													</label>
													<input
														type="tel"
														className="form-control form-control-lg"
														placeholder="+1 555-123-4567"
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
										</div>

										{/* Skills */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-tools me-2"></i>
												Your Skills
											</h5>
											<p className="text-muted mb-3">
												Select all skills that apply to you
											</p>
											<div className="row g-3">
												{availableSkills.map((skill) => (
													<div key={skill} className="col-md-6 col-lg-4">
														<div className="form-check form-check-lg">
															<input
																className="form-check-input"
																type="checkbox"
																id={`skill-${skill}`}
																checked={formData.skills.includes(skill)}
																onChange={() => handleSkillToggle(skill)}
															/>
															<label
																className="form-check-label"
																htmlFor={`skill-${skill}`}>
																{skill}
															</label>
														</div>
													</div>
												))}
											</div>
											{formData.skills.length > 0 && (
												<div className="mt-3">
													<div className="d-flex flex-wrap gap-2">
														{formData.skills.map((skill) => (
															<span
																key={skill}
																className="badge bg-primary px-3 py-2">
																{skill}
															</span>
														))}
													</div>
												</div>
											)}
										</div>

										{/* Interests */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-heart me-2"></i>
												Areas of Interest
											</h5>
											<p className="text-muted mb-3">
												Select areas where you'd like to contribute
											</p>
											<div className="row g-3">
												{availableInterests.map((interest) => (
													<div key={interest} className="col-md-6 col-lg-4">
														<div className="form-check form-check-lg">
															<input
																className="form-check-input"
																type="checkbox"
																id={`interest-${interest}`}
																checked={formData.interests.includes(interest)}
																onChange={() => handleInterestToggle(interest)}
															/>
															<label
																className="form-check-label"
																htmlFor={`interest-${interest}`}>
																{interest}
															</label>
														</div>
													</div>
												))}
											</div>
											{formData.interests.length > 0 && (
												<div className="mt-3">
													<div className="d-flex flex-wrap gap-2">
														{formData.interests.map((interest) => (
															<span
																key={interest}
																className="badge bg-success px-3 py-2">
																{interest}
															</span>
														))}
													</div>
												</div>
											)}
										</div>

										{/* Motivation */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-lightbulb me-2"></i>
												Your Motivation
											</h5>
											<label className="form-label fw-bold">
												Why do you want to volunteer?{" "}
												<span className="text-danger">*</span>
											</label>
											<textarea
												className="form-control"
												rows={5}
												placeholder="Share your motivation and what inspires you to volunteer with us..."
												value={formData.motivation}
												onChange={(e) =>
													setFormData({
														...formData,
														motivation: e.target.value,
													})
												}
												required></textarea>
										</div>

										{/* Experience */}
										<div className="mb-5">
											<h5 className="text-primary mb-4">
												<i className="fas fa-briefcase me-2"></i>
												Previous Experience
											</h5>
											<label className="form-label fw-bold">
												Tell us about your experience{" "}
												<span className="text-danger">*</span>
											</label>
											<textarea
												className="form-control"
												rows={5}
												placeholder="Describe any relevant volunteer or professional experience you have..."
												value={formData.experience}
												onChange={(e) =>
													setFormData({
														...formData,
														experience: e.target.value,
													})
												}
												required></textarea>
										</div>

										{/* Submit Button */}
										<div className="text-center pt-4">
											<button
												type="submit"
												className="sigma_btn-custom btn-lg px-5"
												disabled={loading}>
												{loading ? (
													<>
														<span className="spinner-border spinner-border-sm me-2"></span>
														Submitting Application...
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
				</div>
			</div>
		</TempleLayout>
	);
}
