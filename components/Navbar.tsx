"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Top bar */}
			<div className="bg-white border-b border-gray-100 py-2.5 hidden lg:block">
				<div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-8">
						<a href="tel:+16308971500" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
							<span className="text-gray-400">📞</span>
							<span className="font-medium">(+1) 630-897-1500</span>
						</a>
						<a href="mailto:PR@SAISAMSTHANUSA.ORG" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
							<span className="text-gray-400">✉️</span>
							<span className="font-medium">PR@SAISAMSTHANUSA.ORG</span>
						</a>
					</div>
					<div className="flex items-center gap-6">
						<Link href="#event" className="text-gray-700 hover:text-primary font-medium text-xs uppercase tracking-wide transition-colors">
							EVENT
						</Link>
						<Link href="#holis" className="text-gray-700 hover:text-primary font-medium text-xs uppercase tracking-wide transition-colors">
							HOLIS
						</Link>
						<Link href="#puja" className="text-gray-700 hover:text-primary font-medium text-xs uppercase tracking-wide transition-colors">
							PUJA
						</Link>
						<Link href="#live" className="flex items-center gap-1.5 text-gray-700 hover:text-primary font-medium text-xs uppercase tracking-wide transition-colors">
							<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
							LIVE
						</Link>
						<Link href="#language" className="flex items-center gap-1.5 text-gray-700 hover:text-primary font-medium text-xs uppercase tracking-wide transition-colors">
							<span>🇺🇸</span>
							LANGUAGE
						</Link>
					</div>
				</div>
			</div>

			{/* Main navbar */}
			<nav className="bg-white shadow-sm sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="text-3xl transition-transform group-hover:scale-110">🕉️</div>
							<span className="text-2xl font-bold text-primary italic" style={{ fontFamily: 'Brush Script MT, cursive' }}>
								Sai Samsthan USA
							</span>
						</Link>

						{/* Desktop Menu */}
						<div className="hidden lg:flex items-center gap-1">
							<Link
								href="#home"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors">
								HOME
							</Link>
							<Link
								href="#about"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors">
								ABOUT
							</Link>
							<Link
								href="#blog"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors flex items-center gap-1">
								BLOG
								<span className="text-xs">+</span>
							</Link>
							<Link
								href="#pages"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors flex items-center gap-1">
								PAGES
								<span className="text-xs">+</span>
							</Link>
							<Link
								href="#service"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors flex items-center gap-1">
								SERVICE
								<span className="text-xs">+</span>
							</Link>
							<Link
								href="#donation"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors flex items-center gap-1">
								DONATION
								<span className="text-xs">+</span>
							</Link>
							<Link
								href="#contact"
								className="text-gray-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors">
								CONTACT
							</Link>
						</div>

						{/* Donate Button */}
						<div className="hidden lg:block">
							<button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-primary-dark transition-all hover:shadow-lg transform hover:-translate-y-0.5">
								DONATE HERE
							</button>
						</div>

						{/* Mobile menu button */}
						<button 
							onClick={() => setIsOpen(!isOpen)} 
							className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
							aria-label="Toggle menu">
							<svg
								className="w-6 h-6 text-gray-700"
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

				{/* Mobile menu */}
				{isOpen && (
					<div className="lg:hidden border-t bg-white">
						<div className="px-4 py-3 space-y-1">
							<Link href="#home" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								HOME
							</Link>
							<Link href="#about" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								ABOUT
							</Link>
							<Link href="#blog" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								BLOG
							</Link>
							<Link href="#pages" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								PAGES
							</Link>
							<Link href="#service" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								SERVICE
							</Link>
							<Link href="#donation" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								DONATION
							</Link>
							<Link href="#contact" className="block py-3 text-gray-700 hover:text-primary font-semibold transition-colors">
								CONTACT
							</Link>
							<div className="pt-3">
								<button className="w-full bg-primary text-white px-6 py-3 rounded-full font-bold text-sm uppercase">
									DONATE HERE
								</button>
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}