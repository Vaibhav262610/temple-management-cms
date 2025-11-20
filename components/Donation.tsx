"use client";
import { useState } from "react";

export default function Donation() {
	const [donationAmount, setDonationAmount] = useState("100");
	const [paymentMethod, setPaymentMethod] = useState("online");
	const [selectedCampaign, setSelectedCampaign] = useState("1");

	const campaigns = [
		{
			id: "1",
			title: "Temple Maintenance & Development",
			target: 50000,
			raised: 32500,
			description:
				"Support the upkeep and expansion of our sacred temple facilities",
		},
		{
			id: "2",
			title: "Community Food Program",
			target: 25000,
			raised: 18750,
			description: "Provide prasad and meals to devotees and those in need",
		},
		{
			id: "3",
			title: "Religious Education",
			target: 15000,
			raised: 9800,
			description:
				"Support spiritual education programs for children and adults",
		},
		{
			id: "4",
			title: "Festival Celebrations",
			target: 20000,
			raised: 14200,
			description: "Help organize and celebrate major Hindu festivals",
		},
	];

	const predefinedAmounts = [15, 25, 45, 100, 500];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log({
			amount: donationAmount,
			paymentMethod,
			campaign: selectedCampaign,
		});
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div
				className="relative bg-cover bg-center py-20"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg?auto=compress&cs=tinysrgb&w=1600)",
				}}>
				<div className="absolute inset-0 bg-black/60"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold mb-4">Make a Donation</h1>
						<nav className="flex justify-center items-center gap-2 text-sm">
							<a href="/" className="hover:text-primary transition">
								Home
							</a>
							<span>/</span>
							<span>Donation</span>
						</nav>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<section className="section py-16">
				<div className="container mx-auto px-4">
					<div className="section-title text-center mb-12">
						<p className="subtitle mb-3">DONATE TO HELP</p>
						<h4 className="title">Make a donation to help us</h4>
					</div>

					<div className="max-w-4xl mx-auto">
						<form
							onSubmit={handleSubmit}
							className="bg-white shadow-lg rounded-lg p-8">
							{/* Donation Amount */}
							<div className="mb-8">
								<h5 className="text-xl font-bold mb-4">Donation Amount</h5>
								<div className="flex items-center gap-2 mb-4">
									<span className="bg-primary text-white px-4 py-2 rounded font-semibold">
										$
									</span>
									<input
										type="text"
										value={donationAmount}
										onChange={(e) => setDonationAmount(e.target.value)}
										placeholder="$100"
										className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
									/>
								</div>
								<div className="flex flex-wrap gap-3">
									{predefinedAmounts.map((amount) => (
										<button
											key={amount}
											type="button"
											onClick={() => setDonationAmount(amount.toString())}
											className={`px-6 py-2 rounded font-semibold transition ${
												donationAmount === amount.toString()
													? "bg-primary text-white"
													: "bg-gray-100 text-gray-700 hover:bg-gray-200"
											}`}>
											${amount}.00
										</button>
									))}
								</div>
							</div>

							{/* Payment Method */}
							<div className="mb-8">
								<h5 className="text-xl font-bold mb-4">Payment Method</h5>
								<div className="flex gap-6">
									<label className="flex items-center gap-2 cursor-pointer">
										<input
											type="radio"
											name="payment"
											value="online"
											checked={paymentMethod === "online"}
											onChange={(e) => setPaymentMethod(e.target.value)}
											className="w-4 h-4 text-primary"
										/>
										<span className="text-gray-700">Online Payment</span>
									</label>
									<label className="flex items-center gap-2 cursor-pointer">
										<input
											type="radio"
											name="payment"
											value="offline"
											checked={paymentMethod === "offline"}
											onChange={(e) => setPaymentMethod(e.target.value)}
											className="w-4 h-4 text-primary"
										/>
										<span className="text-gray-700">Offline Payment</span>
									</label>
								</div>
							</div>

							{/* Campaign Selection */}
							<div className="mb-8">
								<h5 className="text-xl font-bold mb-4">Select Campaign</h5>
								<select
									value={selectedCampaign}
									onChange={(e) => setSelectedCampaign(e.target.value)}
									className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary">
									{campaigns.map((campaign) => (
										<option key={campaign.id} value={campaign.id}>
											{campaign.title} - (Target: $
											{campaign.target.toLocaleString()})
										</option>
									))}
								</select>
							</div>

							{/* Message */}
							<div className="mb-8">
								<h5 className="text-xl font-bold mb-4">Message (Optional)</h5>
								<textarea
									rows={5}
									placeholder="Enter your message or dedication..."
									className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary resize-none"></textarea>
							</div>

							{/* Donator Details */}
							<div className="mb-8">
								<h5 className="text-xl font-bold mb-4">Donator Details</h5>
								<div className="grid md:grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="Full Name"
										required
										className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary"
									/>
									<input
										type="email"
										placeholder="Email Address"
										required
										className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary"
									/>
									<input
										type="tel"
										placeholder="Phone Number"
										className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary"
									/>
									<input
										type="text"
										placeholder="Address (Optional)"
										className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-primary"
									/>
								</div>
							</div>

							{/* Submit Button */}
							<div className="text-center">
								<button
									type="submit"
									className="bg-primary text-white px-12 py-4 rounded font-bold text-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl">
									Donate Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Campaign Cards Section */}
			<section className="section py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="section-title text-center mb-12">
						<p className="subtitle mb-3">ACTIVE CAMPAIGNS</p>
						<h4 className="title">Support Our Causes</h4>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{campaigns.map((campaign) => {
							const percentage = Math.round(
								(campaign.raised / campaign.target) * 100
							);
							return (
								<div
									key={campaign.id}
									className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
									<div className="p-6">
										<h5 className="text-lg font-bold text-gray-900 mb-3">
											{campaign.title}
										</h5>
										<p className="text-gray-600 text-sm mb-4">
											{campaign.description}
										</p>

										{/* Progress Bar */}
										<div className="mb-4">
											<div className="flex justify-between text-xs mb-2 text-gray-600">
												<span>Raised: ${campaign.raised.toLocaleString()}</span>
												<span>Goal: ${campaign.target.toLocaleString()}</span>
											</div>
											<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
												<div
													className="bg-primary h-full transition-all"
													style={{ width: `${percentage}%` }}></div>
											</div>
											<p className="text-xs text-gray-500 mt-1 text-center">
												{percentage}% Complete
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section className="section py-16 bg-gray-100">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 items-center mb-12">
						<div className="text-center md:text-right">
							<p className="subtitle mb-2">WAYS WE CAN HELP</p>
							<h4 className="title">Angels Ready To Help</h4>
						</div>
						<div className="hidden md:block">
							<p className="text-gray-700 font-semibold">
								Our mission is to share the Good of Hinduism, Loving, Faith and
								Serving. People ask questions related to Hinduism.
							</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
							<div className="relative overflow-hidden">
								<img
									src="https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="About Temple"
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute top-4 right-4 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
									<i className="flaticon-temple text-2xl"></i>
								</div>
							</div>
							<div className="p-6">
								<h5 className="text-xl font-bold mb-3">About Temple</h5>
								<p className="text-gray-600 leading-relaxed">
									Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
									Vishnu, Krishna etc. Join us in preserving our sacred
									traditions.
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
							<div className="relative overflow-hidden">
								<img
									src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="Why Hindu Temple"
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute top-4 right-4 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
									<i className="flaticon-pooja text-2xl"></i>
								</div>
							</div>
							<div className="p-6">
								<h5 className="text-xl font-bold mb-3">Why Hindu Temple</h5>
								<p className="text-gray-600 leading-relaxed">
									Temples serve as spiritual centers for worship, community
									gathering, and cultural preservation. Your support helps us
									serve better.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
