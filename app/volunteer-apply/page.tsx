"use client";

import { useState } from "react";
import TempleLayout from "@/components/TempleLayout";
import {
	submitVolunteerApplication,
	type VolunteerApplication,
} from "@/lib/api";

export default function VolunteerApply() {
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
			// Reset form
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
			// Scroll to top to show success message
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
			<div className="section section-padding">
				<div className="container">
					{success && (
						<div className="alert alert-success mb-4" role="alert">
							<h4 className="alert-heading">
								Application Submitted Successfully!
							</h4>
							<p>
								Thank you for your interest in volunteering. We will review your
								application and contact you soon.
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
									<h4 className="title">Become a Volunteer</h4>
									<p>Fill out the form below to apply as a temple volunteer</p>
								</div>

								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<label>First Name *</label>
												<input
													type="text"
													placeholder="First Name"
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
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<label>Last Name *</label>
												<input
													type="text"
													placeholder="Last Name"
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
										<div className="col-lg-6">
											<div className="form-group">
												<label>Phone Number *</label>
												<input
													type="tel"
													placeholder="+1 555-123-4567"
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
												<label>Skills (Select all that apply)</label>
												<div className="row">
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
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Areas of Interest (Select all that apply)</label>
												<div className="row">
													{availableInterests.map((interest) => (
														<div key={interest} className="col-md-6 col-lg-4">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id={`interest-${interest}`}
																	checked={formData.interests.includes(
																		interest
																	)}
																	onChange={() =>
																		handleInterestToggle(interest)
																	}
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
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Why do you want to volunteer? *</label>
												<textarea
													placeholder="Tell us about your motivation to volunteer..."
													rows={4}
													value={formData.motivation}
													onChange={(e) =>
														setFormData({
															...formData,
															motivation: e.target.value,
														})
													}
													required></textarea>
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Previous Experience *</label>
												<textarea
													placeholder="Describe any relevant volunteer or professional experience..."
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
												disabled={loading}>
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
