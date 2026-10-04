# Technical Review Cheat Sheet

## Component hierarchy

`App`
→ `Navbar`
→ `Hero`
→ `Intro`
→ `Experience`
→ `Academics`
→ `Life`
→ `Stats`
→ `Voices`
→ `CTA`
→ `Footer`

Animation utilities:
- `ScrollProgress`
- `CustomCursor`
- `Reveal`

## State

`App.jsx`
- owns the global light/dark theme state.

`Navbar.jsx`
- owns mobile menu open/closed state.

`Voices.jsx`
- owns current testimonial index.

`CTA.jsx`
- owns enquiry form state and submission feedback.

This keeps state close to the component that needs it instead of introducing a global state library.

## Performance decisions

- Framer Motion motion values are used for cursor movement.
- `Reveal` uses `whileInView` so off-screen sections do not animate unnecessarily.
- CSS variables make theme changes cheap.
- No large UI framework or icon font is loaded.
- No database/network call is required for the page itself.
- Images are replaced by lightweight CSS/SVG artwork in the base submission to keep the repository self-contained.

## Interview explanation

If asked why the page does not use a backend:

> “The assessment evaluates frontend architecture, animation, responsiveness and visual design. I deliberately kept the product boundary frontend-only because a database would not add user value to this landing page. The enquiry flow uses the visitor's mail client, so there is no unnecessary storage of personal information.”

If asked what you would improve for production:

> “I would connect the enquiry flow to the school's approved CRM/form endpoint, use the official brand asset package, add analytics with consent controls, optimise any photographic media through a CDN, and add automated Lighthouse/Playwright checks to the deployment pipeline.”

### Lint note
The project uses ESLint flat config with JSX-aware handling for React component identifiers, so JSX component usage is not incorrectly reported as unused by the core `no-unused-vars` rule.
