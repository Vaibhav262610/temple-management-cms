import TempleScripts from "@/components/TempleScripts";

export default function Home() {
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
						<a href="/contact-us">Contact</a>
					</li>
				</ul>
			</aside>
			<div className="sigma_aside-overlay aside-trigger-left"></div>

			{/* Banner */}
			<div
				className="sigma_banner banner-1 bg-cover light-overlay bg-center bg-norepeat"
				style={{ backgroundImage: "url(/temple/assets/img/banner/9.jpg)" }}>
				<div className="sigma_banner-slider">
					<div className="sigma_banner-slider-inner">
						<div className="sigma_banner-text">
							<div className="container position-relative">
								<div className="row align-items-center">
									<div className="col-lg-6">
										<div className="sigma_box primary-bg banner-cta">
											<h1 className="text-white title">
												Welcome to Shri Shirdi Sai Baba Mandir
											</h1>
											<p className="blockquote light light-border mb-0">
												Sabka Malik Ek – God is One. We are devotees of Shri
												Shirdi Sai Baba, following His teachings of love,
												compassion, and service to humanity.
											</p>
											<div className="section-button d-flex align-items-center">
												<a
													className="sigma_btn-custom secondary"
													href="/contact-us">
													Become a Devotee{" "}
													<i className="far fa-arrow-right"></i>
												</a>
												<a
													className="ms-3 sigma_btn-custom light text-white"
													href="/donation">
													Donate Us <i className="far fa-arrow-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<img
									alt="png"
									className="d-none d-lg-block w-50 mt-0"
									src="/temple/assets/img/banner/png/4-a.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services */}
			<div className="section section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<a
								className="sigma_service border text-center style-1 bg-white"
								href="/services">
								<div className="sigma_service-thumb">
									<i className="flaticon-temple"></i>
									<span></span>
									<span></span>
								</div>
								<div className="sigma_service-body">
									<h5>Temple</h5>
									<p>
										Supporting children and families in need through Sai Baba
										inspired charitable programs
									</p>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6">
							<a
								className="sigma_service border text-center style-1 primary-bg"
								href="/services">
								<div className="sigma_service-thumb">
									<i className="text-white flaticon-arti"></i>
									<span></span>
									<span></span>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Puja</h5>
									<p className="text-white">
										Support our charitable activities and community service
										programs inspired by Sai Baba&apos;s teachings
									</p>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6">
							<a
								className="sigma_service border text-center style-1 secondary-bg"
								href="/services">
								<div className="sigma_service-thumb">
									<i className="custom-primary flaticon-pooja"></i>
									<span></span>
									<span></span>
								</div>
								<div className="sigma_service-body">
									<h5 className="text-white">Donation</h5>
									<p className="text-white">
										Support our charitable activities and community service
										programs inspired by Sai Baba&apos;s teachings
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* About */}
			<section className="section pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 d-none d-lg-block">
							<div
								className="sigma_counter bg-cover primary-overlay bg-norepeat bg-center"
								style={{
									backgroundImage: "url(/temple/assets/img/counter.jpg)",
								}}>
								<h4>
									<b className="counter" data-from="0" data-to="25">
										25
									</b>{" "}
									<span>+</span>
								</h4>
								<p>Devotees Served</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="me-lg-30">
								<div className="section-title mb-0 text-start">
									<p className="subtitle">Serving the Hindu Community</p>
									<h4 className="title">
										We Are Devotees of Shri Shirdi Sai Baba.
									</h4>
								</div>
								<p className="blockquote bg-transparent">
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba, following His teachings of love, compassion, and
									service to humanity.
								</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="sigma_icon-block icon-block-3">
											<div className="icon-wrapper">
												<i className="flaticon-temple"></i>
											</div>
											<div className="sigma_icon-block-content">
												<h5>Temple</h5>
												<p>
													Support our charitable activities and community
													service programs inspired by Sai Baba&apos;s teachings
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="sigma_icon-block icon-block-3">
											<div className="icon-wrapper">
												<i className="flaticon-powder-1"></i>
											</div>
											<div className="sigma_icon-block-content">
												<h5>Donation</h5>
												<p>
													Support our charitable activities and community
													service programs inspired by Sai Baba&apos;s teachings
												</p>
											</div>
										</div>
									</div>
								</div>
								<a className="sigma_btn-custom light" href="/about-us">
									Learn More <i className="far fa-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<div className="section pt-0">
				<div className="container">
					<div className="row position-relative">
						<div className="col-lg-7 col-md-6">
							<div className="sigma_cta lg primary-bg">
								<div className="sigma_cta-content">
									<span className="fw-600 custom-secondary">
										Need Help, Call Our HOTLINE!
									</span>
									<h4 className="text-white">+1 (630) 897-1500</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 position-relative">
							<div className="sigma_cta sm primary-bg">
								<span className="sigma_cta-sperator d-none d-lg-flex">or</span>
								<div className="sigma_cta-content">
									<form method="post">
										<label className="mb-0 text-white">
											Sai Baba Mandir Newsletter
										</label>
										<div className="sigma_search-adv-input">
											<input
												className="form-control"
												name="search"
												placeholder="Enter email address"
												type="text"
											/>
											<button name="button" type="submit">
												<i className="far fa-envelope"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Donation */}
			<div className="section section-padding pt-0">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Make a Donation</p>
						<h4 className="title">
							Make a Donation to Help Community Programs
						</h4>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img alt="img" src="/temple/assets/img/donation/5.jpg" />
								</div>
								<div className="sigma_service-body">
									<h5>
										<a href="/donation">Protecting Children</a>
									</h5>
									<p>
										Supporting children and families in need through Sai Baba
										inspired charitable programs
									</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Raised: $52,384</p>
											<p>Goal: $85,000</p>
										</div>
										<div className="sigma_progress">
											<div className="progress">
												<div
													aria-valuemax={100}
													aria-valuemin={0}
													aria-valuenow={84}
													className="progress-bar"
													role="progressbar"></div>
											</div>
										</div>
									</div>
									<a className="sigma_btn-custom" href="/donation">
										Donate
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img alt="img" src="/temple/assets/img/donation/6.jpg" />
								</div>
								<div className="sigma_service-body">
									<h5>
										<a href="/donation">Donate Ngos</a>
									</h5>
									<p>
										Supporting children and families in need through Sai Baba
										inspired charitable programs
									</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Raised: $49,444</p>
											<p>Goal: $78,000</p>
										</div>
										<div className="sigma_progress">
											<div className="progress">
												<div
													aria-valuemax={100}
													aria-valuemin={0}
													aria-valuenow={65}
													className="progress-bar"
													role="progressbar"></div>
											</div>
										</div>
									</div>
									<a className="sigma_btn-custom" href="/donation">
										Donate
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="sigma_service style-2">
								<div className="sigma_service-thumb">
									<img alt="img" src="/temple/assets/img/donation/7.jpg" />
								</div>
								<div className="sigma_service-body">
									<h5>
										<a href="/donation">Feed The Poor</a>
									</h5>
									<p>
										Supporting children and families in need through Sai Baba
										inspired charitable programs
									</p>
									<div className="sigma_service-progress">
										<div className="progress-content">
											<p>Raised: $78,334</p>
											<p>Goal: $96,400</p>
										</div>
										<div className="sigma_progress">
											<div className="progress">
												<div
													aria-valuemax={100}
													aria-valuemin={0}
													aria-valuenow={94}
													className="progress-bar"
													role="progressbar"></div>
											</div>
										</div>
									</div>
									<a className="sigma_btn-custom" href="/donation">
										Donate
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Broadcast */}
			<div className="section section-padding pt-0">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Watch Video</p>
						<h4 className="title">Sai Baba Live Broadcast</h4>
					</div>
					<div className="row sigma_broadcast-video">
						<div className="col-12 mb-5">
							<div className="row g-0 align-items-center">
								<div className="col-lg-6">
									<div className="sigma_video-popup-wrap">
										<img
											alt="video"
											src="/temple/assets/img/video-gallery/01.png"
										/>
										<a
											className="sigma_video-popup popup-youtube"
											href="https://www.youtube.com/watch?v=TKnufs85hXk">
											<i className="fas fa-play"></i>
										</a>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_box m-0">
										<p className="custom-primary mb-0 fw-600 fs-16">
											Aug 12, 2025
										</p>
										<h4 className="title">
											Daily Aaratis and Spiritual Discourses
										</h4>
										<p className="m-0">
											Sabka Malik Ek – God is One. We are devotees of Shri
											Shirdi Sai Baba, following His teachings of love,
											compassion, and service to humanity.
										</p>
										<a
											className="sigma_btn-custom section-button"
											href="/broadcast">
											Watch Video
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img alt="video" src="/temple/assets/img/video-gallery/1.png" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Varansi at Night</h6>
						</div>
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img alt="video" src="/temple/assets/img/video-gallery/2.jpg" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Chaar Dhaam Yatra</h6>
						</div>
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img alt="video" src="/temple/assets/img/video-gallery/3.jpg" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Mahashivratri Temple</h6>
						</div>
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img alt="video" src="/temple/assets/img/video-gallery/4.jpg" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">OM Mahashivratri</h6>
						</div>
					</div>
				</div>
			</div>

			{/* Puja */}
			<div className="section section-padding light-bg">
				<div className="container">
					<div className="section-title text-start flex-title">
						<div>
							<p className="subtitle">Puja</p>
							<h4 className="title mb-lg-0">Sai Baba Pujas</h4>
						</div>
						<div className="text-center filter-items me-0 mb-0">
							<h5 className="active portfolio-trigger" data-filter="*">
								All
							</h5>
							<h5 className="portfolio-trigger" data-filter=".coaching">
								Durga Puja
							</h5>
							<h5 className="portfolio-trigger" data-filter=".stakeholder">
								Raksha Bandhan
							</h5>
							<h5 className="portfolio-trigger" data-filter=".relations">
								Holi
							</h5>
						</div>
					</div>
					<div className="portfolio-filter row">
						<div className="col-lg-4 coaching">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/1.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Durga Puja</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 strategy">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/2.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Raksha Bandhan</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 coaching strategy">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/3.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Janmashtmi</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 relations coaching">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/4.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Mahashivratri</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 stakeholder strategy">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/5.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Holi</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
									</div>
									<a href="/puja-details">
										<i className="fal fa-plus"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 stakeholder">
							<div className="sigma_portfolio-item">
								<img alt="portfolio" src="/temple/assets/img/puja/6.jpg" />
								<div className="sigma_portfolio-item-content">
									<div className="sigma_portfolio-item-content-inner">
										<h5>
											<a href="/puja-details">Diwali</a>
										</h5>
										<p className="blockquote bg-transparent">
											Puja is the worship of the Lord, consectet ur adipisicing
											elit, sed do eiusmod
										</p>
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

			{/* Volunteers */}
			<div
				className="section section-padding bg-cover secondary-overlay bg-center bg-norepeat"
				style={{ backgroundImage: "url(/temple/assets/img/bg2.jpg)" }}>
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle text-white">Who</p>
						<h4 className="title text-white">Sai Baba Mandir Volunteers</h4>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="sigma_volunteers volunteers-4">
								<div className="sigma_volunteers-thumb">
									<img
										alt="volunteers"
										src="/temple/assets/img/volunteers/4.jpg"
									/>
									<ul className="sigma_sm">
										<li>
											<a className="trigger-volunteers-socials" href="#">
												<i className="fal fa-plus"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="sigma_volunteers-body">
									<div className="sigma_volunteers-info">
										<p className="text-white">Temple Pandit</p>
										<h5 className="text-white">
											<a href="/volunteer-detail">Rakesh K Pandey</a>
										</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="sigma_volunteers volunteers-4">
								<div className="sigma_volunteers-thumb">
									<img
										alt="volunteers"
										src="/temple/assets/img/volunteers/6.jpg"
									/>
									<ul className="sigma_sm">
										<li>
											<a className="trigger-volunteers-socials" href="#">
												<i className="fal fa-plus"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="sigma_volunteers-body">
									<div className="sigma_volunteers-info">
										<p className="text-white">Temple Member</p>
										<h5 className="text-white">
											<a href="/volunteer-detail">Yesh Chopra</a>
										</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="sigma_volunteers volunteers-4">
								<div className="sigma_volunteers-thumb">
									<img
										alt="volunteers"
										src="/temple/assets/img/volunteers/5.jpg"
									/>
									<ul className="sigma_sm">
										<li>
											<a className="trigger-volunteers-socials" href="#">
												<i className="fal fa-plus"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="sigma_volunteers-body">
									<div className="sigma_volunteers-info">
										<p className="text-white">Temple Member</p>
										<h5 className="text-white">
											<a href="/volunteer-detail">M Kapoor</a>
										</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="sigma_volunteers volunteers-4">
								<div className="sigma_volunteers-thumb">
									<img
										alt="volunteers"
										src="/temple/assets/img/volunteers/3.jpg"
									/>
									<ul className="sigma_sm">
										<li>
											<a className="trigger-volunteers-socials" href="#">
												<i className="fal fa-plus"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="sigma_volunteers-body">
									<div className="sigma_volunteers-info">
										<p className="text-white">Temple Member</p>
										<h5 className="text-white">
											<a href="/volunteer-detail">Mohan Das</a>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<section className="section sigma_testimonial-sec style-4">
				<div className="container testimonial-section style-4">
					<div className="row">
						<div className="col-lg-5">
							<div className="section-title text-start">
								<p className="subtitle">Testimonials</p>
								<h4 className="title">Devotee Experiences with Sai Baba</h4>
								<p>
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba, following His teachings of love, compassion, and
									service to humanity.
								</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sigma_testimonial style-4">
								<div className="sigma_testimonial-body">
									<div className="sigma_testimonial-image d-none d-lg-block">
										<div className="row justify-content-center align-items-center g-0">
											<div className="col-md-3">
												<img
													alt="img"
													src="/temple/assets/img/testimonials/c-img01.png"
												/>
											</div>
											<div className="col-md-3 ms-3">
												<img
													alt="img"
													src="/temple/assets/img/testimonials/c-img03.png"
												/>
											</div>
										</div>
									</div>
									<i className="flaticon-right-quote icon"></i>
									<div className="sigma_testimonial-slider-1">
										<div className="sigma_testimonial-slider-item">
											<p>
												If money help a man to do well to others, it is of some
												value; but if not, it is simply a mass of evil, and the
												sooner it is got rid of, the better.
											</p>
											<div className="sigma_testimonial-author">
												<cite>Mukesh Singh</cite>
											</div>
										</div>
										<div className="sigma_testimonial-slider-item">
											<p>
												If money help a man to do well to others, it is of some
												value; but if not, it is simply a mass of evil, and the
												sooner it is got rid of, the better.
											</p>
											<div className="sigma_testimonial-author">
												<cite>Das Gupta</cite>
											</div>
										</div>
										<div className="sigma_testimonial-slider-item">
											<p>
												If money help a man to do well to others, it is of some
												value; but if not, it is simply a mass of evil, and the
												sooner it is got rid of, the better.
											</p>
											<div className="sigma_testimonial-author">
												<cite>R Patel</cite>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Blog */}
			<div
				className="section section-padding primary-overlay bg-cover bg-center"
				style={{ backgroundImage: "url(/temple/assets/img/bg3.jpg)" }}>
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle text-white">Blog</p>
						<h4 className="title text-white">Sai Baba News Updates</h4>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<article className="sigma_post">
								<div className="sigma_post-thumb">
									<a href="/blog-details">
										<img alt="post" src="/temple/assets/img/blog/2.jpg" />
									</a>
								</div>
								<div className="sigma_post-body">
									<div className="sigma_post-meta">
										<div className="me-3">
											<i className="fas fa-om"></i>
											<a className="sigma_post-category" href="/blog-details">
												Temple
											</a>
											,
											<a className="sigma_post-category" href="/blog-details">
												Love
											</a>
										</div>
										<a className="sigma_post-date" href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
									</div>
									<h5>
										<a href="/blog-details">
											Education for all rural children are necessary.
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/1.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Yesh Chopra</p>
										</div>
									</div>
								</div>
							</article>
						</div>
						<div className="col-lg-4 col-md-6">
							<article className="sigma_post">
								<div className="sigma_post-thumb">
									<a href="/blog-details">
										<img alt="post" src="/temple/assets/img/blog/1.jpg" />
									</a>
								</div>
								<div className="sigma_post-body">
									<div className="sigma_post-meta">
										<div className="me-3">
											<i className="fas fa-om"></i>
											<a className="sigma_post-category" href="/blog-details">
												Temple
											</a>
											,
											<a className="sigma_post-category" href="/blog-details">
												Love
											</a>
										</div>
										<a className="sigma_post-date" href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
									</div>
									<h5>
										<a href="/blog-details">
											Reconstruct or new construct Temple
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/2.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Yesh Chopra</p>
										</div>
									</div>
								</div>
							</article>
						</div>
						<div className="col-lg-4 col-md-6">
							<article className="sigma_post">
								<div className="sigma_post-thumb">
									<a href="/blog-details">
										<img alt="post" src="/temple/assets/img/blog/3.jpg" />
									</a>
								</div>
								<div className="sigma_post-body">
									<div className="sigma_post-meta">
										<div className="me-3">
											<i className="fas fa-om"></i>
											<a className="sigma_post-category" href="/blog-details">
												Temple
											</a>
											,
											<a className="sigma_post-category" href="/blog-details">
												Love
											</a>
										</div>
										<a className="sigma_post-date" href="/blog-details">
											<i className="far fa-calendar"></i> May 20, 2025
										</a>
									</div>
									<h5>
										<a href="/blog-details">
											Ensure child safety &amp; health in World
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/1.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Yesh Chopra</p>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="sigma_footer footer-2 sigma_footer-dark">
				<div className="container">
					<div className="sigma_footer-middle">
						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">About Us</h5>
								<p className="mb-4">
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba.
								</p>
								<div className="d-flex align-items-center justify-content-md-start justify-content-center">
									<i className="far fa-phone custom-primary me-3"></i>
									<span>+1 (630) 897-1500</span>
								</div>
								<div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
									<i className="far fa-envelope custom-primary me-3"></i>
									<span>pr@saisamsthanusa.org</span>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">Information</h5>
								<ul>
									<li>
										<a href="/about-us">About Us</a>
									</li>
									<li>
										<a href="/services">Services</a>
									</li>
									<li>
										<a href="/donation">Donation</a>
									</li>
									<li>
										<a href="/contact-us">Contact</a>
									</li>
								</ul>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
								<h5 className="widget-title">Quick Links</h5>
								<ul>
									<li>
										<a href="/events">Events</a>
									</li>
									<li>
										<a href="/puja">Puja</a>
									</li>
									<li>
										<a href="/volunteers">Volunteers</a>
									</li>
									<li>
										<a href="/broadcast">Broadcast</a>
									</li>
								</ul>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 footer-widget">
								<h5 className="widget-title">Subscribe</h5>
								<form method="post">
									<input
										type="email"
										name="email"
										placeholder="Email Address"
										required
									/>
									<button
										type="submit"
										className="mt-3 sigma_btn-custom secondary btn-block w-100">
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className="sigma_footer-bottom">
						<div className="row">
							<div className="col-lg-12">
								<div className="sigma_footer-copyright text-center">
									<p className="mb-0">
										© Shri Shirdi Sai Baba Mandir {new Date().getFullYear()}.
										All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
