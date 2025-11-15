"use client";
import { useState } from "react";

export default function NewsletterCTA() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Thank you for subscribing!");
		setEmail("");
	};

	return (
		<section className="section pt-0">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-12 gap-0 relative">
					{/* Left side - Hotline */}
					<div className="md:col-span-7 bg-primary text-white p-8 lg:p-12 flex items-center">
						<div className="w-full">
							<p className="text-sm mb-2 font-semibold">
								Need Help, Call Our HOTLINE!
							</p>
							<h4 className="text-3xl lg:text-4xl font-bold text-white">
								+1 (630) 897-1500
							</h4>
						</div>
					</div>

					{/* Separator */}
					<span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary text-white px-6 py-2 text-sm font-semibold">
						or
					</span>

					{/* Right side - Newsletter */}
					<div className="md:col-span-5 bg-primary text-white p-8 lg:p-12">
						<form onSubmit={handleSubmit} className="w-full">
							<label className="block text-sm mb-3 font-semibold text-white">
								Sai Baba Mandir Newsletter
							</label>
							<div className="flex bg-white rounded overflow-hidden">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter email address"
									required
									className="flex-1 px-4 py-3 text-gray-900 focus:outline-none text-sm"
								/>
								<button
									type="submit"
									className="bg-accent-red text-white px-6 hover:bg-red-700 transition flex items-center justify-center">
									<i className="far fa-envelope text-lg"></i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}