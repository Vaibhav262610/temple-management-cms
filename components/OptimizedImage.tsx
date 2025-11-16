"use client";
import { useState } from "react";

interface OptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	width?: number;
	height?: number;
	priority?: boolean;
}

export default function OptimizedImage({
	src,
	alt,
	className = "",
	width,
	height,
	priority = false,
}: OptimizedImageProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	return (
		<div className={`relative ${className}`}>
			{isLoading && !hasError && (
				<div className="absolute inset-0 bg-gray-200 animate-pulse rounded-inherit" />
			)}
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`${className} transition-opacity duration-300 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
				onLoad={() => setIsLoading(false)}
				onError={() => {
					setIsLoading(false);
					setHasError(true);
				}}
				loading={priority ? "eager" : "lazy"}
				decoding="async"
			/>
			{hasError && (
				<div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
					Failed to load
				</div>
			)}
		</div>
	);
}