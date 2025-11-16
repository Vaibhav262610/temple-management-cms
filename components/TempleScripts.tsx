"use client";

import { useEffect } from "react";

export default function TempleScripts() {
	useEffect(() => {
		// Hide preloader after page loads
		const hidePreloader = () => {
			const preloader = document.querySelector(".sigma_preloader");
			if (preloader) {
				preloader.classList.add("hidden");
			}
		};

		// Initialize WOW.js when available
		const initWow = () => {
			if (typeof window !== "undefined" && (window as any).WOW) {
				const wow = new (window as any).WOW({
					boxClass: "wow",
					animateClass: "animated",
					offset: 0,
					mobile: true,
					live: true,
				});
				wow.init();
			}
		};

		// Hide preloader immediately
		hidePreloader();

		// Initialize WOW after a short delay
		const timer = setTimeout(initWow, 1000);

		return () => clearTimeout(timer);
	}, []);

	return null;
}
