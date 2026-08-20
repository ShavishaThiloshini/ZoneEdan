# ZoneEdan — Backend Schema Document

**Project Name:** ZoneEdan
**Backend Platform:** Supabase
**Database:** PostgreSQL
**Authentication:** Supabase Auth
**Storage:** Supabase Storage
**Security:** Row Level Security (RLS)
**Initial Market:** Sri Lanka 🇱🇰
**Document Version:** 1.0

---

# 1. Purpose

This document defines the database structure, relationships, authentication model, storage strategy, and security policies required for the ZoneEdan application.

The backend is designed around the core ZoneEdan experience:

> **Discover → Explore → Understand → Save**

The schema should support the current MVP while remaining flexible enough for future features such as trip planning, reviews, maps, and personalized recommendations.

---

# 2. Backend Architecture

ZoneEdan will use Supabase as the backend-as-a-service platform.

```text
                    ZONEEDAN
                       │
                       ▼
               React Frontend
                       │
                       ▼
                Supabase Client
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      PostgreSQL      Auth        Storage
          │
          ▼
         RLS
          │
          ▼
    Secure User Data
```

---

# 3. Backend Responsibilities

Supabase will handle:

### Database

* Destinations
* Destination images
* Activities
* Destination activities
* Collections
* Collection destinations
* Stories
* Favorites
* User profiles

### Authentication

* Registration
* Login
* Logout
* Sessions
* Password management

### Storage

* Destination images
* Story images
* Profile images

### Security

* Row Level Security
* User ownership
* Public/private access

---

# 4. Database Design Principles

The database should follow:

* Clear relationships
* Appropriate normalization
* UUID primary keys
* Foreign keys
* Timestamps
* Indexing where useful
* RLS for user-owned records
* Public read access only where appropriate

---

# 5. Entity Relationship Overview

The core database relationship is:

```text
                    profiles
                       │
                       │
                       ▼
                   favorites
                       │
                       ▼
                  destinations
                 /      │      \
                /       │       \
               ▼        ▼        ▼
       destination_   activities  destination_
         images                    activities
                                      │
                                      ▼
                                  activities

destinations
     │
     ▼
collection_destinations
     │
     ▼
collections

destinations
     │
     ▼
story_destinations
     │
     ▼
stories
```

---

# 6. Core Tables

The MVP will use the following main tables:

```text
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
```

---

# 7. `profiles`

Stores application-level information about authenticated users.

Supabase authentication data remains inside `auth.users`.

The `profiles` table stores ZoneEdan-specific user information.

### Fields

| Field        | Type        | Required | Description                |
| ------------ | ----------- | -------: | -------------------------- |
| id           | UUID        |      Yes | References `auth.users.id` |
| display_name | TEXT        |       No | User display name          |
| avatar_url   | TEXT        |       No | Profile image              |
| bio          | TEXT        |       No | Optional user biography    |
| created_at   | TIMESTAMPTZ |      Yes | Account creation time      |
| updated_at   | TIMESTAMPTZ |      Yes | Last profile update        |

### Primary Key

```text
id
```

### Relationship

```text
profiles.id
     ↓
auth.users.id
```

---

# 8. `destinations`

This is the central table of ZoneEdan.

Each row represents one destination.

### Fields

