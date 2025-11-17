"use client";

import { useState } from "react";
import TempleLayout from "@/components/TempleLayout";
import { createCommunity, type Community } from "@/lib/api";

export default function CommunityCreate() {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		owner_id: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const [createdCommunity, setCreatedCommunity] = useState<any>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			const result = await createCommunity(formData as Community);
			setSuccess(true);
			setCreatedCommunity(result);

			// Reset form
			setFormData({
				name: "",
				description: "",
				owner_id: "",
			});

			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err: any) {
			setError(err.message || "Failed to create community");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TempleLayout title="Create Community">
			<div className="section section-padding">
				<div className="container">
					{success && createdCommunity && (
						<div className="alert alert-success mb-4" role="alert">
							<h4 className="alert-heading">Community Created Successfully!</h4>
							<p>Your community has been created.</p>
							{createdCommunity.id && (
								<>
									<hr />
									<p className="mb-0">
										Community ID: <strong>{createdCommunity.id}</strong>
									</p>
								</>
							)}
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
									<h4 className="title">Create a New Community</h4>
									<p>Fill out the form below to create a temple community</p>
								</div>

								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label>Community Name *</label>
												<input
													type="text"
													placeholder="My Temple Community"
													value={formData.name}
													onChange={(e) =>
														setFormData({ ...formData, name: e.target.value })
													}
													required
												/>
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Description *</label>
												<textarea
													placeholder="Describe your community..."
													rows={4}
													value={formData.description}
													onChange={(e) =>
														setFormData({
															...formData,
															description: e.target.value,
														})
													}
													required></textarea>
											</div>
										</div>

										<div className="col-lg-12">
											<div className="form-group">
												<label>Owner ID *</label>
												<input
													type="text"
													placeholder="b2ed9027-c8e5-4c53-b8a5-29bb582e1360"
													value={formData.owner_id}
													onChange={(e) =>
														setFormData({
															...formData,
															owner_id: e.target.value,
														})
													}
													required
												/>
												<small className="form-text text-muted">
													Your user ID (UUID format)
												</small>
											</div>
										</div>

										<div className="col-lg-12 text-center">
											<button
												type="submit"
												className="sigma_btn-custom"
												disabled={loading}>
												{loading ? "Creating..." : "Create Community"}
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
