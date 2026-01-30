import React from "react";
import dseaLogo from "./assets/dsea-logo.webp";
import {
  Phone,
  MapPin,
  Zap,
  Settings,
  Activity,
  RefreshCw,
  CloudRain,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Mail,
  Sun,
  Snowflake,
  Home,
  Building2,
  Facebook,
  Instagram,
  Menu,
  X,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";

/* =========================================================
   SCHEMA MARKUP (for SEO)
   ========================================================= */
const SchemaMarkup = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "HVACBusiness", "LocalBusiness"],
    name: "Dynamic Solutions Electrical & Aircon",
    url: "https://www.dsea.com.au/",
    description:
      "Local electrician & air conditioning experts in Cranbourne and South-East Melbourne. Switchboards, safety checks, lighting, split system installs, ducted aircon servicing and 24/7 emergencies.",
    telephone: "+61450067924",
    email: "info@dsea.com.au",
    priceRange: "$$",
    image: "https://www.dsea.com.au/hero-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cranbourne",
      addressLocality: "Cranbourne",
      addressRegion: "VIC",
      postalCode: "3977",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.108,
      longitude: 145.283,
    },
    areaServed: [
      { "@type": "City", name: "Cranbourne" },
      { "@type": "City", name: "Frankston" },
      { "@type": "City", name: "Berwick" },
      { "@type": "City", name: "Langwarrin" },
      { "@type": "City", name: "Patterson Lakes" },
      { "@type": "City", name: "Clyde North" },
      { "@type": "City", name: "Carrum Downs" },
      { "@type": "City", name: "Mornington Peninsula" },
    ],
    founder: {
      "@type": "Person",
      name: "Elliot",
      jobTitle: "Electrician & Air Conditioning Specialist",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
    },
    sameAs: [
      "https://www.facebook.com/dynamicsolutionselectrical",
      "https://www.instagram.com/dynamicsolutionselectrical",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide warranties or guarantees on your work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All materials we supply are covered by manufacturer warranties and every job comes with a workmanship guarantee. If something isn't right, we'll come back and make it right.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you get to my job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most non-urgent jobs are booked within 1–3 business days. For power outages, urgent faults or emergency aircon issues, we prioritise same-day service wherever possible.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with emergencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer 24/7 emergency electrical and air conditioning support for urgent issues like power outages, tripped breakers, and aircon failures. Call 0450 067 924 anytime.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Dynamic Solutions Electrical & Aircon",
    },
    serviceType: ["Electrical Services", "Air Conditioning Services", "24/7 Emergency Repairs"],
    areaServed: "SE2000",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

/* =========================================================
   DATA
   ========================================================= */

const ELECTRICAL_SERVICES = [
  {
    title: "Switchboards & Safety Upgrades",
    icon: Settings,
    desc: "Modern switchboard upgrades, safety switches and surge protection to keep your home safe and compliant.",
  },
  {
    title: "Power Points, Lighting & Fans",
    icon: Zap,
    desc: "Extra power points, LED downlights, feature lighting and ceiling fans installed neatly with minimal disruption.",
  },
  {
    title: "Fault Finding & Power Outages",
    icon: Activity,
    desc: "Fast diagnosis of tripping breakers, burning smells and power loss so you’re back up and running safely.",
  },
  {
    title: "New Builds & Renovations",
    icon: Home,
    desc: "Wiring for extensions, kitchens, bathrooms and new homes with clear communication from rough-in to handover.",
  },
  {
    title: "Hot Water Service Replacements",
    icon: RefreshCw,
    desc: "Expert hot water system supply and installation from $3,899 + GST. Quality brands, licensed installation, and hassle-free service for homes and businesses.",
  },
  {
    title: "EV Charger Installations",
    icon: Zap,
    desc: "Future-ready EV charging solutions installed by licensed electricians. Convenient, safe charging for your electric vehicle at home or business.",
  },
];