| Field             | Type        | Required | Description                        |
| ----------------- | ----------- | -------: | ---------------------------------- |
| id                | UUID        |      Yes | Unique destination ID              |
| name              | TEXT        |      Yes | Destination name                   |
| slug              | TEXT        |      Yes | URL-friendly identifier            |
| short_description | TEXT        |      Yes | Short card description             |
| description       | TEXT        |      Yes | Full destination description       |
| country           | TEXT        |      Yes | Country                            |
| region            | TEXT        |      Yes | Province/region                    |
| district          | TEXT        |       No | District                           |
| destination_type  | TEXT        |      Yes | Beach, waterfall, lake, etc.       |
| water_type        | TEXT        |      Yes | Main water experience              |
| latitude          | DECIMAL     |       No | Latitude                           |
| longitude         | DECIMAL     |       No | Longitude                          |
| peace_score       | DECIMAL     |      Yes | ZoneEdan Peace Score               |
| crowd_score       | DECIMAL     |       No | Crowd-related score                |
| nature_score      | DECIMAL     |       No | Nature score                       |
| noise_score       | DECIMAL     |       No | Noise/quietness score              |
| water_score       | DECIMAL     |       No | Water experience score             |
| escape_score      | DECIMAL     |       No | Overall escape feeling             |
| budget_level      | TEXT        |      Yes | Budget Friendly, Moderate, Premium |
| min_budget        | DECIMAL     |       No | Estimated minimum cost             |
| max_budget        | DECIMAL     |       No | Estimated maximum cost             |
| currency          | TEXT        |      Yes | Currency code                      |
| suggested_days    | INTEGER     |       No | Recommended duration               |
| best_time         | TEXT        |       No | Recommended visiting period        |
| accessibility     | TEXT        |       No | Accessibility/travel notes         |
| featured          | BOOLEAN     |      Yes | Featured destination               |
| published         | BOOLEAN     |      Yes | Publicly visible                   |
| created_at        | TIMESTAMPTZ |      Yes | Created timestamp                  |
| updated_at        | TIMESTAMPTZ |      Yes | Updated timestamp                  |

---

# 9. Destination Types

The `destination_type` field can contain values such as:

```text
beach
waterfall
lake
lagoon
river
island
surf
ocean
nature
```

The exact allowed values should eventually be enforced using a PostgreSQL enum or a controlled lookup table.

---

# 10. Water Types

Possible water-related categories:

```text
sea
waterfall
lake
lagoon
river
ocean
natural_pool
```

A destination can have one primary water type in the MVP.

Future versions may support multiple water experiences.

---

# 11. Budget Levels

Possible values:

```text
budget
moderate
premium
```

The UI can display these as:

```text
budget    → Budget Friendly
moderate  → Moderate
premium   → Premium
```

---

# 12. Peace Score Structure

The overall Peace Score is:

```text
peace_score
```

Supporting scores:

```text
crowd_score
nature_score
noise_score
water_score
escape_score
```

Each score should use:

```text
0.0 – 5.0
```

Example:

```text
Crowd:   4.2
Nature:  4.9
Noise:   4.1
Water:   5.0
Escape:  4.8

Peace Score: 4.7
```

The exact calculation method can be defined during implementation.

---

# 13. `destination_images`

Stores images associated with destinations.

### Fields

| Field          | Type        | Required | Description            |
| -------------- | ----------- | -------: | ---------------------- |
| id             | UUID        |      Yes | Image ID               |
| destination_id | UUID        |      Yes | Related destination    |
| image_url      | TEXT        |      Yes | Storage/public URL     |
| alt_text       | TEXT        |      Yes | Accessibility text     |
| caption        | TEXT        |       No | Optional image caption |
| display_order  | INTEGER     |      Yes | Gallery ordering       |
| is_cover       | BOOLEAN     |      Yes | Cover image            |
| created_at     | TIMESTAMPTZ |      Yes | Created timestamp      |

### Relationship

```text
destinations
     │
     └──────< destination_images
```

One destination can have multiple images.

---

# 14. Destination Image Rules

Each destination should ideally have:

```text
1 cover image
+
3–8 gallery images
```

Only one image should be marked as:

```text
is_cover = true
```

The database should enforce this logically during content management.

---

# 15. `activities`

Stores reusable activities.

### Fields

| Field       | Type        | Required | Description          |
| ----------- | ----------- | -------: | -------------------- |
| id          | UUID        |      Yes | Activity ID          |
| name        | TEXT        |      Yes | Activity name        |
| slug        | TEXT        |      Yes | URL-friendly name    |
| description | TEXT        |       No | Activity description |
| icon        | TEXT        |       No | Icon identifier      |
| created_at  | TIMESTAMPTZ |      Yes | Created timestamp    |

### Examples

