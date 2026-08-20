# ZoneEdan — App Flow Document

**Project Name:** ZoneEdan
**Project Type:** Travel & Tourism Discovery Web Application
**Initial Market:** Sri Lanka 🇱🇰
**Document Type:** Application Flow Document
**Version:** 1.0

---

# 1. Purpose

This document defines the navigation structure, user journeys, screen transitions, and interaction flows of the ZoneEdan application.

The main purpose of the application flow is to ensure that users can move naturally from:

> **Discover → Explore → Filter → Understand → Save → Plan**

ZoneEdan should minimize unnecessary steps and keep destination discovery simple.

---

# 2. Core User Journey

The primary ZoneEdan journey is:

```text
        LANDING PAGE
             ↓
        Discover a place
             ↓
       Search / Explore
             ↓
      Destination Listing
             ↓
       Apply Filters
             ↓
      Select Destination
             ↓
     Destination Details
        ↙    ↓     ↘
    Budget  Peace   Activities
        ↘    ↓     ↙
        Understand
             ↓
       Save Destination
             ↓
      Login / Signup
             ↓
       My Favorites
             ↓
       Plan the Trip
```

The MVP focuses on discovery and saving rather than full booking.

---

# 3. Application Structure

The main application structure is:

```text
ZoneEdan
│
├── Home
│
├── Destinations
│   └── Destination Details
│
├── Collections
│   └── Collection Details
│
├── Stories
│   └── Story Details
│
├── Favorites
│
├── Profile
│
├── Login
│
├── Signup
│
└── 404
```

---

# 4. Global Navigation Flow

## Desktop Navigation

```text
ZONEEDAN
│
├── Destinations
├── Collections
├── Stories
├── About
│
├── Search
├── Favorites
└── Profile
```

The logo should always return the user to:

```text
/
```

---

# 5. Mobile Navigation Flow

Mobile navigation should remain simple.

```text
              ZONEEDAN
           ┌──────┬──────┐
          Search  Menu  Profile
                   ↓
             ┌─────────────┐
             │ Destinations│
             │ Collections │
             │ Stories     │
             │ Favorites   │
             │ About       │
             └─────────────┘
```

The menu should close after navigation.

---

# 6. Home Page Flow

The home page is the primary discovery entry point.

```text
HOME
 │
 ├── Hero
 │    └── Search
 │
 ├── Featured Destinations
 │    └── Destination Details
 │
 ├── Water Experiences
 │    └── Filtered Destinations
 │
 ├── Budget Discovery
 │    └── Budget Filter
 │
 ├── Curated Collections
 │    └── Collection Details
 │
 ├── Travel Stories
 │    └── Story Details
 │
 └── Final CTA
      └── Explore Destinations
```

---

# 7. Hero Search Flow

The hero search is one of the main discovery actions.

```text
HOME
 ↓
Search Box
 ↓
Enter Search Term
 ↓
Submit
 ↓
DESTINATIONS
 ↓
Search Results
```

Example:

```text
User searches:
"waterfall"

        ↓

/destinations?search=waterfall

        ↓

Diyaluma Falls
Ravana Falls
Bambarakanda Falls
```

---

# 8. Destination Discovery Flow

```text
DESTINATIONS
     ↓
Search / Filter / Sort
     ↓
Destination Grid
     ↓
Select Card
     ↓
Destination Details
```

The user should always be able to return to the previous filtered results.

---

# 9. Destination Filter Flow

```text
DESTINATIONS
     ↓
Open Filters
     ↓
Select Budget
     ↓
Select Water Type
     ↓
Select Duration
     ↓
Select Peace Level
     ↓
Select Activities
     ↓
Apply Filters
     ↓
Updated Destination Results
```

Example:

```text
Budget: Low
Water Type: Waterfall
Duration: Weekend
Peace Score: 4+

             ↓

Filtered Results
```

---

# 10. Filter Reset Flow

```text
Filtered Results
       ↓
Clear Filters
       ↓
Default Destination Listing
```

The user should be able to reset individual filters or clear all filters.

---

# 11. Sorting Flow

```text
DESTINATIONS
     ↓
Sort
     ↓
┌─────────────────────┐
│ Recommended         │
│ Lowest Budget       │
│ Most Peaceful       │
│ Newest              │
└─────────────────────┘
     ↓
Updated Results
```

---

# 12. Destination Card Flow

Each destination card acts as an entry point to a destination.

```text
Destination Card
       │
       ├── Click Image
       │       ↓
       │   Destination Details
       │
       ├── Click Name
       │       ↓
       │   Destination Details
       │
       └── Click Save
               ↓
          Authentication Check
```

