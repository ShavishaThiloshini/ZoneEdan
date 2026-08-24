/**
 * ZoneEdan — Sri Lankan Destinations Dataset
 * Schema: id (number), name, slug, location, type, waterType, budget,
 *         estimatedCost (LKR), peaceScore, description, activities[],
 *         bestTime, suggestedDays, images[], featured, region, regionLabel
 * All images from Unsplash (free-to-use, nature/water themed).
 */

export const destinations = [
  {
    id: 1,
    slug: 'diyaluma-falls',
    name: 'Diyaluma Falls',
    location: 'Koslanda, Badulla, Sri Lanka',
    region: 'central',
    regionLabel: 'Central',
    type: 'Waterfall',
    waterType: 'waterfall',
    budget: 'Budget Friendly',
    estimatedCost: 15000,
    peaceScore: 4.7,
    description: 'Diyaluma Falls is Sri Lanka\'s second-highest waterfall and arguably its most epic natural infinity pool experience. Cascading down a spectacular 220-meter drop, the falls are hidden deep within the Koslanda jungle in the Badulla district. The journey to the top is an adventure in itself, passing through rubber plantations and tall grass trails. Once at the summit, you are rewarded with multiple natural pools carved into the rock by the rushing water. These pools offer a refreshing dip with panoramic views of the surrounding hills, making it a perfect spot for nature lovers and thrill-seekers alike.',
    activities: ['Hiking', 'Swimming', 'Photography', 'Camping', 'Picnicking'],
    bestTime: 'December to April',
    suggestedDays: 2,
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620023477148-360e608221b6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614763172023-e28becc8cde0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544487214-41d9961633d9?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Start the hike early morning to avoid the midday sun and crowds.',
      'Wear sturdy hiking shoes as the trail can be slippery.',
      'Bring a waterproof bag for your electronics.',
      'Pack enough water and snacks as there are no shops at the top.',
      'Be cautious around the edges of the upper pools.'
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'mirissa-beach',
    name: 'Mirissa Beach',
    location: 'Mirissa, Matara, Sri Lanka',
    region: 'southern',
    regionLabel: 'Southern',
    type: 'Beach',
    waterType: 'beach',
    budget: 'Moderate',
    estimatedCost: 35000,
    peaceScore: 4.2,
    description: 'A crescent of golden sand fringed by palm trees and calm turquoise waters, Mirissa is one of Sri Lanka\'s most beloved beach destinations. Famous for world-class whale watching between November and April, the bay also offers vibrant beach culture, seafood restaurants, and breathtaking sunsets that draw travellers from around the world.',
    activities: ['Surfing', 'Whale Watching', 'Swimming', 'Snorkeling', 'Nightlife'],
    bestTime: 'November to April',
    suggestedDays: 3,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Book whale watching tours in advance during peak season.',
      'Best surfing is at the main point break on the eastern end.',
      'Avoid swimming when red flags are displayed.',
      'Try the fresh seafood at the local restaurants along the beach road.'
    ],
    featured: true,
  },
  {
    id: 3,
    slug: 'sembuwatta-lake',
    name: 'Sembuwatta Lake',
    location: 'Elkaduwa, Matale, Sri Lanka',
    region: 'central',
    regionLabel: 'Central',
    type: 'Lake',
    waterType: 'lake',
    budget: 'Budget Friendly',
    estimatedCost: 10000,
    peaceScore: 4.9,
    description: 'A serene highland lake wrapped in mist and lush tea estate greenery at 900m elevation. Sembuwatta is a hidden gem in Matale, beloved for its tranquil atmosphere and the unique hot water spring bubbling up right at the lake\'s edge. The surrounding pine and eucalyptus forest makes it an ideal spot for peaceful morning strolls and family outings.',
    activities: ['Sightseeing', 'Picnicking', 'Photography', 'Nature Walks', 'Swimming'],
    bestTime: 'Anytime – mornings offer the best mist and ambience',
    suggestedDays: 1,
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Arrive by 7am for the most magical mist-covered views.',
      'Entrance fee applies – keep small change ready.',
      'Combine with a visit to Nalanda Gedige nearby.',
      'The hot spring area is marked – safe for a dip in the warm pool.'
    ],
    featured: false,
  },
  {
    id: 4,
    slug: 'nilaveli-beach',
    name: 'Nilaveli Beach',
    location: 'Nilaveli, Trincomalee, Sri Lanka',
    region: 'eastern',
    regionLabel: 'Eastern',
    type: 'Beach',
    waterType: 'beach',
    budget: 'Budget Friendly',
    estimatedCost: 20000,
    peaceScore: 4.8,
    description: 'A near-untouched stretch of white sand and crystal-clear water on the north-east coast, Nilaveli Beach is one of Sri Lanka\'s most peaceful coastal escapes. With shallow turquoise water perfect for swimming and direct boat access to Pigeon Island Marine National Park, it offers a rare combination of serenity and adventure away from the busier southern beaches.',
    activities: ['Swimming', 'Snorkeling', 'Relaxing', 'Boating', 'Diving'],
    bestTime: 'May to September',
    suggestedDays: 3,
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Book a boat to Pigeon Island early in the morning for the clearest water.',
      'The east coast is best visited May–September; avoid the north-east monsoon season.',
      'Accommodation options are more limited – book ahead during peak season.',
      'Trincomalee Harbour and Swami Rock are worth visiting on the same trip.'
    ],
    featured: true,
  },
  {
    id: 5,
    slug: 'ravana-falls',
    name: 'Ravana Falls',
    location: 'Ella, Badulla, Sri Lanka',
    region: 'central',
    regionLabel: 'Central',
    type: 'Waterfall',
    waterType: 'waterfall',
    budget: 'Budget Friendly',
    estimatedCost: 12000,
    peaceScore: 4.0,
    description: 'One of the widest and most visited waterfalls in Sri Lanka, Ravana Falls cascades dramatically down a rocky cliff face just minutes from the charming hill town of Ella. According to legend, this was the cave where King Ravana hid princess Sita in the Ramayana epic. The roadside location makes it very easy to visit, though its popularity means it\'s best experienced on weekday mornings.',
    activities: ['Photography', 'Sightseeing', 'Swimming', 'Hiking'],
    bestTime: 'December to March',
    suggestedDays: 1,
    images: [
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Visit early morning on weekdays to avoid tour bus crowds.',
      'The swimming area at the base is accessible but can be slippery.',
      'Combine with Ella Rock hike and the Nine Arch Bridge on the same day.',
      'Entry is free but parking nearby has a small charge.'
    ],
    featured: false,
  },
  {
    id: 6,
    slug: 'tangalle-beach',
    name: 'Tangalle Beach',
    location: 'Tangalle, Hambantota, Sri Lanka',
    region: 'southern',
    regionLabel: 'Southern',
    type: 'Beach',
    waterType: 'beach',
    budget: 'Moderate',
    estimatedCost: 28000,
    peaceScore: 4.6,
    description: 'Laid-back and wild, Tangalle offers some of the most unspoiled and dramatically beautiful coastline in southern Sri Lanka. The broad, sweeping bay is backed by coconut palms and the town has a quiet, authentic feel compared to more touristy beach towns. It\'s also a prime nesting site for sea turtles, particularly at night during nesting season.',
    activities: ['Beach Walking', 'Turtle Watching', 'Relaxing', 'Snorkeling', 'Boat Trips'],
    bestTime: 'December to April',
    suggestedDays: 2,
    images: [
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Join a guided turtle watching tour on the beach at night during nesting season (Oct–April).',
      'Hiriketiya Bay nearby is excellent for beginner surfers.',
      'The lagoon side of town is calmer and great for kayaking.',
      'Try the local curd and treacle at a roadside stall – a must-have!'
    ],
    featured: false,
  },
  {
    id: 7,
    slug: 'pigeon-island',
    name: 'Pigeon Island',
    location: 'Nilaveli, Trincomalee, Sri Lanka',
    region: 'eastern',
    regionLabel: 'Eastern',
    type: 'Island',
    waterType: 'island',
    budget: 'Moderate',
    estimatedCost: 38000,
    peaceScore: 4.8,
    description: 'Sri Lanka\'s only marine national park and one of the best snorkeling and diving destinations in the Indian Ocean. Pigeon Island is home to vibrant coral reef systems, over 300 species of fish, and the famous blacktip reef sharks that glide gracefully in the shallow waters. The island is only reachable by a short 15-minute boat ride from Nilaveli Beach.',
    activities: ['Snorkeling', 'Diving', 'Photography', 'Wildlife Spotting', 'Swimming'],
    bestTime: 'May to September',
    suggestedDays: 2,
    images: [
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Purchase the Marine National Park entry permit before boarding the boat.',
      'Bring your own snorkel gear for the best experience – rental quality varies.',
      'Go in the morning when the water is calmest and visibility is highest.',
      'Do not touch or stand on the coral – it is strictly protected.'
    ],
    featured: false,
  },
  {
    id: 8,
    slug: 'kitulgala-river',
    name: 'Kitulgala River',
    location: 'Kitulgala, Kegalle, Sri Lanka',
    region: 'western',
    regionLabel: 'Western',
    type: 'River',
    waterType: 'river',
    budget: 'Budget Friendly',
    estimatedCost: 14000,
    peaceScore: 4.5,
    description: 'Jungle-clad rapids set in one of Sri Lanka\'s most pristine rainforest environments. The Kelani River at Kitulgala is the go-to destination for white-water rafting, and the surrounding forest is home to an extraordinary diversity of endemic birds. The area gained international fame as the filming location of the Oscar-winning movie "The Bridge on the River Kwai."',
    activities: ['White Water Rafting', 'Jungle Trekking', 'Bird Watching', 'Swimming', 'Camping'],
    bestTime: 'December to April',
    suggestedDays: 1,
    images: [
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Book a licensed adventure operator – safety standards vary widely.',
      'The river rafting route has Grade 3–4 rapids, suitable for beginners with a guide.',
      'Bring a change of clothes and waterproof footwear.',
      'Early morning bird walks are spectacular – bring binoculars if possible.'
    ],
    featured: false,
  },
  {
    id: 9,
    slug: 'negombo-lagoon',
    name: 'Negombo Lagoon',
    location: 'Negombo, Gampaha, Sri Lanka',
    region: 'western',
    regionLabel: 'Western',
    type: 'Lagoon',
    waterType: 'lagoon',
    budget: 'Budget Friendly',
    estimatedCost: 9000,
    peaceScore: 3.8,
    description: 'A vast and fascinating coastal lagoon stretching along Sri Lanka\'s western coast, Negombo Lagoon is the beating heart of the island\'s fishing industry. Traditional outrigger canoes (oruwa) glide silently across the water at dawn and dusk as fishermen haul in their nets. The lagoon is lined with mangrove waterways and a canal system built by the Dutch in the 17th century.',
    activities: ['Boat Safari', 'Fishing', 'Photography', 'Mangrove Tours', 'Cycling'],
    bestTime: 'December to April',
    suggestedDays: 1,
    images: [
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Take a sunrise boat tour to see the fishing fleet heading out.',
      'The Dutch Canal is great to explore by bicycle or tuk-tuk.',
      'Visit the fish market in the early morning for a vibrant local experience.',
      'Negombo is conveniently close to the international airport – great for first/last night.'
    ],
    featured: false,
  },
  {
    id: 10,
    slug: 'arugam-bay',
    name: 'Arugam Bay',
    location: 'Arugam Bay, Ampara, Sri Lanka',
    region: 'eastern',
    regionLabel: 'Eastern',
    type: 'Ocean',
    waterType: 'ocean',
    budget: 'Moderate',
    estimatedCost: 30000,
    peaceScore: 4.3,
    description: 'A world-class surf point with a deeply laid-back vibe and some of Asia\'s finest waves. Arugam Bay is consistently ranked among the top surf destinations in the world, drawing a global community of surfers every season. Beyond surfing, the area has a charming bohemian atmosphere with excellent food, beachfront yoga studios, and easy access to Kumana and Lahugala national parks.',
    activities: ['Surfing', 'Yoga', 'Wildlife Safari', 'Beach Parties', 'Paddleboarding'],
    bestTime: 'May to September',
    suggestedDays: 4,
    images: [
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'The main point break is best at low to mid tide during the season.',
      'Hire a surfboard and take a lesson from one of the local surf schools.',
      'Day trips to Kumana National Park for leopard spotting are highly recommended.',
      'Accommodation fills up fast in June–August – book at least 2 weeks ahead.'
    ],
    featured: true,
  },
  {
    id: 11,
    slug: 'bambarakanda-falls',
    name: 'Bambarakanda Falls',
    location: 'Ohiya, Badulla, Sri Lanka',
    region: 'central',
    regionLabel: 'Central',
    type: 'Waterfall',
    waterType: 'waterfall',
    budget: 'Budget Friendly',
    estimatedCost: 16000,
    peaceScore: 4.9,
    description: 'The tallest waterfall in Sri Lanka at 263 meters, Bambarakanda Falls is a breathtaking sight hidden within dense pine and mist forests in the Horton Plains highlands. Unlike more accessible falls, reaching Bambarakanda requires a scenic drive through remote mountain roads and a moderate hike, which rewards visitors with an uncrowded, deeply peaceful encounter with one of nature\'s most spectacular creations.',
    activities: ['Hiking', 'Photography', 'Nature Walks', 'Birdwatching', 'Camping'],
    bestTime: 'March to May and October to November',
    suggestedDays: 2,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'The roads to Bambarakanda are narrow and winding – a 4WD is recommended.',
      'Best viewed from the base viewpoint after a 20-minute trail walk.',
      'Combining with a Horton Plains National Park visit makes for a full day.',
      'Carry warm clothing – temperatures drop significantly in the evenings at this altitude.'
    ],
    featured: false,
  },
  {
    id: 12,
    slug: 'unawatuna-beach',
    name: 'Unawatuna Beach',
    location: 'Unawatuna, Galle, Sri Lanka',
    region: 'southern',
    regionLabel: 'Southern',
    type: 'Beach',
    waterType: 'beach',
    budget: 'Premium',
    estimatedCost: 65000,
    peaceScore: 3.9,
    description: 'A sheltered, horseshoe-shaped bay with calm and shallow turquoise waters, Unawatuna is one of the most postcard-perfect beaches in Sri Lanka. Located just 6km from the iconic Galle Fort, it combines world-class heritage tourism with a vibrant beachfront dining, boutique hotel, and nightlife scene. The protected reef makes the waters particularly safe and excellent for snorkeling.',
    activities: ['Swimming', 'Dining', 'Snorkeling', 'Shopping', 'Nightlife', 'Scuba Diving'],
    bestTime: 'December to April',
    suggestedDays: 3,
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=800&auto=format&fit=crop'
    ],
    travelTips: [
      'Galle Fort is a UNESCO World Heritage Site and only 10 minutes away – an unmissable visit.',
      'The western end of the bay (Jungle Beach) is quieter and less crowded.',
      'Sunset views from the rooftop bars along the beach are spectacular.',
      'Book accommodation well in advance for the December–January high season.'
    ],
    featured: false,
  },
];

