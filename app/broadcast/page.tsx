import TempleLayout from "@/components/TempleLayout";

export default function Broadcast() {
	return (
		<TempleLayout title="Live Broadcast">
			{/* Live Stream Section */}
			<div className="section section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/01.png" alt="live" />
								<a
									className="sigma_video-popup popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
								<div className="live-badge">
									<i className="fa fa-circle"></i> LIVE NOW
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-lg-8">
							<div className="sigma_box">
								<h3>Daily Aarati Live Stream</h3>
								<p className="custom-primary mb-2">
									<i className="far fa-clock"></i> Morning Aarati: 8:00 AM |
									Evening Aarati: 7:00 PM
								</p>
								<p>
									Experience the divine atmosphere of Shri Shirdi Sai Baba
									Mandir from anywhere in the world. Join us for live darshan
									and participate in daily aarati ceremonies.
								</p>
								<p>
									Our live broadcast brings the temple&apos;s spiritual energy
									directly to your home, allowing devotees worldwide to connect
									with Sai Baba&apos;s blessings.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sigma_box primary-bg">
								<h5 className="text-white">Broadcast Schedule</h5>
								<ul className="sigma_list style-1 text-white">
									<li>Morning Aarati - 8:00 AM</li>
									<li>Madhyan Aarati - 12:00 PM</li>
									<li>Evening Aarati - 7:00 PM</li>
									<li>Special Events - As Scheduled</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Video Gallery */}
			<div className="section section-padding light-bg pt-0">
				<div className="container">
					<div className="section-title text-center">
						<p className="subtitle">Watch</p>
						<h4 className="title">Previous Broadcasts & Videos</h4>
					</div>
					<div className="row sigma_broadcast-video">
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/1.png" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Morning Aarati - May 15</h6>
							<p className="text-muted">
								Daily morning prayers and devotional songs
							</p>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/2.jpg" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Guru Purnima Celebration</h6>
							<p className="text-muted">Special puja and spiritual discourse</p>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/3.jpg" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Sai Baba Jayanti</h6>
							<p className="text-muted">
								Grand celebration of Sai Baba&apos;s birth anniversary
							</p>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/4.jpg" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Bhajan Sandhya</h6>
							<p className="text-muted">Evening of devotional songs</p>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/5.jpg" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Spiritual Discourse</h6>
							<p className="text-muted">
								Weekly spiritual talks on Sai Baba&apos;s teachings
							</p>
						</div>
						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="sigma_video-popup-wrap">
								<img src="/temple/assets/img/video-gallery/6.jpg" alt="video" />
								<a
									className="sigma_video-popup popup-sm popup-youtube"
									href="https://www.youtube.com/watch?v=TKnufs85hXk">
									<i className="fas fa-play"></i>
								</a>
							</div>
							<h6 className="mb-0 mt-3">Festival Highlights</h6>
							<p className="text-muted">
								Compilation of major festival celebrations
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Subscribe Section */}
			<div className="section pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mx-auto">
							<div className="sigma_box text-center primary-bg">
								<h4 className="text-white">Subscribe for Notifications</h4>
								<p className="text-white">
									Get notified when we go live for aarati and special events
								</p>
								<form className="mt-4">
									<div className="sigma_search-adv-input">
										<input
											type="email"
											className="form-control"
											placeholder="Enter your email"
											required
										/>
										<button type="submit" className="sigma_btn-custom light">
											Subscribe <i className="far fa-bell"></i>
										</button>
									</div>
								</form>
								<div className="mt-4">
									<h6 className="text-white">Follow us on:</h6>
									<ul className="sigma_sm square light">
										<li>
											<a href="#">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-youtube"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