```text
Swimming
Hiking
Surfing
Snorkeling
Kayaking
Camping
Photography
Boating
```

---

# 16. `destination_activities`

This is a junction table connecting destinations and activities.

### Fields

| Field          | Type | Required | Description |
| -------------- | ---- | -------: | ----------- |
| destination_id | UUID |      Yes | Destination |
| activity_id    | UUID |      Yes | Activity    |

### Composite Primary Key

```text
(destination_id, activity_id)
```

Relationship:

```text
Destination
     │
     ├──────── Activity
     │
     ├──────── Activity
     │
     └──────── Activity
```

This creates a many-to-many relationship.

---

# 17. `collections`

Stores curated destination collections.

Examples:

```text
Peaceful Water Escapes
Budget Weekend Trips
Hidden Waterfalls
Romantic Water Escapes
Calm Beaches
```

### Fields

| Field           | Type        | Required | Description            |
| --------------- | ----------- | -------: | ---------------------- |
| id              | UUID        |      Yes | Collection ID          |
| name            | TEXT        |      Yes | Collection name        |
| slug            | TEXT        |      Yes | URL slug               |
| description     | TEXT        |      Yes | Collection description |
| cover_image_url | TEXT        |       No | Collection cover       |
| featured        | BOOLEAN     |      Yes | Featured collection    |
| published       | BOOLEAN     |      Yes | Public visibility      |
| created_at      | TIMESTAMPTZ |      Yes | Created timestamp      |
| updated_at      | TIMESTAMPTZ |      Yes | Updated timestamp      |

---

# 18. `collection_destinations`

Connects collections with destinations.

### Fields

| Field          | Type    | Required | Description       |
| -------------- | ------- | -------: | ----------------- |
| collection_id  | UUID    |      Yes | Collection        |
| destination_id | UUID    |      Yes | Destination       |
| display_order  | INTEGER |      Yes | Destination order |

### Composite Primary Key

```text
(collection_id, destination_id)
```

Relationship:

```text
Collection
   │
   ├── Destination
   ├── Destination
   └── Destination
```

A destination can appear in multiple collections.

---

# 19. `stories`

Stores ZoneEdan travel stories and editorial content.

### Fields

| Field           | Type        | Required | Description       |
| --------------- | ----------- | -------: | ----------------- |
| id              | UUID        |      Yes | Story ID          |
| title           | TEXT        |      Yes | Story title       |
| slug            | TEXT        |      Yes | URL slug          |
| excerpt         | TEXT        |      Yes | Short summary     |
| content         | TEXT        |      Yes | Story content     |
| cover_image_url | TEXT        |       No | Cover image       |
| author_name     | TEXT        |       No | Author            |
| published       | BOOLEAN     |      Yes | Public visibility |
| published_at    | TIMESTAMPTZ |       No | Publication date  |
| created_at      | TIMESTAMPTZ |      Yes | Created timestamp |
| updated_at      | TIMESTAMPTZ |      Yes | Updated timestamp |

---

# 20. `story_destinations`

Connects stories to relevant destinations.

### Fields

| Field          | Type | Required | Description |
| -------------- | ---- | -------: | ----------- |
| story_id       | UUID |      Yes | Story       |
| destination_id | UUID |      Yes | Destination |

### Composite Primary Key

```text
(story_id, destination_id)
```

This allows a story to mention multiple destinations.

---

# 21. `favorites`

Stores destinations saved by users.

### Fields

| Field          | Type        | Required | Description |
| -------------- | ----------- | -------: | ----------- |
| id             | UUID        |      Yes | Favorite ID |
| user_id        | UUID        |      Yes | User        |
| destination_id | UUID        |      Yes | Destination |
| created_at     | TIMESTAMPTZ |      Yes | Saved time  |

### Relationships

```text
profiles
    │
    └────< favorites >──── destinations
```

---

# 22. Favorite Constraints

A user should not be able to save the same destination twice.

Therefore:

```text
UNIQUE(user_id, destination_id)
```

should be enforced.

---

# 23. Database Relationship Diagram

