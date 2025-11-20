"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";

interface GalleryImage {
	id: string;
	image_url: string;
	title: string;
	description?: string;
	category: string;
	date: string;
}

export default function Gallery() {
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categories = [
		"all",
		"Events",
		"Temple",
		"Festivals",
		"Community",
		"Puja",
	];

	useEffect(() => {
		fetchGallery();
	}, []);

	const fetchGallery = async () => {
		try {
			const API_URL =
				process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
			const response = await fetch(`${API_URL}/cms/gallery`);

			if (response.ok) {
				const data = await response.json();
				setImages(Array.isArray(data) ? data : data.data || []);
			}
		} catch (err) {
			console.error("Failed to fetch gallery:", err);
			// Use placeholder images if API fails
			setImages([]);
		} finally {
			setLoading(false);
		}
	};

	const filteredImages =
		selectedCategory === "all"
			? images
			: images.filter((img) => img.category === selectedCategory);

	return (
		<TempleLayout title="Gallery">
			<div className="section section-padding">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Our Memories</p>
						<h4 className="title">Temple Gallery</h4>
					</div>

					{/* Category Filter */}
					<div className="text-center filter-items mb-5">
						{categories.map((cat) => (
							<button
								key={cat}
								className={`portfolio-trigger ${
									selectedCategory === cat ? "active" : ""
								}`}
								onClick={() => setSelectedCategory(cat)}
								style={{
									background: "none",
									border: "none",
									cursor: "pointer",
									margin: "0 10px",
								}}>
								{cat.charAt(0).toUpperCase() + cat.slice(1)}
							</button>
						))}
					</div>

					{loading ? (
						<div className="text-center">
							<p>Loading gallery...</p>
						</div>
					) : filteredImages.length > 0 ? (
						<div className="row">
							{filteredImages.map((image) => (
								<div key={image.id} className="col-lg-4 col-md-6 mb-4">
									<div className="sigma_portfolio-item">
										<img src={image.image_url} alt={image.title} />
										<div className="sigma_portfolio-item-content">
											<div className="sigma_portfolio-item-content-inner">
												<h5>{image.title}</h5>
												{image.description && (
													<p className="blockquote bg-transparent">
														{image.description}
													</p>
												)}
												<p className="text-muted">
													{new Date(image.date).toLocaleDateString()}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-center">
							<p>No images available in this category.</p>
						</div>
					)}
				</div>
			</div>
		</TempleLayout>
	);
}
