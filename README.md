# Tulas International School — Homepage Redesign

A premium, responsive and animation-driven homepage redesign for **Tulas International School (TIS), Dehradun**, created as a frontend development assessment.

The project transforms a traditional school homepage into a modern digital experience focused on **visual storytelling, interaction, accessibility, responsive design and conversion-oriented user experience**.

> **Assessment:** Frontend Developer — Netpuppys / Tulas International School
> **Stack:** React 18 + Vite + Framer Motion + Custom CSS
> **Status:** Production-ready frontend deliverable

---

## ✨ Live Experience

**Live Demo:** https://tulas-international-school-homepage-delta.vercel.app/

**GitHub Repository:** https://github.com/RohitKr-codes/tulas-international-school-homepage

---

## Project Objective

The objective was to redesign the Tulas International School homepage while preserving the school's core positioning around:

* Academic excellence
* Holistic student development
* Leadership and curiosity
* Boarding and day-school experience
* Sports and campus life
* Modern Gurukul philosophy

The implementation focuses on creating an experience that feels **premium, editorial, interactive and contemporary**, while remaining intuitive and accessible across desktop, tablet and mobile devices.

---

## Highlights

### Four Required/Standout Interaction Features

The homepage includes more than the minimum two standout interaction features requested in the assignment:

1. **Custom Cursor**

   * Smooth spring-based cursor interaction
   * Automatically disabled on coarse/touch pointers
   * Implemented without React state updates on every pointer movement

2. **Scroll-Triggered Reveals**

   * Reusable `Reveal` animation component
   * Viewport-aware entrance animations
   * Supports staggered content presentation

3. **Animated Light/Dark Theme**

   * Theme switching using CSS custom properties
   * Consistent design tokens across the interface
   * Theme state managed at the application level

4. **Scroll Progress Indicator**

   * Displays reading progress at the top of the viewport
   * Uses motion values for smooth visual feedback

### Additional Experience Features

* Responsive mobile navigation
* Interactive testimonial carousel
* Animated CTA interactions
* Smooth hover states
* Touch-friendly controls
* Semantic page structure
* Reduced-motion consideration
* Responsive typography and spacing
* Keyboard-friendly interactive controls
* Functional enquiry flow
* No external database or backend dependency

---

## Design Direction

The visual language combines **editorial typography, spacious layouts, modern interaction patterns and institutional credibility**.

### Visual System

* Deep teal foundation
* Warm paper-inspired surfaces
* Seafoam accents
* Restrained amber highlights
* Large editorial typography
* Generous whitespace
* Rounded interactive surfaces
* Layered cards and visual depth
* Subtle motion instead of excessive animation

The goal was to create an experience that feels closer to a **premium digital agency website** than a conventional school website, while keeping the content readable and purposeful.

---

##  Page Experience

The homepage is structured into focused content sections:

### Hero

Introduces the school with a strong visual hierarchy, primary CTA and animated visual composition.

### Introduction

Establishes the school's philosophy and positioning through concise editorial content.

### Experience

Highlights the broader student experience beyond academics.

### Academics

Presents the academic philosophy and learning environment.

### Campus Life

Showcases sports, activities and holistic development.

### Statistics

Uses animated visual emphasis to communicate key institutional information.

### Voices

Provides an interactive testimonial experience with navigation controls.

### Call to Action

Concludes the page with a conversion-focused enquiry section.

### Footer

Provides navigation, contact pathways and supporting links.

---

## 🛠️ Technology Stack

| Technology       | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| React 18         | Component-based UI architecture                 |
| Vite             | Development server and production build tooling |
| Framer Motion    | Declarative animations and motion interactions  |
| Lucide React     | Consistent interface icons                      |
| Custom CSS       | Responsive layout and design system             |
| JavaScript / JSX | Application logic and component development     |

### Architecture Decisions

The implementation intentionally avoids unnecessary backend infrastructure.

**Backend:** Not required
**Database:** Not required
**Authentication:** Not required
**External API:** Not required
**Environment Variables:** Not required

This keeps the project lightweight, easy to review and straightforward to deploy.

---

##  Project Architecture

The application follows a component-oriented structure so individual UI responsibilities remain isolated and explainable during a technical review.

