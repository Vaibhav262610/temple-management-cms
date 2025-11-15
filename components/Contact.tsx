"use client";
import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Thank you for contacting us!");
		setFormData({ name: "", email: "", phone: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section
			id="contact"
			className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
					<div className="w-24 h-1 bg-white mx-auto mb-4"></div>
					<p className="text-red-100 max-w-2xl mx-auto">
						Have questions or need assistance? Contact us today
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block mb-2 font-semibold">Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300"
									placeholder="Your Name"
								/>
							</div>
							<div>
								<label className="block mb-2 font-semibold">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300"
									placeholder="your@email.com"
								/>
							</div>
							<div>
								<label className="block mb-2 font-semibold">Phone</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300"
									placeholder="+1 (555) 123-4567"
								/>
							</div>
							<div>
								<label className="block mb-2 font-semibold">Message</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300"
									placeholder="Your message..."></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-white text-red-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
								Send Message
							</button>
						</form>
					</div>

					<div>
						<h3 className="text-2xl font-bold mb-6">Visit Us</h3>
						<div className="space-y-6">
							<div>
								<h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
									<span>📍</span> Address
								</h4>
								<p className="text-red-100 pl-7">
									123 Temple Street
									<br />
									City, State 12345
									<br />
									United States
								</p>
							</div>
							<div>
								<h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
									<span>📞</span> Phone
								</h4>
								<p className="text-red-100 pl-7">+1 (555) 123-4567</p>
							</div>
							<div>
								<h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
									<span>✉️</span> Email
								</h4>
								<p className="text-red-100 pl-7">info@saisamsthan.org</p>
							</div>
							<div>
								<h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
									<span>🕐</span> Temple Hours
								</h4>
								<p className="text-red-100 pl-7">
									Monday - Friday: 6:00 AM - 9:00 PM
									<br />
									Saturday - Sunday: 5:00 AM - 10:00 PM
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
