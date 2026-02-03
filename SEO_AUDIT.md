# SEO Audit & Action Plan - Dynamic Solutions Electrical & Aircon

## Current Site Analysis
**URL:** https://dsea-site.vercel.app/
**Business:** Dynamic Solutions Electrical & Aircon
**Location:** Cranbourne, VIC
**Phone:** 0450 067 924

---

## ✅ What's Already Good

### Technical SEO
- ✅ Proper title tag with location + keywords
- ✅ Good meta description (call-to-action + phone)
- ✅ Schema markup (LocalBusiness, FAQPage, Service)
- ✅ Breadcrumb schema
- ✅ Canonical URL set
- ✅ Open Graph tags for social sharing
- ✅ Robots: index,follow
- ✅ Mobile responsive (viewport meta)

### Content SEO
- ✅ Clear service descriptions
- ✅ Local keywords (Cranbourne, South-East Melbourne)
- ✅ FAQ section with schema
- ✅ Areas served listed
- ✅ Testimonials with ratings
- ✅ Accreditations/qualifications displayed

---

## 🔧 Improvements Needed

### 1. CRITICAL: Domain & SSL
**Issue:** Currently on vercel.app subdomain
**Fix:** 
- Connect custom domain (dsea.com.au or dynamicsolutionselectrical.com.au)
- Ensure SSL certificate (HTTPS)

### 2. PAGE SPEED (Important for rankings)
**Issues to fix:**
- Large React bundle
- No image optimization
- No lazy loading

**Actions:**
```bash
# Add to vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
}
```

### 3. IMAGES (Missing alt text & optimization)
**Current:** Logo has alt text, but no other images
**Fix:**
- Add before/after photos of work
- Optimize images (WebP format)
- Add descriptive alt text

### 4. CONTENT GAPS
**Add these pages/sections:**
- [ ] "About Us" page (builds trust)
- [ ] "Our Work" / Gallery (before/after)
- [ ] Individual service pages (better for SEO)
  - /split-system-installation-cranbourne
  - /ducted-air-conditioning-cranbourne
  - /emergency-electrician-cranbourne
- [ ] Blog posts (for long-tail keywords)
  - "How often should I service my air conditioner?"
  - "Signs your switchboard needs upgrading"

### 5. LOCAL SEO
**Google Business Profile Setup:**
```
Business Name: Dynamic Solutions Electrical & Aircon
Category: Electrician / Air Conditioning Contractor
Address: Cranbourne, VIC 3977
Phone: 0450 067 924
Website: https://dsea.com.au
Hours: Monday-Friday 7am-6pm, Saturday 8am-4pm
Services: Add all services
Photos: Upload 10+ (team, van, work, before/after)
Posts: Weekly offers/updates
Reviews: Request from every customer
```

### 6. BACKLINKS (Off-page SEO)
**Get listed on:**
- TrueLocal.com.au
- Yelp.com.au
- OneFlare.com.au
- Hipages.com.au
- Industry directories

---

## 📊 Google Ads Strategy ($20/day = ~$600/month)

### Campaign Structure:

**Campaign 1: Emergency/Electrician ($10/day)**
- Keywords: "emergency electrician cranbourne", "power outage cranbourne", "24/7 electrician frankston"
- Ad copy: "24/7 Emergency Electrician | Cranbourne & SE Melbourne | Call 0450 067 924"

**Campaign 2: Air Conditioning ($10/day)**
- Keywords: "air conditioning installation cranbourne", "split system repair frankston", "ducted air conditioning berwick"
- Ad copy: "Air Con Install & Repairs | Cranbourne | Same-Day Quotes | Call Now"

### Landing Page Optimization:
- Add phone number in header (sticky)
- Add "Call Now" button above fold
- Add trust badges (licenses, insurance)
- Add simple contact form
- Add map showing service area

---

## 🎯 Priority Action List

### Week 1:
1. [ ] Buy domain (dsea.com.au)
2. [ ] Set up Google Business Profile
3. [ ] Submit sitemap to Google Search Console
4. [ ] Fix page speed issues

### Week 2:
5. [ ] Add 5+ photos to Google Business
6. [ ] Create "About Us" section
7. [ ] Set up Google Ads account
8. [ ] Install Google Analytics 4

### Week 3:
9. [ ] Start Google Ads campaigns
10. [ ] Create first blog post
11. [ ] Get 3+ Google reviews
12. [ ] List on 3 directories

### Ongoing:
- Post to Google Business weekly
- Request reviews from every job
- Monitor and adjust Google Ads
- Add new content monthly

---

## 📈 Expected Results

**Timeline:**
- Month 1: Google Business showing in local pack
- Month 2-3: Rankings improve for local keywords
- Month 3-6: First page for "electrician cranbourne"

**Traffic estimates:**
- Google Business: 50-150 views/month
- Organic search: 20-50 visits/month (growing)
- Google Ads: 100-300 clicks/month (with $20/day)

---

## Tools Needed:
- Google Search Console (free)
- Google Analytics 4 (free)
- Google Business Profile (free)
- Google Ads ($20/day)
- Domain: ~$20/year

---

## Next Steps:
1. Buy domain dsea.com.au
2. I'll help configure DNS for Vercel
3. Set up Google Business Profile
4. Create Google Ads account
5. Start the optimization work

Ready to start? 🚀