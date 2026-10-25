# the clean home — Premium Indoor Environmental Wellness & Sanitization UAE

> Recreated from [The Healthy Home](https://thehealthyhome.me/en/ae) under the new brand identity **"the clean home"**.  
> Primary GitHub Username: **Aman22kr**  
> Hosting: GitHub Pages via automated GitHub Actions workflow.

---

## 1. Project Overview & Brand Identity

**the clean home** is a modern, responsive, multi-page web application dedicated to medical-grade indoor environmental hygiene and wellness treatments in the United Arab Emirates (Dubai, Abu Dhabi, Sharjah). 

### Key Pillars Recreated from the Reference Site:
- **Pure Air®**: Mechanical rotary brushing AC duct decontamination, evaporator coil cleansing, and 100% natural Australian tea-tree bio-fogging.
- **Pure Sleep®**: High-frequency pulsating dry extraction (40,000 pulses/min) and germicidal UV-C light sterilization to eliminate dust mites and allergen proteins from mattresses.
- **Pure Living®**: Architectural home deep cleaning, hot-water extraction for sofas and upholstery, Dubai Municipality certified water tank cleaning, and odorless eco pest control.

---

## 2. Accessible Pages & Features Implemented

1. **Homepage (`/`)**:
   - Hero section featuring high-resolution architectural photography, key proof statistics (99.8% allergen removal, 150k+ homes, 0% chemicals).
   - Real-time **Instant Service Estimate Calculator** with live AED pricing adjustments for property sizes and UAE neighborhoods.
   - Core Pillars breakdown (`Pure Air®`, `Pure Sleep®`, `Pure Living®`).
   - Signature treatment cards with direct booking and shortlist toggles.
   - The 7-Stage Mechanical & Biological Sanitization Protocol timeline.
   - High-fidelity **Demonstration Video Showcase Placeholder** adhering to layout and aspect-ratio specifications without third-party iframe issues.
   - Attributable client testimonials from UAE communities (Dubai Marina, Arabian Ranches, Saadiyat Island).
   - Reusable compact advertisement banner.

2. **Services Catalog (`/services`)**:
   - Real-time category filtering (`All`, `Pure Air®`, `Pure Sleep®`, `Pure Living®`, `Specialized`).
   - Live search-as-you-type filter and price sorting (Low-to-High, High-to-Low).
   - Detail cards with duration, frequency, inclusions, and direct booking actions.

3. **Dynamic Service Detail Pages (`/services/:serviceSlug`)**:
   - Dynamic routing for each service (e.g. `/services/ac-duct-cleaning-sanitization`, `/services/mattress-cleaning-sanitization`).
   - Detailed process stages, equipment specifications, health benefits, and certifications.
   - Service-specific custom unit calculator (interactive +/- unit adjuster with live VAT calculation).
   - Service FAQ accordions and related paired treatments.

4. **Interactive Online Booking Wizard (`/book`)**:
   - 4-step scheduling wizard:
     - Step 1: Treatment selector & quantity count.
     - Step 2: UAE location selector (Emirate, Neighborhood, Street address) & date/time slot picker.
     - Step 3: Contact information (Name, Phone, Email, Access notes).
     - Step 4: Final verification and confirmation.
   - Generates unique reference code (e.g., `BKG-78291`) and persists booking details to browser `localStorage`.
   - List of previously scheduled appointments with active status and cancellation support.

5. **About Us (`/about`)**:
   - Company heritage, mission, and the science behind Indoor Environmental Quality (IAQ) in the Arabian Gulf.
   - Core safety principles (zero toxicity, hospital-grade equipment, certified technicians).

6. **Indoor Wellness Journal (`/blog` & `/blog/:postSlug`)**:
   - Scientific articles on indoor air pollution, dust mite biology, and move-in hygiene checklists.
   - Dynamic article reader with key environmental takeaways, reading times, and link-sharing triggers.

7. **Frequently Asked Questions (`/faq`)**:
   - Real-time searchable FAQ with categorized accordions covering safety, child & pet safety, dry extraction, preparations, and pricing.

8. **Contact & Branch Operations (`/contact`)**:
   - Office locations in Dubai (Al Quoz 1), Abu Dhabi (Mussafah / Reem), and Sharjah (Al Majaz).
   - Direct 800 CLEANHOME phone hotline and WhatsApp chat integration.
   - Interactive inquiry form with validation, feedback toasts, and `localStorage` persistence.

9. **Saved Services & Client Portal (`/saved`)**:
   - Shortlisted treatments with combined package price estimation.
   - Management of scheduled appointments stored in `localStorage`.

10. **Custom 404 Page (`*`)**:
    - Graceful fallback for unrecognized routes with quick navigation back to key sections.

11. **Global Search Modal (`ESC` to close)**:
    - Global keyboard-accessible search finding matching services, blog articles, and FAQs instantly.

12. **Compact Advertisement Placeholder (`<AdPlaceholder />`)**:
    - Tasteful, non-intrusive sponsor placeholder positioned near the bottom of every relevant page above the footer.

---

## 3. Technology Stack & Routing

- **Framework**: React 19 + TypeScript / JSX
- **Build Tool**: Vite 8 with `@tailwindcss/vite` (Tailwind CSS v4)
- **Routing**: React Router (`HashRouter`)
  - Ensures static hosting compatibility with GitHub Pages (direct URLs and page reloads work without 404 rewrite rules).
- **Icons**: Lucide React
- **Client Persistence**: Browser `localStorage`
- **Deployment**: GitHub Actions workflow deploying to GitHub Pages

---

## 4. Project Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment workflow
├── public/                       # Static public assets
├── src/
│   ├── assets/
│   │   └── images/               # High-fidelity photography assets
│   ├── components/
│   │   ├── AdPlaceholder.tsx     # Reusable compact advertisement slot
│   │   ├── Footer.tsx            # Global footer with branch hubs & certifications
│   │   ├── Navbar.tsx            # Top bar contract conforming header & mobile drawer
│   │   ├── ScrollToTop.tsx       # Route change scroll reset
│   │   ├── SearchModal.tsx       # Live global search modal
│   │   ├── Toast.tsx             # Interactive toast notification
│   │   └── VideoPlaceholder.tsx  # Blank video demonstration placeholder
│   ├── context/
│   │   └── AppContext.tsx        # React context & LocalStorage state engine
│   ├── data/
│   │   └── servicesData.ts       # Structured mock data (services, blogs, faqs, locations)
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── BookPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── SavedPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   └── ServicesPage.tsx
│   ├── App.tsx                   # HashRouter & route configuration
│   ├── index.css                 # Tailwind CSS v4 @import and theme tokens
│   └── main.tsx                  # Application entry point
├── .gitignore
├── index.html                    # SEO meta tags, title, and typography links
├── package.json                  # Scripts: dev, build, preview, deploy
├── package-lock.json             # Committed npm lockfile
├── tsconfig.json
├── vite.config.ts                # Configured with base: './' for GitHub Pages
└── README.md
```

---

## 5. Local Development & Build Instructions

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Installation
Clone the repository and install dependencies using the committed lockfile:
```bash
# Clone the repository
git clone https://github.com/Aman22kr/the-clean-home.git
cd the-clean-home

# Clean install dependencies
npm ci
```

### Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000/`.

### Run Production Build & Preview
```bash
# Build the production bundle into /dist
npm run build

# Preview the built assets locally
npm run preview
```

### Type Checking & Linting
```bash
npm run lint
```

---

## 6. How LocalStorage Persistence Works

This application runs as a high-performance static client application without requiring a dedicated database server for initial use. Appropriate client-side data is persisted inside browser `localStorage`:

- `thecleanhome_saved_services`: Array of shortlisted service IDs.
- `thecleanhome_bookings`: Array of confirmed appointment records, complete with reference IDs, selected units, dates, and total AED prices.
- `thecleanhome_selected_emirate`: User's active region selection (Dubai, Abu Dhabi, Sharjah).
- `thecleanhome_inquiries`: Submitted contact requests and callback inquiries.

> **Note**: `localStorage` is isolated to the specific browser and device being used. It does not synchronize across separate devices. In accordance with privacy and security standards, no payment credentials, credit card details, or authentication passwords are ever stored.

---

## 7. Automated GitHub Pages Deployment via GitHub Actions

This repository is pre-configured with the official GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Step-by-Step Setup on GitHub:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete recreation of the clean home web application"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/<your-repo-name>.git
   git push -u origin main
   ```

2. **Configure GitHub Pages Source**:
   - Go to your repository on GitHub: `https://github.com/Aman22kr/<your-repo-name>`.
   - Click on **Settings** > **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. **Automatic Deployment**:
   - Every push to the `main` branch triggers `.github/workflows/deploy.yml`.
   - The workflow checks out the repository, installs dependencies using `npm ci`, runs `npm run build`, uploads the `./dist` artifact, and publishes the site.
   - Your live URL will be available at: `https://Aman22kr.github.io/<your-repo-name>/`.

---

## 8. Customization & Reusing for Another Brand

To adapt this codebase to a different brand or service business:
1. **Brand Identity**: Update the brand name string in `src/components/Navbar.tsx`, `src/components/Footer.tsx`, and `index.html`.
2. **Services & Pricing**: Modify the data items in `src/data/servicesData.ts` to reflect the desired services, AED pricing, benefits, and procedural steps.
3. **Color Palette**: Adjust the color tokens in `src/index.css` (e.g. `--color-brand-primary: #083838;`, `--color-brand-mint: #22C55E;`).
4. **Locations**: Update `UAE_LOCATIONS` in `src/data/servicesData.ts` to customize cities and coverage zones.

---

## 9. Mock Implementations & Scope Disclosures

- **Booking Flow**: Generates realistic confirmation receipts with unique reference IDs and records appointments locally; it does not connect to an external payment processor or CRM database.
- **Video Embeds**: In accordance with the prompt specification, video areas display a clean blank video demonstration placeholder instead of embedding external YouTube players.
- **Advertising**: The bottom advertisement slot is a reusable presentation component showcasing a partner product without live ad-network tracking.
