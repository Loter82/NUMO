# NUMO Energy Solutions - Landing Page

Professional landing page for NUMO, an Independent Energy Solutions Coordinator.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements**:
  - Sticky navigation with scroll effects
  - Mobile-friendly hamburger menu
  - Language selector (EN/FR/DE)
  - Smooth scrolling to sections
  - FAQ accordion
  - Contact form with validation
  - Scroll to top button
- **Optimized Performance** - Fast loading with debounced scroll handlers
- **Cross-browser Compatible** - Works on all modern browsers

## Structure

```
NUMO-Landing/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Sections

1. **Header** - Navigation with logo, menu links, language selector, and CTA button
2. **Hero** - Eye-catching introduction with main value proposition
3. **About** - Company overview, role, approach, values, and experience
4. **Services** - 6 core services offered
5. **Process** - 5-step working methodology
6. **Markets** - Geographic focus (Europe, Ukraine, Africa)
7. **Partners** - Partner network description
8. **Projects** - Use cases and project types
9. **Why Us** - 4 key differentiators
10. **FAQ** - Common questions and answers
11. **Contact** - Contact form and direct contact information
12. **Footer** - Quick links, legal links, and copyright

## Technologies Used

- HTML5
- CSS3 (with CSS Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Color Scheme

- Primary: #2563eb (Blue)
- Secondary: #64748b (Slate)
- Accent: #f59e0b (Amber)
- Text: #0f172a, #334155, #64748b
- Background: #ffffff, #f8fafc

## Customization

### Changing Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    /* ... more colors */
}
```

### Updating Content
All content is in `index.html`. Simply edit the text within the HTML tags.

### Adding New Sections
1. Add HTML section in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form Integration

The contact form is currently set up with client-side validation. To make it functional:

1. **Option 1: Backend Integration**
   - Connect to your server endpoint
   - Update the form submission handler in `script.js`

2. **Option 2: Email Service (Formspree, EmailJS)**
   - Sign up for a service
   - Update form action or JavaScript

3. **Option 3: Contact Management System**
   - Integrate with CRM (HubSpot, Salesforce)
   - Add tracking scripts

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify
1. Connect your repository
2. Deploy automatically on push

### Traditional Hosting
Upload all files to your web server via FTP/SFTP

## Performance Optimization

- Images should be optimized (WebP format recommended)
- Enable gzip compression on server
- Use CDN for static assets
- Consider lazy loading for images

## Future Enhancements

- Multi-language support (FR, DE translations)
- Blog section
- Case studies/portfolio
- Team page
- Client testimonials
- Live chat integration
- Analytics integration (Google Analytics)

## Credits

Designed and developed for NUMO Energy Solutions
© 2024 NUMO. All rights reserved.

## License

Proprietary - All rights reserved
