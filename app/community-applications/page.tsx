"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";

interface Application {
	id: string;
	community_id: string;
	user_id?: string;
	email: string;
	name: string;
	phone: string;
	message: string;
	why_join: string;
	skills: string[];
	experience: string;
	status: string;
	created_at: string;
}

export default function CommunityApplications() {
	const [applications, setApplications] = useState<Application[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [communityId, setCommunityId] = useState("");

	const fetchApplications = async () => {
		if (!communityId) return;

		setLoading(true);
		setError("");

		try {
			const API_URL =
				process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
			const response = await fetch(
				`${API_URL}/communities/${communityId}/applications`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch applications");
			}

			const data = await response.json();
			setApplications(data);
		} catch (err: any) {
			setError(err.message || "Failed to load applications");
		} finally {
			setLoading(false);
		}
	};

	return (
		<TempleLayout title="Community Applications">
			<div className="section section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="sigma_form style-2">
								<div className="section-title text-center">
									<h4 className="title">View Community Applications</h4>
									<p>Enter a community ID to view its applications</p>
								</div>

								<div className="row mb-4">
									<div className="col-lg-8 mx-auto">
										<div className="form-group">
											<label>Community ID</label>
											<div className="input-group">
												<input
													type="text"
													className="form-control"
													placeholder="0bfab553-77f5-4d33-9e7c-c87a6de09ba9"
													value={communityId}
													onChange={(e) => setCommunityId(e.target.value)}
												/>
												<button
													className="sigma_btn-custom"
													onClick={fetchApplications}
													disabled={!communityId || loading}>
													{loading ? "Loading..." : "View Applications"}
												</button>
											</div>
										</div>
									</div>
								</div>

								{error && (
									<div className="alert alert-danger" role="alert">
										{error}
									</div>
								)}

								{applications.length > 0 && (
									<div className="row">
										<div className="col-lg-12">
											<h5 className="mb-4">
												Applications ({applications.length})
											</h5>
											<div className="table-responsive">
												<table className="table table-bordered">
													<thead>
														<tr>
															<th>Name</th>
															<th>Email</th>
															<th>Phone</th>
															<th>Skills</th>
															<th>Status</th>
															<th>Date</th>
														</tr>
													</thead>
													<tbody>
														{applications.map((app) => (
															<tr key={app.id}>
																<td>{app.name}</td>
																<td>{app.email}</td>
																<td>{app.phone}</td>
																<td>{app.skills.join(", ")}</td>
																<td>
																	<span
																		className={`badge ${
																			app.status === "approved"
																				? "bg-success"
																				: app.status === "rejected"
																				? "bg-danger"
																				: "bg-warning"
																		}`}>
																		{app.status}
																	</span>
																</td>
																<td>
																	{new Date(
																		app.created_at
																	).toLocaleDateString()}
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								)}

								{!loading && applications.length === 0 && communityId && (
									<div className="alert alert-info text-center" role="alert">
										No applications found for this community.
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
