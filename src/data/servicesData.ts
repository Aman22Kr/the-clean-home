export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'pure-air' | 'pure-sleep' | 'pure-living' | 'specialized';
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  basePriceAED: number;
  unitLabel: string;
  estimatedDuration: string;
  recommendedFrequency: string;
  benefits: string[];
  stages: { step: number; title: string; description: string }[];
  equipment: string[];
  certifications: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ac-duct-cleaning',
    slug: 'ac-duct-cleaning-sanitization',
    title: 'AC Duct Cleaning & Sanitization',
    category: 'pure-air',
    categoryLabel: 'Pure Air®',
    tagline: 'Breathe pristine, dust-free indoor air with medical-grade duct decontamination',
    shortDescription: 'Comprehensive mechanical rotary brush cleaning and chemical-free bio-disinfection for residential and commercial air conditioning duct networks.',
    fullDescription: 'In the UAE climate, air conditioning systems continuously recirculate indoor air, accumulating fine desert dust, mold spores, and airborne allergens inside the ductwork. Our NADCA-certified AC Duct Cleaning removes up to 99.8% of contaminants using state-of-the-art negative pressure vacuum systems, rotary brushes, and organic tea-tree oil sanitization.',
    image: '/src/assets/images/service_ac_duct_cleaning_1792897222434.jpg',
    basePriceAED: 590,
    unitLabel: 'per AC unit / system',
    estimatedDuration: '3 - 5 hours',
    recommendedFrequency: 'Every 6 months',
    benefits: [
      'Eliminates 99.8% of trapped dust, fungal spores, and allergen colonies',
      'Significantly lowers electricity consumption and AC strain',
      'Prevents musty AC odors and morning nasal congestion',
      'Non-toxic, safe for infants, pregnant women, and pets'
    ],
    stages: [
      { step: 1, title: 'Pre-Inspection & Airflow Testing', description: 'Endoscopic camera inspection of duct interior and thermal anemometer air velocity readings.' },
      { step: 2, title: 'Negative Pressure Containment', description: 'High-efficiency particulate HEPA vacuum system attached to create continuous negative pressure.' },
      { step: 3, title: 'Mechanical Rotary Brushing', description: 'Flexible motorized shafts with soft nylon brushes dislodge stubborn debris along duct walls.' },
      { step: 4, title: 'Deep Evaporator Coil Treatment', description: 'Bio-enzymatic pressure cleansing of cooling fins and drain drip pans to remove mold build-up.' },
      { step: 5, title: 'Grill & Diffuser Sonic Wash', description: 'All ceiling supply and return vents are removed, washed with organic detergents, and polished.' },
      { step: 6, title: 'Natural Tea-Tree Bio-Fogging', description: 'Ultrasonic cold fogging using 100% pure Australian tea-tree extract to inhibit microbial regrowth.' },
      { step: 7, title: 'Post-Clean Camera Verification', description: 'HD internal camera audit with side-by-side before-and-after proof provided in your service report.' }
    ],
    equipment: [
      'Rotobrush® Negative Pressure Extractors',
      'Industrial HEPA Filtration Containment Units',
      'High-Resolution Endoscopic Duct Scopes',
      'Ultrasonic Cold Bio-Disinfection Foggers'
    ],
    certifications: ['NADCA Certified', 'Dubai Municipality Approved', 'IAQA Member'],
    faqs: [
      {
        question: 'How often should AC ducts be cleaned in Dubai or the UAE?',
        answer: 'Due to extreme summer heat and frequent fine dust storms, we advise complete duct cleaning every 6 to 12 months for optimal respiratory health and energy efficiency.'
      },
      {
        question: 'Are the sanitizing solutions safe for my pets and babies?',
        answer: 'Yes! We strictly prohibit harsh chemicals. Our bio-fogging uses medical-grade, 100% natural, plant-based anti-microbial extracts completely harmless to pets and infants.'
      },
      {
        question: 'Do I need to cover my furniture during the service?',
        answer: 'Our technicians completely seal each vent and use negative pressure so zero dust escapes into your rooms. We also drape protective sheets over surrounding furniture as an extra precaution.'
      }
    ]
  },
  {
    id: 'mattress-cleaning',
    slug: 'mattress-cleaning-sanitization',
    title: 'Mattress Sanitization & Dust Mite Removal',
    category: 'pure-sleep',
    categoryLabel: 'Pure Sleep®',
    tagline: 'Deep dry medical-grade extraction and UV-C germicidal sterilization',
    shortDescription: 'Industrial vibration dry extraction eliminates millions of dead skin flakes, dust mites, and microscopic allergens without toxic moisture.',
    fullDescription: 'The average mattress harbors over 2 million microscopic dust mites feeding on dead skin cells, which triggers morning sneezing, asthma, eczema, and restless sleep. Our Pure Sleep® service uses German-engineered pulsating dry-extraction technology that vibrates deep into the mattress core, paired with germicidal UV-C light to neutralize bacteria, bed bugs, and fungal spores.',
    image: '/src/assets/images/service_mattress_sanitization_1792897222697.jpg',
    basePriceAED: 240,
    unitLabel: 'per mattress',
    estimatedDuration: '45 - 60 minutes',
    recommendedFrequency: 'Every 3 - 4 months',
    benefits: [
      'Extracts over 99% of dust mites, mite excrement, and dead skin particles',
      'Immediate relief from nighttime allergy symptoms, itching, and nasal congestion',
      '100% dry procedure — ready for sleep immediately after treatment',
      'Destroys bacteria, virus particles, and mold using high-intensity UV-C radiation'
    ],
    stages: [
      { step: 1, title: 'Hygiene & Allergen Test', description: 'Micro-filter vacuum test displaying the exact level of contaminants extracted from a test patch.' },
      { step: 2, title: 'Pulsating High-Frequency Extraction', description: 'German industrial machine vibrates at 40,000 pulses/min to dislodge deeply embedded matter.' },
      { step: 3, title: 'HEPA Multi-Stage Containment', description: 'Traps particles down to 0.3 microns, preventing any airborne recirculation into bedroom air.' },
      { step: 4, title: 'Medical Germicidal UV-C Sterilization', description: 'Focused UV-C exposure neutralizes DNA of bacteria, dust mites, bed bug eggs, and viruses.' },
      { step: 5, title: 'Organic Essential Oil Treatment', description: 'Subtle hypoallergenic organic lavender and eucalyptus mist applied to deter future pest infestations.' }
    ],
    equipment: [
      'Potema® High-Frequency Mattress Decontamination Units',
      'Medical Grade Dual-Tube UV-C Sanitizers',
      'Hospital Grade Class-H HEPA Vacuum Filters'
    ],
    certifications: ['ECARF Certified', 'Asthma & Allergy Friendly™', 'Dubai Municipality Compliant'],
    faqs: [
      {
        question: 'Does the mattress stay wet after cleaning?',
        answer: 'No. Our primary sanitization is 100% dry extraction and UV-C light. Your mattress is completely dry and ready for bed linens immediately after our technicians complete the service.'
      },
      {
        question: 'Can you remove old sweat stains and discoloration?',
        answer: 'Dry sanitization focuses on health, allergen removal, and hygiene. If stain removal is required, we offer an optional organic spot-cleaning treatment.'
      }
    ]
  },
  {
    id: 'home-deep-cleaning',
    slug: 'home-deep-cleaning',
    title: 'Home Deep Cleaning & Eco-Sanitization',
    category: 'pure-living',
    categoryLabel: 'Pure Living®',
    tagline: 'Comprehensive top-to-bottom hygienic restoration using organic solutions',
    shortDescription: 'Intensive deep cleaning for villas and apartments covering kitchens, appliances, bathrooms, baseboards, grout, and high-touch architectural surfaces.',
    fullDescription: 'Unlike standard hourly maid services, our Home Deep Cleaning is a dedicated team-based architectural decontamination. We systematically tackle behind appliances, inside cabinets, bathroom grout descaling, window tracks, ceiling fans, and indoor light fixtures using hospital-grade, plant-derived, non-toxic sanitizing solutions.',
    image: '/src/assets/images/service_home_deep_cleaning_1792897220963.jpg',
    basePriceAED: 850,
    unitLabel: 'per apartment / villa',
    estimatedDuration: '5 - 8 hours',
    recommendedFrequency: 'Every 3 - 6 months or move-in',
    benefits: [
      'Tackles deeply embedded grease, limescale, mildew, and accumulated grime',
      'Includes oven interiors, hood extractor filters, and refrigerator detailing',
      'Specialized steam disinfection of bathroom fixtures and tiled surfaces',
      'Guaranteed passing score for move-in / move-out tenancy handovers'
    ],
    stages: [
      { step: 1, title: 'Comprehensive Walkthrough Audit', description: 'Lead supervisor identifies high-priority areas, delicate finishes, and specific client requirements.' },
      { step: 2, title: 'High-Level Dusting & Fixture Care', description: 'Ceiling fans, chandeliers, AC vents, curtains, and high architectural ledges are dusted.' },
      { step: 3, title: 'Intensive Kitchen De-Greasing', description: 'Stove ranges, ovens, exhaust hoods, backsplashes, and cabinet interiors sanitized.' },
      { step: 4, title: 'Bathroom Descaling & Steam Sterilization', description: 'Removal of calcium deposits, tile grout scouring, and 180°C steam application.' },
      { step: 5, title: 'Window Tracks & Glass Detailing', description: 'Internal and accessible external glass cleaned streak-free with pure deionized water.' },
      { step: 6, title: 'Floor Machine Scrubbing & Sanitization', description: 'Single-disc rotary floor scrubbing for tiles, marble, or parquet with pH-neutral soap.' },
      { step: 7, title: 'Final Supervisor Quality Sign-Off', description: '50-point checklist inspection before releasing the premises back to you.' }
    ],
    equipment: [
      'Kärcher® Industrial Thermal Steam Cleaners',
      'Rotary Single-Disc Floor Polishers & Scrubbers',
      'Eco-Friendly Plant-Enzyme Degreasers'
    ],
    certifications: ['BICSc Standard Cleaners', 'Dubai Health Authority Compliant', 'Eco-Choice UAE'],
    faqs: [
      {
        question: 'Do you bring all equipment and cleaning materials?',
        answer: 'Yes, our team arrives fully equipped with specialized industrial steam machines, HEPA vacuums, scrubbers, step ladders, microfiber cloths, and all eco-friendly cleaning supplies.'
      },
      {
        question: 'Do I need to be present at the home the entire time?',
        answer: 'You only need to welcome the team and perform the final walkthrough at completion. You are free to relax or go about your day while our certified team cleans.'
      }
    ]
  },
  {
    id: 'sofa-upholstery-cleaning',
    slug: 'sofa-upholstery-deep-cleaning',
    title: 'Sofa & Upholstery Deep Cleaning',
    category: 'pure-living',
    categoryLabel: 'Pure Living®',
    tagline: 'Revitalize fabric and leather living room furniture with stain extraction',
    shortDescription: 'Industrial injection-extraction and deep foam steam sanitization that removes stains, oils, spilled liquids, and odor-causing bacteria.',
    fullDescription: 'Sofas and living room chairs endure daily use from family members, pets, and guests, absorbing body oils, dust, and food spills. Our Pure Living® sofa treatment combines gentle fiber-safe agitation, hot water thermal extraction, and fast-drying airflow to restore fibers to showroom condition.',
    image: '/src/assets/images/hero_indoor_wellness_1792897222616.jpg',
    basePriceAED: 210,
    unitLabel: 'per seating section',
    estimatedDuration: '1.5 - 2.5 hours',
    recommendedFrequency: 'Every 6 months',
    benefits: [
      'Removes deep stubborn coffee, juice, food, and pet stains',
      'Neutralizes embedded food odors and sweat smells naturally',
      'Protects delicate fabrics, linen, velvet, and genuine leather',
      'Thermal steam extraction sanitizes fibers at microscopic depth'
    ],
    stages: [
      { step: 1, title: 'Fabric Identification & Color-Fastness Test', description: 'Determines fiber type (cotton, linen, synthetic, leather) and tests safe cleaning pH.' },
      { step: 2, title: 'High-Power HEPA Dry Extraction', description: 'Removes deep loose sand, pet hair, dust mites, and crumbs before applying liquid.' },
      { step: 3, title: 'Targeted Pre-Treatment for Stains', description: 'Enzyme-based organic pre-spray applied directly to heavy spots and traffic zones.' },
      { step: 4, title: 'Thermal Injection-Extraction Cleaning', description: 'Injects pressurized warm bio-solution and immediately extracts 95% of moisture.' },
      { step: 5, title: 'Air Mover Accelerated Drying', description: 'High-velocity turbo fans set up to accelerate drying time down to 2-3 hours.' }
    ],
    equipment: ['Santoemma® Injection-Extraction Machines', 'Dual-Turbine Air Movers', 'Horsehair Agitation Brushes'],
    certifications: ['IICRC Certified Cleaning', 'WoolSafe Approved'],
    faqs: [
      {
        question: 'How long does the sofa take to dry?',
        answer: 'With our dual-turbine moisture extraction and air-movers, fabrics dry in approximately 2 to 3 hours.'
      }
    ]
  },
  {
    id: 'water-tank-cleaning',
    slug: 'water-tank-cleaning-disinfection',
    title: 'Water Tank Cleaning & Disinfection',
    category: 'pure-living',
    categoryLabel: 'Pure Living®',
    tagline: 'Safe, clear, bacteria-free domestic water storage for your family',
    shortDescription: 'Complete sludge drainage, high-pressure washing, and Dubai Municipality certified chlorination/disinfection of underground and overhead water tanks.',
    fullDescription: 'Domestic water tanks in the UAE accumulate silt, algae, and bacterial biofilms over time due to high ambient temperatures. Our Dubai Municipality approved water tank cleaning process ensures your shower, cooking, and washing water remains clean, odorless, and safe from Legionella and E. coli.',
    image: '/src/assets/images/service_ac_duct_cleaning_1792897222434.jpg',
    basePriceAED: 680,
    unitLabel: 'per water tank system',
    estimatedDuration: '3 - 4 hours',
    recommendedFrequency: 'Every 6 months',
    benefits: [
      'Removes silt, rust scale, sand build-up, and algal biofilm',
      'Prevents skin irritation, hair loss, and water-borne pathogens',
      'Full compliance with Dubai Municipality Health & Safety standards',
      'Includes pre- and post-cleaning water laboratory testing certificate'
    ],
    stages: [
      { step: 1, title: 'Isolation & Drainage', description: 'Tank is isolated from main supply and remaining water is drained with submersible pumps.' },
      { step: 2, title: 'High-Pressure Mechanical Scrubbing', description: 'Walls, floors, and ceiling surfaces blasted at 200 bar pressure to strip biofilm.' },
      { step: 3, title: 'Sludge & Residue Vacuuming', description: 'Industrial slurry vacuums extract all dislodged sediment and standing dirty water.' },
      { step: 4, title: 'Food-Grade Disinfection & Neutralization', description: 'Approved sterilizing agent misted over all internal surfaces for contact kill.' },
      { step: 5, title: 'Fresh Water Rinse & Refill', description: 'Tank is thoroughly rinsed with fresh water, re-filled, and laboratory sample taken.' }
    ],
    equipment: ['200-Bar High Pressure Jetters', 'Submersible Heavy Slurry Pumps', 'Municipal Certified Testing Kits'],
    certifications: ['Dubai Municipality Certified', 'Trakhees Approved', 'ISO 9001:2015'],
    faqs: [
      {
        question: 'Will our water supply be shut off during cleaning?',
        answer: 'Yes, for approximately 2 to 3 hours during the actual scrub and sterilization. We schedule work at your convenience and advise storing cooking water in advance.'
      }
    ]
  },
  {
    id: 'eco-pest-control',
    slug: 'eco-friendly-pest-control',
    title: 'Eco-Friendly Pest Control',
    category: 'specialized',
    categoryLabel: 'Specialized Treatments',
    tagline: 'Targeted biological pest management without lingering chemical fumes',
    shortDescription: 'Odorless, pet-safe, and child-friendly targeted treatments for cockroaches, bed bugs, ants, termites, and silverfish.',
    fullDescription: 'Traditional pest control fills homes with harmful chemical residues. the clean home uses Integrated Pest Management (IPM) focusing on targeted gel baiting, insect growth regulators (IGR), and natural diatomaceous barriers that eliminate pests at the nest without requiring you to vacate the premises.',
    image: '/src/assets/images/service_home_deep_cleaning_1792897220963.jpg',
    basePriceAED: 320,
    unitLabel: 'per treatment',
    estimatedDuration: '1 - 2 hours',
    recommendedFrequency: 'Quarterly or as needed',
    benefits: [
      '100% odorless gel baits — no need to leave the house or unpack cupboards',
      'Completely safe for cats, dogs, birds, and young children',
      'Targets pests at the nest for long-lasting colony eradication',
      '3-month free warranty with complimentary follow-up if pests reappear'
    ],
    stages: [
      { step: 1, title: 'Pest Harborage Inspection', description: 'Detailed inspection of kitchen kickboards, electrical ducts, and moisture points.' },
      { step: 2, title: 'Targeted Gel Formulation', description: 'Placement of micro-droplets of non-volatile insect bait in concealed pest runways.' },
      { step: 3, title: 'Growth Regulator Application', description: 'Stops juvenile insects from maturing and reproducing, breaking the reproductive cycle.' },
      { step: 4, title: 'Entry Point Exclusion Advisory', description: 'Identification and sealing of exterior pipe gaps, door sweeps, and weep holes.' }
    ],
    equipment: ['Precision Micro-Applicator Guns', 'ULV Cold Foggers for Bed Bugs', 'Thermal Heat Monitors'],
    certifications: ['Dubai Municipality Pest Control License', 'IPM Certified', 'NPMA Member'],
    faqs: [
      {
        question: 'Do we have to vacate the apartment during pest control?',
        answer: 'No! Our gel baiting and odorless treatments are non-volatile and emit zero hazardous fumes. You and your pets can remain comfortably inside.'
      }
    ]
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hidden-danger-indoor-air-pollution-uae-homes',
    title: 'The Hidden Danger of Indoor Air Pollution in UAE Homes',
    category: 'Pure Air',
    date: 'March 14, 2026',
    readTime: '5 min read',
    author: 'Dr. Tariq Mansoor, Environmental Wellness Director',
    excerpt: 'Because we spend over 90% of our time indoors in the UAE, indoor air can become up to 5 times more polluted than outside air without proper AC duct maintenance.',
    image: '/src/assets/images/service_ac_duct_cleaning_1792897222434.jpg',
    keyTakeaways: [
      'AC systems act as lungs for your home, accumulating desert dust and humidity.',
      'Mold colonies inside dark AC drip pans trigger allergies, asthma, and chronic morning fatigue.',
      'Regular bi-annual duct decontamination lowers your DEWA electricity bills by up to 18%.'
    ],
    content: [
      'Living in Dubai, Abu Dhabi, or Sharjah means spending the vast majority of our year in air-conditioned environments. With sealed windows to keep out summer temperatures exceeding 45°C, our indoor spaces recycle the exact same air thousands of times each week.',
      'What most homeowners don’t see is what accumulates inside the hidden plenum and galvanized steel ductwork above their ceilings. High ambient humidity combined with cold AC supply air creates condensation. Over months, this condensation traps fine airborne desert sand, dead skin particles, and pet dander, providing the perfect breeding ground for Cladosporium and Aspergillus mold strains.',
      'Symptoms of sick building syndrome include recurring morning sneezing, dry coughs, irritated eyes, and unexplained afternoon fatigue. By conducting professional negative-pressure mechanical duct brushing combined with 100% natural bio-sanitization, families experience noticeable respiratory relief within 24 hours.'
    ]
  },
  {
    slug: 'what-is-living-in-your-mattress-sleep-hygiene-guide',
    title: 'What Is Living in Your Mattress? A Deep Dive into Sleep Hygiene',
    category: 'Pure Sleep',
    date: 'February 28, 2026',
    readTime: '6 min read',
    author: 'Layla Al-Khatib, Certified Sleep Hygiene Specialist',
    excerpt: 'Discover why standard washing machine cycles for your bedsheets leave millions of microscopic dust mites thriving just inches beneath your head.',
    image: '/src/assets/images/service_mattress_sanitization_1792897222697.jpg',
    keyTakeaways: [
      'A typical mattress doubles in weight over 10 years largely due to human skin shedding and dust mite colonies.',
      'Standard bedsheets allow microscopic mite feces and digestive enzymes to pass directly onto facial skin.',
      'Pulsating dry extraction vibrates at 40,000 pulses per minute to dislodge deep core allergens.'
    ],
    content: [
      'We spend a third of our lives with our face and skin pressed into our mattress. Yet while most people wouldn’t wear an unwashed shirt for a month, mattresses often go 3, 5, or even 10 years without a single deep decontamination.',
      'Human bodies shed approximately 1.5 grams of dead skin flakes every night — enough to nourish approximately one million dust mites. The primary trigger for allergic rhinitis and nighttime asthma is not the mite itself, but the protein Der p 1 found in dust mite fecal pellets.',
      'Chemical sprays or wet shampooing can make matters worse by trapping moisture inside foam layers, accelerating internal mold growth. Our German-developed dry sanitization uses high-frequency pulsation and medical-grade germicidal UV-C light to destroy 99.9% of dust mites and their food supply in under an hour.'
    ]
  },
  {
    slug: 'spring-move-in-deep-cleaning-checklist-dubai',
    title: 'The Ultimate Move-In Deep Cleaning Checklist for Dubai & Abu Dhabi',
    category: 'Pure Living',
    date: 'January 19, 2026',
    readTime: '4 min read',
    author: 'Marc Dubois, Head of Cleaning Operations',
    excerpt: 'Moving into a new villa or apartment? Avoid moving into previous tenants’ accumulated grime and construction residue with this comprehensive guide.',
    image: '/src/assets/images/service_home_deep_cleaning_1792897220963.jpg',
    keyTakeaways: [
      'Prioritize water tank disinfection and AC coil washing before unpacking boxes.',
      'Pay special attention to silicone sealant mold in showers and behind refrigerator coils.',
      'Always request eco-friendly, zero-VOC cleaning products to protect indoor air quality.'
    ],
    content: [
      'Handover cleans provided by landlords or property developers are notoriously superficial: a quick wipe of the marble floors and a standard spray of glass. However, microscopic drywall dust from fit-out works and previous tenant residue remain embedded in ventilation grilles and kitchen cabinetry.',
      'Before bringing your clothes, children’s toys, and mattresses into a newly rented or purchased home, ensure a thorough architectural deep clean. Sanitize kitchen extractor hood baffles, descale water heaters, clean under sinks to check for pest entry points, and sterilize all bathroom grout lines.',
      'Taking these proactive steps creates a clean baseline for your family, turning an unfamiliar rental into a pristine, welcoming home from night one.'
    ]
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'ac' | 'mattress' | 'deep-clean' | 'pricing';
}

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'general',
    question: 'How is "the clean home" different from standard maid services?',
    answer: 'Standard maid companies provide surface-level dusting and mopping using basic store-bought detergents. the clean home is an indoor environmental wellness provider equipped with specialized industrial equipment (HEPA negative pressure extractors, germicidal UV-C sterilizers, high-pressure 180°C steam generators) and NADCA-certified technicians focused on eliminating unseen allergens, mold, and pathogens.'
  },
  {
    category: 'general',
    question: 'Are all treatments safe for pregnant women, newborns, and pets?',
    answer: 'Absolutely. We practice strict zero-toxic-residue standards. All our sanitizing solutions are 100% natural, plant-derived, biodegradable, and free of volatile organic compounds (VOCs). There is no chemical smell or risk of toxicity.'
  },
  {
    category: 'general',
    question: 'Which areas in the UAE do you service?',
    answer: 'We operate across the entire United Arab Emirates, with dedicated hubs in Dubai (covering Downtown, Dubai Marina, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, and beyond), Abu Dhabi (including Yas Island, Saadiyat, Al Reem Island), and Sharjah.'
  },
  {
    category: 'ac',
    question: 'How long does AC duct cleaning take for a 3-bedroom villa?',
    answer: 'A comprehensive 7-stage AC duct and coil cleaning for a 3-bedroom villa typically takes between 4 to 6 hours. Our crew uses multiple containment units to service rooms in sequence with minimal disruption to your routine.'
  },
  {
    category: 'mattress',
    question: 'Can I sleep on my mattress immediately after sanitization?',
    answer: 'Yes! Our Pure Sleep® mattress sanitization is a 100% dry procedure utilizing high-frequency vibrations and UV-C germicidal light. There is zero wet shampooing or dampness, meaning you can put on fresh sheets and sleep immediately.'
  },
  {
    category: 'deep-clean',
    question: 'What is included in a Home Deep Cleaning service?',
    answer: 'Our deep clean covers high-level architectural dusting, ceiling fans, light fixtures, internal window panes and tracks, deep kitchen de-greasing (including stove, oven interior, and range hood), bathroom descaling, steam tile scouring, door frame detailing, and machine floor scrubbing.'
  },
  {
    category: 'pricing',
    question: 'How do you calculate service pricing?',
    answer: 'Our pricing is completely transparent with no hidden call-out fees. Quotes are based on the number of AC systems, property square footage, or count of mattresses/sofas. You can use our instant interactive calculator on the website to receive an exact estimate before booking.'
  }
];

export const UAE_LOCATIONS = [
  { emirate: 'Dubai', areas: ['Dubai Marina & JBR', 'Downtown Dubai & DIFC', 'Palm Jumeirah', 'Dubai Hills Estate', 'Arabian Ranches', 'Jumeirah & Umm Suqeim', 'Business Bay', 'Al Barsha & The Greens', 'Mirdif & Al Warqa'] },
  { emirate: 'Abu Dhabi', areas: ['Al Reem Island', 'Saadiyat Island', 'Yas Island', 'Al Raha Beach', 'Khalifa City', 'Corniche & Downtown', 'Al Bateen'] },
  { emirate: 'Sharjah', areas: ['Al Majaz', 'Al Zahia', 'Al Taawun', 'Muwaileh', 'Al Nahda'] }
];
