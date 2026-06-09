# Chonvarin.com Page Inventory and File Map

Last checked: 2026-06-10
Base URL: https://chonvarin.com

## Routing behavior observed on live site

- Home page (`/`) loads normally.
- Internal pages (`/about`, `/services`, `/portfolio`, `/resume`, `/contact`) work when navigated from the top menu (client-side routing).
- Opening those paths directly by URL currently shows Netlify `Page not found`.
- No SPA fallback config file was found in this repo (`_redirects`, `netlify.toml`, etc.).

## Route to source file map

- `/` -> `src/pages/Home.tsx`
- `/about` -> `src/pages/About.tsx`
- `/services` -> `src/pages/Services.tsx`
- `/portfolio` -> `src/pages/Portfolio.tsx`
- `/resume` -> `src/pages/Resume.tsx`
- `/contact` -> `src/pages/Contact.tsx`

Router entry:
- `src/App.tsx` (`BrowserRouter` + 6 routes)

## Shared data sources used by pages

- `src/data/services.ts` -> service cards and service details
- `src/data/portfolio.ts` -> portfolio projects and modal details
- `src/data/resume.ts` -> timeline, education, competencies, achievements
- `src/data/clients.ts` -> stats, client groups, process steps

## Live content snapshot by page

## Home (`/`)

Top heading:
- Chonvarin Methachotwatcharakul

Main sections seen:
- Business-aligned IT Delivery
- Services and Expertise
- Case Studies
- Client Industries
- How I Work
- Contact CTA section

Primary CTAs:
- View Portfolio
- View Resume
- Contact Me

Primary editable files:
- `src/pages/Home.tsx`
- `src/data/services.ts`
- `src/data/portfolio.ts`
- `src/data/clients.ts`

## About (`/about`)

Top heading:
- Business Understanding meets Technical Delivery

Main sections seen:
- Professional Timeline
- Principles That Guide Delivery
- Academic Background
- IT Consulting and Digital Transformation

Primary editable files:
- `src/pages/About.tsx`
- `src/data/resume.ts` (timeline + education)

## Services (`/services`)

Top heading:
- Consultative IT Delivery for Business Outcomes

Main sections seen:
- Areas of Expertise
- Project Delivery Phases
- What Separates Delivery from Execution

Primary editable files:
- `src/pages/Services.tsx`
- `src/data/services.ts`

## Portfolio (`/portfolio`)

Top heading:
- IT Solutions and Case Studies

Main sections seen:
- Filter bar (All, CRM/Workflow, CMS, Admin System, Real Estate, Digital/AI)
- Project cards with modal details
- CTA: Discuss Your Requirements

Primary editable files:
- `src/pages/Portfolio.tsx`
- `src/data/portfolio.ts`

## Resume (`/resume`)

Top heading:
- Chonvarin Methachotwatcharakul

Main sections seen:
- Professional Summary
- Selected Achievements
- Core Competencies
- Professional Experience
- Technical Skills
- Selected IT Products
- Education

Primary editable files:
- `src/pages/Resume.tsx`
- `src/data/resume.ts`

## Contact (`/contact`)

Top heading:
- Let's Discuss Practical Digital Solutions

Main sections seen:
- Contact Information
- Send a Message form

Form fields observed:
- Name (required)
- Email (required)
- Phone
- Company / Organization
- Project Type / Inquiry
- Message (required)

Primary editable files:
- `src/pages/Contact.tsx`
- `supabase/functions/send-contact-email/index.ts` (email delivery behavior)

## Notes for future edit workflow

- If you tell me which on-screen text to change, I can now jump directly to the correct source file.
- For portfolio/service/resume list items, most edits should happen in `src/data/*.ts`.
- For layout, section order, button labels, and form UX, edits should happen in `src/pages/*.tsx`.