```text
                         auth.users
                             │
                             │ 1:1
                             ▼
                         profiles
                             │
                             │ 1:N
                             ▼
                         favorites
                             │
                             │ N:1
                             ▼
                       destinations
                       /    │     \
                      /     │      \
                     ▼      ▼       ▼
          destination_images │  destination_activities
                             │            │
                             │            ▼
                             │       activities
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
      collection_destinations       story_destinations
              │                             │
              ▼                             ▼
        collections                       stories
```

---

# 24. Foreign Key Rules

Recommended relationships:

```text
destination_images.destination_id
    → destinations.id

destination_activities.destination_id
    → destinations.id

destination_activities.activity_id
    → activities.id

collection_destinations.collection_id
    → collections.id

collection_destinations.destination_id
    → destinations.id

story_destinations.story_id
    → stories.id

story_destinations.destination_id
    → destinations.id

favorites.user_id
    → profiles.id

favorites.destination_id
    → destinations.id
```

---

# 25. Delete Behavior

Recommended behavior:

### Destination Deleted

Related:

* Destination images
* Destination activities
* Collection relationships
* Story relationships
* Favorites

should be removed or handled appropriately.

For dependent relationships, `ON DELETE CASCADE` can be used where appropriate.

However, deleting published destinations should ideally be treated as a content-management action rather than a casual database operation.

---

# 26. Slugs

Public destination URLs should use slugs.

Example:

```text
/destinations/diyaluma-falls
```

Database:

```text
name:
Diyaluma Falls

slug:
diyaluma-falls
```

The following fields should have unique slugs:

```text
destinations.slug
collections.slug
stories.slug
activities.slug
```

---

# 27. Indexing Strategy

Indexes should be added to fields commonly used for:

### Search

```text
destinations.name
destinations.slug
destinations.region
```

### Filtering

```text
destinations.destination_type
destinations.water_type
destinations.budget_level
destinations.peace_score
```

### Featured Content

```text
destinations.featured
collections.featured
```

### Favorites

```text
favorites.user_id
favorites.destination_id
```

---

# 28. Search Strategy

For the initial MVP, basic PostgreSQL search can be used.

Search fields:

```text
name
short_description
region
destination_type
water_type
```

Future versions can introduce:

* PostgreSQL full-text search
* Trigram search
* Semantic search
* AI-powered recommendations

Do not introduce these prematurely.

---

# 29. Destination Query Example

Conceptual query:

```sql
SELECT *
FROM destinations
WHERE published = true
ORDER BY peace_score DESC;
```

This can support a:

> Most Peaceful

destination list.

---

# 30. Budget Query Example

Conceptual query:

```sql
SELECT *
FROM destinations
WHERE published = true
AND budget_level = 'budget'
ORDER BY min_budget ASC;
```

This supports:

> Budget-Friendly Escapes

---

# 31. Water Type Query Example

Conceptual query:

```sql
SELECT *
FROM destinations
WHERE published = true
AND water_type = 'waterfall';
```

This supports:

> Explore Waterfalls

---

# 32. Favorites Query

Authenticated users should retrieve only their own favorites.

Conceptually:

```sql
SELECT *
FROM favorites
WHERE user_id = auth.uid();
```

RLS must enforce this restriction.

---

# 33. RLS Strategy

Row Level Security should be enabled for user-owned tables.

Primary user-owned table:

```text
favorites
```

Profile:

```text
profiles
```

Future user-generated content should also use RLS.

---

# 34. Destination RLS

Public users should be able to read:

```text
published = true
```

They should not be able to:

* Insert destinations
* Update destinations
* Delete destinations

unless an administrative system is introduced.

---

# 35. Favorites RLS

Users should only be able to:

```text
SELECT their own favorites
INSERT their own favorites
DELETE their own favorites
```

A user must not be able to:

```text
SELECT another user's favorites
DELETE another user's favorites
```

---

# 36. Profile RLS

Users should be able to:

```text
SELECT their profile
UPDATE their profile
```