const AC_SERVICES = [
  {
    name: "AC Diagnosis – Split & Ducted",
    price: "$250 + GST",
    desc: "Full fault-finding and diagnosis for split and ducted systems. We test electrical, airflow and performance so you know exactly what’s wrong before repairs.",
    icon: AlertTriangle,
  },
  {
    name: "Split System Minor Service",
    price: "$250 + GST",
    desc: "Filter clean, basic coil clean, electrical checks and performance test to keep your split system running efficiently.",
    icon: Sun,
  },
  {
    name: "Split System Major Service",
    price: "$350 + GST",
    desc: "Deep clean of indoor and outdoor units, coil and drain clean, detailed checks and performance optimisation.",
    icon: RefreshCw,
  },
  {
    name: "Ducted Aircon Minor Service",
    price: "$350 + GST",
    desc: "System check, filter cleaning and airflow test to keep your ducted system running smoothly.",
    icon: CloudRain,
  },
  {
    name: "Ducted Aircon Major Service",
    price: "$600 + GST",
    desc: "Comprehensive ducted service including deep clean, airflow and efficiency testing, and complete electrical and mechanical inspection.",
    icon: Snowflake,
  },
  {
    name: "New System Supply & Install",
    price: "POA",
    desc: "Supply and installation of new split and ducted systems, correctly sized for your home with clean, professional installation.",
    icon: Home,
  },
  {
    name: "Evaporative Cooling Service",
    price: "$250 + GST",
    desc: "Evaporative cooling system checks, maintenance and repairs. Cost-effective cooling solution inspection and servicing for optimal performance.",
    icon: CloudRain,
  },
];

const AREAS = [
  "Cranbourne",
  "Cranbourne West",
  "Cranbourne North",
  "Frankston",
  "Berwick",
  "Langwarrin",
  "Patterson Lakes",
  "Clyde North",
  "Carrum Downs",
  "Skye",
  "Seaford",
  "Mornington Peninsula",
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    suburb: "Cranbourne",
    text: "Elliot was professional, quick and tidy. He explained everything clearly and the work was completed exactly on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael T.",
    suburb: "Frankston",
    text: "Had him do a full switchboard upgrade. The workmanship is top-notch and he was very respectful of our home throughout.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    suburb: "Berwick",
    text: "Called for emergency aircon repair on a hot day. Same-day response and the system was back working in a few hours. Great service!",
    rating: 5,
  },
  {
    name: "David W.",
    suburb: "Patterson Lakes",
    text: "Fixed our ducted system service – explained what needed doing, pricing was fair, and they cleaned up perfectly after. Will use again.",
    rating: 5,
  },
];

const BRANDS = [
  { name: "Daikin", url: "https://www.daikin.com.au/" },
  { name: "Mitsubishi Heavy", url: "https://www.mitsubishi-electric.com.au/" },
  { name: "Hisense", url: "https://www.hisense.com.au/" },
];

const ACCREDITATIONS = [
  { title: "Electrician", detail: "REC 33015", verified: true },
  { title: "Refrigeration", detail: "Licence L170441", verified: true },
  { title: "Plumbing", detail: "Reg 124210", verified: true },
  { title: "VEU Accredited", detail: "Victorian Energy Upgrade", verified: true },
];

const FAQS = [
  {
    q: "Do you provide warranties or guarantees on your work?",
    a: "Yes. All materials we supply are covered by manufacturer warranties and every job comes with a workmanship guarantee. If something isn’t right, we’ll come back and make it right.",
  },
  {
    q: "Why might your quote be higher than others?",
    a: "We focus on quality, reliability and long-term safety – not the cheapest possible shortcut. Our quotes include experienced tradespeople, quality materials and the time needed to do the job properly, so you’re not paying twice to fix issues later.",
  },
  {
    q: "How quickly can you get to my job?",
    a: "Most non-urgent jobs are booked within 1–3 business days. For power outages, urgent faults or emergency aircon issues, we prioritise same-day service wherever possible.",
  },
  {
    q: "Which areas do you service?",
    a: "We’re based in Cranbourne and regularly work in Frankston, Berwick, Langwarrin, Patterson Lakes, Clyde North, Carrum Downs, the Mornington Peninsula and surrounding South-East Melbourne suburbs.",
  },
  {
    q: "Which air conditioning brands do you work with?",
    a: "We regularly work with leading brands like Daikin, Mitsubishi Heavy, Hisense and other major manufacturers, and can advise on the best choice for your home.",
  },
];

/* =========================================================
   ANIMATION HELPERS
   ========================================================= */

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay, type: "spring", stiffness: 120 },
});

