# GS Associate Website — Architecture

> **Version:** 1.0
> **Status:** Architecture Approved
> **Last Updated:** June 2026

---

# Purpose

This document defines the complete software architecture for the GS Associate Website.

Every developer, AI coding assistant, or contributor **must read this document before implementing any feature.**

The objective is to ensure:

* Consistent architecture
* Clean codebase
* Reusable components
* Scalable project structure
* Easy long-term maintenance

This architecture is designed for future expansion into a complete business platform without requiring major rewrites.

---

# High-Level Architecture

```
                    User
                      │
                      ▼
          Next.js Frontend (React)
                      │
      ┌───────────────┼────────────────┐
      ▼                               ▼
Supabase                      Cloudinary
(Database + Auth)           (Images & PDFs)
      │
      ▼
Vercel Hosting & Deployment
```

---

# Technology Stack

## Frontend

| Technology    | Purpose       |
| ------------- | ------------- |
| Next.js 15    | Framework     |
| React 19      | UI            |
| TypeScript    | Type Safety   |
| Tailwind CSS  | Styling       |
| shadcn/ui     | UI Components |
| Framer Motion | Animations    |

---

## Backend

| Technology    | Purpose             |
| ------------- | ------------------- |
| Supabase      | Database            |
| Supabase Auth | Authentication      |
| PostgreSQL    | Relational Database |

---

## Storage

| Technology | Purpose              |
| ---------- | -------------------- |
| Cloudinary | Images               |
| Cloudinary | PDF Catalogues       |
| Cloudinary | Future Video Storage |

---

## Hosting

| Technology | Purpose          |
| ---------- | ---------------- |
| Vercel     | Frontend Hosting |
| GitHub     | Version Control  |

---

# Application Layers

```
Presentation Layer
│
├── Pages
├── Components
├── Layout
└── UI

↓

Business Logic

↓

Services

↓

Database

↓

Storage
```

Each layer has a single responsibility.

---

# Folder Structure

```
src/

│
├── app/
│
├── components/
│
│     ├── ui/
│     ├── layout/
│     ├── home/
│     ├── products/
│     ├── brands/
│     ├── contact/
│     ├── forms/
│     └── shared/
│
├── features/
│
│     ├── products/
│     ├── catalogues/
│     ├── enquiries/
│     ├── dealers/
│     └── search/
│
├── hooks/
│
├── lib/
│
│     ├── supabase/
│     ├── cloudinary/
│     └── validations/
│
├── services/
│
├── types/
│
├── utils/
│
├── constants/
│
├── styles/
│
└── assets/
```

---

# Design Philosophy

Every component must satisfy these principles.

* Reusable
* Modular
* Independent
* Testable
* Mobile-first
* Accessible

Avoid creating page-specific components when a reusable solution exists.

---

# Component Architecture

```
UI Components

↓

Shared Components

↓

Feature Components

↓

Pages
```

Example:

```
Button

↓

Product Card

↓

Product Grid

↓

Products Page
```

Pages should compose components.

Components should never contain unnecessary business logic.

---

# Routing Architecture

```
/

About

Products

Products/[slug]

Brands

Catalogues

Dealers

Contact

Privacy Policy

Terms
```

Future routes

```
Admin

Admin/Login

Admin/Dashboard

Admin/Products

Admin/Catalogues

Dealer

Dealer/Login

Dealer/Dashboard
```

---

# State Management

Current Phase

React State

React Context

Server Components

---

Future

If required:

Zustand

No Redux unless absolutely necessary.

Keep the application simple.

---

# Database Architecture

## Products

```
Product

↓

Category

↓

Brand

↓

Images

↓

Catalogue
```

---

Database Tables

```
products

categories

brands

catalogues

dealer_enquiries

testimonials

settings

users

admins
```

Future

```
orders

inventory

customers

notifications

analytics
```

---

# Storage Architecture

Cloudinary stores:

* Product Images
* Brand Logos
* Hero Images
* Gallery Images
* PDF Catalogues
* Future Videos

No media files should be committed to GitHub except development placeholders.

---

# Authentication

Authentication will use Supabase Auth.

Roles

```
Guest

↓

Dealer

↓

Admin

↓

Super Admin
```

Permissions should always be role-based.

---

# API Structure

```
GET

POST

PUT

PATCH

DELETE
```

All server actions should remain modular.

Business logic should never live inside React components.

---

# Naming Conventions

Folders

```
products

catalogues

dealer-enquiries
```

Components

```
ProductCard.tsx

HeroSection.tsx

Navbar.tsx

Footer.tsx
```

Hooks

```
useProducts()

useWindowSize()

useCounter()
```

Services

```
product.service.ts

catalogue.service.ts

brand.service.ts
```

Types

```
Product.ts

Brand.ts

Catalogue.ts
```

---

# Performance Strategy

Images

* Lazy Loading
* Cloudinary Optimization
* Responsive Images

Fonts

* Local Fonts
* Font Display Swap

Rendering

* Server Components by default
* Client Components only when necessary

Target Lighthouse

Performance ≥ 95

Accessibility ≥ 100

SEO ≥ 100

Best Practices ≥ 100

---

# Deployment Workflow

```
VS Code

↓

Git

↓

GitHub

↓

Vercel Preview Deployment

↓

Review

↓

Merge to Main

↓

Production Deployment
```

Never deploy manually.

Production is always deployed from the `main` branch.

---

# Git Workflow

```
main

develop

feature/navbar

feature/homepage

feature/products

feature/catalogues

feature/admin
```

Rules

* Never commit directly to `main`
* One feature per branch
* One Pull Request per feature
* Small commits
* Clear commit messages

---

# Coding Standards

Every file should follow these principles.

* Single Responsibility Principle
* No duplicated code
* Strong typing
* Small reusable functions
* Clear naming
* Self-documenting code
* Avoid deeply nested components

Prefer composition over inheritance.

---

# Future Expansion

The architecture should support the following without restructuring the application.

## Business Features

* Product CMS
* Catalogue CMS
* Dealer Dashboard
* CRM
* Inventory Management
* Order Tracking
* Analytics
* Notifications
* Customer Portal

## AI Features

* AI Product Recommendation
* AI Search
* AI Chat Assistant
* Smart Product Comparison

---

# Guiding Principle

The architecture should always optimize for:

1. Scalability
2. Maintainability
3. Performance
4. Developer Experience
5. User Experience

Every new feature should integrate naturally into this architecture without introducing unnecessary complexity or breaking existing patterns.
