# ZoneEdan — Technical Requirement Document

**Project Name:** ZoneEdan
**Project Type:** Travel & Tourism Discovery Web Application
**Initial Market:** Sri Lanka 🇱🇰
**Development Model:** Solo, Part-Time
**Document Type:** Technical Requirement Document
**Version:** 1.0

---

# 1. Technical Overview

ZoneEdan will be developed as a responsive, modern travel discovery web application focused on water-related destinations across Sri Lanka.

The application will use a component-based frontend architecture with React and Tailwind CSS, while Supabase will provide authentication, PostgreSQL database functionality, storage, and backend services.

The architecture should be:

* Simple enough for solo development
* Modular
* Reusable
* Secure
* Responsive
* Scalable for future features

---

# 2. Technology Stack

## 2.1 Frontend

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| React            | UI development                           |
| Vite             | Development and production build tooling |
| Tailwind CSS     | Styling and responsive design            |
| React Router DOM | Client-side routing                      |
| Lucide React     | Icons                                    |
| Framer Motion    | Animations and transitions               |

### Optional Future Libraries

These should only be introduced when actually required:

* Recharts — analytics
* React Hook Form — complex forms
* Zod — schema validation
* Map library — destination maps

The project should avoid unnecessary dependencies.

---

# 3. Backend Stack

ZoneEdan will use **Supabase** as the primary backend platform.

Supabase services:

### PostgreSQL

Used for:

* Destinations
* Activities
* Collections
* Stories
* Favorites
* User profiles

### Authentication

Used for:

* Sign up
* Login
* Logout
* User sessions

### Storage

Used for:

* Destination images
* Story images
* Collection images
* User profile images

### Row Level Security

Used to protect:

* User profiles
* Favorites
* Private user data
* Future user-generated content

---

# 4. High-Level Architecture

```text
                        USER
                          │
                          ▼
                 ┌─────────────────┐
                 │ React Frontend  │
                 └─────────────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
       React Router              UI Components
              │                       │
              └───────────┬───────────┘
                          ▼
                   Service Layer
                          │
                          ▼
                    Supabase Client
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
     PostgreSQL       Supabase Auth     Storage
          │
          ▼
    Row Level Security
```

---

# 5. Frontend Architecture

The frontend should follow a modular component architecture.

Recommended structure:

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── destination/
│   ├── home/
│   ├── collection/
│   ├── story/
│   ├── layout/
│   └── ui/
│
├── data/
│
├── hooks/
│
├── lib/
│
├── pages/
│
├── services/
│
├── types/
│
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 6. Folder Responsibilities

## `/assets`

Static frontend assets.

Examples:

```text
logos
illustrations
local icons
fonts
```

---

## `/components`

Reusable UI components.

Example:

```text
DestinationCard.jsx
SearchBar.jsx
Navbar.jsx
Footer.jsx
PeaceScore.jsx
BudgetBadge.jsx
```

---

## `/data`

Static development data.

This can be used before Supabase is connected.

Example:

```text
destinations.js
collections.js
stories.js
```

---

## `/hooks`

Reusable React hooks.

Examples:

```text
useDestinations.js
useFavorites.js
useAuth.js
```

---

## `/lib`

Third-party client configuration.

Example:

```text
supabase.js
```

---

## `/pages`

Page-level components.

Examples:

```text
Home.jsx
Destinations.jsx
DestinationDetails.jsx
Collections.jsx
CollectionDetails.jsx
Stories.jsx
StoryDetails.jsx
Favorites.jsx
Profile.jsx
Login.jsx
Signup.jsx
NotFound.jsx
```

---

## `/services`

Database/API-related operations.

Example:

```text
destinationService.js
favoriteService.js
collectionService.js
storyService.js
profileService.js
```

Database operations should not be scattered throughout UI components.

---

## `/types`

Reusable data structure definitions.

Example:

```text
destination.js
user.js
collection.js
story.js
```

---

## `/utils`

Reusable helper functions.

Examples:

```text
formatCurrency.js
calculateBudget.js
slugify.js
```

---

# 7. Application Routes

The application should use React Router.

## Public Routes

```text
/
```

Home page.

```text
/destinations
```

Destination discovery.

```text
/destinations/:slug
```

Destination details.

```text
/collections
```

All collections.

```text
/collections/:slug
```