/* =========================================================
   HEADER
   ========================================================= */

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#05070b]/90 backdrop-blur border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <motion.a
          href="#top"
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Dynamic Solutions Electrical & Aircon"
        >
          {/* B) Brand wordmark */}
          <img
            src={dseaLogo}
            alt="Dynamic Solutions Electrical & Aircon"
            className="h-12 sm:h-14 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[#f6c948] transition">Services</a>
          <a href="#ac" className="hover:text-[#f6c948] transition">Air Conditioning</a>
          <a href="#areas" className="hover:text-[#f6c948] transition">Areas We Service</a>
          <a href="#faq" className="hover:text-[#f6c948] transition">FAQ</a>
          <a href="#contact" className="hover:text-[#f6c948] transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="tel:0450067924"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6c948] text-white font-semibold text-sm shadow-md"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            <Phone className="w-4 h-4" />
            0450 067 924
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 rounded bg-[#070b12]/70"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden border-t border-white/10 bg-[#05070b]"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
        >
          <nav className="px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#services" className="py-1" onClick={() => setOpen(false)}>Services</a>
            <a href="#ac" className="py-1" onClick={() => setOpen(false)}>Air Conditioning</a>
            <a href="#areas" className="py-1" onClick={() => setOpen(false)}>Areas We Service</a>
            <a href="#faq" className="py-1" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contact" className="py-1" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="tel:0450067924"
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f6c948] text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Call 0450 067 924
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

/* =========================================================
   BREADCRUMB SCHEMA (for SEO)
   ========================================================= */

const BreadcrumbSchema = () => {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsea.com.au/" },
      { "@type": "ListItem", position: 2, name: "Electrical Services", item: "https://www.dsea.com.au/#services" },
      { "@type": "ListItem", position: 3, name: "Air Conditioning", item: "https://www.dsea.com.au/#ac" },
      { "@type": "ListItem", position: 4, name: "Service Areas", item: "https://www.dsea.com.au/#areas" },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
  );
};

/* =========================================================
   BRAND "WISPS" (blue smoke / energy)
   ========================================================= */

