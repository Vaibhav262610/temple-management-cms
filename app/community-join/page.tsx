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
	const [customSkill, setCustomSkill] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const availableSkills = [
		"event planning",
		"cooking",
		"music",
		"teaching",
		"social media",
		"photography",
		"decoration",
		"fundraising",
	];

	// Fetch communities on mount
	useEffect(() => {
		const fetchCommunities = async () => {
			try {
				const data = await getCommunities();
				// Ensure data is an array
				if (Array.isArray(data)) {
					setCommunities(data);
				} else if (data && Array.isArray(data.communities)) {
					setCommunities(data.communities);
				} else if (data && Array.isArray(data.data)) {
					setCommunities(data.data);
				} else {
					console.error("Unexpected data format:", data);
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
			// Reset form
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

	const handleAddCustomSkill = () => {
		if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
			setFormData((prev) => ({
				...prev,
				skills: [...prev.skills, customSkill.trim()],
			}));
			setCustomSkill("");
		}
	};

	const handleRemoveSkill = (skill: string) => {
		setFormData((prev) => ({
			...prev,
			skills: prev.skills.filter((s) => s !== skill),
		}));
	};

	return (
		<TempleLayout title="Join Our Community">
			<div className="section section-padding">
				<div className="container">
					{success && (
						<div className="alert alert-success mb-4" role="alert">
							<h4 className="alert-heading">
								Application Submitted Successfully!
							</h4>
							<p>
								Thank you for your interest in joining our community. We will
								review your application and contact you soon.
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
						<div className="col-lg-8 mx-auto">
							<div className="sigma_form style-2">
								<div className="section-title text-center">
									<h4 className="title">Join Temple Community</h4>
									<p>
										Fill out the form below to apply for community membership
									</p>
								</div>

								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label>Select Community *</label>
												{loadingCommunities ? (
													<p>Loading communities...</p>
												) : (
													<select
														className="form-control"
														value={selectedCommunityId}
														onChange={(e) =>
															setSelectedCommunityId(e.target.value)
														}
														required>
														<option value="">-- Select a Community --</option>
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
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Full Name *</label>
												<input
													type="text"
													placeholder="Your Full Name"
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
													placeholder="your.email@example.com"
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
												<label>Phone Number *</label>
												<input
													type="tel"
													placeholder="+1-555-0123"
													value={formData.phone}
													onChange={(e) =>
														setFormData({ ...formData, phone: e.target.value })
													}
													required
												/>
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Why do you want to join? *</label>
												<textarea
													placeholder="To contribute to community service and spiritual growth"
													rows={4}
													value={formData.why_join}
													onChange={(e) =>
														setFormData({
															...formData,
															why_join: e.target.value,
														})
													}
													required></textarea>
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Message *</label>
												<textarea
													placeholder="I would like to join this community to participate in temple activities and volunteer for events."
													rows={4}
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
											<div className="form-group">
												<label>Your Skills (Select all that apply)</label>
												<div className="row mb-3">
													{availableSkills.map((skill) => (
														<div key={skill} className="col-md-6 col-lg-4">
															<div className="form-check">
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

												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Add custom skill"
														value={customSkill}
														onChange={(e) => setCustomSkill(e.target.value)}
														onKeyPress={(e) =>
															e.key === "Enter" &&
															(e.preventDefault(), handleAddCustomSkill())
														}
													/>
													<button
														type="button"
														className="btn btn-outline-secondary"
														onClick={handleAddCustomSkill}>
														Add
													</button>
												</div>

												{formData.skills.length > 0 && (
													<div className="mt-3">
														<strong>Selected Skills:</strong>
														<div className="d-flex flex-wrap gap-2 mt-2">
															{formData.skills.map((skill) => (
																<span key={skill} className="badge bg-primary">
																	{skill}
																	<button
																		type="button"
																		className="btn-close btn-close-white ms-2"
																		style={{ fontSize: "0.6rem" }}
																		onClick={() =>
																			handleRemoveSkill(skill)
																		}></button>
																</span>
															))}
														</div>
													</div>
												)}
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Previous Experience *</label>
												<textarea
													placeholder="5 years of volunteer experience at local temple"
													rows={4}
													value={formData.experience}
													onChange={(e) =>
														setFormData({
															...formData,
															experience: e.target.value,
														})
													}
													required></textarea>
											</div>
										</div>

										<div className="col-lg-12 text-center">
											<button
												type="submit"
												className="sigma_btn-custom"
												disabled={loading || !selectedCommunityId}>
												{loading ? "Submitting..." : "Submit Application"}
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
		</TempleLayout>
	);
}
