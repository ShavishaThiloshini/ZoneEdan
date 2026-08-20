🌊 ZoneEdan — Implementation Plan

Project: ZoneEdan
Purpose: Water-focused travel & tourism discovery platform
Initial Region: Sri Lanka 🇱🇰
Frontend: React + Tailwind CSS
Backend: Supabase + PostgreSQL
Development Style: Part-time solo project
Approach: Milestone-based implementation

1. Implementation Objective

The goal is to turn the ZoneEdan product, technical, flow, UI/UX, and backend documents into a working travel discovery platform.

The core user journey is:

Discover
   ↓
Search
   ↓
Filter
   ↓
Explore
   ↓
Understand Budget & Peace
   ↓
Save

The MVP should focus on helping users discover beautiful, peaceful, water-related destinations in Sri Lanka that fit their budget.

2. Development Approach

ZoneEdan will use a phase-based development approach rather than a fixed timeline.

Plan
 ↓
Build
 ↓
Test
 ↓
Fix
 ↓
Commit
 ↓
Move to next phase

A phase is considered complete only when its functionality is working properly.

3. Phase 01 — Project Foundation
🎯 Goal

Set up the development environment and create the basic React project structure.

Tasks
 Create GitHub repository
 Create React + Vite project
 Install dependencies
 Configure Tailwind CSS
 Configure React Router
 Set up Git
 Create .gitignore
 Create .env
 Create initial folder structure
 Add README
 Make initial Git commit
Initial dependencies
React
Vite
Tailwind CSS
React Router DOM
Lucide React
Supabase JS
Framer Motion
Definition of Done
React project
      ↓
Runs locally
      ↓
Tailwind works
      ↓
Routing works
      ↓
GitHub connected
4. Phase 02 — ZoneEdan Design System
🎯 Goal

Create the visual language before building the actual pages.

Color Direction

Primary:

Deep Teal
Ocean Teal
Fresh Teal

Supporting:

Soft Cream
Sand
Aqua Mist
Deep Forest
White
Typography

We will use less-common Google Fonts rather than defaulting to fonts like Poppins, Inter, or Roboto.

Possible direction:

Display:
Fraunces


Body/UI:
Geologica

We can finalize the exact font combination during implementation.

Tasks
 Color variables
 Typography
 Heading styles
 Body text
 Buttons
 Inputs
 Cards
 Badges
 Tags
 Shadows
 Border radius
 Spacing system
Definition of Done

All components should visually feel like they belong to ZoneEdan.

5. Phase 03 — Global Application Layout
🎯 Goal

Build the reusable structure shared across the website.

Components
Navbar
Footer
PageContainer
SectionHeading
Button
SearchBar
LoadingState
ErrorState
EmptyState
Tasks
 Desktop navbar
 Mobile navbar
 Footer
 Global page container
 Routing structure
 Global styles
 Responsive breakpoints
Definition of Done

Every future page can use the same ZoneEdan layout.

6. Phase 04 — Homepage
🎯 Goal

Build the main ZoneEdan landing experience.

Homepage Structure
Navbar
   ↓
Hero
   ↓
Search
   ↓
Featured Escapes
   ↓
Explore by Water
   ↓
Peaceful Places
   ↓
Budget-Friendly Escapes
   ↓
Curated Collections
   ↓
Travel Stories
   ↓
CTA
   ↓
Footer
Tasks
 Hero section
 Hero imagery
 Search interface
 Destination cards
 Water category cards
 Peace section
 Budget section
 Collection cards
 Story cards
 CTA
 Responsive layout
 Subtle animations
Definition of Done

Homepage should feel like a real travel product rather than a generic React landing page.

7. Phase 05 — Destination Discovery
🎯 Goal

Allow users to browse all available destinations.

Route
/destinations
Tasks
 Destination grid
 Destination card
 Search
 Water type filter
 Destination type filter
 Budget filter
 Region filter
 Peace score filter
 Sorting
 Clear filters
 Empty state
 Loading state
Example
Waterfall
+
Budget Friendly
+
Peace Score 4+

should return destinations matching those conditions.

Definition of Done

