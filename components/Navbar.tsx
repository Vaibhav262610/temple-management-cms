"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Top bar */}
			<div className="bg-white border-b border-gray-200 py-2">
				<div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-6">
						<span className="flex items-center gap-2 text-gray-600">
							📞 (+1) 630-897-1500
						</span>
						<span className="flex items-center gap-2 text-gray-600">
							✉️ PR@SAISAMSTHANUSA.ORG
						</span>
					</div>
					<div className="flex items-center gap-4">
						<Link href="#" className="text-gray-600 hover:text-primary text-sm">
							EVENT
						</Link>
						<Link href="#" className="text-gray-600 hover:text-primary text-sm">
							HOLIS
						</Link>
						<Link href="#" className="text-gray-600 hover:text-primary text-sm">
							PUJA
						</Link>
						<Link href="#" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
							🔴 LIVE
						</Link>
						<Link href="#" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
							🇺🇸 LANGUAGE
						</Link>
					</div>
				</div>
			</div>

			{/* Main navbar */}
			<nav className="bg-white shadow-sm sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center gap-3">
							<div className="text-3xl">🕉️</div>
							<span className="text-xl font-bold text-primary">
								Sai Samsthan USA
							</span>
						</div>

						<div className="hidden lg:flex items-center gap-8">
							<Link
								href="#home"
								className="text-gray-700 hover:text-primary font-medium">
								HOME
							</Link>
							<Link
								href="#about"
								className="text-gray-700 hover:text-primary font-medium">
								ABOUT
							</Link>
							<Link
								href="#blog"
								className="text-gray-700 hover:text-primary font-medium">
								BLOG
							</Link>
							<Link
								href="#pages"
								className="text-gray-700 hover:text-primary font-medium">
								PAGES
							</Link>
							<Link
								href="#service"
								className="text-gray-700 hover:text-primary font-medium">
								SERVICE
							</Link>
							<Link
								href="#donation"
								className="text-gray-700 hover:text-primary font-medium">
								DONATION
							</Link>
							<Link
								href="#contact"
								className="text-gray-700 hover:text-primary font-medium">
								CONTACT
							</Link>
							<button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
								DONATE HERE
							</button>
						</div>

						<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={
										isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
									}
								/>
							</svg>
						</button>
					</div>
				</div>

				{isOpen && (
					<div className="lg:hidden border-t">
						<div className="px-4 py-2 space-y-2">
							<Link href="#home" className="block py-2 text-gray-700">
								HOME
							</Link>
							<Link href="#about" className="block py-2 text-gray-700">
								ABOUT
							</Link>
							<Link href="#blog" className="block py-2 text-gray-700">
								BLOG
							</Link>
							<Link href="#pages" className="block py-2 text-gray-700">
								PAGES
							</Link>
							<Link href="#service" className="block py-2 text-gray-700">
								SERVICE
							</Link>
							<Link href="#donation" className="block py-2 text-gray-700">
								DONATION
							</Link>
							<Link href="#contact" className="block py-2 text-gray-700">
								CONTACT
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
