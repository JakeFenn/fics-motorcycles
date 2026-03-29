// ============================================================
// WEBSITE CONTENT
// Edit the text in this file to update what appears on the site.
// No code knowledge required. Just change the words between
// the quote marks and save.
// ============================================================

export const content = {

  // ── Site metadata (browser tab / search engine preview) ──────────────────
  site: {
    title: "FICS Motorcycles",
    description:
      "Expert motorcycle service, premium parts, and a passionate community of riders. Your trusted local motorcycle shop.",
  },

  // ── Navigation bar ────────────────────────────────────────────────────────
  nav: {
    logoText: "FICS Motorcycles",
    logoInitials: "FM",
    links: [
      { id: "home",     label: "Home",     href: "/" },
      { id: "revvi",    label: "Revvi",    href: "/revvi" },
      { id: "about",    label: "About",    href: "/about" },
      { id: "services", label: "Services", href: "/services" },
      { id: "contact",  label: "Contact",  href: "/contact" },
    ],
  },

  // ── Home page — Hero section ──────────────────────────────────────────────
  hero: {
    // The three lines of the large heading
    headingLine1: "Your local",
    headingLine2: "motorcycle",
    headingLine3: "community",
    subheading:
      "Expert service, premium parts, and a passionate community of riders. Your trusted partner on every ride.",
    ctaPrimary:   "Get Directions",
    ctaSecondary: "Our Services",
    // Labels shown on the small info cards below the heading
    locationLabel: "Location",
    hoursLabel:    "Hours",
    contactLabel:  "Contact",
    // Text above the brand logos
    authorisedDealerBadge: "Official Authorised Dealer",
    // Brand logos shown across the bottom of the hero
    brands: ["Revvi", "Stomp", "Other", "Other2"],
  },

  // ── Home page — Products / What We Offer section ─────────────────────────
  products: {
    sectionLabel: "What We Offer",
    heading:      "Everything for your ride",
    subheading:   "From custom builds to the gear that keeps you safe, all under one roof.",
    viewAllButton: "View All Services",
    items: [
      {
        title: "Certified Pre-Builds",
        description:
          "As certified partners, we pre-build and inspect bikes straight from our suppliers so yours arrives fully assembled and checked off, ready to ride from day one.",
        cta: "Find Out More",
      },
      {
        title: "Premium Parts",
        description:
          "OEM and aftermarket parts from leading brands. Whether you need a routine service part or a performance upgrade, we stock or can source exactly what your bike needs.",
        cta: "Shop Parts",
      },
      {
        title: "Riding Gear",
        description:
          "From helmets and jackets to gloves, boots, and body armour. We carry gear for every rider and every budget, with advice from people who actually ride.",
        cta: "Browse Gear",
      },
    ],
  },

  // ── Home page — Services Highlight section ───────────────────────────────
  servicesHighlight: {
    sectionLabel: "Our Services",
    heading:      "Expert care, every time",
    subheading:   "Certified technicians with decades of combined experience across all makes and models.",
    ctaButton:    "See All Services",
    items: [
      {
        title: "Sell Your Bike",
        description:
          "Want to sell but don't want the hassle? We'll store, promote, and care for your bike and handle the sale for a small fee.",
      },
      {
        title: "Maintenance & Repair",
        description:
          "Regular maintenance and expert repairs to keep your bike running at peak performance.",
      },
      {
        title: "MOT & Service",
        description:
          "Keep your bike on the road with our comprehensive services & MOT offerings.",
      },
      {
        title: "Locks & Security",
        description:
          "Make sure only you can enjoy your precious ride with our vast selection of locks and alarms.",
      },
    ],
  },

  // ── Home page — Reviews / Testimonials section ───────────────────────────
  reviews: {
    sectionLabel:   "Testimonials",
    heading:        "What riders say",
    aggregateRating: "4.6",
    reviewCount:    "50+ reviews on Google",
    items: [
      {
        name:     "Danielle Steward",
        initials: "DS",
        rating:   5,
        text:     "Brilliant customer service 👏 bought the 16inch revvi bike for my little boy he absolutely loves it, was shown every bit of detail for the bike an how to use. Perfect thankyou so much. Highly recommend 👌",
        bike:     "Revvi",
      },
      {
        name:     "Aaron Piwowar",
        initials: "AP",
        rating:   5,
        text:     "Tell you what Ian is super helpful and friendly given top advice when buying a motorcycle today and couldn't be any happier with him. Will definitely return for services ect and he's only round the corner for me!",
        featured: true,
      },
      {
        name:     "Dean Johnson",
        initials: "DJ",
        rating:   5,
        text:     "Really good service and Revvi bike was ready to pick up very quickly. Also was able to get a helmet and goggles and try on for size.",
        bike:     "Revvi",
      },
    ],
  },

  // ── Home page — Contact CTA section ──────────────────────────────────────
  contactSection: {
    heading:       "Come and see us",
    subheading:    "We're always happy to chat bikes. Drop in, give us a call, or send a message.",
    locationLabel: "Location",
    phoneLabel:    "Phone",
    emailLabel:    "Email",
    hoursLabel:    "Hours",
    ctaButton:     "Get in Touch",
  },

  // ── Home page — Partners section ─────────────────────────────────────────
  partners: {
    label: "Premium Parts & Gear Partners",
    items: ["Alpinestars", "Bell Helmets", "Michelin", "Akrapovič", "Öhlins", "Brembo", "K&N Filters", "Shoei"],
  },

  // ── Contact form (used on home + contact pages) ───────────────────────────
  contactForm: {
    nameLabel:          "Name",
    namePlaceholder:    "Your name",
    emailLabel:         "Email",
    emailPlaceholder:   "your.email@example.com",
    phoneLabel:         "Phone (optional)",
    phonePlaceholder:   "01234 567890",
    messageLabel:       "Message",
    messagePlaceholder: "Tell us how we can help...",
    submitButton:       "Send Message",
    submittingButton:   "Sending...",
    successMessage:     "Message sent! We'll be in touch soon.",
  },

  // ── About page ────────────────────────────────────────────────────────────
  about: {
    metaTitle:       "About Us - FICS Motorcycles",
    metaDescription: "Learn about FICS Motorcycles, our team, and our commitment to the riding community.",
    heading:         "About FICS Motorcycles",
    subheading:      "Your trusted partner in all things motorcycles. We're passionate riders serving riders.",

    storyHeading: "Our Story",
    storyParagraphs: [
      "Founded in 2009, FICS Motorcycles has been serving the local motorcycle community with dedication and expertise. What started as a small garage operation has grown into a full-service motorcycle shop, but we've never lost sight of what matters most: our passion for motorcycles and the riders who love them.",
      "Every day, we work with riders of all experience levels, from those just starting their journey to seasoned veterans who've been on two wheels for decades. Our team brings together years of combined experience in motorcycle maintenance, customisation, and performance upgrades.",
      "We believe in building lasting relationships with our customers, treating every bike as if it were our own, and contributing to the vibrant riding community that makes this such a special place to live and ride.",
    ],

    valuesHeading: "Why Choose Us",
    values: [
      { title: "Years of Experience",   description: "Decades of combined expertise in motorcycle service, repair, and customisation." },
      { title: "Certified Technicians", description: "Our team is trained and certified to work on all major motorcycle brands." },
      { title: "Community Focused",     description: "We're active members of the local riding community and support rider events." },
      { title: "Quality Work",          description: "We stand behind our work with comprehensive warranties and guarantees." },
    ],

    missionHeading: "Our Mission",
    missionIntro:
      "Our mission is simple: to provide exceptional service, quality parts, and expert advice to every rider who walks through our doors. We're committed to:",
    missionPoints: [
      "Delivering honest, transparent service with no surprises",
      "Using only quality parts from trusted manufacturers",
      "Educating riders about proper maintenance and safety",
      "Supporting and growing the local riding community",
      "Continuously improving our skills and staying current with new technologies",
    ],

    ownerHeading:    "Meet the Owner",
    ownerSubheading: "Passionate about motorcycles and dedicated to providing exceptional service to the riding community.",
    ownerName:  "Ian Fenn",
    ownerTitle: "Owner / Lead Technician",
    ownerBio:
      "[Brief bio about your experience with motorcycles, how you got started, your specialties, certifications, and what drives your passion for serving the riding community. Include years of experience and any notable achievements or training.]",
  },

  // ── Services page ─────────────────────────────────────────────────────────
  servicesPage: {
    heading:    "Our Services",
    subheading: "From routine maintenance to custom builds, we've got you covered",
    items: [
      {
        title:       "Routine Maintenance",
        description: "Keep your bike running smoothly with regular maintenance services including oil changes, tyre changes, brake service, chain adjustments, and fluid checks.",
        price:       "Starting at $[XX]",
      },
      {
        title:       "Engine Repair & Rebuild",
        description: "Expert diagnostics and repair for all engine issues. From minor fixes to complete engine rebuilds, our certified technicians have you covered.",
        price:       "Custom Quote",
      },
      {
        title:       "Performance Upgrades",
        description: "Unlock your bike's potential with exhaust systems, air filters, ECU tuning, suspension upgrades, and dyno tuning services.",
        price:       "Starting at $[XX]",
      },
      {
        title:       "Custom Fabrication",
        description: "Bring your vision to life with custom exhaust work, seat modifications, handlebar fabrication, and unique parts manufacturing.",
        price:       "Custom Quote",
      },
      {
        title:       "Electrical Services",
        description: "Complete electrical diagnostics and repair, lighting upgrades, battery service, and custom wiring for accessories.",
        price:       "Starting at $[XX]",
      },
      {
        title:       "Detailing & Ceramic Coating",
        description: "Full wash and detail, paint correction, ceramic coating application, chrome polishing, and leather conditioning.",
        price:       "Starting at $[XX]",
      },
    ],
    ctaHeading:      "Not Sure What You Need?",
    ctaText:
      "Give us a call or stop by the shop. We'll diagnose the issue and provide you with an honest assessment and fair pricing.",
    ctaCallButton:  "Call Us: [YOUR-PHONE]",
    ctaVisitButton: "Visit the Shop",
  },

  // ── Contact page ─────────────────────────────────────────────────────────
  contactPage: {
    heading:        "Get In Touch",
    subheading:     "We're here to help with all your motorcycle needs",
    infoHeading:    "Contact Information",
    formHeading:    "Send Us a Message",
    addressLabel:   "Address",
    phoneLabel:     "Phone",
    emailLabel:     "Email",
    hoursLabel:     "Business Hours",
  },

  // ── Revvi page ────────────────────────────────────────────────────────────
  revvi: {
    badge:      "Featured Partner",
    heading:    "Revvi Electric Bikes",
    subheading:
      "We're proud to be an authorized dealer for Revvi, the UK's leading electric balance bike brand. Give your child the perfect introduction to motorcycling with these innovative, safe, and fun electric bikes.",
    enquireButton:    "Enquire Now",
    viewModelsButton: "View Models",
    heroImageAlt:     "Child riding Revvi electric bike",

    benefitsHeading: "Why Choose Revvi?",
    benefits: [
      {
        title:       "Electric Powered",
        description: "Silent, emission-free riding perfect for young riders learning the basics",
      },
      {
        title:       "Safety First",
        description: "Adjustable speed settings and responsive brakes designed for children",
      },
      {
        title:       "Build Confidence",
        description: "Progressive learning system helps kids develop riding skills at their own pace",
      },
    ],

    modelsHeading:    "Available Models",
    modelsSubheading: "Choose the perfect size for your child's age and skill level",
    agesPrefix:       "Ages",
    getDetailsButton: "Get Details",
    models: [
      {
        name:     "Revvi Twelve",
        age:      "3-6 years",
        features: ['12" wheels', "Adjustable speed settings", "Up to 60 mins ride time"],
        image:    "/revvi-twelve.jpg",
      },
      {
        name:     "Revvi Sixteen",
        age:      "5-9 years",
        features: ['16" wheels', "3 speed modes", "Up to 90 mins ride time"],
        image:    "/revvi-sixteen.jpg",
      },
      {
        name:     "Revvi Sixteen Plus",
        age:      "5-9 years",
        features: ['16" wheels', "Enhanced power", "Up to 90 mins ride time"],
        image:    "/revvi-sixteen-plus.jpg",
      },
      {
        name:     "Revvi Eighteen",
        age:      "6-10 years",
        features: ['18" wheels', "3 speed modes", "Up to 100 mins ride time"],
        image:    "/revvi-eighteen.jpg",
      },
      {
        name:     "Revvi Twenty",
        age:      "7-12 years",
        features: ['20" wheels', "Advanced controls", "Up to 120 mins ride time"],
        image:    "/revvi-twenty.jpg",
      },
    ],

    ctaHeading:       "Ready to Get Your Child Started?",
    ctaText:
      "Visit our shop to see the Revvi range in person, or get in touch to discuss which model is right for your child. We offer expert advice, test rides, and full after-sales support.",
    ctaContactButton: "Contact Us",
    ctaHomeButton:    "Back to Home",
  },
}