const BlueWisps = ({ intensity = 1, fixed = false, className = '' }) => {
  // Purely decorative: brand-style blue wisps like the current dsea.com.au look.
  // Uses blurred SVG strokes + subtle float animation.
  const pos = fixed ? 'fixed' : 'absolute'
  return (
    <div className={`pointer-events-none ${pos} inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 1200 700"
        className="absolute -top-10 -left-32 w-[1400px] h-[820px] opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 * intensity }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <filter id="wispBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <linearGradient id="wispG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#11c5ff" stopOpacity="0.0" />
            <stop offset="0.25" stopColor="#11c5ff" stopOpacity="0.55" />
            <stop offset="0.55" stopColor="#11c5ff" stopOpacity="0.28" />
            <stop offset="1" stopColor="#11c5ff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <g filter="url(#wispBlur)">
          <motion.path
            d="M 50 420 C 220 260, 420 580, 610 370 C 760 210, 930 480, 1140 280"
            stroke="url(#wispG)"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0.7, opacity: 0.25 }}
            animate={{
              pathLength: [0.7, 1, 0.75],
              opacity: [0.22, 0.38, 0.22],
              translateY: [0, -10, 0],
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.path
            d="M 80 170 C 260 60, 370 250, 520 170 C 690 80, 820 220, 980 160 C 1090 120, 1150 130, 1180 120"
            stroke="url(#wispG)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ opacity: 0.18 }}
            animate={{ opacity: [0.16, 0.28, 0.16], translateY: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.path
            d="M -40 560 C 160 430, 260 650, 460 520 C 650 400, 720 630, 920 520 C 1030 460, 1130 540, 1260 450"
            stroke="url(#wispG)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            initial={{ opacity: 0.14 }}
            animate={{ opacity: [0.12, 0.26, 0.12], translateY: [0, -6, 0] }}
            transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      </motion.svg>

      {/* soft glow pools */}
      <motion.div
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(17,197,255,0.22), transparent 65%)' }}
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-10 -right-28 w-[560px] h-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(17,197,255,0.16), transparent 70%)' }}
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/* =========================================================
   RAIN + LIGHTNING EFFECT
   ========================================================= */

const Raindrop = ({ delay, duration, xPos }) => (
  <motion.div
    className="absolute w-0.5 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 800, opacity: [0, 1, 1, 0] }}
    transition={{ delay, duration, repeat: Infinity, repeatDelay: 0, ease: "linear" }}
    style={{
      left: `${xPos}%`,
      height: "40px",
      boxShadow: "0 0 3px rgba(253,224,71,0.6)",
    }}
  />
);

const LightningFlash = ({ delay }) => (
  <motion.div
    className="absolute inset-0 bg-white pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.8, 0, 0.6, 0] }}
    transition={{ delay, duration: 0.3, repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
  />
);

// Cool air effect: visible wind + snow blowing across the hero.
// (More horizontal motion, with slight vertical drift + sway.)
const RainLightningEffect = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* chill glow concentrated near the "air outlet" (top/right) */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(900px 420px at 88% 12%, rgba(17,197,255,0.16), transparent 62%), radial-gradient(780px 460px at 70% 18%, rgba(17,197,255,0.10), transparent 66%)',
      }}
    />

    {/* wind streaks (read as airflow) */}
    {Array.from({ length: 34 }).map((_, i) => {
      const startLeft = 70 + Math.random() * 45
      const startTop = 4 + Math.random() * 55
      const driftX = -(720 + Math.random() * 1200)
      const driftY = -18 + Math.random() * 36
      const height = Math.round(14 + Math.random() * 38)
      const dur = 2.6 + Math.random() * 2.2

      return (
        <motion.div
          key={`wind-${i}`}
          className="absolute"
          style={{ left: `${startLeft}%`, top: `${startTop}%`, rotate: '-10deg' }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.45, 0.45, 0],
            x: [0, driftX],
            // very small vertical movement + a bit of sway so it reads as wind (not falling)
            y: [0, driftY, driftY * 0.6, driftY * 0.2],
          }}
          transition={{ delay: Math.random() * 1.6, duration: dur, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="rounded-full"
            style={{
              width: '2px',
              height: `${height}px`,
              background:
                'linear-gradient(to bottom, rgba(17,197,255,0), rgba(17,197,255,0.42), rgba(255,255,255,0.10), rgba(17,197,255,0))',
              boxShadow: '0 0 14px rgba(17,197,255,0.14)',
              filter: 'blur(0.2px)',
            }}
          />
        </motion.div>
      )
    })}

    {/* snow/ice flakes that blow across */}
    {Array.from({ length: 26 }).map((_, i) => {
      const startLeft = 70 + Math.random() * 45
      const startTop = -5 + Math.random() * 65
      const driftX = -(820 + Math.random() * 1400)
      const driftY = -40 + Math.random() * 80
      const size = Math.round(2 + Math.random() * 4)
      const dur = 5.5 + Math.random() * 4.5

      return (
        <motion.div
          key={`flake-${i}`}
          className="absolute"
          style={{ left: `${startLeft}%`, top: `${startTop}%` }}
          initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            x: [0, driftX],
            // tiny vertical drift + wobble
            y: [0, driftY, driftY * 0.5, driftY * 0.1],
            rotate: [0, 160, 320],
          }}
          transition={{ delay: Math.random() * 2.4, duration: dur, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.98), rgba(255,255,255,0.16))',
              boxShadow: '0 0 14px rgba(17,197,255,0.12)',
            }}
          />
        </motion.div>
      )
    })}

    {/* a couple of big soft wind bands for readability */}
    {[{ top: '22%', d: 0.2 }, { top: '46%', d: 1.4 }, { top: '68%', d: 0.9 }].map((w, idx) => (
      <motion.div
        key={`band-${idx}`}
        className="absolute left-0 right-0"
        style={{ top: w.top }}
        initial={{ x: '18%', opacity: 0 }}
        animate={{ x: ['18%', '-18%'], opacity: [0, 0.22, 0] }}
        transition={{ duration: 6.5, delay: w.d, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="mx-auto h-[2px] w-[92%] rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(17,197,255,0.30), rgba(17,197,255,0.10), transparent)',
            filter: 'blur(0.6px)',
          }}
        />
      </motion.div>
    ))}
  </div>
);

/* =========================================================
   HERO
   ========================================================= */

const Hero = ({ heroRef }) => (
  <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-[#05070b] via-[#05070b] to-[#070b12] text-white">
    <RainLightningEffect />
    <BlueWisps intensity={1} />

    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#11c5ff]/25 rounded-full blur-3xl animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-[#f6c948]/30 rounded-full blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />

      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-[#f6c948]/10 rounded-full blur-2xl animate-[pulseGlow_9s_ease-in-out_infinite]" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>

    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
      <motion.div {...fadeInUp(0.1)}>
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070b12] border border-white/10 text-xs mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, borderColor: "#0284c7" }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3 }}>
            <CheckCircle2 className="w-4 h-4 text-[#f6c948]" />
          </motion.div>
          <span>Local electrician & aircon specialist</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Reliable <span className="text-[#f6c948]">Electrical & Air Conditioning</span> in Cranbourne & South-East Melbourne
        </h1>

        <motion.p
          className="text-slate-200 text-base sm:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Whether it's a tripping switchboard, new power points, a full aircon system install or emergency repairs at 2am, Elliot and the team are here to help. Locals trust us for neat work, honest pricing and getting the job done on time.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <div className="relative group">
            <motion.a
              href="tel:0450067924"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#f6c948] text-white font-semibold text-sm shadow-md relative overflow-hidden"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.06, boxShadow: "0 15px 30px rgba(250,204,21,0.4)" }}
              whileTap={{ scale: 0.96, y: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Call 0450 067 924</span>
            </motion.a>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white text-sm hover:bg-[#0b1220] transition"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96, y: 0 }}
          >
            <Mail className="w-4 h-4" />
            Request a quote
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 text-xs text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {["15+ years experience", "Fully licensed & insured", "Neat, reliable & on time"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f6c948]" />
              <span>{t}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="relative" {...scaleIn(0.3)}>
        <div className="rounded-2xl bg-gradient-to-br from-[#0b1220] to-[#070b12] border border-white/10 p-6 shadow-2xl overflow-hidden relative">
          <motion.div
            className="flex items-center gap-3 mb-4 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-[#0b1220] flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20 }}
            >
              <Building2 className="w-5 h-5 text-[#f6c948]" />
            </motion.div>
            <div>
              <div className="font-semibold">Dynamic Solutions Electrical & Aircon</div>
              <div className="text-xs text-slate-300">REC 33015 · Refrigeration L170441 · Plumbing Reg 124210</div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 text-xs relative z-10"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              {
                icon: Zap,
                label: "Electrical",
                text: "Switchboards, safety checks, lighting, power points, new builds & renovations.",
              },
              {
                icon: CloudRain,
                label: "Air Conditioning",
                text: "Split system and ducted installs, servicing, cleaning and fault finding.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="p-3 rounded-lg bg-[#0b1220]/60 border border-white/10/50 hover:border-[#11c5ff]/40 transition"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(7, 89, 133, 0.8)",
                  boxShadow: "0 8px 16px rgba(253,224,71,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="w-4 h-4 text-[#f6c948]" />
                  <span className="font-semibold">{item.label}</span>
                </div>
                <p className="text-slate-200">{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              className="p-3 rounded-lg bg-[#0b1220]/60 border border-white/10/50 col-span-2"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(7, 89, 133, 0.8)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#f6c948]" />
                <span className="font-semibold">Based in Cranbourne</span>
              </div>
              <p className="text-slate-200">
                Regularly working in Frankston, Berwick, Langwarrin, Clyde North, Carrum Downs and across the Mornington Peninsula.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute -inset-6 -z-10 bg-[#0f172a]/40 blur-3xl opacity-40" />
      </div>
    </div>
  </section>
);

/* =========================================================
   ELECTRICAL SERVICES
   ========================================================= */

const ElectricalServices = () => (
  <section id="services" className="bg-[#05070b] py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)} className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our electrical services</h2>
        <p className="text-slate-200 text-base max-w-3xl">
          From switchboard upgrades and safety checks to power points, lighting and fault finding — we handle all your electrical needs with professional workmanship.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ELECTRICAL_SERVICES.map((svc, i) => (
          <motion.div
            key={svc.title}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#070b12] to-[#0b1220] p-6 hover:border-[#11c5ff]/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            {...fadeInUp(0.1 + i * 0.06)}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#11c5ff]/25 to-[#11c5ff]/10 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svc.icon className="w-7 h-7 text-slate-200" />
            </div>
            <h3 className="font-bold text-white mb-2 text-base leading-snug">{svc.title}</h3>
            <p className="text-slate-200 text-sm leading-relaxed flex-grow">{svc.desc}</p>
            <div className="mt-4 pt-4 border-t border-white/10 group-hover:border-white/20">
              <span className="text-xs font-semibold text-[#11c5ff]">Learn more →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   HOW IT WORKS
   ========================================================= */

const HowItWorks = () => {
  const steps = [
    { num: "1", title: "Call or message us", desc: "Tell us what needs doing – a quick phone call or website form gets us the basic details.", icon: Phone },
    { num: "2", title: "Quote & appointment", desc: "We'll discuss options, give you a fixed quote and book a time that suits your schedule.", icon: CheckCircle2 },
    { num: "3", title: "Professional work", desc: "We arrive on time, do the job properly, explain everything and keep your home tidy.", icon: Zap },
    { num: "4", title: "Clear-up & handover", desc: "Final check, clean-up, paperwork and warranty details. You're all set – enjoy peace of mind.", icon: CheckCircle2 },
  ];

  return (
    <section className="bg-gradient-to-b from-[#05070b] to-[#070b12] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div {...fadeInUp(0.1)}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">How we work</h2>
          <p className="text-slate-200 mb-10 text-sm sm:text-base max-w-2xl">
            From your first call to final handover, we keep things simple and transparent. Here's what to expect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} className="relative" {...fadeInUp(0.1 + i * 0.08)}>
              <div className="rounded-xl bg-[#070b12] border border-white/10 p-5 h-full flex flex-col text-center">
                <div className="w-12 h-12 rounded-full bg-[#11c5ff] text-[#05070b] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-[#11c5ff]/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   AC SECTION
   ========================================================= */

const ACSection = () => {
  const trackRef = React.useRef(null)

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.9)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="ac" className="bg-[#05070b] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4" {...fadeInUp(0.1)}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Air conditioning services: Splits, Ducted & Repairs</h2>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              Professional air conditioning installation, servicing and repair for split systems and ducted systems. Same-day emergency repairs, fixed-price servicing, and expert advice.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-slate-300">
            <div className="font-semibold text-[#f6c948] mb-1">Working with leading brands</div>
            <p>Daikin · Mitsubishi Heavy · Hisense · and more</p>
          </div>
        </motion.div>

        <div className="relative -mx-4">
          {/* arrows (desktop) */}
          <div className="hidden md:block">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/10 bg-[#070b12]/80 backdrop-blur px-3 py-2 hover:border-white/20"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/10 bg-[#070b12]/80 backdrop-blur px-3 py-2 hover:border-white/20"
            >
              ›
            </button>
          </div>

          {/* carousel */}
          <motion.div
            ref={trackRef}
            className="flex gap-4 px-4 pb-2 overflow-x-auto snap-x snap-mandatory no-scrollbar"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {AC_SERVICES.map((svc) => (
              <motion.div
                key={svc.name}
                className="relative snap-center rounded-xl border border-white/10 bg-[#070b12]/80 p-5 shadow-sm flex flex-col justify-between min-w-[86%] sm:min-w-[60%] md:min-w-[46%] lg:min-w-[32%]"
                whileHover={{ scale: 1.02, y: -3, boxShadow: '0 16px 35px rgba(15, 23, 42, 0.7)' }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 180, damping: 15 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0b1220] flex items-center justify-center">
                      <svc.icon className="w-5 h-5 text-[#f6c948]" />
                    </div>
                    <div className="font-semibold text-sm">{svc.name}</div>
                  </div>
                  <div className="text-[#f6c948] font-bold text-lg mb-2">{svc.price}</div>
                  <p className="text-xs sm:text-sm text-slate-200">{svc.desc}</p>
                </div>
                <p className="mt-4 text-[11px] text-slate-400">Final pricing may vary for complex systems or after-hours work.</p>
              </motion.div>
            ))}
          </motion.div>

          {/* mobile hint */}
          <div className="px-4 mt-2 text-xs text-slate-400 md:hidden">Swipe to see more pricing →</div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   BRANDS
   ========================================================= */

const BrandsSection = () => (
  <section className="bg-[#05070b] py-12 border-b border-white/10">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-3">Leading Brands We Install & Service</h3>
        <p className="text-center text-sm text-slate-200 mb-8 max-w-2xl mx-auto">
          We work with trusted air conditioning brands including Daikin, Mitsubishi Heavy, Hisense and other leading manufacturers.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {BRANDS.map((brand, i) => (
          <motion.a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            {...fadeInUp(0.1 + i * 0.08)}
            whileHover={{ y: -4 }}
          >
            <div className="px-6 py-3 rounded-lg border border-white/10 bg-[#070b12]/80 text-center group-hover:border-[#11c5ff]/50 group-hover:bg-[#0b1220] transition font-semibold text-white text-sm">
              {brand.name}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   WHY CHOOSE
   ========================================================= */

const WhyChoose = () => (
  <section className="bg-[#05070b] py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Why locals choose Dynamic Solutions</h2>
        <p className="text-slate-200 mb-6 text-sm sm:text-base">
          After more than 15 years working in electrical and air conditioning, Elliot started Dynamic Solutions to offer the kind of service he’d want in his own home – organised, on time and done properly.
        </p>

        <ul className="space-y-3 text-sm text-white">
          {[
            {
              t: "15+ years experience",
              d: "in domestic and light commercial electrical and air conditioning.",
            },
            {
              t: "Fully licensed & insured:",
              d: "REC 33015, Refrigeration Licence L170441, Plumbing Reg 124210.",
            },
            { t: "Neat and respectful", d: "trades who protect your home, communicate clearly and clean up before leaving." },
            { t: "Up-front pricing", d: "– we explain your options and confirm costs before starting any work." },
          ].map((x) => (
            <li key={x.t} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-200 mt-0.5" />
              <span>
                <span className="font-semibold">{x.t}</span> {x.d}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="rounded-2xl bg-[#070b12] border border-white/10 shadow-sm p-5" {...scaleIn(0.2)}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-[#0b1220] border border-white/10 flex items-center justify-center">
            <Home className="w-5 h-5 text-slate-200" />
          </div>
          <div>
            <div className="font-semibold text-white">“We treat every home like it’s our own.”</div>
            <div className="text-xs text-slate-300">– Elliot</div>
          </div>
        </div>
        <p className="text-sm text-slate-200 mb-3">
          Whether it’s a quick power point, a full switchboard upgrade or servicing your ducted system, the goal is the same – leave everything safer, tidier and working better than before.
        </p>
        <p className="text-sm text-slate-200">
          Many of our jobs come from repeat customers and word of mouth. We’re proud that locals describe us as organised, on time and professional on every job.
        </p>
      </motion.div>
    </div>
  </section>
);

/* =========================================================
   TRUST BADGES
   ========================================================= */

const TrustBadges = () => (
  <section className="bg-gradient-to-r from-[#05070b] to-[#070b12] py-12 border-y border-white/10">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-2">Licensed, Insured & Accredited</h3>
        <p className="text-center text-sm text-slate-200 mb-8">Meet all Australian electrical, refrigeration, plumbing and energy upgrade standards</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ACCREDITATIONS.map((badge, i) => {
          const IconComponent =
            badge.title === "Electrician"
              ? Zap
              : badge.title === "Refrigeration"
                ? Snowflake
                : badge.title === "Plumbing"
                  ? Activity
                  : badge.title === "VEU Accredited"
                    ? CheckCircle2
                    : CheckCircle2;

          return (
            <motion.div
              key={badge.title}
              className="rounded-xl bg-[#070b12] border border-white/10 p-4 text-center shadow-sm"
              {...fadeInUp(0.1 + i * 0.08)}
              whileHover={{ y: -8, scale: 1.08, borderColor: "#0284c7", boxShadow: "0 12px 30px rgba(15, 23, 42, 0.1)" }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[#0b1220] border border-white/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-slate-200" />
                </div>
              </div>
              <div className="font-semibold text-white text-sm">{badge.title}</div>
              <div className="text-xs text-slate-300 mt-1">{badge.detail}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* =========================================================
   TESTIMONIALS
   ========================================================= */

const Testimonials = () => (
  <section className="bg-[#05070b] text-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">What local customers say</h2>
        <p className="text-slate-300 mb-8 text-sm sm:text-base max-w-2xl">
          Families across South-East Melbourne trust us for professional work, honest pricing and real care for their homes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            className="rounded-xl border border-white/10 bg-[#070b12]/60 p-5 flex flex-col"
            {...fadeInUp(0.1 + i * 0.08)}
            whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(15, 23, 42, 0.5)" }}
          >
            <div className="flex gap-1 mb-3">{Array.from({ length: testimonial.rating }).map((_, j) => (<span key={j} className="text-[#f6c948]">★</span>))}</div>
            <p className="text-slate-200 text-sm mb-4 flex-grow">"{testimonial.text}"</p>
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-xs text-slate-400">{testimonial.suburb}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   SERVICE AREAS
   ========================================================= */

const ServiceAreas = () => (
  <section id="areas" className="bg-[#05070b] py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Electrician & air conditioning services in Cranbourne & South-East Melbourne
        </h2>
        <p className="text-slate-200 mb-6 text-sm sm:text-base max-w-3xl">
          Local electrical and air conditioning expert based in Cranbourne. We service homes and small businesses across South-East Melbourne, Frankston, Mornington Peninsula and surrounding suburbs.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {AREAS.map((area) => (
          <motion.span
            key={area}
            className="text-sm text-white px-3 py-2 rounded-full border border-white/10 bg-[#070b12]/70 cursor-pointer font-medium"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{
              scale: 1.15,
              y: -6,
              backgroundColor: "#0ea5e9",
              color: "#ffffff",
              borderColor: "#0284c7",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            {area}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

/* =========================================================
   FAQ
   ========================================================= */

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <section id="faq" className="bg-[#05070b] text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div {...fadeInUp(0.1)}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Frequently asked questions</h2>
          <p className="text-slate-300 mb-6 text-sm sm:text-base">
            If you’re unsure about something, we’re only a phone call away. Here are a few common questions we’re asked.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <motion.div key={item.q} className="rounded-xl border border-white/10 bg-[#070b12]/60" {...fadeInUp(0.05 * i)}>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-semibold text-sm sm:text-base">{item.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-slate-300" />
                </motion.div>
              </button>
              {openIndex === i && (
                <motion.div
                  className="px-4 pb-4 text-xs sm:text-sm text-slate-200 border-t border-white/10"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   CONTACT
   ========================================================= */

const Contact = () => (
  <section id="contact" className="bg-gradient-to-b from-[#070b12] to-[#05070b] text-white py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Request a quote or book a service</h2>
        <p className="text-slate-300 mb-4 text-sm sm:text-base">
          Tell us a little about the work you need done and we’ll get back to you as soon as possible with options and pricing.
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0b1220] flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#f6c948]" />
            </div>
            <div>
              <div className="text-slate-300 text-xs uppercase tracking-wide">Call</div>
              <a href="tel:0450067924" className="font-semibold text-white">0450 067 924</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0b1220] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#f6c948]" />
            </div>
            <div>
              <div className="text-slate-300 text-xs uppercase tracking-wide">Based in</div>
              <div className="font-semibold text-white">Cranbourne, VIC 3977</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0b1220] flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#f6c948]" />
            </div>
            <div>
              <div className="text-slate-300 text-xs uppercase tracking-wide">Email</div>
              <a href="mailto:info@dsea.com.au" className="font-semibold text-white hover:text-[#f6c948]">info@dsea.com.au</a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="rounded-2xl bg-[#070b12]/70 border border-white/10 p-5 sm:p-6 shadow-lg" {...scaleIn(0.2)}>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 text-sm">
          <input type="text" name="_gotcha" className="hidden" />
          <input type="hidden" name="_subject" value="New enquiry from DSEA website" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-white/10 bg-[#05070b] px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-md border border-white/10 bg-[#05070b] px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                placeholder="04xx xxx xxx"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-white/10 bg-[#05070b] px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="you@address.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Address or suburb</label>
            <input
              type="text"
              name="suburb"
              className="w-full rounded-md border border-white/10 bg-[#05070b] px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="e.g. Cranbourne, Frankston, Berwick"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">What do you need help with?</label>
            <textarea
              name="message"
              rows="4"
              className="w-full rounded-md border border-white/10 bg-[#05070b] px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="Tell us a little about the job, any issues you're having, and preferred days/times."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#f6c948] text-white font-semibold py-2.5 text-sm hover:bg-[#f6c948] transition shadow-lg"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            <Mail className="w-4 h-4" />
            Send enquiry
          </motion.button>
        </form>
      </motion.div>
    </div>
  </section>
);

/* =========================================================
   FOOTER + FLOATING CALL BUTTON
   ========================================================= */

const Footer = () => (
  <footer className="bg-[#05070b] text-slate-300 border-t border-white/10 py-8 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="font-semibold text-white mb-2">Dynamic Solutions Electrical & Aircon</div>
          <div className="text-xs mb-2">REC 33015 · Refrigeration Licence L170441 · Plumbing Reg 124210</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            15+ years delivering reliable, professional electrical and air conditioning services across South-East Melbourne. Licensed, insured, and committed to quality.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Quick Contact</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#f6c948] flex-shrink-0" />
              <a href="tel:0450067924" className="hover:text-[#f6c948]">0450 067 924</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#f6c948] flex-shrink-0" />
              <a href="mailto:info@dsea.com.au" className="hover:text-[#f6c948]">info@dsea.com.au</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#f6c948] flex-shrink-0" />
              <span>Cranbourne, VIC 3977</span>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Available 24/7</div>
          <p className="text-xs leading-relaxed mb-3">Emergency electrical and air conditioning support anytime.</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-[#f6c948] transition" title="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#f6c948] transition" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
        <div>© {new Date().getFullYear()} Dynamic Solutions Electrical & Aircon. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingCallButton = () => (
  <motion.a
    href="tel:0450067924"
    className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#f6c948] text-[#05070b] font-semibold text-sm shadow-xl"
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 120 }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
  >
    <motion.div
      className="w-7 h-7 rounded-full bg-[#05070b]/10 flex items-center justify-center"
      animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2.8, repeatDelay: 2 }}
    >
      <Phone className="w-4 h-4" />
    </motion.div>
    <span>Call now</span>
  </motion.a>
);

/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <div className="min-h-screen bg-[#070b12] text-white relative">
      {/* Global brand wisps across the whole site */}
      <BlueWisps fixed intensity={0.55} className="opacity-70" />

      <SchemaMarkup />
      <BreadcrumbSchema />
      <Header />
      <main className="relative">
        <Hero />
        <ElectricalServices />
        <HowItWorks />
        <ACSection />
        <BrandsSection />
        <WhyChoose />
        <TrustBadges />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