Users can discover destinations without manually browsing every page.

8. Phase 06 — Destination Detail Page
🎯 Goal

Create the main destination experience.

Route
/destinations/:slug
Page Structure
Destination Hero
       ↓
Location
       ↓
Peace Score
       ↓
Budget
       ↓
Description
       ↓
Activities
       ↓
Best Time
       ↓
Gallery
       ↓
Travel Tips
       ↓
Nearby Escapes
       ↓
Save Destination
Tasks
 Hero image
 Destination title
 Location
 Peace Score
 Budget information
 Description
 Activities
 Gallery
 Best time
 Suggested duration
 Travel tips
 Nearby destinations
 Favorite button
Definition of Done

A visitor should be able to understand whether the destination is worth visiting without leaving the page.

9. Phase 07 — Supabase Backend
🎯 Goal

Replace temporary/static data with a real backend.

Setup
 Create Supabase project
 Configure PostgreSQL
 Create tables
 Create relationships
 Create indexes
 Configure RLS
 Create storage buckets
 Configure environment variables
 Connect Supabase to React
Main Tables
profiles
destinations
destination_images
activities
destination_activities
collections
collection_destinations
stories
story_destinations
favorites
Definition of Done

React can successfully communicate with Supabase.

10. Phase 08 — Real Sri Lankan Destination Data
🎯 Goal

Populate ZoneEdan with meaningful Sri Lankan water destinations.

Instead of filling the database with random placeholder data, we'll create a proper initial dataset.

Target

Approximately:

20–30 destinations

Initially covering:

Beaches
Waterfalls
Lakes
Lagoons
Rivers
Islands
Surf locations
Natural pools
Each destination should contain
Name
Slug
Description
Location
District
Destination Type
Water Type
Latitude
Longitude
Peace Score
Budget Level
Estimated Budget
Best Time
Suggested Days
Activities
Images
Definition of Done

The application feels like it actually represents Sri Lanka, not a demo database.

11. Phase 09 — Backend Service Layer
🎯 Goal

Keep database logic separate from UI components.

Services
destinationService
favoriteService
collectionService
storyService
profileService
Example

Instead of:

Component
   ↓
Supabase query

we use:

Component
   ↓
Service
   ↓
Supabase
Destination functions
getDestinations()
getDestinationBySlug()
searchDestinations()
filterDestinations()
getFeaturedDestinations()
Definition of Done

Components remain clean and database logic is reusable.

12. Phase 10 — Authentication
🎯 Goal

Allow users to create accounts.

Routes
/login
/signup
/profile
Features
 Sign up
 Login
 Logout
 Session persistence
 Authentication errors
 Protected routes
 Profile creation
 Profile editing
Definition of Done

A user can create an account, log in, stay logged in, and log out safely.

13. Phase 11 — Favorites
🎯 Goal

Allow users to save destinations.

User Flow
Destination
      ↓
♡ Save
      ↓
Logged in?
   ↙      ↘
 Yes       No
 ↓          ↓
Save      Login
Tasks
 Favorite button
 Save destination
 Remove destination
 Favorites page
 Empty state
 RLS testing
 Persistent favorites
Route
/favorites
Definition of Done

Users can save destinations and access them later.

14. Phase 12 — Collections
🎯 Goal

Create curated destination discovery.

Examples
Peaceful Water Escapes
Budget Weekend Escapes
Hidden Waterfalls
Calm Beaches
Romantic Water Escapes
Routes
/collections
/collections/:slug
Tasks
 Collection listing
 Collection cards
 Collection detail
 Related destinations
 Featured collections
15. Phase 13 — Travel Stories
🎯 Goal

Give ZoneEdan an editorial/travel-journal identity.

Routes
/stories
/stories/:slug
Tasks
 Story listing
 Story cards
 Story detail
 Cover image
 Related destinations
 Reading layout
Definition of Done

ZoneEdan feels like a travel discovery brand, not simply a destination database.

16. Phase 14 — Search & Advanced Filtering
🎯 Goal

Make destination discovery fast and useful.

Search

Users can search:

Destination
Region
Water type
Destination type
Combined Filtering

