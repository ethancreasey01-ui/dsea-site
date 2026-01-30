import React from "react";
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
    email: "hello@dsea.com.au",
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
    <header className="sticky top-0 z-40 bg-sky-950/90 backdrop-blur border-b border-sky-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-9 h-9 rounded-xl bg-sky-900 flex items-center justify-center shadow-md"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 4, duration: 1.2 }}
          >
            <Zap className="w-5 h-5 text-yellow-400" />
          </motion.div>
          <div className="leading-tight">
            <div className="font-bold text-lg">Dynamic Solutions Electrical & Aircon</div>
            <div className="text-xs text-sky-200">Cranbourne & South-East Melbourne</div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-yellow-300 transition">Services</a>
          <a href="#ac" className="hover:text-yellow-300 transition">Air Conditioning</a>
          <a href="#areas" className="hover:text-yellow-300 transition">Areas We Service</a>
          <a href="#faq" className="hover:text-yellow-300 transition">FAQ</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="tel:0450067924"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-sky-950 font-semibold text-sm shadow-md"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            <Phone className="w-4 h-4" />
            0450 067 924
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 rounded bg-sky-900/70"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden border-t border-sky-900 bg-sky-950"
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
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-sky-950 font-semibold"
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

const RainLightningEffect = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 50 }).map((_, i) => (
      <Raindrop
        key={i}
        delay={Math.random() * 2}
        duration={Math.random() * 0.5 + 1.2}
        xPos={Math.random() * 100}
      />
    ))}

    {Array.from({ length: 3 }).map((_, i) => (
      <LightningFlash key={`lightning-${i}`} delay={Math.random() * 8} />
    ))}

    <motion.div
      className="absolute inset-0"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: [
          "transparent",
          "rgba(250, 204, 21, 0.05)",
          "transparent",
          "rgba(250, 204, 21, 0.03)",
          "transparent",
        ],
      }}
      transition={{ repeat: Infinity, repeatDelay: Math.random() * 3 + 2, duration: 0.4 }}
    />
  </div>
);

