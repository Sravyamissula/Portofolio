# Sai Sri Sravya Missula — Developer Portfolio Website

A premium, production-quality personal developer portfolio website engineered with Next.js 14, React 18, TypeScript, Tailwind CSS, Three.js, and Lucide Icons.

Designed for roles in **Software Engineering (SWE), Backend Engineering, Distributed Systems, and AI/ML**.

---

## 🚀 Live Demo & Local Setup

### 🌐 Live Portfolio

**[View Live Portfolio](https://portofolio-alpha-indol-hwbk49hrcp.vercel.app/)**

The portfolio is publicly deployed on Vercel and connected to this GitHub repository.

### 1. Prerequisites
- Node.js >= 18.x (Tested with Node v24.15)
- npm >= 9.x

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🛠️ Configuration & Personalization

All personal information, social links, project descriptions, and experience details are centralized in one file:

📁 **`src/data/portfolioData.ts`**

### Updating Social Links
Find the `SOCIAL_LINKS` object at the top of `src/data/portfolioData.ts`:
```typescript
export const SOCIAL_LINKS = {
  // TODO: Insert your actual GitHub profile link below
  github: "https://github.com/your-username",
  // TODO: Insert your actual LinkedIn profile link below
  linkedin: "https://linkedin.com/in/your-profile",
  email: "sravyamissula137@gmail.com",
  phone: "+91-6301068011",
  resumePdf: "/Sai_Sri_Sravya_Missula_Resume.pdf",
};
```

### Updating Resume PDF
Replace `public/Sai_Sri_Sravya_Missula_Resume.pdf` with your actual updated resume file.

---

## 🏛️ Architecture & Component Hierarchy

```
src/
├── app/
│   ├── layout.tsx         # Global layout with SEO meta tags & Open Graph
│   └── page.tsx           # Page orchestrating all portfolio sections
├── components/
│   ├── 3d/
│   │   └── HeroNetwork3D.tsx     # High-performance Three.js technical network canvas
│   ├── navigation/
│   │   ├── Navbar.tsx            # Sticky glassmorphism nav with active tracking
│   │   └── Footer.tsx            # Minimal footer with back-to-top button
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero with roles, status indicator & 3D visual
│   │   ├── AboutSection.tsx      # Engineering narrative & interactive timeline
│   │   ├── ExperienceSection.tsx # Fidelity Investments card with interactive tabs
│   │   ├── ProjectsSection.tsx   # Flagship EventPulse, TradeGenie, & Quantum cards
│   │   ├── SkillsSection.tsx     # 7 technical disciplines with project hover links
│   │   ├── AchievementsSection.tsx # AWS CCP, SAP Hackathon, Quantum Valley awards
│   │   ├── EducationSection.tsx  # Amrita Vishwa Vidyapeetham & Narayana College
│   │   ├── ResumeSection.tsx     # High-conversion CV CTA section
│   │   └── ContactSection.tsx    # Direct contact, mailto generator, & phone
│   └── ui/
│       ├── ProjectModal.tsx      # Detailed deep-dive modal for each project
│       └── TerminalModal.tsx     # Interactive "Engineering Mode" shell Easter egg
├── data/
│   └── portfolioData.ts          # Central source of truth for all verified data
├── lib/
│   └── utils.ts                  # Tailwind clsx/twMerge utility
└── styles/
    └── globals.css               # Engineering dark theme, grids, & glassmorphism
```

---

## 🌟 Key Features

1. **Enterprise Experience Presentation**:
   - Interactive breakdown of Fidelity Investments software engineering internship.
   - Visual architectural migration diagram: *Legacy Framework → Analysis → Lightweight Framework → API/Event Tests → Validation*.
   - Strict adherence to verified factual accomplishments without exaggeration.

2. **Flagship System Architecture — EventPulse**:
   - Webhook delivery and observability platform.
   - Interactive 9-stage pipeline topology.
   - Simulated observability telemetry dashboard (p95 latency, delivery success rate, retry rate, dead-letter queue, and automated AI diagnostic insights).

3. **Hackathon Podiums**:
   - **TradeGenie**: AI-powered SME trading platform (Top 75 in SAP National Hackathon among 1,000+ teams).
   - **Quantum Image Transmission**: Superdense coding via entangled Bell state qubit pairs (Runner-Up at Amaravati Quantum Valley Hackathon among 50+ teams, 33% reduction in entangled qubit overhead).

4. **Engineering Shell Easter Egg**:
   - Click the **`$ shell`** button in the navbar or hero to launch an interactive terminal.
   - Commands: `whoami`, `focus`, `education`, `experience`, `current_project`, `skills`, `status`, `contact`, `help`, `clear`.

5. **Performance & Accessibility**:
   - Dynamic imports for WebGL/3D to prevent bundle blocking.
   - Built-in `prefers-reduced-motion` compliance.
   - Lighthouse-optimized static build with zero JavaScript layout shifts.
