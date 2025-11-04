# 🚀 Vercel Deployment Checklist

## ✅ BEFORE Deploying to Vercel

### 1. Code & Build Verification
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run lint` to check for linting errors
- [ ] Run `npm run build` to verify the build succeeds
- [ ] Check for any TypeScript errors or warnings
- [ ] Test the production build locally with `npm start`
- [ ] Verify all pages load correctly in production mode

### 2. Environment Variables Preparation
- [ ] Copy `.env.example` to `.env.local` for local testing
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Prepare Google Search Console verification code (if available)
- [ ] Prepare Bing Webmaster verification code (if available)
- [ ] Test that environment variables work locally

### 3. Content Review
- [ ] Verify all personal information is correct (email, phone, Skype)
- [ ] Check all game links are working (Play Store, App Store, web)
- [ ] Verify GitHub and LinkedIn profile URLs
- [ ] Ensure all statistics are up-to-date (years of experience, games shipped)
- [ ] Review all text content for typos and grammar

### 4. SEO Preparation
- [ ] Decide on final production domain (e.g., omegazero.studio)
- [ ] Ensure favicon.ico exists in `app/` directory
- [ ] Verify Open Graph image will generate correctly
- [ ] Check that `robots.ts` and `sitemap.ts` use correct domain

### 5. Git Repository
- [ ] Create GitHub repository (if not already done)
- [ ] Ensure `.gitignore` is properly configured
- [ ] Verify `.env.local` is NOT committed (check `.gitignore`)
- [ ] Commit all production-ready code
- [ ] Push to GitHub main branch
- [ ] Verify CLAUDE.md is in the repository

### 6. Domain Preparation (If using custom domain)
- [ ] Purchase domain (if needed)
- [ ] Have domain registrar credentials ready
- [ ] Prepare DNS access for configuration

---

## 🌐 DURING Vercel Deployment

### 1. Initial Setup
- [ ] Sign up or log in to [Vercel](https://vercel.com)
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Select the correct repository: `omegazero-portfolio`
- [ ] Choose "Next.js" as framework preset (should auto-detect)

### 2. Project Configuration
- [ ] **Project Name**: Set to `omegazero-portfolio` or your preferred name
- [ ] **Root Directory**: Leave as `./` (default)
- [ ] **Build Command**: `npm run build` (default)
- [ ] **Output Directory**: `.next` (default)
- [ ] **Install Command**: `npm install` (default)

### 3. Environment Variables Setup
- [ ] Click "Environment Variables" section
- [ ] Add `NEXT_PUBLIC_SITE_URL`:
  - **Key**: `NEXT_PUBLIC_SITE_URL`
  - **Value**: `https://your-domain.vercel.app` (or custom domain)
  - **Environment**: Production, Preview, Development
- [ ] Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional):
  - **Key**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  - **Value**: `your-google-verification-code`
  - **Environment**: Production only
- [ ] Add `NEXT_PUBLIC_BING_SITE_VERIFICATION` (optional):
  - **Key**: `NEXT_PUBLIC_BING_SITE_VERIFICATION`
  - **Value**: `your-bing-verification-code`
  - **Environment**: Production only

### 4. Deploy
- [ ] Click "Deploy" button
- [ ] Wait for build to complete (2-3 minutes)
- [ ] Check build logs for any errors
- [ ] If errors occur, fix and redeploy

### 5. Custom Domain Setup (Optional but Recommended)
- [ ] Go to Project Settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter your custom domain (e.g., `omegazero.studio`)
- [ ] Follow DNS configuration instructions
- [ ] Add DNS records to your domain registrar:
  - **A Record**: `@` → Vercel IP
  - **CNAME**: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Enable "Redirect www to apex" or vice versa
- [ ] Verify SSL certificate is automatically provisioned

---

## ✨ AFTER Vercel Deployment

### 1. Immediate Verification (Within 5 minutes)
- [ ] Visit your deployed site URL
- [ ] Test all sections scroll correctly (home, games, about, skills, contact)
- [ ] Verify navigation menu works on desktop
- [ ] Test hamburger menu on mobile (resize browser)
- [ ] Check dark/light mode toggle
- [ ] Test all external links (Play Store, App Store, GitHub, LinkedIn)
- [ ] Verify contact form displays correctly (even if mock)
- [ ] Check 404 page by visiting `/non-existent-page`

### 2. Cross-Browser Testing (Within 1 hour)
- [ ] Test on Chrome (desktop & mobile)
- [ ] Test on Firefox (desktop & mobile)
- [ ] Test on Safari (desktop & iOS)
- [ ] Test on Edge (desktop)
- [ ] Verify responsive design on different screen sizes
- [ ] Check that all fonts load correctly
- [ ] Verify gradient text renders properly