They should not be able to modify another user's profile.

---

# 37. Public Content

The following can be publicly readable when published:

```text
destinations
destination_images
activities
collections
collection_destinations
stories
story_destinations
```

Only published content should be exposed publicly where applicable.

---

# 38. Storage Architecture

Supabase Storage should use separate buckets where practical.

Recommended:

```text
zoneedan-destinations
zoneedan-stories
zoneedan-profiles
```

---

# 39. Destination Storage Structure

Example:

```text
zoneedan-destinations/
│
├── diyaluma-falls/
│   ├── cover.webp
│   ├── gallery-01.webp
│   ├── gallery-02.webp
│   └── gallery-03.webp
│
├── mirissa/
│   ├── cover.webp
│   ├── gallery-01.webp
│   └── gallery-02.webp
```

---

# 40. Story Storage Structure

Example:

```text
zoneedan-stories/
│
├── peaceful-waterfalls/
│   └── cover.webp
│
└── budget-weekend-escapes/
    └── cover.webp
```

---

# 41. Profile Storage

Profile images can be organized by user ID.

Example:

```text
zoneedan-profiles/
│
└── {user-id}/
    └── avatar.webp
```

Access should be appropriately restricted.

---

# 42. Data Validation

Important fields should be validated.

Examples:

### Peace Score

```text
0 <= peace_score <= 5
```

### Budget

```text
min_budget >= 0
max_budget >= min_budget
```

### Suggested Days

```text
suggested_days > 0
```

### Slug

Must be unique.

---

# 43. Currency

The initial platform focuses on Sri Lanka.

Therefore:

```text
currency = LKR
```

should be the default.

Future international expansion can support:

```text
USD
EUR
GBP
INR
AUD
```

etc.

---

# 44. Geographic Data

Destinations should optionally store:

```text
latitude
longitude
```

Example:

```text
latitude: 6.xxxxx
longitude: 80.xxxxx
```

This allows future integration with:

* Maps
* Nearby destinations
* Distance calculations
* Location-based recommendations

---

# 45. Future Map Support

The schema should be prepared for map features without requiring maps in the MVP.

Future functionality:

```text
Destination
      ↓
Latitude + Longitude
      ↓
Map
      ↓
Nearby Destinations
```

---

# 46. Future Trip Planner Schema

Not part of MVP.

Possible future table:

```text
trips
```

with:

```text
id
user_id
name
start_date
end_date
budget
created_at
updated_at
```

Then:

```text
trip_destinations
```

could connect trips to destinations.

---

# 47. Future Reviews Schema

Not part of MVP.

Possible future table:

```text
reviews
```

Fields could include:

```text
id
user_id
destination_id
rating
comment
created_at
updated_at
```

RLS would ensure users manage only their own reviews.

---

# 48. Future Recommendation Data

The current destination structure already provides useful recommendation signals:

```text
budget_level
peace_score
water_type
destination_type
activities
region
suggested_days
```

These can later power personalized recommendations.

---

# 49. Example Recommendation

User preferences:

```text
Budget: Low
Water: Waterfall
Peace: 4+
Duration: Weekend
Activity: Hiking
```

Database can identify destinations matching those attributes.

Future recommendation engine:

```text
User Preferences
       ↓
Destination Attributes
       ↓
Matching Algorithm
       ↓
Recommended Escapes
```

---

# 50. Content Management

The initial project may use Supabase directly for content management.

A future admin interface can provide:

```text
Admin
 │
 ├── Destinations
 ├── Collections
 ├── Stories
 ├── Activities
 └── Images
```

The public application should never expose administrative functionality.

---

# 51. Suggested Initial Seed Data

The first dataset should contain approximately:

```text
20–30 destinations
10–15 activities
5–8 collections
5–10 stories
```

This is enough to make the MVP feel real without creating an enormous content workload.

---

# 52. Initial Destination Data Categories

Recommended distribution:

```text
Beaches       5–7
Waterfalls    5–7
Lakes         2–4
Lagoons       2–3
Rivers        2–3
Islands       2–3
Surf Spots    2–3
```