---

# 13. Destination Details Flow

The destination detail page should follow this sequence:

```text
DESTINATION DETAILS
        ↓
Hero
        ↓
Destination Overview
        ↓
Peace Score
        ↓
Budget
        ↓
Best Time
        ↓
Activities
        ↓
Gallery
        ↓
Travel Tips
        ↓
Nearby Destinations
        ↓
Save Destination
```

---

# 14. Destination Hero Flow

The hero section should immediately communicate:

* Destination name
* Location
* Water type
* Cover image
* Peace Score
* Budget category

Example:

```text
┌─────────────────────────────────┐
│                                 │
│       DIYALUMA FALLS            │
│       Sri Lanka                 │
│                                 │
│       💧 Waterfall              │
│       😌 Peace 4.7/5            │
│       💰 Budget Friendly        │
│                                 │
│          [ Save ♡ ]             │
│                                 │
└─────────────────────────────────┘
```

---

# 15. Budget Flow

The budget section should provide a quick overview before detailed information.

```text
Destination
      ↓
Estimated Budget
      ↓
┌─────────────────────────┐
│ Transport               │
│ Accommodation           │
│ Food                    │
│ Activities              │
│ Miscellaneous           │
└─────────────────────────┘
      ↓
Estimated Total
```

Example:

```text
Estimated Trip Cost

LKR 8,000 – 15,000
```

The interface should include a note that prices are estimates.

---

# 16. Peace Score Flow

```text
Destination
      ↓
ZoneEdan Peace Score
      ↓
Overall Score
      ↓
Supporting Factors
```

Example:

```text
Peace Score
★★★★☆ 4.5 / 5

Nature       ██████████
Crowds       ███████░░░
Noise        ████████░░
Water        ██████████
Escape       █████████░
```

The score is a curated ZoneEdan metric.

---

# 17. Gallery Flow

```text
Destination Details
       ↓
Gallery
       ↓
Click Image
       ↓
Full-Screen Viewer
       ↓
Next / Previous
       ↓
Close
```

The gallery should work on both desktop and mobile.

---

# 18. Activities Flow

Users can see activities associated with a destination.

Example:

```text
Activities

🏊 Swimming
🥾 Hiking
📸 Photography
🏕️ Camping
🛶 Kayaking
```

Activity selection may become a filter in the destination discovery page.

---

# 19. Nearby Destinations Flow

At the bottom of a destination page:

```text
Destination
     ↓
Nearby / Similar Places
     ↓
Destination Cards
     ↓
Select Another Destination
```

This keeps users exploring ZoneEdan rather than ending their journey after one destination.

---

# 20. Favorite Flow

The favorite feature has two possible paths.

## Authenticated User

```text
Click Save
    ↓
User Logged In?
    ↓
YES
    ↓
Save Destination
    ↓
Favorite Icon Updated
    ↓
Toast / Confirmation
```

Example:

> Added to your escapes ❤️

---

## Unauthenticated User

```text
Click Save
    ↓
User Logged In?
    ↓
NO
    ↓
Login / Signup
    ↓
Authentication
    ↓
Return to Destination
    ↓
Save Destination
```

The user should not lose the destination they were viewing.

---

# 21. Login Flow

```text
LOGIN
 │
 ├── Email
 ├── Password
 │
 ├── Login
 │
 └── Signup
```

Successful login:

```text
Login
 ↓
Authentication Success
 ↓
Previous Intended Page
```

If no previous destination exists:

```text
Login
 ↓
Home
```

---

# 22. Signup Flow

```text
SIGNUP
 │
 ├── Name
 ├── Email
 ├── Password
 ├── Confirm Password
 │
 └── Create Account
          ↓
      Account Created
          ↓
        Login
          ↓
        Home / Previous Page
```

---

# 23. Logout Flow

```text
PROFILE
   ↓
Logout
   ↓
Supabase Session Removed
   ↓
Public User State
   ↓
Home
```

---

# 24. Favorites Flow

```text
FAVORITES
    ↓
Check Authentication
    │
    ├── Not Logged In
    │       ↓
    │     Login
    │
    └── Logged In
            ↓
       Saved Destinations
```

Each saved destination can be opened normally.

---

# 25. Empty Favorites Flow

If the user has no saved destinations:

```text
Favorites
    ↓
No Saved Destinations
    ↓
Friendly Empty State
```

Example:

> Your escape list is empty.
> Let's find somewhere beautiful. 🌊

CTA:

```text
[ Explore Destinations ]
```

---

# 26. Collections Flow