Collection details.

```text
/stories
```

Travel stories.

```text
/stories/:slug
```

Story details.

```text
/login
```

Login.

```text
/signup
```

Registration.

---

# 8. Protected Routes

Authenticated routes:

```text
/favorites
/profile
```

Future protected routes may include:

```text
/trips
/trips/:id
/settings
```

---

# 9. Route Error Handling

Invalid routes should display:

```text
/404
```

The 404 page should provide:

* Friendly message
* Return Home button
* Explore Destinations button

---

# 10. Core Components

## Layout Components

```text
Navbar
Footer
PageContainer
MobileMenu
```

## Home Components

```text
HeroSection
SearchBar
FeaturedDestinations
ExperienceCategories
BudgetSection
CollectionSection
StoryPreview
CTASection
```

## Destination Components

```text
DestinationCard
DestinationGrid
DestinationHero
DestinationGallery
DestinationOverview
BudgetBreakdown
PeaceScore
ActivityList
TravelTips
NearbyDestinations
FavoriteButton
```

## Collection Components

```text
CollectionCard
CollectionGrid
CollectionHero
```

## Story Components

```text
StoryCard
StoryGrid
StoryHero
RelatedDestination
```

## Common Components

```text
Button
Input
Badge
Modal
Toast
LoadingSkeleton
EmptyState
ErrorState
```

---

# 11. Component Design Principles

Components should follow these rules:

1. Do one main job.
2. Be reusable where appropriate.
3. Avoid unnecessary business logic.
4. Receive data through props where practical.
5. Keep database operations outside visual components.
6. Avoid excessively large components.

For example:

Instead of:

```text
DestinationDetails.jsx
```

containing everything, divide it into:

```text
DestinationHero
DestinationOverview
BudgetBreakdown
PeaceScore
ActivityList
TravelTips
```

---

# 12. State Management

ZoneEdan does not initially require Redux or another large state-management library.

Use:

### Local State

For:

* Modal visibility
* Mobile menu
* Filter panel
* Form values
* UI interactions

### URL State

For:

* Search
* Filters
* Sorting

Example:

```text
/destinations?type=waterfall&budget=low
```

### Context

Use React Context only for small global concerns such as:

* Authentication state
* Theme preferences if required

### Server State

Supabase should remain the source of truth for:

* Destinations
* Favorites
* Collections
* Stories
* User profiles

---

# 13. Search Architecture

Search should support:

```text
Destination name
Location
Region
Water type
```

Example:

```text
Search:
"waterfall"
```

Possible results:

```text
Diyaluma Falls
Ravana Falls
Bambarakanda Falls
```

Search should eventually be handled by database queries rather than downloading the entire destination database to the browser.

---

# 14. Filtering Architecture

Supported filters:

```text
budget
destination type
water type
duration
peace score
activities
```

Example URL:

```text
/destinations?budget=low&type=waterfall
```

Benefits:

* Shareable URLs
* Browser navigation support
* Bookmarkable searches
* Better UX

---

# 15. Sorting

Possible sorting options:

```text
Recommended
Most Peaceful
Lowest Budget
Highest Rated
Newest
```

The MVP should initially prioritize:

* Recommended
* Lowest Budget
* Highest Peace Score

---

# 16. Destination Data Structure

A destination should conceptually contain:

```js
{
  id,
  name,
  slug,
  country,
  region,
  description,
  shortDescription,
  destinationType,
  waterType,
  latitude,
  longitude,
  peaceScore,
  budgetLevel,
  minBudget,
  maxBudget,
  currency,
  suggestedDays,
  bestTime,
  accessibility,
  featured,
  published
}
```

---

# 17. Image Architecture

Images should be separated from destination records.

A destination may have:

```text
1 cover image
+
multiple gallery images
```

The application should support:

```text
Cover
Gallery 01
Gallery 02
Gallery 03
...
```

Images should include meaningful alt text.

---

# 18. Authentication Architecture

Supabase Authentication will manage user identity.

### Signup

```text
User
 ↓
Signup Form
 ↓
Supabase Auth
 ↓
Account Created
 ↓
Profile Created
 ↓
Logged In
```

### Login

```text
User
 ↓
Login Form
 ↓
Supabase Auth
 ↓
Session
 ↓
Application
```

### Logout

