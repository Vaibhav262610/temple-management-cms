import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import DonationCTA from "@/components/DonationCTA";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Hero />
			<About />
			<Stats />
			<Services />
			<DonationCTA />
			<Events />
			<Gallery />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}