```text
COLLECTIONS
     ↓
Collection Cards
     ↓
Select Collection
     ↓
Collection Details
     ↓
Destination Grid
     ↓
Destination Details
```

Example:

```text
Peaceful Water Escapes
        ↓
Destinations
        ↓
Mirissa
Diyaluma Falls
Nilaveli
...
```

---

# 27. Story Flow

```text
STORIES
   ↓
Story Cards
   ↓
Story Details
   ↓
Related Destination
   ↓
Destination Details
```

A travel story should be another discovery path into the destination database.

---

# 28. Story-to-Destination Flow

Example:

```text
Story:

"5 Peaceful Waterfalls
to Explore in Sri Lanka"

             ↓

User clicks:

"Diyaluma Falls"

             ↓

Destination Details
```

This creates a connection between editorial content and destination discovery.

---

# 29. About Flow

```text
ABOUT
 ↓
Why ZoneEdan
 ↓
Our Philosophy
 ↓
Sri Lanka Focus
 ↓
Water + Nature + Peace + Budget
 ↓
Explore Destinations
```

The About page should communicate why ZoneEdan exists rather than acting like a corporate company page.

---

# 30. Search Flow

Search should support both direct and exploratory searches.

```text
User enters query
       ↓
Search
       ↓
Normalize query
       ↓
Search destinations
       ↓
Results
```

Example:

```text
"beach"

     ↓

Beach destinations
```

Another example:

```text
"quiet beach"

     ↓

Potential future recommendation:
peaceful beach destinations
```

Advanced semantic search can be introduced later.

---

# 31. Search Empty State

If no destination matches:

```text
Search
 ↓
No Results
 ↓
Friendly Message
 ↓
Suggested Categories
```

Example:

> We couldn't find that escape yet.

Suggestions:

```text
[ Beaches ]
[ Waterfalls ]
[ Lakes ]
[ Explore Everything ]
```

---

# 32. 404 Flow

```text
Invalid URL
     ↓
404 PAGE
     ↓
┌───────────────────────────┐
│ Lost your way?             │
│ Let's find your Eden. 🌊  │
│                           │
│ [ Home ] [ Explore ]      │
└───────────────────────────┘
```

---

# 33. Error Flow

If destination data cannot be loaded:

```text
Request
 ↓
Error
 ↓
Error State
 ↓
Retry
```

Example:

> Something interrupted the journey.

CTA:

```text
[ Try Again ]
```

---

# 34. Loading Flow

Every data-dependent screen should have a loading state.

```text
Page Request
     ↓
Loading
     ↓
Skeleton UI
     ↓
Data Loaded
     ↓
Content
```

The application should avoid showing a completely blank screen.

---

# 35. Network Failure Flow

```text
User requests data
       ↓
Network failure
       ↓
Error State
       ↓
Retry
```

If retry fails, provide a clear message without exposing technical errors.

---

# 36. Mobile Filter Flow

On mobile, filters should open as a bottom sheet or full-screen panel.

```text
Destination Listing
       ↓
[ Filters ]
       ↓
Filter Panel
       ↓
Budget
Water Type
Duration
Peace Score
Activities
       ↓
[ Apply ]
       ↓
Filtered Results
```

A **Clear All** action should always be available.

---

# 37. Mobile Search Flow

```text
Mobile Home
     ↓
Search
     ↓
Search Screen / Expanded Search
     ↓
Enter Query
     ↓
Results
```

The search interaction should be easy to access with one tap.

---

# 38. Profile Flow

```text
PROFILE
   │
   ├── User Information
   │
   ├── My Favorites
   │
   ├── Account Settings
   │
   └── Logout
```

The MVP profile should remain simple.

---

# 39. Authentication Redirect Flow

When a protected action is attempted:

```text
Protected Action
       ↓
Authentication Check
       │
   ┌───┴────┐
   │        │
Logged     Guest
   │        │
   ▼        ▼
Continue   Login
            ↓
       Authentication
            ↓
       Return to Action
```

The system should preserve the user's intended destination where practical.

---

# 40. Main Navigation Map

```text
                           HOME
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
 DESTINATIONS          COLLECTIONS          STORIES
        │                   │                   │
        ▼                   ▼                   ▼
   FILTER/SEARCH       COLLECTION PAGE      STORY PAGE
        │                   │                   │
        └──────────────┬────┴──────────────┬────┘
                       ▼                   │
                DESTINATION DETAILS       │
                       │                   │
              ┌────────┼────────┐         │
              ▼        ▼        ▼         │
           BUDGET    PEACE   ACTIVITIES   │
              │        │        │         │
              └────────┼────────┘         │
                       ▼                   │
                     SAVE ◄────────────────┘
                       │
                 AUTH CHECK
                   /       \
                Guest     Logged In
                  │           │
                  ▼           ▼
                LOGIN      FAVORITES
                  │
                  ▼
              FAVORITES
```

