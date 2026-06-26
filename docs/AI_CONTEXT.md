# GS Associate Website — AI Context

> **Version:** 1.0
> **Status:** Active
> **Purpose:** Shared context for AI coding assistants (ChatGPT, Codex, Claude, Cursor, GitHub Copilot, Windsurf, etc.)

---

# Purpose

This document provides permanent context for every AI assistant contributing to the GS Associate Website.

Before implementing any feature, AI must understand:

* The product vision
* The architecture
* The design philosophy
* Coding standards
* UI consistency rules
* Long-term roadmap

This document exists to eliminate inconsistent implementations and reduce repetitive prompting.

---

# Mandatory Reading Order

Before writing any code, AI must read the following documents in this order:

1. PROJECT.md
2. ARCHITECTURE.md
3. DESIGN_SYSTEM.md
4. ROADMAP.md
5. TASKS.md
6. CHANGELOG.md
7. Current Sprint Document

If any document conflicts with another:

* PROJECT.md takes precedence.
* Then ARCHITECTURE.md.
* Then DESIGN_SYSTEM.md.

Never ignore higher-priority documents.

---

# Project Summary

GS Associate is building a premium digital platform for the plywood and interior materials industry.

The project is **not** a simple marketing website.

It is designed to evolve into:

* Product Management System
* Dealer Portal
* Catalogue Management Platform
* CRM
* Inventory Management System
* Business Dashboard

Every implementation should support this long-term vision.

---

# Product Goals

Always optimize for:

* Premium appearance
* Maintainability
* Scalability
* Performance
* Excellent user experience

Never optimize only for speed of implementation.

Long-term quality is more important.

---

# Technology Stack

## Framework

Next.js 15

App Router

Server Components

---

## Language

TypeScript

JavaScript should not be used.

---

## Styling

Tailwind CSS

---

## Components

shadcn/ui

---

## Animations

Framer Motion

---

## Backend

Supabase

---

## Storage

Cloudinary

---

## Hosting

Vercel

---

# Folder Structure

Always follow this structure.

```text
src/

app/

features/

components/

hooks/

services/

lib/

types/

constants/

utils/

styles/

assets/
```

Never create random folders.

---

# Component Philosophy

Every component should have a single responsibility.

Preferred hierarchy:

```text
UI Component

↓

Shared Component

↓

Feature Component

↓

Page
```

Example:

Button

↓

Product Card

↓

Product Grid

↓

Products Page

Pages should compose components.

Components should not contain unnecessary business logic.

---

# Design Philosophy

The website should feel like:

* Apple
* Herman Miller
* Cosentino
* Premium Interior Brand

Never like:

* Generic hardware store
* Traditional distributor website
* Template marketplace

The interface should communicate:

* Trust
* Elegance
* Scale
* Craftsmanship
* Professionalism

---

# UI Rules

Always use:

* Generous white space
* Strong typography
* High-quality imagery
* Consistent spacing
* Minimal color palette
* Smooth animations

Avoid:

* Visual clutter
* Excessive gradients
* Bright colors
* Unnecessary borders
* Over-animated interfaces

---

# Responsive Strategy

Always design:

Mobile First.

Support:

* Mobile
* Tablet
* Laptop
* Desktop

Never assume desktop-only layouts.

---

# Accessibility

Every implementation should include:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible labels
* Alt text for images
* Sufficient color contrast

Accessibility is not optional.

---

# Performance

Always optimize for:

* Fast page loads
* Lazy loading
* Optimized images
* Server Components by default
* Minimal client-side JavaScript

Target Lighthouse:

Performance ≥95

Accessibility =100

SEO =100

Best Practices =100

---

# Coding Standards

Always:

* Use TypeScript
* Keep components small
* Avoid duplicated code
* Prefer composition over inheritance
* Prefer reusable components
* Write readable code
* Keep functions focused
* Use meaningful names

Never:

* Create unnecessary abstractions
* Hardcode values repeatedly
* Mix business logic into UI components
* Introduce new patterns without justification

---

# Naming Conventions

Components

```text
ProductCard.tsx

HeroSection.tsx

Navbar.tsx
```

Hooks

```text
useProducts()

useScrollPosition()

useCounter()
```

Services

```text
product.service.ts

brand.service.ts
```

Types

```text
Product.ts

Brand.ts
```

---

# Design Tokens

Never hardcode:

* Colors
* Typography
* Spacing
* Border Radius
* Shadows

Always use centralized design tokens.

---

# Images

Always prioritize:

* Premium interior photography
* Warm lighting
* Real materials
* Natural textures

Avoid:

* Generic stock imagery
* Low-resolution assets
* Cartoon illustrations

---

# Animations

Animations should:

Guide attention.

Improve usability.

Feel natural.

Avoid flashy effects.

Preferred motion:

* Fade
* Slide
* Scale
* Count-up
* Hover lift

---

# State Management

Current preference:

* React State
* Context
* Server Components

Do not introduce Redux.

Use Zustand only if the application genuinely requires global client state.

---

# Architecture Rules

Business logic belongs in:

Services

Data fetching belongs in:

Server Components or server actions where appropriate.

Presentation belongs in:

Components

Never mix concerns.

---

# Git Rules

Never modify unrelated files.

Keep commits focused.

One feature per branch.

Meaningful commit messages.

Small pull requests.

---

# AI Implementation Rules

Before generating code:

* Understand the feature.
* Review existing components.
* Reuse before creating.
* Check if a similar solution already exists.

Do not duplicate functionality.

---

# AI Review Checklist

Before considering work complete, verify:

* Code compiles.
* No TypeScript errors.
* Responsive layout works.
* Accessibility requirements are met.
* Reusable components are used.
* Naming follows project standards.
* Performance impact is acceptable.

---

# If Requirements Are Ambiguous

Do not invent major features.

Instead:

* Follow the existing architecture.
* Reuse current design patterns.
* Choose the simplest scalable solution.

When multiple valid implementations exist:

Prefer the one that is:

* More maintainable
* More reusable
* Easier to extend
* More consistent with existing code

---

# Things AI Must Never Change Without Approval

Do not change:

* Brand colors
* Typography
* Folder structure
* Component architecture
* Routing strategy
* Database architecture
* Design philosophy
* Naming conventions

These decisions are considered part of the project's foundation.

---

# Prompt Template

When implementing any feature, assume the following instruction has already been given:

> Read PROJECT.md, ARCHITECTURE.md, DESIGN_SYSTEM.md, ROADMAP.md, TASKS.md, CHANGELOG.md, and the current Sprint document before writing any code. Follow the established architecture, design system, and coding standards. Reuse existing components wherever possible. Build scalable, production-ready code.

Do not repeat this instruction in generated code.

---

# Guiding Principle

Every decision should improve the project's long-term quality.

If there is a choice between:

* Faster implementation
* Better architecture

Choose the better architecture.

If there is a choice between:

* More code
* More reusable code

Choose the reusable solution.

Build this project as if it will be maintained and expanded for the next five years.
