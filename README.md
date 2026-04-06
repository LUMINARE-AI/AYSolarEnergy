# AY Solar Energy - Next.js Website

Modern Next.js website for AY Solar Energy, optimized for Vercel deployment with Formspree contact forms and Cloudflare DNS.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Hosting:** Vercel (free tier with India edge)
- **Contact Forms:** Formspree (free)
- **DNS:** Cloudflare (free)
- **Domain:** aysolar.in (₹700/year)

## 📋 Quick Start

### 1. Clone & Install

```bash
git clone <your-repo>
cd nextjs-solar
npm install
```

### 2. Environment Setup

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Update with your values:
- Get Formspree ID from https://formspree.io
- Add your company contact info

### 3. Local Development

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow prompts to connect GitHub and deploy.

## 📁 Project Structure

```
nextjs-solar/
├── pages/                    # Next.js pages
│   ├── index.jsx            # Home page
│   ├── about.jsx            # About page
│   ├── contact.jsx          # Contact page
│   ├── pm-suryaghar.jsx     # PM Suryaghar scheme
│   ├── finance.jsx          # Finance & EMI calculator
│   ├── services/
│   │   ├── index.jsx        # Services overview
│   │   ├── residential.jsx  # Residential solar
│   │   ├── commercial.jsx   # C&I solar
│   │   └── kusum.jsx        # Kusum Yojana
│   ├── _app.jsx             # App wrapper
│   └── _document.jsx        # HTML document
├── components/              # React components
│   ├── Header.jsx           # Header with nav
│   ├── Footer.jsx           # Footer
│   ├── Hero.jsx             # Hero section
│   ├── ServiceCard.jsx      # Service card
│   └── ContactForm.jsx      # Contact form
├── styles/                  # CSS files
│   ├── globals.css          # Global styles
│   ├── header.css           # Header styles
│   ├── footer.css           # Footer styles
│   └── hero.css             # Hero styles
├── public/                  # Static files
├── package.json
├── next.config.js
├── jsconfig.json
└── vercel.json
```

## 🔧 Configuration

### Formspree Setup

1. Go to https://formspree.io
2. Create account
3. Create new form
4. Copy form ID
5. Add to `.env.local`: `NEXT_PUBLIC_FORMSPREE_ID=your_id`

### Vercel Deployment

1. Push code to GitHub
2. Go to https://vercel.com
3. Import project
4. Add environment variables
5. Deploy

### Cloudflare DNS

1. Go to https://cloudflare.com
2. Add your domain
3. Update nameservers at domain registrar
4. Point to Vercel IP

## 📱 Pages Included

- **Home** - Hero, services, PM Suryaghar, testimonials
- **About** - Company info, mission, vision, team
- **Services** - Overview of all services
- **Residential** - Home solar systems
- **Commercial** - C&I solar solutions
- **Kusum Yojana** - Farmer scheme details
- **PM Suryaghar** - Government scheme info
- **Finance** - EMI calculator, financing options
- **Contact** - Contact form, service areas

## 🎨 Customization

### Colors

Edit `styles/globals.css`:

```css
:root {
  --primary-blue: #0057B8;
  --accent-gold: #FFC107;
  --light-grey: #F4F7FB;
  --dark-grey: #666;
  --success-green: #25D366;
}
```

### Company Info

Edit `.env.local`:

```
NEXT_PUBLIC_PHONE=+91 9928200456
NEXT_PUBLIC_EMAIL=info@aysolar.in
NEXT_PUBLIC_WHATSAPP=https://wa.me/919928200456
NEXT_PUBLIC_INSTAGRAM=@aysolarenergytonk
```

### Add Images

Place images in `public/images/` and reference:

```jsx
<img src="/images/project-1.jpg" alt="Project" />
```

## 🚀 Performance

- Optimized for Core Web Vitals
- Image optimization with Next.js
- CSS-in-JS for minimal bundle
- Lazy loading support
- Mobile-first responsive design

## 📊 SEO

- Meta tags on all pages
- Open Graph tags
- Structured data ready
- Mobile-friendly
- Fast loading times

## 🔐 Security

- Environment variables for sensitive data
- No hardcoded credentials
- HTTPS by default on Vercel
- Formspree handles form security

## 📞 Support

- **Phone:** +91 9928200456
- **Email:** info@aysolar.in
- **WhatsApp:** https://wa.me/919928200456

## 📝 License

GPL v2 or later

## 🎯 Next Steps

1. ✅ Clone repository
2. ✅ Install dependencies
3. ✅ Setup environment variables
4. ✅ Test locally
5. ✅ Deploy to Vercel
6. ✅ Setup Cloudflare DNS
7. ✅ Add custom domain
8. ✅ Monitor analytics

---

**Ready to launch your solar business online!** ☀️