---

# 41. Complete First-Time User Journey

A first-time user should ideally experience ZoneEdan like this:

```text
1. User opens ZoneEdan
        ↓
2. Sees a beautiful Sri Lankan water destination
        ↓
3. Understands the ZoneEdan concept
        ↓
4. Searches or selects a water experience
        ↓
5. Views destination cards
        ↓
6. Filters by budget
        ↓
7. Opens a destination
        ↓
8. Sees photos
        ↓
9. Reads about the place
        ↓
10. Checks Peace Score
        ↓
11. Checks estimated budget
        ↓
12. Checks activities
        ↓
13. Saves destination
        ↓
14. Creates an account if necessary
        ↓
15. Destination appears in Favorites
        ↓
16. User continues exploring
```

---

# 42. Returning User Journey

A returning user should have a faster experience:

```text
HOME
 ↓
Favorites
 ↓
Saved Destinations
 ↓
Open Destination
 ↓
Review Budget / Details
 ↓
Explore Nearby Places
```

---

# 43. Discovery Loops

ZoneEdan should encourage continuous exploration.

### Loop 1 — Destination

```text
Destination
 ↓
Nearby Places
 ↓
Another Destination
 ↓
Nearby Places
```

### Loop 2 — Collection

```text
Collection
 ↓
Destination
 ↓
Related Collection
 ↓
Another Destination
```

### Loop 3 — Story

```text
Story
 ↓
Destination
 ↓
Related Destination
 ↓
Another Story
```

These loops increase exploration without feeling forced.

---

# 44. Core Navigation Principle

Every page should provide at least one clear next step.

Examples:

### Home

> Explore Destinations

### Destination Listing

> Open Destination

### Destination Details

> Save / Explore Nearby

### Collection

> Explore Destination

### Story

> Discover This Place

### Favorites

> Continue Exploring

---

# 45. User Flow Priorities

Not all flows have equal importance.

### Priority 1 — Essential

```text
Home
 ↓
Destinations
 ↓
Destination Details
```

### Priority 2 — Core Discovery

```text
Search
Filters
Collections
Budget
Peace Score
```

### Priority 3 — Personalization

```text
Login
Signup
Favorites
Profile
```

### Priority 4 — Content

```text
Stories
Related Destinations
```

---

# 46. MVP Flow Boundary

The MVP should stop at:

```text
DISCOVER
   ↓
EXPLORE
   ↓
UNDERSTAND
   ↓
SAVE
```

It does **not** need to handle:

```text
BOOK
PAY
TRAVEL
TRACK
```

Those belong to future versions.

---

# 47. Flow Design Principles

ZoneEdan should follow these principles:

### Principle 1 — Fewer Steps

A user should reach a destination page quickly.

### Principle 2 — Always Know Where You Are

Breadcrumbs or clear page headings should be used where helpful.

### Principle 3 — Never Lose Context

Filters and searches should persist when possible.

### Principle 4 — Never Dead-End

Every important page should offer a next discovery action.

### Principle 5 — Save Without Friction

The favorite flow should be simple.

### Principle 6 — Inspire Before Asking

The user should first discover and explore before being asked to create an account.

---

# 48. Final App Flow

The complete ZoneEdan experience can be summarized as:

```text
                    🌴 ZONEEDAN
                         │
                         ▼
                FIND YOUR LITTLE EDEN
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
         SEARCH                  EXPLORE
             │                       │
             └───────────┬───────────┘
                         ▼
                  DESTINATIONS
                         │
                 ┌───────┼───────┐
                 ▼       ▼       ▼
               BUDGET   WATER   PEACE
                 │       │       │
                 └───────┼───────┘
                         ▼
                  DESTINATION
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
           GALLERY     DETAILS    ACTIVITIES
             │           │           │
             └───────────┼───────────┘
                         ▼
                    SAVE ❤️
                         │
                    AUTH CHECK
                         │
                    FAVORITES
                         │
                         ▼
                  KEEP EXPLORING
                         │
                         ▼
                 FIND ANOTHER EDEN
```

---

# 49. Final Flow Statement

The ZoneEdan application flow is built around one simple idea:

> **Help the user discover a beautiful water destination, understand whether it fits their budget and preferences, save it, and continue exploring.**

The experience should feel like a journey rather than a catalogue.

**Discover → Explore → Feel → Understand → Save → Discover Again**

**ZoneEdan — Find Your Little Eden. 🌊🇱🇰**