Example:

Waterfall
+
Budget Friendly
+
Peace Score 4+
+
Hiking
Tasks
 Search input
 Search query handling
 Filter state
 Multiple filters
 Sorting
 URL query parameters
 Clear filters
 No-results state
Definition of Done

A user can describe what kind of escape they want and quickly find matching destinations.

17. Phase 15 — Responsive Design
🎯 Goal

Make ZoneEdan work beautifully across devices.

Test Sizes
320px
375px
425px
768px
1024px
1280px
1440px+
Check
 Navbar
 Hero
 Search
 Cards
 Filters
 Gallery
 Typography
 Buttons
 Footer
 Forms
Definition of Done

No major layout problems on mobile, tablet, or desktop.

18. Phase 16 — Accessibility
🎯 Goal

Make the website usable for a wider range of users.

Tasks
 Semantic HTML
 Proper heading hierarchy
 Image alt text
 Keyboard navigation
 Focus states
 Accessible buttons
 Form labels
 Color contrast
 Reduced-motion consideration
19. Phase 17 — Loading & Error States

Every backend-driven feature should support:

Loading
   ↓
Success

and:

Loading
   ↓
Error
   ↓
Try Again

Also:

No Results
Components
LoadingSpinner
SkeletonCard
ErrorMessage
EmptyState
RetryButton
20. Phase 18 — Animation & Microinteractions

Only after functionality is stable.

Possible animations
Card hover
Image zoom
Button transitions
Favorite animation
Page entrance
Filter transitions
Navbar transitions

Animations should support the peaceful ZoneEdan atmosphere.

Rule:

Calm and elegant — not a theme park ride. 😂

21. Phase 19 — Performance Optimization
Tasks
 Optimize images
 Lazy load images
 Reduce unnecessary renders
 Optimize database queries
 Avoid unnecessary API requests
 Code splitting where useful
 Check bundle size
 Test slow network conditions
Image formats

Prefer:

WebP
AVIF

where appropriate.

22. Phase 20 — SEO

Destination pages should be search-engine friendly.

Tasks
 Page titles
 Meta descriptions
 Canonical URLs
 Open Graph metadata
 Semantic HTML
 Image alt text
 Clean destination slugs
 Structured data where appropriate

Example:

Diyaluma Falls — Peaceful Water Escape in Sri Lanka | ZoneEdan
23. Phase 21 — Security

Before deployment:

 Enable RLS
 Test RLS policies
 Protect user profiles
 Protect favorites
 Review storage policies
 Keep secrets out of Git
 Never expose Supabase service-role credentials
 Test authenticated/unauthenticated access
24. Phase 22 — Testing
Functional Testing

Test:

Navigation
Search
Filters
Destination pages
Authentication
Favorites
Collections
Stories
Database Testing

Verify:

Create
Read
Update
Delete

where applicable.

Authentication Testing

Verify:

Signup
Login
Logout
Session
Protected routes
25. Phase 23 — Final UI Polish

This phase is for making ZoneEdan feel finished.

Review
 Typography consistency
 Spacing
 Card alignment
 Image cropping
 Button consistency
 Hover states
 Mobile spacing
 Empty states
 Error messages
 Animations
 Overall visual hierarchy
26. Phase 24 — Production Preparation
Tasks
 Remove unnecessary console logs
 Check environment variables
 Production build
 Fix build warnings
 Test production build
 Verify Supabase production configuration
 Verify storage
 Verify authentication
 Verify RLS
27. Phase 25 — Deployment
Deployment Flow
Local
  ↓
GitHub
  ↓
Production Build
  ↓
Hosting
  ↓
Supabase
  ↓
🌊 ZoneEdan Live
Tasks
 Deploy frontend
 Configure environment variables
 Connect production Supabase
 Test live URL
 Test authentication
 Test favorites
 Test mobile
 Fix production bugs
28. Phase 26 — Documentation

The GitHub repository should contain:

README.md
PRD.md
TRD.md
APP_FLOW.md
UI_UX_DESIGN_BRIEF.md
BACKEND_SCHEMA.md
IMPLEMENTATION_PLAN.md

