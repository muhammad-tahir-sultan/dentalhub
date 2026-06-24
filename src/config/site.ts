import type { SiteConfig } from "@/niche-ui";

export const siteConfig: SiteConfig = {
  niche: "Dental Clinic",
  demoBadge: "Demo Website — Bright Smile Dental",
  business: {
    name: "Bright Smile Dental",
    shortName: "Bright Smile",
    tagline: "Your Family Dentist in Downtown",
    phone: "(555) 123-4567",
    email: "hello@brightsmile.com",
    address: "123 Main Street, Your City, ST 12345",
    hours: "Mon–Fri 8am–6pm · Sat 9am–2pm",
  },
  branding: {
    primary: "#2563EB",
    accent: "#0EA5E9",
    heroGradient: "linear-gradient(135deg, #2563EB 0%, #0EA5E9 50%, #38BDF8 100%)",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/new-patients", label: "New Patients" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    badge: "Accepting New Patients",
    headline: "Your Smile Deserves the Best Care",
    subheadline:
      "Family-friendly dental care in downtown. Book online 24/7 — general, cosmetic, and emergency dentistry for the whole family.",
    primaryCta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "New Patient Special", href: "/new-patients" },
  },
  trust: [
    "Accepting New Patients",
    "Same-Day Emergency",
    "Insurance Accepted",
    "500+ 5-Star Reviews",
  ],
  problems: [
    { title: "Can't Book Online", description: "Patients call during work hours and give up when no one answers." },
    { title: "Outdated Website", description: "Your site doesn't reflect the quality of care you provide." },
    { title: "Lost on Google", description: "Competitors rank higher when patients search 'dentist near me'." },
    { title: "Mobile Experience", description: "Most patients search on phones — slow sites lose bookings." },
    { title: "No Trust Signals", description: "Missing reviews, credentials, and clear service information." },
    { title: "Unclear Services", description: "Patients can't find info about treatments they need." },
  ],
  solutions: [
    { title: "Online Booking 24/7", description: "Let patients schedule appointments anytime from any device." },
    { title: "Service Pages That Convert", description: "Dedicated pages for every treatment with clear CTAs." },
    { title: "Trust & Credibility", description: "Showcase team credentials, reviews, and before/after results." },
    { title: "Local SEO Built In", description: "Rank when patients search for dental care in your area." },
  ],
  services: [
    {
      slug: "general-dentistry",
      title: "General Dentistry",
      description: "Comprehensive preventive care including cleanings, exams, and fillings.",
      benefits: ["Regular checkups", "Cavity prevention", "Gum disease treatment", "Oral cancer screenings"],
    },
    {
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and smile makeovers.",
      benefits: ["Teeth whitening", "Porcelain veneers", "Smile design", "Bonding"],
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      description: "Permanent tooth replacement that looks and feels natural.",
      benefits: ["Single & full arch", "Natural appearance", "Long-lasting results", "Improved confidence"],
    },
    {
      slug: "emergency-care",
      title: "Emergency Dental Care",
      description: "Same-day appointments for dental emergencies and urgent pain relief.",
      benefits: ["Same-day slots", "Pain relief", "Broken tooth repair", "After-hours line"],
    },
    {
      slug: "invisalign",
      title: "Invisalign",
      description: "Clear aligners for straighter teeth without traditional braces.",
      benefits: ["Nearly invisible", "Removable", "Comfortable", "Faster results"],
    },
    {
      slug: "pediatric",
      title: "Pediatric Dentistry",
      description: "Gentle dental care designed for children and teens.",
      benefits: ["Kid-friendly environment", "Preventive focus", "Parent education", "Sedation options"],
    },
  ],
  team: [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Dentist",
      credentials: "DDS · 15 Years Experience",
      bio: "Specializes in cosmetic and family dentistry. Passionate about making every patient feel comfortable.",
    },
    {
      name: "Dr. James Park",
      role: "Associate Dentist",
      credentials: "DMD · Oral Surgery",
      bio: "Expert in dental implants and complex restorative procedures.",
    },
    {
      name: "Lisa Chen",
      role: "Dental Hygienist",
      credentials: "RDH · 10 Years",
      bio: "Dedicated to preventive care and patient education for lifelong oral health.",
    },
  ],
  testimonials: [
    {
      name: "Jennifer M.",
      detail: "New Patient",
      rating: 5,
      review: "Best dental experience ever! Booking online was so easy and Dr. Mitchell is incredibly gentle.",
    },
    {
      name: "Robert K.",
      detail: "Family of 4",
      rating: 5,
      review: "Our whole family comes here. The team is wonderful and the office is always clean and welcoming.",
    },
    {
      name: "Amanda S.",
      detail: "Cosmetic Patient",
      rating: 5,
      review: "My smile transformation exceeded expectations. I finally feel confident showing my teeth!",
    },
  ],
  about: {
    mission: "To provide exceptional dental care in a comfortable, modern environment — making it easy for every patient to achieve a healthy, beautiful smile.",
    vision: "To be the most trusted dental practice in our community, known for quality care and patient-first service.",
    story: "Founded in 2010, Bright Smile Dental has served over 5,000 families in downtown and surrounding neighborhoods. We combine advanced technology with a warm, personal approach.",
    values: [
      { title: "Patient Comfort", description: "Your ease and confidence come first in everything we do." },
      { title: "Clinical Excellence", description: "Continuing education and modern technology for the best outcomes." },
      { title: "Transparency", description: "Clear pricing, honest recommendations, no surprises." },
      { title: "Community", description: "Proud to serve and give back to our local community." },
    ],
    whyChooseUs: [
      "Experienced, gentle team",
      "Modern technology & techniques",
      "Flexible scheduling including evenings",
      "Insurance-friendly billing",
      "New patient welcome offer",
    ],
  },
  cta: {
    title: "Ready for a Healthier, Brighter Smile?",
    subtitle: "New patients welcome. Book your appointment today — same-week availability.",
    primaryCta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Call Now", href: "tel:5551234567" },
  },
  contact: {
    headline: "Book Your Appointment",
    subheadline: "Fill out the form and we'll confirm your visit within 24 hours.",
    formFields: ["Name", "Email", "Phone", "Preferred Date", "Message"],
  },
  seo: {
    title: "Bright Smile Dental | Family Dentist in Downtown",
    description: "Book appointments online. General, cosmetic & emergency dentistry. New patients welcome. Insurance accepted.",
  },
  extraPage: {
    slug: "new-patients",
    navLabel: "New Patients",
    title: "Welcome New Patients",
    sections: [
      {
        title: "What to Expect",
        content: [
          "Arrive 10 minutes early to complete intake forms",
          "Comprehensive exam including X-rays if needed",
          "Personalized treatment plan discussed with you",
          "Begin treatment — most patients feel at ease immediately",
        ],
      },
      {
        title: "What to Bring",
        content: ["Photo ID", "Insurance card", "List of current medications", "Previous dental records if available"],
      },
      {
        title: "New Patient Special",
        content: "Free consultation + $99 cleaning for new patients. Mention this offer when booking.",
      },
      {
        title: "Insurance",
        content: "We accept most major dental insurance plans. Call us to verify your coverage before your visit.",
      },
    ],
  },
};
