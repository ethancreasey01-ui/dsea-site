# Google Ads Setup Guide
## Dynamic Solutions Electrical & Aircon
### Budget: $20/day (~$600/month)

---

## Campaign Strategy Overview

**Goal:** Generate phone calls and quote requests
**Budget:** $20/day ($600/month)
**Geographic Target:** 30km radius from Cranbourne

### Campaign Split:
- **Campaign 1: Emergency Electrician** - $10/day
- **Campaign 2: Air Conditioning** - $10/day

---

## Step 1: Create Google Ads Account

1. Go to: https://ads.google.com/
2. Sign in with same Google account as Business Profile
3. Click "Start now"
4. Select "Switch to Expert Mode" (bottom of page)
5. Choose "Create a campaign without a goal's guidance"
6. Select "Leads" as campaign goal

---

## Campaign 1: Emergency Electrician

### Settings:
- **Campaign Name:** Emergency Electrician - Cranbourne
- **Campaign Type:** Search
- **Networks:** Search Network only (uncheck Display Network)
- **Locations:** 
  - Target: Cranbourne, Frankston, Berwick, Narre Warren, Hampton Park, Dandenong
  - Radius: 30km from Cranbourne
- **Languages:** English
- **Budget:** $10/day
- **Bidding:** Maximize Conversions (or Manual CPC $3-5)

### Ad Groups:

**Ad Group 1: Emergency Electrician**
Keywords (Phrase Match):
- "emergency electrician"
- "emergency electrician cranbourne"
- "emergency electrician frankston"
- "24 hour electrician"
- "after hours electrician"
- "weekend electrician"
- "emergency electrical repairs"

**Ad Group 2: Power Outage**
Keywords:
- "power outage electrician"
- "no power electrician"
- "power off electrician"
- "tripped breaker electrician"

**Ad Group 3: Fault Finding**
Keywords:
- "electrical fault finding"
- "burning smell electrical"
- "electrical safety check"
- "switchboard problems"

### Ads (Create 3 per ad group):

**Ad 1:**
Headline 1: 24/7 Emergency Electrician
Headline 2: Cranbourne & SE Melbourne
Headline 3: Call 0450 067 924
Description 1: Power outage? Faulty switchboard? Licensed electrician available 24/7. Fast response, fixed right the first time.
Description 2: 15+ years experience. Fully licensed & insured. No call-out fee with repair.
Path 1: emergency
Path 2: electrician

**Ad 2:**
Headline 1: Local Emergency Electrician
Headline 2: Same Day Service
Headline 3: Call Now 0450 067 924
Description 1: Fast, reliable emergency electrical repairs in Cranbourne, Frankston & Berwick. Available nights & weekends.
Description 2: Safety switch problems? Power outages? We're here to help 24/7. Call Elliot today.

**Ad 3:**
Headline 1: Electrician Near Me
Headline 2: Cranbourne Based
Headline 3: 0450 067 924
Description 1: Your local Cranbourne electrician for emergencies, repairs & installations. Professional, tidy workmanship.
Description 2: 24/7 availability. All work guaranteed. Call now for immediate assistance.

### Ad Extensions:

**Sitelink Extensions:**
- Our Services → #services
- Air Conditioning → #ac
- Get a Quote → #contact
- Areas We Service → #areas

**Call Extensions:**
- Phone: 0450 067 924
- Schedule: Show all days, 24 hours

**Location Extensions:**
- Link to Google Business Profile

**Callout Extensions:**
- 24/7 Emergency Service
- 15+ Years Experience
- Licensed & Insured
- Same Day Quotes
- All Work Guaranteed
- Local Cranbourne Business

**Structured Snippets:**
- Type: Service catalog
- Values: Switchboard Upgrades, Split System Installation, LED Lighting, Safety Switches, Power Points, Fault Finding

---

## Campaign 2: Air Conditioning

### Settings:
- **Campaign Name:** Air Conditioning - Cranbourne
- **Campaign Type:** Search
- **Networks:** Search Network only
- **Locations:** Same 30km radius
- **Budget:** $10/day
- **Bidding:** Maximize Conversions (or Manual CPC $2-4)

### Ad Groups:

**Ad Group 1: Split System Installation**
Keywords:
- "split system installation"
- "split system installation cranbourne"
- "split system install frankston"
- "air conditioner installation"
- "split system supply and install"
- "split ac installation"

**Ad Group 2: AC Repairs**
Keywords:
- "air conditioning repairs"
- "ac repair cranbourne"
- "split system repairs"
- "air conditioner not working"
- "ac service cranbourne"
- "air conditioning service"

**Ad Group 3: Ducted AC**
Keywords:
- "ducted air conditioning"
- "ducted air conditioning installation"
- "ducted ac repairs"
- "ducted air conditioning service"