```text
User
 ↓
Logout
 ↓
Supabase Session Removed
 ↓
Public Application
```

---

# 19. Protected Feature Architecture

Example:

```text
User clicks Save
       ↓
Check authentication
       ↓
Authenticated?
   ┌───┴────┐
   │        │
  YES       NO
   │        │
   ▼        ▼
Save      Login
   │
   ▼
Favorites
```

Public users can explore without authentication.

---

# 20. Environment Configuration

Environment variables should be used for Supabase configuration.

Example:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

The `.env` file must not be committed to Git.

`.gitignore` should include:

```text
.env
.env.local
.env.*.local
```

---

# 21. Security Requirements

## SR-01

Never expose Supabase service-role credentials in frontend code.

## SR-02

Use the public Supabase client key only where appropriate.

## SR-03

Enable Row Level Security on user-owned tables.

## SR-04

Users must only access their own private data.

## SR-05

Users must only create/delete their own favorites.

## SR-06

Published destination data can be publicly readable.

## SR-07

Administrative content operations must be restricted.

## SR-08

User-provided content should be validated before storage or display.

---

# 22. Row Level Security Strategy

### Destinations

Public:

```text
SELECT published destinations
```

Restricted:

```text
INSERT
UPDATE
DELETE
```

Only authorized administrators/content managers.

### Favorites

User can:

```text
SELECT own favorites
INSERT own favorites
DELETE own favorites
```

User cannot access another user's favorites.

### Profiles

User can:

```text
SELECT own profile
UPDATE own profile
```

---

# 23. Performance Requirements

ZoneEdan should prioritize fast loading because the application will be image-heavy.

## Requirements

* Use optimized images.
* Use WebP/AVIF where possible.
* Lazy-load non-critical images.
* Avoid unnecessarily large image files.
* Load only required destination records.
* Avoid unnecessary API requests.
* Use pagination or limited result sets.
* Use skeleton loading states.
* Avoid excessive JavaScript dependencies.

---

# 24. Image Performance

Destination images are a major part of the experience.

The application should:

* Use responsive image dimensions.
* Avoid serving unnecessarily large images.
* Lazy-load gallery images.
* Provide meaningful alt text.
* Use a consistent aspect ratio for cards.

Recommended destination card ratio:

```text
4:3
```

Hero imagery can use:

```text
16:9
```

---

# 25. Accessibility Requirements

The application should follow basic WCAG-oriented practices.

### Requirements

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Form labels
* Meaningful alt text
* Good color contrast
* Screen-reader-friendly navigation
* Reduced-motion consideration

---

# 26. Responsive Requirements

ZoneEdan will use a mobile-first approach.

## Mobile

Prioritize:

* Simple navigation
* Large imagery
* Easy-to-tap buttons
* Horizontal category scrolling
* Compact filters
* Single-column destination cards

## Tablet

Use:

* Two-column destination grids
* Larger content areas
* Expanded navigation

## Desktop

Use:

* Large hero
* 3–4 column destination grids
* Editorial layouts
* Split-screen content sections

---

# 27. Animation Requirements

Framer Motion can be used for:

* Page transitions
* Card reveal animations
* Image transitions
* Favorite interactions
* Button feedback
* Scroll-based reveals

Animations should be:

* Short
* Subtle
* Purposeful

Avoid animations that slow down navigation or distract from destination photography.

---

# 28. Typography Requirements

The application should avoid overly common fonts.

Initial typography proposal:

### Display

**Fraunces**

Used for:

* Logo treatment
* Hero headings
* Major section headings

### UI / Body

**Geologica**

Used for:

* Body text
* Navigation
* Buttons
* Metadata
* Forms

Typography should be loaded from Google Fonts or self-hosted if required for performance.

---

# 29. Color System

Initial design tokens:

```text
Deep Teal       #075E5B
Ocean Teal      #0B817A
Fresh Teal      #22A79D
Aqua Mist       #DDF4F0
Soft Cream      #FAF8F2
Warm Sand       #F3E8D2
Deep Forest     #173B35
White           #FFFFFF
```

The final palette may be refined during UI implementation.

---

# 30. Error Handling

The application must support:

### Loading State

Use skeletons.

### Empty State

Example:

> No peaceful escapes found for those filters.

Provide:

```text
[Clear Filters]
```

### API Error

Example:

