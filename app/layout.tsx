import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "SHRI SHIRDI SAI BABA MANDIR",
	description:
		"Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<head>
				{/* Google Fonts */}
				<link
					rel="stylesheet"
					href="/temple/assets/fonts/googlefonts/css2.css"
				/>

				{/* CSS Plugins */}
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/bootstrap.min.css"
				/>
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/animate.min.css"
				/>
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/magnific-popup.css"
				/>
				<link rel="stylesheet" href="/temple/assets/css/plugins/slick.css" />
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/slick-theme.css"
				/>
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/ion.rangeSlider.min.css"
				/>

				{/* Icon Fonts */}
				<link
					rel="stylesheet"
					href="/temple/assets/fonts/flaticon/flaticon.css"
				/>
				<link
					rel="stylesheet"
					href="/temple/assets/css/plugins/font-awesome.min.css"
				/>

				{/* Template Style sheet */}
				<link
					rel="stylesheet"
					href="/temple/assets/css/pages/page-home-v3.css"
				/>
				<link rel="stylesheet" href="/temple/assets/css/responsive.css" />
			</head>
			<body>
				{children}

				{/* Scripts */}
				<Script
					src="/temple/assets/js/plugins/jquery-3.4.1.min.js"
					strategy="beforeInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/popper.min.js"
					strategy="beforeInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/bootstrap.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/imagesloaded.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.magnific-popup.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.countdown.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.waypoints.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.counterup.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.zoom.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/ion.rangeSlider.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/slick.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/isotope.pkgd.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/wow.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.inview.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/temple/assets/js/plugins/jquery.event.move.js"
					strategy="afterInteractive"
				/>
				<Script src="/temple/assets/js/site.js" strategy="afterInteractive" />
			</body>
		</html>
	);
}