**Ad Group 4: Evaporative Cooling**
Keywords:
- "evaporative cooling service"
- "evap cooling repairs"
- "evaporative cooler maintenance"

### Ads:

**Ad 1:**
Headline 1: Split System Installation
Headline 2: Cranbourne & SE Melbourne
Headline 3: Free Quotes 0450 067 924
Description 1: Professional split system installation by licensed technicians. Daikin, Mitsubishi, Hisense & more.
Description 2: Same-day quotes. Clean, tidy installs. 5-year workmanship guarantee. Call Elliot now.

**Ad 2:**
Headline 1: Air Con Repairs Cranbourne
Headline 2: Same Day Service
Headline 3: Call 0450 067 924
Description 1: Fast AC repairs for split systems, ducted & evaporative. Diagnosis $250. We'll get you cool again.
Description 2: 15+ years experience. All brands serviced. Emergency repairs available. Book online or call.

**Ad 3:**
Headline 1: Ducted Air Conditioning
Headline 2: Install & Repairs
Headline 3: 0450 067 924
Description 1: Expert ducted AC installation and repairs in Cranbourne area. Professional service, competitive prices.
Description 2: From $600 for major service. Servicing, repairs & new installs. Call for a quote.

### Extensions:
Same as Campaign 1, plus:

**Price Extensions:**
- Split System Service: From $250
- Ducted AC Service: From $350
- AC Diagnosis: $250 + GST

---

## Conversion Tracking Setup

**You MUST set up conversion tracking:**

### Phone Call Conversions:
1. Tools & Settings → Conversions
2. Click "New conversion action"
3. Select "Phone calls"
4. Choose "Calls from ads using call extensions"
5. Set value: $50 (average lead value)
6. Count: One

### Website Conversions:
1. New conversion action → Website
2. Add your domain
3. Create these events:
   - Contact form submit
   - Phone number click
   - Email link click

### Install Tag:
Add this to your website <head>:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
```

---

## Keyword Match Types Explained

**Broad Match Modifier (Deprecated):** Don't use

**Phrase Match:** "electrician cranbourne" 
- Matches: "best electrician cranbourne", "electrician cranbourne reviews"
- Use this for most keywords

**Exact Match:** [emergency electrician]
- Matches: "emergency electrician" only
- Use for high-intent, expensive keywords

**Negative Keywords:** Add these to both campaigns
- free
- diy
- course
- apprenticeship
- job
- career
- salary
- yourself
- how to
- youtube
- diagram
- pdf

---

## Expected Performance

### With $20/day Budget:

**Campaign 1 (Electrician - $10/day):**
- Clicks: 3-5/day
- CPC: $2-3
- CTR: 8-15%
- Conversions: 1-2/week

**Campaign 2 (Air Con - $10/day):**
- Clicks: 4-6/day
- CPC: $1.50-2.50
- CTR: 5-10%
- Conversions: 1-3/week

**Total Monthly:**
- ~150-250 clicks
- ~8-20 leads (calls/forms)
- Cost per lead: ~$30-75

---

## Optimization Schedule

**Weekly:**
- Check search terms report
- Add negative keywords
- Pause underperforming ads
- Adjust bids if using manual

**Monthly:**
- Review conversion data
- Test new ad copy
- Expand keyword list
- Adjust budgets between campaigns

**Quarterly:**
- Full account audit
- Landing page improvements
- Seasonal adjustments (more AC budget in summer)

---

## Quick Optimization Tips

1. **If CTR is low (<3%):** Improve ad copy, add more extensions
2. **If CPC is high (>$5):** Add more negative keywords, improve Quality Score
3. **If no conversions:** Check landing page, add phone number prominently
4. **If cost per lead is high:** Focus on best performing keywords, pause others

---

## Landing Page Requirements

Your website needs:
- [ ] Phone number in header (click-to-call)
- [ ] Phone number above fold (big)
- [ ] Contact form (simple: Name, Phone, Service needed)
- [ ] Trust badges (licenses, insurance, years in business)
- [ ] Clear service descriptions
- [ ] Map showing service area
- [ ] Fast loading (<3 seconds)
- [ ] Mobile optimized

---

## Important Notes

⚠️ **Don't:**
- Use broad match keywords
- Ignore negative keywords
- Set and forget
- Bid on competitor names

✅ **Do:**
- Check account daily (first 2 weeks)
- Call customers who submit forms within 5 minutes
- Track every lead
- Ask customers how they found you

---

## Getting Help

If you need help:
1. Google Ads Help: https://support.google.com/google-ads
2. Hire a freelancer on Upwork (one-time setup: $200-500)
3. Google offers free support for new accounts

---

**Ready to launch?** Start with Campaign 1, let it run for 1 week, then add Campaign 2! 🚀