export const WATER_TYPE_OPTIONS = [
  { value: 'beach',       label: 'Beach',     icon: 'beach_access' },
  { value: 'waterfall',   label: 'Waterfall', icon: 'water_drop' },
  { value: 'lake',        label: 'Lake',      icon: 'landscape' },
  { value: 'lagoon',      label: 'Lagoon',    icon: 'pool' },
  { value: 'river',       label: 'River',     icon: 'waves' },
  { value: 'island',      label: 'Island',    icon: 'terrain' },
  { value: 'ocean',       label: 'Ocean',     icon: 'public' },
];

export const BUDGET_OPTIONS = [
  { value: 'Budget Friendly', label: 'Budget Friendly' },
  { value: 'Moderate',        label: 'Moderate' },
  { value: 'Premium',         label: 'Premium' },
];

export const REGION_OPTIONS = [
  { value: 'western',  label: 'Western' },
  { value: 'central',  label: 'Central' },
  { value: 'southern', label: 'Southern' },
  { value: 'eastern',  label: 'Eastern' },
  { value: 'northern', label: 'Northern' },
];

export const PEACE_SCORE_OPTIONS = [
  { value: 3,   label: '3.0+' },
  { value: 4,   label: '4.0+' },
  { value: 4.5, label: '4.5+' },
];

export const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'peaceful',    label: 'Most Peaceful' },
  { value: 'budget-low',  label: 'Lowest Budget' },
  { value: 'newest',      label: 'Newest' },
];
