import TempleScripts from "@/components/TempleScripts";

export default function AboutUs() {
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
							<h1>About Us</h1>
						</div>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a className="btn-link" href="/">
										Home
									</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									About Us
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>

			{/* About Section */}
			<section className="section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 d-none d-lg-block">
							<div className="sigma_img-box">
								<div className="row">
									<div className="col-lg-6">
										<img
											alt="service"
											src="/temple/assets/img/service/details/5.jpg"
										/>
										<img
											alt="service"
											className="ms-0"
											src="/temple/assets/img/service/details/6.jpg"
										/>
									</div>
									<div className="col-lg-6 mt-0 mt-lg-5">
										<img
											alt="service"
											src="/temple/assets/img/service/details/7.jpg"
										/>
										<img
											alt="service"
											className="ms-0"
											src="/temple/assets/img/service/details/8.jpg"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="me-lg-30">
								<div className="section-title mb-0 text-start">
									<p className="subtitle">SERVING THE HINDU COMMUNITY</p>
									<h4 className="title">
										We Are Devotees of Shri Shirdi Sai Baba
									</h4>
								</div>
								<p className="blockquote bg-transparent">
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba, following His divine teachings of love, compassion,
									and selfless service to humanity.
								</p>
								<div className="sigma_icon-block icon-block-3">
									<div className="icon-wrapper">
										<img alt="" src="/temple/assets/img/textures/icons/1.png" />
									</div>
									<div className="sigma_icon-block-content">
										<h5>Temple</h5>
										<p>
											Experience the sacred atmosphere of Sai Baba Mandir with
											daily aaratis and spiritual gatherings
										</p>
									</div>
								</div>
								<div className="sigma_icon-block icon-block-3">
									<div className="icon-wrapper">
										<img alt="" src="/temple/assets/img/textures/icons/2.png" />
									</div>
									<div className="sigma_icon-block-content">
										<h5>Puja</h5>
										<p>
											Experience the sacred atmosphere of Sai Baba Mandir with
											daily aaratis and spiritual gatherings
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* History Timeline */}
			<div className="section light-bg">
				<div className="container">
					<div className="sigma_timeline">
						<div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
							<div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
								<h4>Sai Baba Mandir Foundation</h4>
								<p>
									Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
									Vishnu, Krishna etc. Proin eget tortor industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type, People ask questions related to
									Hinduism. specimen book.
								</p>
							</div>
							<div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
								<i className="far fa-circle"></i>
							</div>
							<div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
								<span>2019</span>
								<br />
								<span className="sigma_timeline-month">JUN 1</span>
							</div>
						</div>
						<div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
							<div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
								<h4>Community Service Initiatives</h4>
								<p>
									Our Service to Needy program supports community welfare
									through charitable activities, medical aid, and disaster
									relief, embodying Sai Baba&apos;s teachings of selfless
									service.
								</p>
							</div>
							<div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
								<i className="far fa-circle"></i>
							</div>
							<div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
								<span>2020</span>
								<br />
								<span className="sigma_timeline-month">JUN 1</span>
							</div>
						</div>
						<div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
							<div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
								<h4>Sai Baba Mandir Foundation</h4>
								<p>
									Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
									Vishnu, Krishna etc. Proin eget tortor industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type, People ask questions related to
									Hinduism. specimen book.
								</p>
							</div>
							<div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
								<i className="far fa-circle"></i>
							</div>
							<div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
								<span>2025</span>
								<br />
								<span className="sigma_timeline-month">JUN 1</span>
							</div>
						</div>
						<div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
							<div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
								<h4>Community Service Initiatives</h4>
								<p>
									Our Service to Needy program supports community welfare
									through charitable activities, medical aid, and disaster
									relief, embodying Sai Baba&apos;s teachings of selfless
									service.
								</p>
							</div>
							<div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
								<i className="far fa-circle"></i>
							</div>
							<div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
								<span>2025</span>
								<br />
								<span className="sigma_timeline-month">JUN 1</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mission Section */}
			<section className="section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="me-lg-30">
								<div className="section-title mb-0 text-start">
									<p className="subtitle">Our Mission</p>
									<h4 className="title">
										Promoting Sai Baba&apos;s Philosophy of Love and Service
									</h4>
								</div>
								<p className="blockquote bg-transparent">
									Sabka Malik Ek – God is One. We are devotees of Shri Shirdi
									Sai Baba, following His divine teachings of love, compassion,
									and selfless service to humanity.
								</p>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="home-tab"
											data-bs-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected="true">
											<i className="fas fa-om"></i> Daily Aaratis
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="profile-tab"
											data-bs-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected="false">
											<i className="far fa-church"></i> Pujas
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="contact-tab"
											data-bs-toggle="tab"
											href="#contact"
											role="tab"
											aria-controls="contact"
											aria-selected="false">
											<i className="far fa-user"></i> Priests
										</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab">
										<p>
											Our daily aaratis at Kakad (9 AM), Madhyahna (12 PM),
											Dhoop (6:30 PM), and Shej (8 PM) provide devotees with
											regular opportunities to connect with Sai Baba through
											sacred rituals and prayers.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab">
										<p>
											Our daily aaratis at Kakad (9 AM), Madhyahna (12 PM),
											Dhoop (6:30 PM), and Shej (8 PM) provide devotees with
											regular opportunities to connect with Sai Baba through
											sacred rituals and prayers.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="contact"
										role="tabpanel"
										aria-labelledby="contact-tab">
										<p>
											Our daily aaratis at Kakad (9 AM), Madhyahna (12 PM),
											Dhoop (6:30 PM), and Shej (8 PM) provide devotees with
											regular opportunities to connect with Sai Baba through
											sacred rituals and prayers.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img alt="about" src="/temple/assets/img/about.jpg" />
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<div
				className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat"
				style={{ backgroundImage: "url(/temple/assets/img/bg1.jpg)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-lg-30">
							<form method="post">
								<div className="form-row">
									<div className="col-lg-6">
										<div className="form-group">
											<i className="far fa-user"></i>
											<input
												className="form-control transparent"
												name="fname"
												placeholder="First Name"
												type="text"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<i className="far fa-user"></i>
											<input
												className="form-control transparent"
												name="lname"
												placeholder="Last Name"
												type="text"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<i className="far fa-pencil"></i>
											<input
												className="form-control transparent"
												name="subject"
												placeholder="Subject"
												type="text"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<i className="far fa-envelope"></i>
											<input
												className="form-control transparent"
												name="email"
												placeholder="Email Address"
												type="text"
											/>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<textarea
												className="form-control transparent"
												name="message"
												placeholder="Enter Message"
												rows={4}></textarea>
										</div>
									</div>
									<div className="col-lg-12">
										<button
											className="sigma_btn-custom d-block w-100"
											name="button"
											type="submit">
											Get a Quote <i className="far fa-arrow-right"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/1.png" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/2.png" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/3.png" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/4.png" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/5.png" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="sigma_client">
										<img alt="client" src="/temple/assets/img/clients/6.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Blog Section */}
			<div className="section section-padding">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Blog</p>
						<h4 className="title">Sai Baba News Updates</h4>
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
											Sai Baba&apos;s Teachings of Love and Service
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/1.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Sai Krishna</p>
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
											Sai Baba&apos;s Teachings of Love and Service
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/2.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Sai Krishna</p>
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
											Sai Baba&apos;s Teachings of Love and Service
										</a>
									</h5>
									<div className="sigma_post-single-author">
										<img alt="author" src="/temple/assets/img/people/1.jpg" />
										<div className="sigma_post-single-author-content">
											By <p>Sai Krishna</p>
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
									<span>+1 (630) 897-1500</span>
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
										<a href="/about-us">About Mandir</a>
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
								Copyright © Shri Shirdi Sai Baba Mandir -{" "}
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
