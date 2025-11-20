import TempleScripts from "@/components/TempleScripts";

export default function Puja() {
	return (
		<>
			<TempleScripts />

			{/* Preloader */}
			<div className="sigma_preloader">
				<img alt="preloader" src="/temple/assets/img/om.svg" />
			</div>

			{/* Header */}
			<header className="sigma_header header-3 can-sticky header-absolute">
				<div className="sigma_header-middle">
					<nav className="navbar">
						<div className="sigma_logo-wrapper">
							<a className="navbar-brand" href="/">
								<img src="/temple/assets/img/logo.png" alt="logo" />
							</a>
						</div>

						<div className="sigma_header-inner">
							<div className="sigma_header-top">
								<div className="sigma_header-top-inner">
									<ul className="sigma_header-top-links">
										<li className="menu-item">
											<a href="tel:+16308971500">
												<i className="fal fa-phone"></i> (+1) 630-897-1500
											</a>
										</li>
										<li className="menu-item">
											<a href="mailto:pr@saisamsthanusa.org">
												<i className="fal fa-envelope"></i>{" "}
												pr@saisamsthanusa.org
											</a>
										</li>
									</ul>
									<ul className="navbar-nav">
										<li className="menu-item menu-item-has-children">
											<a href="#">Event</a>
											<ul className="sub-menu">
												<li className="menu-item">
													<a href="/events">Event</a>
												</li>
												<li className="menu-item">
													<a href="/event-details">Event Detail</a>
												</li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children">
											<a href="#">Puja</a>
											<ul className="sub-menu">
												<li className="menu-item">
													<a href="/puja">Puja</a>
												</li>
												<li className="menu-item">
													<a href="/puja-details">Puja Details</a>
												</li>
											</ul>
										</li>
									</ul>
									<ul className="sigma_header-top-links">
										<li className="d-flex align-items-center">
											<a href="/broadcast" className="live">
												<i className="fa fa-circle"></i> Live
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="d-flex justify-content-center justify-content-lg-between">
								<ul className="navbar-nav">
									<li className="menu-item">
										<a href="/">Home</a>
									</li>
									<li className="menu-item">
										<a href="/about-us">About</a>
									</li>
									<li className="menu-item menu-item-has-children">
										<a href="#">Pages</a>
										<ul className="sub-menu">
											<li className="menu-item">
												<a href="/broadcast">Broadcast</a>
											</li>
											<li className="menu-item">
												<a href="/volunteers">Volunteers</a>
											</li>
										</ul>
									</li>
									<li className="menu-item menu-item-has-children">
										<a href="#">Service</a>
										<ul className="sub-menu">
											<li className="menu-item">
												<a href="/services">Service Style 1</a>
											</li>
											<li className="menu-item">
												<a href="/services">Service Style 2</a>
											</li>
										</ul>
									</li>
									<li className="menu-item menu-item-has-children">
										<a href="#">Donation</a>
										<ul className="sub-menu">
											<li className="menu-item">
												<a href="/donation">Donation</a>
											</li>
											<li className="menu-item">
												<a href="/donation-archive">Donation Archive</a>
											</li>
										</ul>
									</li>
									<li className="menu-item">
										<a href="/contact-us">Contact</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="sigma_header-controls style-2">
							<a href="/donation" className="sigma_btn-custom">
								Donate Here
							</a>
							<ul className="sigma_header-controls-inner">
								<li className="aside-toggler style-2 aside-trigger-left">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>

			{/* Mobile Nav */}
			<aside className="sigma_aside sigma_aside-left">
				<a className="navbar-brand" href="/">
					<img alt="logo" src="/temple/assets/img/logo.png" />
				</a>
				<ul>
					<li className="menu-item">
						<a href="/">Home</a>
					</li>
					<li className="menu-item">
						<a href="/about-us">About Us</a>
					</li>
					<li className="menu-item">
						<a href="/broadcast">Broadcast</a>
					</li>
					<li className="menu-item">
						<a href="/volunteers">Volunteers</a>
					</li>
					<li className="menu-item">
						<a href="/donation">Donation</a>
					</li>
					<li className="menu-item">
						<a href="/puja">Puja</a>
					</li>
					<li className="menu-item">
						<a href="/contact-us">Contact</a>
					</li>
				</ul>
			</aside>
			<div className="sigma_aside-overlay aside-trigger-left"></div>

			{/* Subheader */}
			<div
				className="sigma_subheader dark-overlay dark-overlay-2"
				style={{ backgroundImage: "url(/temple/assets/img/subheader.jpg)" }}>
				<div className="container">
					<div className="sigma_subheader-inner">
						<div className="sigma_subheader-text">
							<h1>Puja</h1>
						</div>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a className="btn-link" href="/">
										Home
									</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									Puja
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>

			{/* Puja Categories */}
			<div className="section section-padding">
				<div className="container">
					<div className="portfolio-filter row">
						{/* Daily Pujas */}
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/1.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Archana</h5>
										<p>Simple offering ceremony - $11</p>
										<p>Daily worship service for devotees</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/2.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Abhishek</h5>
										<p>Sacred bathing ceremony - $21</p>
										<p>Performed at 9:30 AM daily</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/3.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Baba Chaddar (Mandir Provided)</h5>
										<p>Shawl offering - $101</p>
										<p>Special shawl provided by temple</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/4.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Baba Chaddar (Devotee Provided)</h5>
										<p>Shawl offering - $11</p>
										<p>Shawl brought by devotee</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/5.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Baba Dress (Mandir Provided)</h5>
										<p>Dress offering - $151</p>
										<p>Special dress provided by temple</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/6.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Baba Dress (Devotee Provided)</h5>
										<p>Dress offering - $32</p>
										<p>Dress brought by devotee</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>

						{/* Special Pujas */}
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/7.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Vaahana Puja</h5>
										<p>Vehicle blessing - $51</p>
										<p>Blessing ceremony for vehicles</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/8.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Gruha Pravesham</h5>
										<p>House blessing - $301</p>
										<p>Includes Vastu Puja and Homam</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/9.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Sri Sai Satya Vrat</h5>
										<p>$101 / $151</p>
										<p>Monthly Purnima ceremony</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>

						{/* Life Event Pujas */}
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/10.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Naama Karanam</h5>
										<p>Naming ceremony - $101 / $151</p>
										<p>Baby naming ceremony</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/11.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Anna Praasana</h5>
										<p>First feeding - $101 / $151</p>
										<p>Baby first feeding ceremony</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/12.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Vivaha Ceremony</h5>
										<p>Marriage ceremony - $301 / $501</p>
										<p>Wedding ceremony</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/13.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Ayush Puja</h5>
										<p>Birthday ceremony - $101 / $151</p>
										<p>Birthday blessing ceremony</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/14.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Shastipoorthi Puja</h5>
										<p>60th Birthday - $151 / $201</p>
										<p>60th birthday celebration</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_portfolio-item">
								<img alt="puja" src="/temple/assets/img/puja/15.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>Havan / Homam</h5>
										<p>Fire ceremony - $151 / $201</p>
										<p>Sacred fire ritual</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="sigma_footer footer-2 sigma_footer-dark">
				<div className="sigma_footer-middle">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">About Us</h5>
								<p className="mb-4">
									You need to be sure there isn&apos;t anything embarrassing
									hidden in the middle of text.
								</p>
								<div className="d-flex align-items-center justify-content-md-start justify-content-center">
									<i className="far fa-phone custom-primary me-3"></i>
									<span>(+1) 630-897-1500</span>
								</div>
								<div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
									<i className="far fa-envelope custom-primary me-3"></i>
									<span>pr@saisamsthanusa.org</span>
								</div>
								<div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
									<i className="far fa-map-marker custom-primary me-3"></i>
									<span>1101 Foran Lane, Aurora, IL 60506 USA</span>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">Information</h5>
								<ul>
									<li>
										<a href="/puja">Puja</a>
									</li>
									<li>
										<a href="/services">Services</a>
									</li>
									<li>
										<a href="/about-us">Temple</a>
									</li>
									<li>
										<a href="/volunteers">Volunteers</a>
									</li>
									<li>
										<a href="/events">Donation</a>
									</li>
								</ul>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">Others</h5>
								<ul>
									<li>
										<a href="/donation-archive">Donation</a>
									</li>
									<li>
										<a href="/contact-us">Contact Us</a>
									</li>
								</ul>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
								<h5 className="widget-title">Recent Posts</h5>
								<article className="sigma_recent-post">
									<a href="/blog-details">
										<img src="/temple/assets/img/blog/sm/1.jpg" alt="post" />
									</a>
									<div className="sigma_recent-post-body">
										<a href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
										<h6>
											<a href="/blog-details">
												As we&apos;ve all discovered by now, the world can
												change
											</a>
										</h6>
									</div>
								</article>
								<article className="sigma_recent-post">
									<a href="/blog-details">
										<img src="/temple/assets/img/blog/sm/2.jpg" alt="post" />
									</a>
									<div className="sigma_recent-post-body">
										<a href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
										<h6>
											<a href="/blog-details">
												Testimony love offering so blessed
											</a>
										</h6>
									</div>
								</article>
								<article className="sigma_recent-post">
									<a href="/blog-details">
										<img src="/temple/assets/img/blog/sm/3.jpg" alt="post" />
									</a>
									<div className="sigma_recent-post-body">
										<a href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
										<h6>
											<a href="/blog-details">
												As we&apos;ve all discovered by now, the world can
												change
											</a>
										</h6>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="sigma_footer-bottom">
					<div className="container-fluid">
						<div className="sigma_footer-copyright">
							<p>
								Copyright © Maharatri -{" "}
								<a href="#" className="text-white">
									2025
								</a>
							</p>
						</div>
						<ul className="sigma_sm square">
							<li>
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-youtube"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}
