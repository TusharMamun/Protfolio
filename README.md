# Tushar Mamun - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing full-stack development skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/TusharMamun/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── components/
│   ├── Navigation.jsx      # Navigation bar with mobile menu
│   ├── Hero.jsx           # Hero section with intro
│   ├── TechMarquee.jsx    # Scrolling tech stack marquee
│   ├── About.jsx          # About me section
│   ├── Education.jsx      # Education and certifications
│   ├── Projects.jsx       # Featured projects showcase
│   ├── Skills.jsx         # Technical skills and expertise
│   ├── Testimonials.jsx   # Client testimonials
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer with social links
├── pages/
│   ├── _app.js           # App wrapper
│   ├── _document.js      # Document structure
│   └── index.js          # Main page
├── styles/
│   └── globals.css       # Global styles and utilities
├── public/
│   └── favicon.ico       # Favicon
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors
The project uses a gradient color scheme. You can customize colors in `tailwind.config.js` and `styles/globals.css`.

### Content
Update the content in each component file:
- Personal information in `Hero.jsx` and `About.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Contact.jsx`

### Animations
Framer Motion animations can be customized in each component. Adjust timing, easing, and effects as needed.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

### SEO Configuration
Update meta tags in `pages/_document.js` and `pages/index.js` with your information.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact@tusharmamun.com
- **LinkedIn**: [linkedin.com/in/tusharmamun](https://linkedin.com/in/tusharmamun)
- **GitHub**: [github.com/TusharMamun](https://github.com/TusharMamun)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Font Awesome
- Images from Unsplash
- Animations powered by Framer Motion

---

Built with ❤️ by Tushar Mamun# Protfolio