README should include:

Project Overview
Features
Tech Stack
Screenshots
Architecture
Installation
Environment Setup
Database Setup
Deployment
Future Improvements
29. Phase 27 — Portfolio Preparation

Once ZoneEdan is live:

GitHub

Show:

Project overview
Features
Tech stack
Screenshots
Architecture
Database
Live demo
Future roadmap
LinkedIn

The project can become a development journey:

Idea
 ↓
Research
 ↓
Design
 ↓
Development
 ↓
Backend
 ↓
Testing
 ↓
Deployment
 ↓
Lessons Learned
30. MVP Definition

ZoneEdan MVP is complete when a new visitor can:

Open ZoneEdan
      ↓
Discover Sri Lankan water destinations
      ↓
Search
      ↓
Filter
      ↓
Open a destination
      ↓
View images
      ↓
See Peace Score
      ↓
Understand estimated budget
      ↓
See activities
      ↓
Read travel information
      ↓
Create an account
      ↓
Save destinations
      ↓
View saved destinations

If this works smoothly, we have a real MVP. 🌊

31. Post-MVP Roadmap

These are intentionally not part of the initial implementation.

Version 1.1
Nearby Destinations
Better Search
More Collections
Improved Filtering
Version 1.2
Maps
Reviews
Ratings
Trip Planner
Version 2.0
Personalized Recommendations
AI Travel Assistant
Advanced Trip Planning
Multi-country Support
32. Future AI Possibility

One future feature could be natural-language destination discovery.

For example:

"I want a peaceful waterfall trip under LKR 10,000 for a weekend."

ZoneEdan could eventually process:

Water Type → Waterfall
Peace → High
Budget → < LKR 10,000
Duration → Weekend

and return matching destinations.

But we are not building this in the MVP.

33. Git Workflow

Keep the Git workflow simple.

Main branch
main
Feature branches
feature/homepage
feature/destinations
feature/auth
feature/favorites
feature/stories
Commit examples
git commit -m "feat: create ZoneEdan homepage"
git commit -m "feat: add destination filtering"
git commit -m "feat: integrate Supabase destinations"
git commit -m "fix: resolve mobile navigation layout"
34. Development Rule

For every feature:

Plan
 ↓
Design
 ↓
Build
 ↓
Connect Backend
 ↓
Test
 ↓
Responsive Check
 ↓
Fix
 ↓
Commit

Don't move forward with a broken core feature just because the next one looks more exciting. 😭

35. Priority System

When you're short on time, use this priority:

🔴 Must Have
Homepage
Destination Discovery
Destination Details
Search
Filters
Supabase
Real Destination Data
Authentication
Favorites
Responsive UI
🟡 Should Have
Collections
Stories
Animations
SEO
Accessibility
Performance Optimization
🟢 Later
Maps
Reviews
Trip Planner
AI Recommendations
Multi-country Support
36. Final Implementation Roadmap
┌─────────────────────────────┐
┌─────────────────────────────┐
│  08  Sri Lankan Data        │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  09  Service Layer          │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  10  Authentication         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  11  Favorites              │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  12  Collections            │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  13  Travel Stories         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  14  Search & Filters       │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  15  Responsive Design      │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  16  Accessibility          │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  17  Loading & Errors       │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  18  Animations              │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  19  Performance             │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  20  SEO                     │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  21  Security                │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  22  Testing                 │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  23  UI Polish               │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  24  Production Preparation  │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│  25  Deployment              │
└──────────────┬──────────────┘
               ↓
          🌊 ZONEEDAN
             MVP
37. Final Principle

ZoneEdan should grow naturally, not according to an artificial deadline.

The rule is:

One phase → make it work → make it responsive → make it clean → commit → move on.

We don't need to finish it in 20 days, 30 days, or 60 days.

We're building a proper solo portfolio project, and the quality of the final ZoneEdan matters more than how quickly we tick the boxes. 🌿🌊

🌊 ZoneEdan

Find Your Little Eden.

React + Tailwind CSS + Supabase + PostgreSQL
Sri Lanka → First Zone → Future Everywhere 🇱🇰