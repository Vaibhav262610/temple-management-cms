import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import About from "@/components/About";
import NewsletterCTA from "@/components/NewsletterCTA";
import DonationCTA from "@/components/DonationCTA";
import VideoBroadcast from "@/components/VideoBroadcast";
import Gallery from "@/components/Gallery";
import Volunteers from "@/components/Volunteers";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Hero />
			<ServiceCards />
			<About />
			<NewsletterCTA />
			<DonationCTA />
			<VideoBroadcast />
			<Gallery />
			<Volunteers />
			<Testimonials />
			<Events />
			<Footer />
		</div>
	);
}