/* =========================================================
   HERO
   ========================================================= */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-sky-950 via-sky-950 to-sky-900 text-white">
    <RainLightningEffect />

    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-600/40 rounded-full blur-3xl animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 right-0 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />

      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-yellow-500/15 rounded-full blur-2xl animate-[pulseGlow_9s_ease-in-out_infinite]" />

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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900 border border-sky-700 text-xs mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, borderColor: "#0284c7" }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3 }}>
            <CheckCircle2 className="w-4 h-4 text-yellow-300" />
          </motion.div>
          <span>Local electrician & aircon specialist</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Reliable <span className="text-yellow-300">Electrical & Air Conditioning</span> in Cranbourne & South-East Melbourne
        </h1>

        <motion.p
          className="text-sky-100 text-base sm:text-lg mb-6"
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-yellow-400 text-sky-950 font-semibold text-sm shadow-md relative overflow-hidden"
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
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-sky-500 text-sky-50 text-sm hover:bg-sky-800 transition"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96, y: 0 }}
          >
            <Mail className="w-4 h-4" />
            Request a quote
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 text-xs text-sky-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {["15+ years experience", "Fully licensed & insured", "Neat, reliable & on time"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-300" />
              <span>{t}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="relative" {...scaleIn(0.3)}>
        <div className="rounded-2xl bg-gradient-to-br from-sky-800 to-sky-900 border border-sky-600 p-6 shadow-2xl overflow-hidden relative">
          <motion.div
            className="flex items-center gap-3 mb-4 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20 }}
            >
              <Building2 className="w-5 h-5 text-yellow-300" />
            </motion.div>
            <div>
              <div className="font-semibold">Dynamic Solutions Electrical & Aircon</div>
              <div className="text-xs text-sky-200">REC 33015 · Refrigeration L170441 · Plumbing Reg 124210</div>
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
                className="p-3 rounded-lg bg-sky-800/60 border border-sky-700/50 hover:border-yellow-400/50 transition"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(7, 89, 133, 0.8)",
                  boxShadow: "0 8px 16px rgba(253,224,71,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="w-4 h-4 text-yellow-300" />
                  <span className="font-semibold">{item.label}</span>
                </div>
                <p className="text-sky-100">{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              className="p-3 rounded-lg bg-sky-800/60 border border-sky-700/50 col-span-2"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(7, 89, 133, 0.8)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <span className="font-semibold">Based in Cranbourne</span>
              </div>
              <p className="text-sky-100">
                Regularly working in Frankston, Berwick, Langwarrin, Clyde North, Carrum Downs and across the Mornington Peninsula.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute -inset-6 -z-10 bg-sky-700/40 blur-3xl opacity-40" />
      </div>
    </div>
  </section>
);

/* =========================================================
   ELECTRICAL SERVICES
   ========================================================= */

const ElectricalServices = () => (
  <section id="services" className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)} className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-950 mb-4">Our electrical services</h2>
        <p className="text-sky-700 text-base max-w-3xl">
          From switchboard upgrades and safety checks to power points, lighting and fault finding — we handle all your electrical needs with professional workmanship.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ELECTRICAL_SERVICES.map((svc, i) => (
          <motion.div
            key={svc.title}
            className="group rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            {...fadeInUp(0.1 + i * 0.06)}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svc.icon className="w-7 h-7 text-sky-700" />
            </div>
            <h3 className="font-bold text-sky-950 mb-2 text-base leading-snug">{svc.title}</h3>
            <p className="text-sky-700 text-sm leading-relaxed flex-grow">{svc.desc}</p>
            <div className="mt-4 pt-4 border-t border-sky-100 group-hover:border-sky-200">
              <span className="text-xs font-semibold text-yellow-600">Learn more →</span>
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
    <section className="bg-gradient-to-b from-sky-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div {...fadeInUp(0.1)}>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-3">How we work</h2>
          <p className="text-sky-700 mb-10 text-sm sm:text-base max-w-2xl">
            From your first call to final handover, we keep things simple and transparent. Here's what to expect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} className="relative" {...fadeInUp(0.1 + i * 0.08)}>
              <div className="rounded-xl bg-white border-2 border-sky-200 p-5 h-full flex flex-col text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 text-sky-950 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-semibold text-sky-950 mb-2 text-sm sm:text-base">{step.title}</h3>
                <p className="text-xs sm:text-sm text-sky-800">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-sky-300 to-transparent" />
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

const ACSection = () => (
  <section id="ac" className="bg-sky-950 text-sky-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4" {...fadeInUp(0.1)}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Air conditioning services: Splits, Ducted & Repairs</h2>
          <p className="text-sky-200 max-w-2xl text-sm sm:text-base">
            Professional air conditioning installation, servicing and repair for split systems and ducted systems. Same-day emergency repairs, fixed-price servicing, and expert advice.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-sky-200">
          <div className="font-semibold text-yellow-300 mb-1">Working with leading brands</div>
          <p>Daikin · Mitsubishi Heavy · Hisense · and more</p>
        </div>
      </motion.div>

      <div className="md:hidden -mx-4 pb-4">
        <motion.div
          className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {AC_SERVICES.map((svc) => (
            <motion.div
              key={svc.name}
              className="relative min-w-[80%] snap-center rounded-xl border border-sky-800 bg-sky-900/80 p-5 shadow-sm flex flex-col justify-between"
              whileHover={{ scale: 1.03, y: -3, boxShadow: "0 16px 35px rgba(15, 23, 42, 0.7)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-800 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div className="font-semibold text-sm">{svc.name}</div>
                </div>
                <div className="text-yellow-300 font-bold text-lg mb-2">{svc.price}</div>
                <p className="text-xs sm:text-sm text-sky-100">{svc.desc}</p>
              </div>
              <p className="mt-4 text-[11px] text-sky-300">Final pricing may vary for complex systems or after-hours work.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {AC_SERVICES.map((svc, i) => (
          <motion.div
            key={svc.name}
            className="relative rounded-xl border border-sky-800 bg-sky-900/80 p-5 shadow-sm h-full flex flex-col justify-between"
            {...scaleIn(0.1 + i * 0.08)}
            whileHover={{ y: -6, scale: 1.04, boxShadow: "0 22px 40px rgba(15, 23, 42, 0.8)" }}
            transition={{ type: "spring", stiffness: 170, damping: 14 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-sky-800 flex items-center justify-center">
                  <svc.icon className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="font-semibold text-sm">{svc.name}</div>
              </div>
              <div className="text-yellow-300 font-bold text-lg mb-2">{svc.price}</div>
              <p className="text-xs sm:text-sm text-sky-100">{svc.desc}</p>
            </div>
            <p className="mt-4 text-[11px] text-sky-300">Final pricing may vary for complex systems or after-hours work.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   BRANDS
   ========================================================= */

const BrandsSection = () => (
  <section className="bg-white py-12 border-b border-sky-100">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h3 className="text-center text-lg sm:text-xl font-bold text-sky-950 mb-3">Leading Brands We Install & Service</h3>
        <p className="text-center text-sm text-sky-700 mb-8 max-w-2xl mx-auto">
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
            <div className="px-6 py-3 rounded-lg border-2 border-sky-200 bg-sky-50/50 text-center group-hover:border-sky-400 group-hover:bg-sky-100 transition font-semibold text-sky-900 text-sm">
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
  <section className="bg-sky-50 py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-3">Why locals choose Dynamic Solutions</h2>
        <p className="text-sky-800 mb-6 text-sm sm:text-base">
          After more than 15 years working in electrical and air conditioning, Elliot started Dynamic Solutions to offer the kind of service he’d want in his own home – organised, on time and done properly.
        </p>

        <ul className="space-y-3 text-sm text-sky-900">
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
              <CheckCircle2 className="w-5 h-5 text-sky-700 mt-0.5" />
              <span>
                <span className="font-semibold">{x.t}</span> {x.d}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="rounded-2xl bg-white border border-sky-100 shadow-sm p-5" {...scaleIn(0.2)}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
            <Home className="w-5 h-5 text-sky-700" />
          </div>
          <div>
            <div className="font-semibold text-sky-950">“We treat every home like it’s our own.”</div>
            <div className="text-xs text-sky-600">– Elliot</div>
          </div>
        </div>
        <p className="text-sm text-sky-800 mb-3">
          Whether it’s a quick power point, a full switchboard upgrade or servicing your ducted system, the goal is the same – leave everything safer, tidier and working better than before.
        </p>
        <p className="text-sm text-sky-800">
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
  <section className="bg-gradient-to-r from-sky-50 to-sky-100 py-12 border-y border-sky-200">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h3 className="text-center text-lg sm:text-xl font-bold text-sky-950 mb-2">Licensed, Insured & Accredited</h3>
        <p className="text-center text-sm text-sky-700 mb-8">Meet all Australian electrical, refrigeration, plumbing and energy upgrade standards</p>
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
              className="rounded-xl bg-white border-2 border-sky-200 p-4 text-center shadow-sm"
              {...fadeInUp(0.1 + i * 0.08)}
              whileHover={{ y: -8, scale: 1.08, borderColor: "#0284c7", boxShadow: "0 12px 30px rgba(15, 23, 42, 0.1)" }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-sky-700" />
                </div>
              </div>
              <div className="font-semibold text-sky-950 text-sm">{badge.title}</div>
              <div className="text-xs text-sky-600 mt-1">{badge.detail}</div>
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
  <section className="bg-sky-950 text-sky-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">What local customers say</h2>
        <p className="text-sky-200 mb-8 text-sm sm:text-base max-w-2xl">
          Families across South-East Melbourne trust us for professional work, honest pricing and real care for their homes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            className="rounded-xl border border-sky-800 bg-sky-900/60 p-5 flex flex-col"
            {...fadeInUp(0.1 + i * 0.08)}
            whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(15, 23, 42, 0.5)" }}
          >
            <div className="flex gap-1 mb-3">{Array.from({ length: testimonial.rating }).map((_, j) => (<span key={j} className="text-yellow-400">★</span>))}</div>
            <p className="text-sky-100 text-sm mb-4 flex-grow">"{testimonial.text}"</p>
            <div>
              <div className="font-semibold text-sky-50">{testimonial.name}</div>
              <div className="text-xs text-sky-400">{testimonial.suburb}</div>
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
  <section id="areas" className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-3">
          Electrician & air conditioning services in Cranbourne & South-East Melbourne
        </h2>
        <p className="text-sky-700 mb-6 text-sm sm:text-base max-w-3xl">
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
            className="text-sm text-sky-900 px-3 py-2 rounded-full border border-sky-100 bg-sky-50/80 cursor-pointer font-medium"
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
    <section id="faq" className="bg-sky-950 text-sky-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div {...fadeInUp(0.1)}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Frequently asked questions</h2>
          <p className="text-sky-200 mb-6 text-sm sm:text-base">
            If you’re unsure about something, we’re only a phone call away. Here are a few common questions we’re asked.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <motion.div key={item.q} className="rounded-xl border border-sky-800 bg-sky-900/60" {...fadeInUp(0.05 * i)}>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-semibold text-sm sm:text-base">{item.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-sky-200" />
                </motion.div>
              </button>
              {openIndex === i && (
                <motion.div
                  className="px-4 pb-4 text-xs sm:text-sm text-sky-100 border-t border-sky-800"
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
  <section id="contact" className="bg-gradient-to-b from-sky-900 to-sky-950 text-sky-50 py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
      <motion.div {...fadeInUp(0.1)}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Request a quote or book a service</h2>
        <p className="text-sky-200 mb-4 text-sm sm:text-base">
          Tell us a little about the work you need done and we’ll get back to you as soon as possible with options and pricing.
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center">
              <Phone className="w-4 h-4 text-yellow-300" />
            </div>
            <div>
              <div className="text-sky-200 text-xs uppercase tracking-wide">Call</div>
              <a href="tel:0450067924" className="font-semibold text-sky-50">0450 067 924</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-yellow-300" />
            </div>
            <div>
              <div className="text-sky-200 text-xs uppercase tracking-wide">Based in</div>
              <div className="font-semibold text-sky-50">Cranbourne, VIC 3977</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-800 flex items-center justify-center">
              <Mail className="w-4 h-4 text-yellow-300" />
            </div>
            <div>
              <div className="text-sky-200 text-xs uppercase tracking-wide">Email</div>
              <a href="mailto:hello@dsea.com.au" className="font-semibold text-sky-50 hover:text-yellow-300">hello@dsea.com.au</a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="rounded-2xl bg-sky-900/70 border border-sky-700 p-5 sm:p-6 shadow-lg" {...scaleIn(0.2)}>
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
                className="w-full rounded-md border border-sky-700 bg-sky-950 px-3 py-2 text-sky-50 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-md border border-sky-700 bg-sky-950 px-3 py-2 text-sky-50 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
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
              className="w-full rounded-md border border-sky-700 bg-sky-950 px-3 py-2 text-sky-50 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="you@address.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Address or suburb</label>
            <input
              type="text"
              name="suburb"
              className="w-full rounded-md border border-sky-700 bg-sky-950 px-3 py-2 text-sky-50 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="e.g. Cranbourne, Frankston, Berwick"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">What do you need help with?</label>
            <textarea
              name="message"
              rows="4"
              className="w-full rounded-md border border-sky-700 bg-sky-950 px-3 py-2 text-sky-50 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              placeholder="Tell us a little about the job, any issues you're having, and preferred days/times."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-yellow-400 text-sky-950 font-semibold py-2.5 text-sm hover:bg-yellow-300 transition shadow-lg"
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
  <footer className="bg-sky-950 text-sky-200 border-t border-sky-900 py-8 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="font-semibold text-sky-50 mb-2">Dynamic Solutions Electrical & Aircon</div>
          <div className="text-xs mb-2">REC 33015 · Refrigeration Licence L170441 · Plumbing Reg 124210</div>
          <p className="text-xs text-sky-400 leading-relaxed">
            15+ years delivering reliable, professional electrical and air conditioning services across South-East Melbourne. Licensed, insured, and committed to quality.
          </p>
        </div>

        <div>
          <div className="font-semibold text-sky-50 mb-3">Quick Contact</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-yellow-300 flex-shrink-0" />
              <a href="tel:0450067924" className="hover:text-yellow-300">0450 067 924</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-yellow-300 flex-shrink-0" />
              <a href="mailto:hello@dsea.com.au" className="hover:text-yellow-300">hello@dsea.com.au</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-yellow-300 flex-shrink-0" />
              <span>Cranbourne, VIC 3977</span>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-sky-50 mb-3">Available 24/7</div>
          <p className="text-xs leading-relaxed mb-3">Emergency electrical and air conditioning support anytime.</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-yellow-300 transition" title="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-sky-400">
        <div>© {new Date().getFullYear()} Dynamic Solutions Electrical & Aircon. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-sky-200">Privacy Policy</a>
          <a href="#" className="hover:text-sky-200">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingCallButton = () => (
  <motion.a
    href="tel:0450067924"
    className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-yellow-400 text-sky-950 font-semibold text-sm shadow-xl"
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 120 }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
  >
    <motion.div
      className="w-7 h-7 rounded-full bg-sky-950/10 flex items-center justify-center"
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
    <div className="min-h-screen bg-sky-900 text-sky-50">
      <SchemaMarkup />
      <BreadcrumbSchema />
      <Header />
      <main>
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
