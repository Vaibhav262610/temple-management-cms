# Maharatri Temple Website

A unified static website for Maharatri Temple built from 18 theme folders with shared assets and working navigation.

## Features

- **Unified Assets**: All CSS, JS, images, and fonts are deduplicated and shared across pages
- **Local Google Fonts**: Fonts are served locally for better performance and privacy
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Working Navigation**: Consistent header and footer across all pages
- **SEO Optimized**: Includes sitemap.xml and robots.txt
- **Fast Loading**: Optimized asset structure and local font serving

## File Structure

```
/
├── index.html                      # Home page
├── about-us.html                   # About Us page
├── services.html                   # Services page
├── puja.html                       # Puja page
├── holi.html                       # Holi page
├── events.html                     # Events page
├── blog-grid.html                  # Blog listing
├── donation.html                   # Donation page
├── contact-us.html                 # Contact page
├── volunteers.html                 # Volunteers page
├── broadcast.html                  # Live broadcast
├── faq.html                        # FAQ page
├── *-details.html                  # Detail pages
├── assets/                         # Shared assets
│   ├── css/
│   │   ├── plugins/                # CSS plugins
│   │   ├── site.css               # Main stylesheet
│   │   └── responsive.css         # Responsive styles
│   ├── js/
│   │   ├── plugins/               # JS plugins
│   │   └── site.js                # Main JavaScript
│   ├── img/                       # Images
│   └── fonts/                     # Fonts
├── partials/                       # HTML partials
│   ├── header.html                # Site header
│   └── footer.html                # Site footer
├── sitemap.xml                    # SEO sitemap
├── robots.txt                     # Search engine instructions
└── package.json                   # Node.js configuration
```

## Getting Started

### Prerequisites

- Node.js (for development server)
- Modern web browser

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run serve
```

This will start a local server at `http://localhost:3000` and open your default browser.

### Alternative Development Servers

You can also use any static file server:

- **Python**: `python -m http.server 8000`
- **PHP**: `php -S localhost:8000`
- **Live Server (VS Code extension)**

## Pages Overview

- **Home** (`index.html`): Main landing page
- **About Us** (`about-us.html`): Temple information
- **Services** (`services.html`): Temple services
- **Puja** (`puja.html`): Puja ceremonies and details
- **Holi** (`holi.html`): Holi festival information
- **Events** (`events.html`): Temple events and calendar
- **Blog** (`blog-grid.html`): Articles and news
- **Donation** (`donation.html`): Donation information
- **Contact** (`contact-us.html`): Contact form and information
- **Volunteers** (`volunteers.html`): Volunteer opportunities
- **Broadcast** (`broadcast.html`): Live streaming
- **FAQ** (`faq.html`): Frequently asked questions

## Asset Management

### Fonts
- Google Fonts are served locally from `/assets/fonts/googlefonts/`
- Flaticon fonts are available at `/assets/fonts/flaticon/`

### Images
All images are organized in `/assets/img/` with subfolders:
- `banner/`: Banner images
- `blog/`: Blog images
- `donation/`: Donation-related images
- `events/`: Event images
- `people/`: People photos
- `puja/`: Puja ceremony images
- `volunteers/`: Volunteer photos

### CSS/JS Plugins
All third-party plugins are deduplicated and stored in:
- `/assets/css/plugins/` for stylesheets
- `/assets/js/plugins/` for JavaScript files

## Deployment

This is a static website that can be deployed to any web hosting service:

1. Upload all files to your web server
2. Ensure the server serves the root directory as the document root
3. Update the domain in `sitemap.xml` and any hardcoded URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Local Fonts**: No external font requests
- **Optimized Assets**: Deduplicated CSS and JS
- **Lazy Loading**: Images load as needed
- **Minified Code**: Production-ready assets

## Contributing

1. Make changes to the HTML, CSS, or JS files
2. Test locally using the development server
3. Ensure all pages work correctly
4. Update this README if needed

## License

This project is licensed under the ISC License.