Some destinations may belong to multiple conceptual categories in future versions.

---

# 53. Data Ownership

### Public Content

Managed by:

```text
ZoneEdan Content/Admin
```

### User Content

Owned by:

```text
Individual User
```

Examples:

```text
Favorites
Profile
Future Reviews
Future Trips
```

---

# 54. Data Privacy

ZoneEdan should minimize the amount of personal information stored.

The MVP only needs:

```text
Email
Display Name
Avatar
Bio
```

Avoid collecting unnecessary sensitive information.

---

# 55. Database Timestamp Standards

All tables should use:

```text
created_at
updated_at
```

where appropriate.

Use:

```text
TIMESTAMPTZ
```

rather than plain timestamps.

---

# 56. UUID Strategy

UUIDs should be used for primary keys.

Example:

```text
id UUID PRIMARY KEY
```

Supabase/PostgreSQL UUID generation can be used.

This avoids predictable sequential IDs.

---

# 57. Backend API Philosophy

ZoneEdan will primarily communicate with Supabase through its client SDK.

The frontend should use a service layer such as:

```text
destinationService
favoriteService
storyService
collectionService
profileService
```

UI components should not contain raw database logic wherever practical.

---

# 58. Example Service Architecture

```text
DestinationCard
      ↓
Destination Page
      ↓
destinationService
      ↓
Supabase
      ↓
PostgreSQL
```

For favorites:

```text
FavoriteButton
      ↓
favoriteService
      ↓
Supabase
      ↓
favorites table
```

---

# 59. Backend Error Handling

Backend errors should be transformed into user-friendly messages.

Database error:

```text
Failed to fetch destination
```

UI message:

> We couldn't load this escape right now. Please try again.

Never expose raw database errors to normal users.

---

# 60. Backend Definition of Done

The backend is considered ready for MVP when:

* [ ] Supabase project is configured.
* [ ] Database tables exist.
* [ ] Relationships are configured.
* [ ] Required indexes exist.
* [ ] RLS is enabled.
* [ ] Public content policies work.
* [ ] Favorite policies work.
* [ ] Profile policies work.
* [ ] Storage buckets exist.
* [ ] Authentication works.
* [ ] Seed data exists.
* [ ] Frontend can retrieve destinations.
* [ ] Frontend can retrieve collections.
* [ ] Frontend can retrieve stories.
* [ ] Users can save destinations.
* [ ] Users can remove saved destinations.

---

# 61. MVP Database Summary

```text
┌──────────────────────┐
│      auth.users      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       profiles       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      favorites       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────┐
│      destinations        │
└──────┬──────┬──────┬─────┘
       │      │      │
       ▼      ▼      ▼
   images  activities  collections
                         │
                         ▼
                       stories
```

---

# 62. Backend Growth Strategy

The backend should grow gradually.

### Phase 1

```text
Destinations
Images
Activities
Collections
Stories
```

### Phase 2

```text
Authentication
Profiles
Favorites
```

### Phase 3

```text
Trip Planner
Reviews
Maps
```

### Phase 4

```text
Recommendations
Analytics
AI Features
```

This prevents unnecessary backend complexity during the MVP.

---

# 63. Final Backend Principle

The ZoneEdan database should support the product without becoming the product.

The goal is:

> **Clean data → secure access → fast discovery → useful personalization.**

The schema should remain simple enough for a solo developer to understand and maintain while still being structured enough to support future growth.

---

# 64. Final Backend Statement

ZoneEdan's backend is centered around one core entity:

> **The Destination**

Everything else exists to enrich the destination discovery experience.

```text
                    DESTINATION
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       IMAGES        ACTIVITIES      COLLECTIONS
          │              │              │
          │              │              ▼
          │              │            STORIES
          │              │
          └──────────────┼──────────────┐
                         ▼              │
                     FAVORITES          │
                         │              │
                         ▼              │
                       USERS ◄───────────┘
```

**ZoneEdan — Find Your Little Eden. 🌊🇱🇰**
