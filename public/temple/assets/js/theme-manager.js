// Theme Manager Script
// This script applies theme changes across all pages

(function() {
    'use strict';
    
    // Apply stored theme on page load
    function applyStoredTheme() {
        const storedTheme = localStorage.getItem('selectedTheme');
        if (storedTheme) {
            applyTheme(storedTheme);
        }
    }
    
    function applyTheme(theme) {
        const themes = {
            original: {
                primary: '#7e4555',
                secondary: '#db4242'
            },
            red: {
                primary: '#7e4555',
                secondary: '#db4242'
            },
            blue: {
                primary: '#1e3a8a',
                secondary: '#3b82f6'
            },
            green: {
                primary: '#166534',
                secondary: '#16a34a'
            },
            yellow: {
                primary: '#ca8a04',
                secondary: '#eab308'
            },
            purple: {
                primary: '#7c3aed',
                secondary: '#a855f7'
            }
        };
        
        if (themes[theme]) {
            // Apply CSS custom properties
            document.documentElement.style.setProperty('--primary-color', themes[theme].primary);
            document.documentElement.style.setProperty('--secondary-color', themes[theme].secondary);
            
            // Override existing CSS classes with !important
            const style = document.createElement('style');
            style.textContent = `
                /* Basic theme colors */
                .custom-primary { color: ${themes[theme].primary} !important; }
                .custom-secondary { color: ${themes[theme].secondary} !important; }
                .primary-bg { background-color: ${themes[theme].primary} !important; }
                .secondary-bg { background-color: ${themes[theme].secondary} !important; }
                
                /* Navigation and header elements */
                .sigma_header-top .sigma_header-top-links li a:hover,
                .navbar-nav .menu-item a:hover,
                .navbar-nav .menu-item:hover > a,
                .sigma_header-top-links li:hover a {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Buttons */
                .sigma_btn-custom,
                .sigma_btn-custom.secondary {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                .sigma_btn-custom:hover,
                .sigma_btn-custom.secondary:hover {
                    background-color: ${themes[theme].secondary} !important;
                    border-color: ${themes[theme].secondary} !important;
                }
                
                .sigma_btn-custom.light {
                    background-color: transparent !important;
                    border-color: ${themes[theme].primary} !important;
                    color: ${themes[theme].primary} !important;
                }
                
                .sigma_btn-custom.light:hover {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Services */
                .sigma_service.primary-bg,
                .sigma_service.primary-bg:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .sigma_service.secondary-bg,
                .sigma_service.secondary-bg:hover {
                    background-color: ${themes[theme].secondary} !important;
                }
                
                .sigma_service:hover .sigma_service-thumb::after,
                .sigma_service:hover .sigma_service-thumb::before {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Banners and CTAs */
                .sigma_banner-cta.primary-bg,
                .sigma_cta.primary-bg,
                .sigma_newsletter-form.primary-bg {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .sigma_banner-cta.secondary-bg,
                .sigma_cta.secondary-bg {
                    background-color: ${themes[theme].secondary} !important;
                }
                
                /* Footer */
                .sigma_footer .footer-widget i.custom-primary {
                    color: ${themes[theme].primary} !important;
                }
                
                .sigma_footer.sigma_footer-dark.primary-bg,
                .sigma_footer.primary-bg {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Progress bars and other elements */
                .sigma_progress .progress-bar {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Links and hover states */
                a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Special elements */
                .tirtery-bg {
                    background: linear-gradient(184deg, ${themes[theme].primary} 0%, ${themes[theme].secondary} 100%) !important;
                }
                
                .dark-bg {
                    background-color: ${themes[theme].secondary} !important;
                }
                
                /* Counter and highlight elements */
                .sigma_counter {
                    background: linear-gradient(135deg, ${themes[theme].primary}cc 0%, ${themes[theme].secondary}cc 100%) !important;
                }
                
                /* Video popup and modal elements */
                .sigma_video-popup:hover {
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Testimonial elements */
                .sigma_testimonial .icon {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Blog and post elements */
                .sigma_post-category:hover,
                .sigma_post-meta a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Social Media Buttons */
                .sigma_sm li a:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                .sigma_sm.square li a:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .sigma_sm.light li a:hover {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Share buttons */
                .sigma_post-share .sigma_sm li a:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Icon colors */
                i.custom-primary {
                    color: ${themes[theme].primary} !important;
                }
                
                i.custom-secondary {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Text colors */
                .text-primary {
                    color: ${themes[theme].primary} !important;
                }
                
                .text-secondary {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Form elements */
                .form-control:focus {
                    border-color: ${themes[theme].primary} !important;
                    box-shadow: 0 0 0 0.2rem ${themes[theme].primary}40 !important;
                }
                
                /* Dropdown and select elements */
                .dropdown-menu .dropdown-item:hover {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Modal elements */
                .modal-header {
                    border-bottom-color: ${themes[theme].primary} !important;
                }
                
                .modal-footer {
                    border-top-color: ${themes[theme].primary} !important;
                }
                
                /* Tabs */
                .nav-tabs .nav-link.active,
                .nav-tabs .nav-link:hover {
                    color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Badges */
                .badge-primary {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .badge-secondary {
                    background-color: ${themes[theme].secondary} !important;
                }
                
                /* Cards */
                .card-header {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Alerts */
                .alert-primary {
                    background-color: ${themes[theme].primary}20 !important;
                    border-color: ${themes[theme].primary} !important;
                    color: ${themes[theme].primary} !important;
                }
                
                /* Pagination */
                .page-link:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                .page-item.active .page-link {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Breadcrumb */
                .breadcrumb-item.active {
                    color: ${themes[theme].primary} !important;
                }
                
                .breadcrumb-item a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Tooltips */
                .tooltip-inner {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .bs-tooltip-auto[x-placement^=top] .arrow::before,
                .bs-tooltip-top .arrow::before {
                    border-top-color: ${themes[theme].primary} !important;
                }
                
                .bs-tooltip-auto[x-placement^=bottom] .arrow::before,
                .bs-tooltip-bottom .arrow::before {
                    border-bottom-color: ${themes[theme].primary} !important;
                }
                
                .bs-tooltip-auto[x-placement^=left] .arrow::before,
                .bs-tooltip-left .arrow::before {
                    border-left-color: ${themes[theme].primary} !important;
                }
                
                .bs-tooltip-auto[x-placement^=right] .arrow::before,
                .bs-tooltip-right .arrow::before {
                    border-right-color: ${themes[theme].primary} !important;
                }
                
                /* Custom theme overrides for specific elements */
                .sigma_volunteers-body .sigma_volunteers-info p,
                .sigma_volunteers-body .sigma_volunteers-info h5 {
                    color: white !important;
                }
                
                /* Override white text on dark backgrounds */
                .primary-bg .text-white,
                .secondary-bg .text-white,
                .sigma_banner .text-white,
                .sigma_cta .text-white {
                    color: white !important;
                }
                
                /* Ensure contrast for text elements */
                .sigma_banner-text h1,
                .sigma_banner-text h4,
                .sigma_cta-content h4,
                .sigma_cta-content span {
                    color: white !important;
                }
                
                /* Newsletter form styling */
                .sigma_search-adv-input input:focus {
                    border-color: ${themes[theme].primary} !important;
                }
                
                .sigma_search-adv-input button {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                .sigma_search-adv-input button:hover {
                    background-color: ${themes[theme].secondary} !important;
                    border-color: ${themes[theme].secondary} !important;
                }
                
                /* Volunteer social icons */
                .sigma_volunteers-thumb .sigma_sm li a:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Footer social media */
                .sigma_footer .sigma_sm li a:hover {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Sidebar elements */
                .sigma_aside .sidebar-widget h5 {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Quick view modal */
                .sigma_quick-view-modal .modal-content .close:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Rating stars */
                .sigma_rating i.active {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Product controls */
                .sigma_product-atc-form button:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Instagram feed */
                .sigma_ig-item:hover {
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Additional comprehensive overrides */
                
                /* Specific social media platforms */
                .facebook:hover { background-color: #1877f2 !important; }
                .twitter:hover { background-color: #1da1f2 !important; }
                .linkedin:hover { background-color: #0077b5 !important; }
                .youtube:hover { background-color: #ff0000 !important; }
                .instagram:hover { background-color: #e4405f !important; }
                
                /* Override specific social media buttons to use theme colors */
                .sigma_sm li a[href*="facebook"]:hover,
                .sigma_sm li a[href*="twitter"]:hover,
                .sigma_sm li a[href*="linkedin"]:hover,
                .sigma_sm li a[href*="youtube"]:hover,
                .sigma_sm li a[href*="instagram"]:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Rating and review elements */
                .sigma_rating-wrapper span {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Date and meta information */
                .sigma_post-date i,
                .sigma_post-meta i {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Form labels and help text */
                .form-label,
                .form-text {
                    color: #333 !important;
                }
                
                /* Checkbox and radio button focus */
                .form-check-input:focus {
                    border-color: ${themes[theme].primary} !important;
                    box-shadow: 0 0 0 0.25rem ${themes[theme].primary}40 !important;
                }
                
                /* Range slider */
                .ion-range-slider .irs-bar {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .ion-range-slider .irs-handle {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Magnific popup elements */
                .mfp-close:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Slick slider arrows */
                .slick-prev:hover,
                .slick-next:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Countdown timer */
                .countdown-section .countdown-amount {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Waypoints animations */
                .animate-on-scroll {
                    transition: all 0.3s ease !important;
                }
                
                /* Counter up elements */
                .counter {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Zoom elements */
                .zoom-container:hover img {
                    transform: scale(1.05) !important;
                }
                
                /* Event calendar */
                .fc-button:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                .fc-day:hover,
                .fc-day.focus {
                    background-color: ${themes[theme].primary}20 !important;
                }
                
                /* Portfolio filters */
                .portfolio-trigger.active,
                .portfolio-trigger:hover {
                    color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Service icons */
                .sigma_service-thumb i {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Testimonial quotes */
                .sigma_testimonial-body::before {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Blog post author */
                .sigma_post-single-author a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Video gallery */
                .sigma_video-popup-wrap:hover .sigma_video-popup {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* CTA buttons */
                .sigma_cta .sigma_btn-custom:hover {
                    background-color: ${themes[theme].secondary} !important;
                    border-color: ${themes[theme].secondary} !important;
                }
                
                /* Sidebar widgets */
                .sidebar-widget h5::after {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Product single elements */
                .sigma_product-single-thumb .sigma_product-single-controls a:hover {
                    background-color: ${themes[theme].primary} !important;
                }
                
                /* Product variation */
                .sigma_product-radio input:checked + span {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Quantity buttons */
                .qty-subtract:hover,
                .qty-add:hover {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Post navigation */
                .sigma_post-nav a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Comments */
                .comment-author a:hover {
                    color: ${themes[theme].primary} !important;
                }
                
                .comment-reply-link:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* Contact form */
                .sigma_contact-form button:hover {
                    background-color: ${themes[theme].primary} !important;
                    border-color: ${themes[theme].primary} !important;
                }
                
                /* FAQ accordion */
                .accordion-button:not(.collapsed) {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                .accordion-button:focus {
                    border-color: ${themes[theme].primary} !important;
                    box-shadow: 0 0 0 0.2rem ${themes[theme].primary}40 !important;
                }
                
                /* Table elements */
                .table thead th {
                    background-color: ${themes[theme].primary} !important;
                    color: white !important;
                }
                
                /* Preloader */
                .sigma_preloader img {
                    filter: hue-rotate(${theme === 'red' ? '0deg' : theme === 'blue' ? '240deg' : theme === 'green' ? '120deg' : theme === 'yellow' ? '60deg' : '300deg'}) !important;
                }
                
                /* Title classes */
                .title {
                    color: ${themes[theme].primary} !important;
                }
                
                .subtitle {
                    color: ${themes[theme].secondary} !important;
                }
                
                .entry-title {
                    color: ${themes[theme].primary} !important;
                }
                
                .entry-title a {
                    color: ${themes[theme].primary} !important;
                }
                
                .entry-title a:hover {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Footer comprehensive theming */
                .sigma_footer {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .sigma_footer-dark {
                    background-color: #212529 !important;
                    color: #ffffff !important;
                }
                
                .sigma_footer.footer-2 {
                    background-color: ${themes[theme].primary} !important;
                }
                
                .sigma_footer.footer-2 .sigma_footer-dark {
                    background-color: #212529 !important;
                }
                
                .sigma_footer-middle {
                    background-color: inherit !important;
                }
                
                .footer-widget {
                    background-color: inherit !important;
                }
                
                .footer-widget .widget-title {
                    color: #ffffff !important;
                    border-bottom-color: ${themes[theme].secondary} !important;
                }
                
                .footer-widget h5 {
                    color: #ffffff !important;
                }
                
                .footer-widget a {
                    color: #cccccc !important;
                }
                
                .footer-widget a:hover {
                    color: #ffffff !important;
                }
                
                .sigma_footer-bottom {
                    background-color: #1a1a1a !important;
                    border-top-color: ${themes[theme].secondary} !important;
                }
                
                .sigma_footer-copyright {
                    color: #cccccc !important;
                }
                
                .sigma_footer-copyright a {
                    color: #ffffff !important;
                }
                
                .sigma_footer-copyright a:hover {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Footer social media */
                .sigma_footer .sigma_sm li a {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    color: #cccccc !important;
                }
                
                .sigma_footer .sigma_sm li a:hover {
                    background-color: ${themes[theme].secondary} !important;
                    color: #ffffff !important;
                }
                
                /* Footer logo */
                .sigma_footer-logo {
                    color: #ffffff !important;
                }
                
                /* Footer widget recent posts */
                .widget-recent-posts .sigma_recent-post a {
                    color: #cccccc !important;
                }
                
                .widget-recent-posts .sigma_recent-post a:hover {
                    color: #ffffff !important;
                }
                
                .widget-recent-posts .sigma_recent-post .sigma_recent-post-body a {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Footer contact info */
                .sigma_footer .sigma_contact-info {
                    color: #cccccc !important;
                }
                
                .sigma_footer .sigma_contact-info a {
                    color: #ffffff !important;
                }
                
                .sigma_footer .sigma_contact-info a:hover {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Section titles */
                .section-title .title {
                    color: ${themes[theme].primary} !important;
                }
                
                .section-title .subtitle {
                    color: ${themes[theme].secondary} !important;
                }
                
                .section-title.text-center .title {
                    color: ${themes[theme].primary} !important;
                }
                
                .section-title.text-start .title {
                    color: ${themes[theme].primary} !important;
                }
                
                .section-title.flex-title .title {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Banner titles */
                .sigma_banner-text .title {
                    color: #ffffff !important;
                }
                
                .sigma_banner-text h1.title {
                    color: #ffffff !important;
                }
                
                .sigma_banner-text h4.title {
                    color: #ffffff !important;
                }
                
                /* CTA titles */
                .sigma_cta-content .title {
                    color: #ffffff !important;
                }
                
                .sigma_cta-content h4.title {
                    color: #ffffff !important;
                }
                
                /* Volunteer section titles */
                .sigma_volunteers .sigma_volunteers-info .title {
                    color: #ffffff !important;
                }
                
                .sigma_volunteers .sigma_volunteers-info h5 {
                    color: #ffffff !important;
                }
                
                /* Blog section titles */
                .sigma_post .sigma_post-body .title {
                    color: ${themes[theme].primary} !important;
                }
                
                .sigma_post .sigma_post-body h5.title {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Sidebar titles */
                .sidebar .widget-title {
                    color: ${themes[theme].primary} !important;
                    border-bottom-color: ${themes[theme].secondary} !important;
                }
                
                .sidebar h5.widget-title {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Modal titles */
                .modal-title {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Card titles */
                .card-title {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Breadcrumb titles */
                .breadcrumb-item a {
                    color: ${themes[theme].primary} !important;
                }
                
                .breadcrumb-item.active {
                    color: ${themes[theme].secondary} !important;
                }
                
                /* Page titles */
                h1, h2, h3, h4, h5, h6 {
                    color: ${themes[theme].primary} !important;
                }
                
                /* Override specific heading colors for better contrast */
                .text-white h1, .text-white h2, .text-white h3, 
                .text-white h4, .text-white h5, .text-white h6 {
                    color: #ffffff !important;
                }
                
                /* Footer specific heading colors */
                .sigma_footer h1, .sigma_footer h2, .sigma_footer h3,
                .sigma_footer h4, .sigma_footer h5, .sigma_footer h6 {
                    color: #ffffff !important;
                }
                
                /* Dark background heading colors */
                .sigma_footer-dark h1, .sigma_footer-dark h2, .sigma_footer-dark h3,
                .sigma_footer-dark h4, .sigma_footer-dark h5, .sigma_footer-dark h6 {
                    color: #ffffff !important;
                }
                
                /* Primary background heading colors */
                .primary-bg h1, .primary-bg h2, .primary-bg h3,
                .primary-bg h4, .primary-bg h5, .primary-bg h6 {
                    color: #ffffff !important;
                }
                
                /* Secondary background heading colors */
                .secondary-bg h1, .secondary-bg h2, .secondary-bg h3,
                .secondary-bg h4, .secondary-bg h5, .secondary-bg h6 {
                    color: #ffffff !important;
                }
                
                /* Ensure footer widget titles are white */
                .footer-widget .widget-title,
                .footer-widget h5,
                .sigma_footer .widget-title,
                .sigma_footer h5 {
                    color: #ffffff !important;
                }
                
                /* Footer links */
                .sigma_footer a,
                .footer-widget a {
                    color: #cccccc !important;
                }
                
                .sigma_footer a:hover,
                .footer-widget a:hover {
                    color: #ffffff !important;
                }
                
                /* Footer copyright */
                .sigma_footer-copyright,
                .sigma_footer-copyright p {
                    color: #cccccc !important;
                }
                
                /* Footer logo text */
                .sigma_footer-logo,
                .sigma_footer-logo a {
                    color: #ffffff !important;
                }
                
                /* Ensure all theme colors are properly applied */
                * {
                    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
                }
            `;
            
            // Remove existing theme styles
            const existingStyle = document.getElementById('theme-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            style.id = 'theme-styles';
            document.head.appendChild(style);
            
            console.log(`Theme "${theme}" applied successfully with comprehensive coverage including titles and footer`);
        }
    }
    
    // Listen for storage changes (when theme is changed in another tab)
    window.addEventListener('storage', function(e) {
        if (e.key === 'selectedTheme') {
            applyStoredTheme();
        }
    });
    
    // Apply theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyStoredTheme);
    } else {
        applyStoredTheme();
    }
    
    // Make functions available globally for admin panel
    window.themeManager = {
        applyTheme: applyTheme
    };
})();