> We couldn't load these destinations right now.

Provide:

```text
[Try Again]
```

### Invalid Destination

Show:

```text
Destination not found
```

Provide:

```text
[Explore Destinations]
```

---

# 31. Form Validation

Forms should validate:

* Required fields
* Email format
* Password requirements
* Empty input
* Invalid values

Validation messages should be understandable to non-technical users.

Avoid exposing backend errors directly.

---

# 32. SEO Requirements

Public pages should include:

* Page titles
* Meta descriptions
* Semantic headings
* Descriptive URLs
* Descriptive image alt text
* Open Graph metadata where appropriate

Example:

```text
/destinations/diyaluma-falls
```

is preferred over:

```text
/destination?id=123
```

---

# 33. Browser Compatibility

The application should work on current versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

Primary testing should focus on modern browsers.

---

# 34. Development Standards

## Naming

Use descriptive component names:

```text
DestinationCard
BudgetBreakdown
PeaceScore
```

Avoid:

```text
Card1
Box
Thing
Component
```

## Code Style

Maintain:

* Consistent indentation
* Clear imports
* Small components
* Reusable functions
* Meaningful variable names

---

# 35. Git Strategy

Recommended branches:

```text
main
develop
feature/home
feature/destinations
feature/auth
feature/favorites
feature/stories
```

Example commits:

```text
feat: initialize ZoneEdan React project
feat: add responsive navbar
feat: build ZoneEdan hero section
feat: add destination card component
feat: implement destination filters
feat: add destination details
feat: connect Supabase
feat: implement favorites
fix: improve mobile destination layout
style: refine ZoneEdan typography
```

---

# 36. Testing Requirements

## Functional Testing

Test:

* Navigation
* Search
* Filters
* Sorting
* Destination pages
* Login
* Signup
* Logout
* Favorites
* Collections
* Stories

## Responsive Testing

Test:

* Small mobile
* Large mobile
* Tablet
* Desktop

## Error Testing

Test:

* Invalid URL
* Missing destination
* Empty search
* Database failure
* Authentication failure
* Missing image

---

# 37. Build Requirements

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

The production build must complete without errors before deployment.

---

# 38. Deployment Requirements

Before deployment:

* Production environment variables configured
* Build succeeds
* Routing works
* Supabase connection works
* Authentication works
* Images load correctly
* Mobile layout verified
* No critical console errors

---

# 39. Technical Definition of Done

A feature is technically complete when:

* [ ] Feature works as intended.
* [ ] Mobile layout works.
* [ ] Desktop layout works.
* [ ] Loading state exists where required.
* [ ] Empty state exists where required.
* [ ] Error state exists where required.
* [ ] Accessibility has been considered.
* [ ] No sensitive credentials are exposed.
* [ ] Database access follows RLS.
* [ ] No major console errors remain.
* [ ] Production build succeeds.
* [ ] Code is readable and maintainable.
* [ ] Git commit has been created.

---

# 40. Technical Constraints

ZoneEdan is being developed as a solo part-time project.

Therefore:

* Avoid unnecessary libraries.
* Avoid premature optimization.
* Avoid unnecessary backend complexity.
* Prefer native React features when sufficient.
* Keep the MVP focused.
* Introduce advanced functionality only when it provides clear user value.

---

# 41. Future Technical Expansion

Possible future technologies/features:

```text
Maps API
Weather API
Recommendation engine
Trip planner
Analytics dashboard
AI travel assistant
Review system
Image optimization pipeline
PWA support
```

These should only be introduced after the core MVP is stable.

---

# 42. Technical Success Criteria

ZoneEdan's technical implementation will be considered successful when it demonstrates:

* Modern React development
* Tailwind CSS proficiency
* Reusable component architecture
* Responsive UI
* Client-side routing
* Search and filtering
* Supabase integration
* PostgreSQL relationships
* Authentication
* Row Level Security
* Secure frontend configuration
* Performance-conscious image handling
* Accessible UI
* Production deployment

---

# 43. Final Technical Principle

The technical architecture should serve the ZoneEdan experience.

The goal is not to use as many technologies as possible.

The goal is to build a:

> **Fast, beautiful, maintainable and scalable Sri Lankan water-destination discovery platform.**

**ZoneEdan — Find Your Little Eden. 🌊🇱🇰**
