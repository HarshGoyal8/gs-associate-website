# GS Associate Website — Design System

> **Version:** 1.0
> **Status:** Approved
> **Last Updated:** June 2026

---

# Purpose

The Design System defines every visual rule used throughout the GS Associate Website.

Its purpose is to create a consistent, premium user experience across every page, component, and future feature.

Every developer, designer, and AI coding assistant must follow this document before creating or modifying any interface.

---

# Design Philosophy

The website should feel like a premium interior materials brand.

It should communicate:

* Luxury
* Trust
* Elegance
* Craftsmanship
* Scale
* Professionalism

The experience should resemble premium brands rather than traditional wholesale distributor websites.

Inspired by:

* Apple
* Herman Miller
* FENIX
* Cosentino
* Poliform
* Boffi

---

# Core Design Principles

## Simplicity

Every element must have a purpose.

Avoid unnecessary decoration.

---

## White Space

White space is part of the design.

Do not attempt to fill every empty area.

Generous spacing increases perceived quality.

---

## Typography First

Typography communicates hierarchy.

Large elegant headlines.

Simple readable body text.

---

## Photography Over Icons

Whenever possible:

✔ Real interior photography

Instead of

✖ Generic icons

People buy beautiful spaces.

Not plywood.

---

## Motion Should Feel Natural

Animations should guide attention.

Never distract.

---

# Brand Personality

The interface should feel:

* Premium
* Elegant
* Warm
* Minimal
* Modern
* Confident
* Timeless

Never:

* Loud
* Colorful
* Cheap
* Playful
* Over-animated

---

# Color Palette

## Primary

Charcoal Black

```css
#1A1A1A
```

Used for:

* Navigation
* Hero Background
* Footer
* Text
* Dark Sections

---

## Secondary

Walnut Brown

```css
#704321
```

Used for:

* Buttons
* Highlights
* Brand Accent
* Hover States

---

## Accent

Warm Bronze

```css
#B4875C
```

Used for:

* Small highlights
* Borders
* Decorative accents
* Icons

---

## Background

Warm Ivory

```css
#F8F6F2
```

Default page background.

---

## White

```css
#FFFFFF
```

Cards

Inputs

Forms

---

## Border

```css
#E8E3DB
```

Subtle separators only.

---

# Color Usage Rules

Dark backgrounds should dominate.

Accent colors should guide attention.

Never overuse bronze.

Buttons should remain visually strong.

Avoid colorful gradients.

---

# Typography

## Heading Font

Cormorant Garamond

Purpose:

Luxury

Elegance

Editorial feel

Weights:

500

600

700

---

## Body Font

Manrope

Purpose:

Excellent readability

Modern appearance

Clean UI

Weights:

400

500

600

700

---

# Typography Scale

## Hero

64px

Desktop

40px

Tablet

32px

Mobile

---

## Section Titles

48px

Desktop

36px

Tablet

28px

Mobile

---

## Card Titles

24px

---

## Body

18px

Desktop

16px

Mobile

---

## Small Text

14px

---

# Grid System

Desktop

12 Columns

---

Tablet

8 Columns

---

Mobile

4 Columns

---

Container Width

Maximum

1280px

Centered

---

# Spacing System

Base Unit

8px

Scale

```text
4

8

16

24

32

48

64

80

96

120

160
```

Never use arbitrary spacing values.

---

# Border Radius

Buttons

12px

Cards

16px

Inputs

12px

Images

20px

Large Containers

24px

---

# Shadows

Minimal.

Cards should appear elevated but never floating.

Use subtle shadows.

Avoid heavy blur.

---

# Buttons

## Primary Button

Background

Walnut Brown

Text

White

Radius

12px

Padding

16px 28px

Hover

Slight lift

Background darkens

---

## Secondary Button

Transparent

Border

Charcoal

Hover

Dark background

White text

---

## Ghost Button

No border

No background

Underline on hover

---

# Forms

Input Height

52px

Rounded

12px

Border

Light Gray

Focus

Bronze Outline

Labels always visible.

Never use placeholder-only labels.

---

# Cards

Cards should feel premium.

Padding

32px

Radius

16px

White background

Subtle border

Large imagery

Minimal text

---

# Images

Photography style

Warm lighting

Modern interiors

Luxury furniture

Real textures

Natural wood

Minimal clutter

Avoid stock-looking imagery.

---

# Iconography

Use Lucide Icons.

Icons should be:

Simple

Thin

Consistent

Never oversized.

---

# Animations

Use Framer Motion.

---

## Page Load

Fade

Slide Up

Duration

0.6 seconds

---

## Cards

Lift

Scale

1.02

---

## Images

Zoom

1.05

---

## Buttons

Subtle scale

Shadow increase

---

## Numbers

Count Up

On Scroll

---

## Scroll

Smooth

Natural

Never excessive.

---

# Navigation

Transparent over hero.

Solid after scrolling.

Sticky.

Height

80px

Desktop

64px

Mobile

---

# Hero Section

Full viewport.

Large photography.

Large heading.

One CTA.

Minimal distractions.

---

# Product Cards

Large imagery.

Category.

Title.

Short description.

Explore button.

No excessive information.

---

# Brand Logos

Equal sizing.

Monochrome when inactive.

Full color on hover.

---

# Catalog Cards

Large cover image.

Brand.

Year.

Download.

View.

---

# Mobile Design

Mobile-first.

Thumb-friendly.

Bottom spacing.

Readable typography.

Buttons at least 44px tall.

Avoid horizontal scrolling.

---

# Accessibility

Minimum contrast ratio AA.

Keyboard navigation.

Visible focus states.

Semantic HTML.

Alt text for every image.

---

# Performance

Images

Optimized.

Lazy loaded.

Responsive.

Fonts

Loaded locally.

Animations

GPU accelerated.

Avoid unnecessary JavaScript.

---

# Component Library

Every reusable UI element belongs in the shared component library.

Components include:

* Button
* Input
* TextArea
* Select
* Modal
* Card
* Badge
* Navbar
* Footer
* Hero
* ProductCard
* BrandCard
* TestimonialCard
* CatalogueCard
* AnimatedCounter
* SectionHeading
* CTASection

Do not duplicate components.

---

# Responsive Breakpoints

```text
Mobile

0–767px

Tablet

768–1023px

Laptop

1024–1439px

Desktop

1440px+
```

---

# UX Principles

Users should always know:

* Where they are
* What they can do
* What happens next

Reduce friction.

Reduce clicks.

Prioritize clarity over creativity.

---

# Definition of Good Design

A successful interface should:

* Feel premium within the first five seconds.
* Load quickly.
* Be intuitive without explanation.
* Highlight products beautifully.
* Encourage exploration.
* Generate trust.
* Convert visitors into enquiries.

If a design decision improves aesthetics but harms usability, usability takes priority.

---

# Future Design Extensions

This design system should scale naturally to:

* Admin Dashboard
* Dealer Portal
* CRM
* Inventory System
* Analytics Dashboard
* Mobile Web App

All future interfaces must reuse the same typography, spacing, color system, components, and interaction patterns defined here.

---

# Guiding Principle

The GS Associate website should never look like a conventional plywood distributor.

It should feel like the digital experience of a premium interior materials company—clean, elegant, trustworthy, and built to last.

Every screen, every component, and every interaction should reinforce that perception.