### 3. Accessibility Testing (Within 1 hour)
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Verify skip-to-content link appears on Tab
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac)
- [ ] Check focus indicators are visible
- [ ] Verify form labels are read correctly

### 4. SEO Verification (Within 24 hours)
- [ ] Visit `https://your-domain.com/robots.txt` - verify it loads
- [ ] Visit `https://your-domain.com/sitemap.xml` - verify it loads
- [ ] Check Open Graph image: paste URL in [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check Twitter Card: paste URL in [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify page title and meta description in browser tab
- [ ] Check Google Search Console:
  - [ ] Add property with your domain
  - [ ] Submit sitemap.xml
  - [ ] Request indexing for homepage
- [ ] Check Bing Webmaster Tools (optional):
  - [ ] Add site
  - [ ] Submit sitemap.xml

### 5. Performance Testing (Within 24 hours)
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: >90 for Performance, >95 for Accessibility, SEO, Best Practices
- [ ] Run [GTmetrix](https://gtmetrix.com/)
- [ ] Check [WebPageTest](https://www.webpagetest.org/)
- [ ] Verify Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

### 6. Security Headers Verification (Within 24 hours)
- [ ] Run [Security Headers](https://securityheaders.com/) test
  - Target: A+ rating
- [ ] Verify these headers are present:
  - [ ] Strict-Transport-Security
  - [ ] Content-Security-Policy
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] Referrer-Policy
- [ ] Check [SSL Labs](https://www.ssllabs.com/ssltest/) (if custom domain)
  - Target: A+ rating

### 7. Analytics & Monitoring Setup (Within 1 week)
- [ ] **Google Analytics** (recommended):
  - [ ] Create GA4 property
  - [ ] Add tracking code to `app/layout.tsx`
  - [ ] Set up goals and conversions
- [ ] **Vercel Analytics** (optional):
  - [ ] Enable in Project Settings → Analytics
  - [ ] Review Web Vitals data
- [ ] **Uptime Monitoring** (optional):
  - [ ] Set up [UptimeRobot](https://uptimerobot.com/) or similar
  - [ ] Configure alerts for downtime

### 8. Social Media Verification (Within 1 week)
- [ ] Share on LinkedIn - verify preview card looks correct
- [ ] Share on Twitter - verify card renders properly
- [ ] Share on Facebook - verify preview displays correctly
- [ ] Update LinkedIn profile with portfolio URL
- [ ] Update GitHub profile README with portfolio link

### 9. Contact Form Enhancement (Optional - Week 2+)
- [ ] Integrate real email service:
  - Option A: [Resend](https://resend.com/) + Next.js API Route
  - Option B: [SendGrid](https://sendgrid.com/) + Serverless Function
  - Option C: [EmailJS](https://www.emailjs.com/) - Client-side only
  - Option D: [Formspree](https://formspree.io/) - Form backend service
- [ ] Add rate limiting (if using API route)
- [ ] Implement honeypot field for spam protection
- [ ] Add email notification for form submissions
- [ ] Test form thoroughly after implementation

### 10. Ongoing Maintenance (Monthly)
- [ ] Update experience years if applicable
- [ ] Add new game projects as they ship
- [ ] Update download statistics
- [ ] Check for broken links
- [ ] Review and update meta descriptions
- [ ] Monitor Google Search Console for issues
- [ ] Check Core Web Vitals performance

---

## 🆘 Troubleshooting Common Issues

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Verify `package.json` dependencies are correct
- Ensure `next.config.ts` is valid
- Check for TypeScript errors locally: `npx tsc --noEmit`

### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Verify variables are set for correct environment (Production/Preview)
- Redeploy after adding/changing environment variables
- Check browser console for undefined variables

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct in registrar
- Check domain status in Vercel dashboard
- Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### Images/Fonts Not Loading
- Check Content Security Policy in `next.config.ts`
- Verify file paths are correct
- Check browser console for CSP violations
- Ensure files are in `/public` directory or properly imported

### Slow Performance
- Check bundle size in Vercel analytics
- Optimize images if added
- Review Lighthouse report for specific issues
- Consider enabling Vercel Speed Insights

---

## 📞 Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: support@vercel.com
- **Community Discord**: https://vercel.com/discord

---

## ✅ Deployment Complete!

Once all items are checked, your portfolio is successfully deployed and production-ready! 🎉

**Last Updated**: 2025-11-03
**Portfolio Owner**: Md Nazmul Haque Chowdhury
**Contact**: nazmulredoy.csecu@gmail.com
