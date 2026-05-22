import { whatsappUrl, WA_RENT_ROOF, WA_RENT_WAITLIST } from "./whatsapp";

export const HERO_STATS = [
  { value: "300M+", label: "Users Without Rooftop" },
  { value: "200+ GW", label: "Rooftop Potential" },
  { value: "Up to 15%", label: "Solar Returns" },
];

/** Nexamp-style pathway cards — main ways to participate */
export const PATHWAY_CARDS = [
  {
    icon: "gnm",
    title: "List your roof",
    description:
      "Earn steady revenue from unused rooftop space while we handle development and operations.",
    href: whatsappUrl(WA_RENT_ROOF),
  },
  {
    icon: "vnm",
    title: "Virtual Net Metering",
    description:
      "Share solar credits across meters—ideal when panels are not on every property you use.",
    href: "#participate",
  },
  {
    icon: "credits",
    title: "Solar subscription",
    description:
      "Use cheaper solar power without buying equipment or managing maintenance.",
    href: "#participate",
  },
  {
    icon: "invest",
    title: "Invest in solar",
    description:
      "Participate in pooled assets and earn returns linked to clean energy generation.",
    href: whatsappUrl(WA_RENT_WAITLIST),
  },
];

/** Pivot-style benefit rows */
export const BENEFIT_ROWS = [
  {
    icon: "subscription",
    title: "Save on your electricity bill",
    description:
      "VNM and GNM let you use solar credits against your DISCOM bill—lowering monthly spend without diesel or guesswork.",
  },
  {
    icon: "ownership",
    title: "Solar without your own rooftop",
    description:
      "Subscribe, co-own, or allocate credits from installations on other sites. No panels required on your home or shop.",
  },
  {
    icon: "investment",
    title: "Built for Rajasthan first",
    description:
      "Launching in Jaipur, Tonk, and surrounding areas under new RERC rules—with AY Solar Energy as your local installer and guide.",
  },
];

export const CONCEPT_CARDS = [
  {
    icon: "ownership",
    title: "Solar Ownership",
    description: "Buy solar capacity like digital real estate.",
  },
  {
    icon: "subscription",
    title: "Energy Subscription",
    description: "Use cheaper solar electricity without buying a plant.",
  },
  {
    icon: "investment",
    title: "Solar Investment",
    description: "Earn long-term returns from solar generation.",
  },
];

export const BUSINESS_MODELS = [
  {
    icon: "vnm",
    title: "VNM Residential Solar Plot",
    description:
      "Virtual Net Metering lets you allocate solar generation credits across multiple meters without panels on every site.",
    benefits: ["Multi-meter credit sharing", "No rooftop required on every home", "RERC-compliant structure"],
    audience: "Urban households, renters, multi-property owners",
  },
  {
    icon: "credits",
    title: "Solar Credits Subscription",
    description:
      "Subscribe to solar energy credits and pay less than DISCOM tariffs without owning hardware.",
    benefits: ["Lower monthly bills", "Flexible subscription tiers", "Digital onboarding"],
    audience: "Tenants, SMEs, budget-conscious families",
  },
  {
    icon: "resco",
    title: "RESCO C&I",
    description:
      "Third-party owned solar for commercial & industrial sites with zero upfront capex.",
    benefits: ["No capital expenditure", "Predictable energy costs", "O&M included"],
    audience: "Factories, warehouses, offices",
  },
  {
    icon: "invest",
    title: "Solar Investment Model",
    description:
      "Invest in pooled solar assets and earn returns linked to generation performance.",
    benefits: ["Portfolio diversification", "Long-term yield", "Transparent reporting"],
    audience: "Investors, HNIs, climate-focused funds",
  },
  {
    icon: "gnm",
    title: "Group Net Metering",
    description:
      "A group of consumers shares solar output from a collective installation under GNM rules.",
    benefits: ["Community solar access", "Shared infrastructure", "Strong policy tailwind"],
    audience: "Housing societies, RWAs, cooperatives",
  },
  {
    icon: "biz",
    title: "Business Subscription Solar",
    description:
      "Businesses subscribe to solar supply as a service with predictable billing and scale-up options.",
    benefits: ["ESG compliance", "Cost visibility", "Fast deployment"],
    audience: "Retail chains, startups, MSMEs",
  },
];

/** Policy news — framed like RRECL News Corner coverage */
export const NEWS_ARTICLES = [
  {
    id: "toi-rerc-net-metering",
    source: "The Times of India",
    location: "Jaipur",
    headline: "RERC opens solar access to all with new net metering rules",
    subheadline: "Simplifies approval process",
    byline: "Srikanta Tripathy",
    intro:
      "You no longer need a rooftop at your home or office to use solar power. Rajasthan's regulator has cleared Virtual Net Metering (VNM) and Group Net Metering (GNM)—opening the door for housing societies, government buildings, and shared solar ownership.",
    rulesTitle: "New solar rules simplified",
    rules: [
      "Consumers can share solar power across multiple electricity connections.",
      "Solar plants allowed on rooftops, land, balconies, or even water bodies.",
      "No feasibility study needed for domestic systems up to 10 kW.",
      "Discoms must complete checks in 15–30 days—after that, projects are deemed approved.",
      "Grid connectivity to be provided within 30 days post-feasibility.",
      "No wheeling, banking, or cross-subsidy charges for solar users.",
      "Battery-based projects get extra waivers on wheeling charges.",
      "10 kW limit per home and 1 MW per project retained for grid safety.",
    ],
    footer: "Surplus energy exported to the grid can be adjusted against multiple connections—supporting collective solar use under RERC.",
  },
  {
    id: "patrika-vnm-gnm",
    source: "Patrika News Network",
    sourceUrl: "patrika.com",
    headline: "Install solar panels anywhere, get cheaper electricity everywhere",
    subheadline: "Rajasthan Electricity Regulatory Commission approves VNM & GNM",
    intro:
      "Many consumers want solar but lack suitable roof space at their flat, office, or showroom. Under the new framework, you can install panels on another property you own and use the generation to offset bills at a different meter.",
    rulesTitle: "What is now allowed",
    rules: [
      "Virtual Net Metering—generate at one site, use credits at another.",
      "Group Net Metering—for housing societies, RWAs, and cooperatives.",
      "Aligned with Rajasthan's Clean Energy Policy, following models used in Delhi and other states.",
    ],
    caseStudy: {
      title: "Case: Virtual Net Metering in practice",
      body:
        "Dilip Sharma lives in a Jaipur apartment in Bapu Nagar where the common roof cannot host panels. He owns land in Jagatpura. He can install solar there and apply those credits to power his flat—or even his shop or showroom.",
    },
    footer: "Reported via RRECL News Corner · Policy enables Rent A Roof-style community solar in Rajasthan.",
  },
];

export const USER_TYPES = [
  { value: "homeowner", label: "Homeowner" },
  { value: "investor", label: "Investor" },
  { value: "business", label: "Business" },
  { value: "roof_owner", label: "Roof Owner" },
];