```text
tis-homepage-redesign/
│
├── public/
│   ├── favicon.svg
│   └── logo.svg
│
├── src/
│   ├── components/
│   │   ├── animation/
│   │   │   ├── CustomCursor.jsx
│   │   │   └── ScrollProgress.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Academics.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Intro.jsx
│   │   │   ├── Life.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Voices.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Reveal.jsx
│   │
│   ├── data/
│   │   └── siteData.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Architecture Principles

* Components are separated by responsibility
* Reusable UI primitives prevent duplication
* Animation utilities are isolated from page sections
* Content data is separated from presentation logic
* Global design tokens are maintained in CSS
* No unnecessary state management library
* No unnecessary backend layer
* No monolithic page component

---

## ⚡ Performance & Interaction Strategy

Performance was considered while implementing the visual effects.

### Custom Cursor

The custom cursor uses motion values and spring-based animation rather than triggering React component state on every pointer movement.

This keeps pointer interactions smooth while avoiding unnecessary component re-renders.

### Scroll Animations

The reusable reveal system allows sections to animate when they enter the viewport instead of continuously running expensive animations across the entire page.

### Responsive Behaviour

The interface adapts across:

* Mobile — approximately 375px
* Tablet — approximately 768px
* Desktop — 1280px and above

The custom cursor is also disabled for coarse/touch pointers where it would not provide meaningful interaction value.

---

##  Accessibility

Accessibility was considered throughout the interface.

The implementation includes:

* Semantic `header`, `nav`, `main`, `section` and `footer` elements
* Accessible labels for icon-only controls
* Visible focus states
* Touch-friendly interactive elements
* Keyboard-friendly testimonial controls
* Responsive navigation
* Reduced-motion consideration
* Cursor interaction is never required for navigation
* External links use appropriate `rel` attributes

---

##  Responsive Design

The homepage is designed to maintain a consistent visual hierarchy across different screen sizes.

### Tested Targets

| Device Class | Target Width |
| ------------ | -----------: |
| Mobile       |       ~375px |
| Tablet       |       ~768px |
| Desktop      |      1280px+ |

Responsive behaviour includes:

* Mobile navigation
* Flexible grids
* Adaptive typography
* Responsive spacing
* Touch-friendly controls
* Simplified visual compositions on smaller screens
* Responsive CTA layouts
* Mobile-friendly testimonial controls

---

## 📨 Enquiry Flow

The enquiry form provides a lightweight frontend-only contact experience.

Instead of storing visitor information in a database, the form prepares an email through the user's default mail client.

### Why?

The assignment is focused on frontend development and does not require persistent user data.

This approach avoids:

* Unnecessary backend infrastructure
* Database hosting
* API credentials
* Additional deployment complexity
* Unnecessary handling of personal information

No visitor data is persisted by the application.

---

## 💡 Why React + Vite?

The assignment requires a modern frontend framework.

React provides:

* Reusable components
* Clear separation of concerns
* Predictable UI composition
* Easy technical review
* Strong ecosystem support

Vite provides a lightweight development and production workflow with fast local development and straightforward deployment.

For a single-page frontend experience, this combination provides a strong balance between **developer experience, performance and architectural simplicity**.

---

##  Why Framer Motion?

Framer Motion was selected because it provides readable, declarative animation primitives.

It is used for:

* Scroll reveals
* Spring-based interactions
* Theme-related transitions
* Testimonial transitions
* Motion-based UI feedback
* Smooth visual state changes

A reusable `Reveal` component prevents every section from implementing its own animation logic.

---

##  Why Custom CSS Instead of Tailwind?

The assignment allows Tailwind CSS, CSS Modules or Styled Components.

This implementation uses **custom CSS** to keep the visual system centralized and easy to review.

Benefits include:

* Centralized design tokens
* Clear spacing system
* Consistent typography
* Easier global responsive adjustments
* Fewer utility classes inside JSX
* Cleaner component markup

The result is a deliberate design system rather than a utility-class-heavy implementation.

---

##  Why No Database?

A database is intentionally not included.

The assignment is a frontend homepage redesign and does not require:

* User authentication
* Persistent accounts
* Product/order data
* CMS functionality
* Stored enquiries

Adding SQLite or another database would increase deployment and maintenance complexity without improving the assessed frontend experience.

The application therefore remains a **frontend-only architecture**.

---

#  Local Development

## Prerequisites

Install:

* Node.js — current LTS release
* npm
* VS Code or another code editor

Check your installation:

```bash
node -v
npm -v
```

---

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd tis-homepage-redesign
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 4. Run ESLint

```bash
npm run lint
```

The command should complete without lint errors before submission.

---

## 5. Create Production Build

```bash
npm run build
```

A successful build generates the production-ready:

```text
dist/
```

directory.

---

## 6. Preview Production Build

```bash
npm run preview
```

This allows the production build to be tested locally before deployment.

---

# Deployment

## Vercel

The project is compatible with Vercel.

### Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects the Vite project.
4. Use the following build command:

```bash
npm run build
```

5. Set the output directory to:

```text
dist
```

6. Deploy.

No environment variables are required.

---

# 🔍 Technical Review Talking Points

## Component Architecture

The application separates:

* Layout components
* Page sections
* UI primitives
* Animation utilities
* Content data

This makes individual parts easier to maintain, test and explain during a technical discussion.

---

## State Management

Only local React state is used where interaction requires it, such as:

* Mobile navigation
* Theme state
* Testimonial selection
* Enquiry form state

A global state-management library would add unnecessary complexity for this application.

---

## Animation Performance

Motion-heavy interactions avoid unnecessary React state updates where possible.

For example, the custom cursor relies on motion values and springs rather than updating component state for every pointer event.

---

## Responsive Strategy

The layout uses responsive CSS and adaptive component behaviour rather than creating separate desktop and mobile applications.

The same component architecture works across mobile, tablet and desktop.

---

## Maintainability

The project avoids a single monolithic component.

Instead, sections such as `Hero`, `Academics`, `Life`, `Voices` and `CTA` remain independently understandable.

Reusable elements such as `Button` and `Reveal` reduce duplicated implementation.

---

#  Pre-Submission Checklist

Before submitting the assignment:

* [ ] `npm install` completes successfully
* [ ] `npm run dev` works
* [ ] `npm run lint` passes
* [ ] `npm run build` succeeds
* [ ] Production preview works
* [ ] Mobile layout checked around 375px
* [ ] Tablet layout checked around 768px
* [ ] Desktop layout checked at 1280px+
* [ ] Light theme checked
* [ ] Dark theme checked
* [ ] Custom cursor checked on desktop
* [ ] Mobile navigation checked
* [ ] Scroll animations checked
* [ ] Scroll progress checked
* [ ] Testimonial controls checked
* [ ] Enquiry flow checked
* [ ] No unnecessary console logs
* [ ] No unused dependencies
* [ ] Public GitHub repository created
* [ ] Vercel/Netlify deployment completed
* [ ] GitHub URL added to submission form
* [ ] Live deployment URL added to submission form

---

# 📌 Content & Brand Note

The redesign is an assessment/portfolio implementation.

The school's core positioning and public-facing themes were referenced from the supplied assignment material and publicly available Tulas International School information.

Before production use, all official:

* Logos
* Photography
* Brand assets
* Contact information
* Admissions information
* Institutional copy

should be verified and replaced with approved assets/content supplied by the school.

Official website:

https://tis.edu.in/

Admission portal:

https://admission.tis.edu.in/

---

#  Assignment Scope

This repository was created specifically as a **Frontend Developer assessment deliverable**.

The implementation prioritizes the criteria relevant to the assignment:

| Evaluation Area   | Implementation                                   |
| ----------------- | ------------------------------------------------ |
| Code Architecture | Component-based React structure                  |
| Animation & UX    | Framer Motion + responsive interactions          |
| Creativity        | Editorial visual system and interactive sections |
| Responsiveness    | Mobile, tablet and desktop layouts               |
| Accessibility     | Semantic structure and accessible controls       |
| Documentation     | Setup, architecture and deployment documentation |

---

#  Security & Data

The project does not contain:

* API keys
* Database credentials
* Authentication secrets
* Private environment variables
* Paid third-party services

The `.gitignore` configuration excludes local/generated files that should not be committed.

No external database is required to run the project.

---

# 📜 License

This repository is an assessment and portfolio project.

The implementation code is intended for the candidate's submission and portfolio.

**Tulas International School** trademarks, logos, official branding, photographs, copy and other third-party intellectual property remain the property of their respective owners.

---

## Built With

**React · Vite · Framer Motion · Lucide React · CSS · JavaScript**

Designed and developed as a modern frontend experience for the Tulas International School homepage redesign.
