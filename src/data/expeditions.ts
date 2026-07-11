export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Amenity {
  name: string;
  icon: string;
  description: string;
}

export interface ExpeditionTheme {
  accent: string;
  accentLight: string;
  primary: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface Expedition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  distance: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Epic';
  price: string;
  dates: string[];
  itinerary: ItineraryItem[];
  photos: string[];
  testimonials: Testimonial[];
  theme: ExpeditionTheme;
  pdfPath: string;
  specialities: string[];
  amenities: Amenity[];
}

export const expeditions: Expedition[] = [
  {
    id: "manali-leh",
    title: "Manali to Leh",
    subtitle: "The Ultimate Himalayan Cycling Odyssey",
    description: "Conquer the highest motorable passes in the world. Traverse spectacular glacial valleys, ancient monasteries, and high-altitude desert plateaus under the shadows of snow-capped peaks.",
    bgImage: "/images/leh-bg.jpg",
    distance: "475 km",
    duration: "11 Days",
    difficulty: "Epic",
    price: "₹65,000",
    dates: ["15 Jul - 25 Jul 2026", "10 Aug - 20 Aug 2026", "05 Sep - 15 Sep 2026"],
    pdfPath: "/pdfs/manali-leh-itinerary.pdf",
    specialities: [
      "Climb 5 major mountain passes including Taglang La (5,328m).",
      "High-altitude acclimatization schedule designed by medical experts.",
      "Traverse the famous 21 hairpin switchbacks of Gata Loops."
    ],
    amenities: [
      { name: "Support Vehicle", icon: "truck", description: "Fully stocked backup vehicle following the riders with luggage and tools." },
      { name: "Altitude Oxygen Kits", icon: "shield-alert", description: "Constant supply of medical oxygen and pulse oximeters." },
      { name: "High-End Mountain Bikes", icon: "bike", description: "Premium hydraulic disc hybrid/mountain bikes included." },
      { name: "Cozy Camping & Hotels", icon: "hotel", description: "Premium Swiss tents with beds and boutique hotel stays in Leh." },
      { name: "All Meals Included", icon: "soup", description: "Nutritious, high-calorie meals tailored for extreme cycling." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali (2,050m)",
        description: "Acclimatization, bike setup, and local warm-up ride.",
        details: "Meet your expedition leaders, assemble and test bikes, and enjoy a short ride to the hot springs of Vashisht. Evening briefing over dinner."
      },
      {
        day: 2,
        title: "Manali to Marhi (3,300m)",
        description: "Begin climbing through pine forests towards Rohtang.",
        details: "A challenging 35km climb with scenic switchbacks. The view shifts from lush green orchards to towering mountain crags as we reach Marhi."
      },
      {
        day: 3,
        title: "Marhi to Sissu via Atal Tunnel (3,120m)",
        description: "Cross into the Lahaul Valley.",
        details: "Enjoy a breathtaking descent down to the Chandra river, passing through the engineering marvel of Atal Tunnel (or climbing over Rohtang Pass, weather permitting) to enter Sissu."
      },
      {
        day: 4,
        title: "Sissu to Jispa (3,200m)",
        description: "Ride along the Chandra-Bhaga river confluence.",
        details: "A relatively gentle ride passing through Keylong, the administrative center of Lahaul. We camp by the river in Jispa amidst beautiful willow groves."
      },
      {
        day: 5,
        title: "Jispa to Zingzingbar (4,270m)",
        description: "Steep climb to the foot of Baralacha La.",
        details: "This day takes us high into the barren landscape. The climb to Zingzingbar is tough but rewards us with dramatic rock formations and raw mountain wind."
      },
      {
        day: 6,
        title: "Zingzingbar to Sarchu via Baralacha La (4,890m)",
        description: "Conquer our first major high-altitude pass.",
        details: "A monumental day. We summit Baralacha La, surrounded by glaciers, then descend to the wind-sculpted canyon plains of Sarchu, the border of Himachal and Ladakh."
      },
      {
        day: 7,
        title: "Sarchu to Pang via Gata Loops & Lachulung La (4,600m)",
        description: "Ride the famous 21 hairpin loops.",
        details: "Climb the legendary 21 loops of Gata Loops, push through Nakee La (4,750m) and Lachulung La (5,065m), followed by a stunning canyon ride to Pang."
      },
      {
        day: 8,
        title: "Pang to Tsokar Lake (4,530m)",
        description: "Cycle the endless flat expanse of Morey Plains.",
        details: "A dramatic contrast as we hit a 40km flat asphalt plateau at 4,500m. We detour to the salt lake of Tsokar, home to wild asses and migratory birds."
      },
      {
        day: 9,
        title: "Tsokar to Lato via Taglang La (5,328m)",
        description: "Summit the second highest motorable pass in the world.",
        details: "A grueling climb leads to the majestic Taglang La pass. Celebrate the summit, then enjoy an epic, thrilling 40km downhill descent to the colorful gorges of Lato."
      },
      {
        day: 10,
        title: "Lato to Leh (3,500m)",
        description: "Gentle cruise along the Indus River to Ladakh's capital.",
        details: "Cycle past Thiksey and Hemis monasteries, entering the historic town of Leh. Relax, explore the local bazaars, and celebrate our successful Himalayan crossing."
      }
    ],
    photos: [
      "/images/leh-bg.jpg",
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Arjun Mehta",
        location: "Mumbai",
        text: "The Manali to Leh expedition was life-changing. The climbs were tough, but the support crew was stellar and the views were pure magic.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
      },
      {
        name: "Elena Rostova",
        location: "Berlin",
        text: "Summiting Taglang La on a bicycle is something I will never forget. Impeccable organization and great food even at 4500 meters!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#00B4D8",
      accentLight: "#E6F7FA",
      primary: "#03045E",
      gradientStart: "#0077B6",
      gradientEnd: "#90E0EF"
    }
  },
  {
    id: "jodhpur-jaipur",
    title: "Jodhpur to Jaipur",
    subtitle: "The Royal Heritage Trail",
    description: "Pedal past majestic forts, ancient temples, and vibrant rural settlements. Experience the legendary hospitality of Rajasthan on a journey through the Land of Kings.",
    bgImage: "/images/rajasthan-bg.jpg",
    distance: "340 km",
    duration: "6 Days",
    difficulty: "Moderate",
    price: "₹38,000",
    dates: ["12 Oct - 17 Oct 2026", "15 Nov - 20 Nov 2026", "10 Dec - 15 Dec 2026"],
    pdfPath: "/pdfs/jodhpur-jaipur-itinerary.pdf",
    specialities: [
      "Stay in authentic 17th-century heritage forts and palaces.",
      "Ride along the shores of Sambhar Lake, watching wild flamingos.",
      "Explore Jodhpur's blue streets and Jaipur's pink architectures."
    ],
    amenities: [
      { name: "Support & Spares", icon: "truck", description: "Follow vehicle carrying hydration, fresh fruits, and spare tires/chains." },
      { name: "Royal Stays", icon: "hotel", description: "Luxury heritage havelis and converted fort palaces every night." },
      { name: "Hybrid Cruiser Bikes", icon: "bike", description: "Comfy, upright hybrid bikes suited for flat desert tarmac." },
      { name: "Artisanal Feasts", icon: "soup", description: "Rich traditional Rajasthani food cooked by palace chefs." },
      { name: "Guided Escort", icon: "compass", description: "Expert cultural guides telling stories of the historic lands." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Jodhpur Exploration",
        description: "Discover the Blue City and bike briefing.",
        details: "Visit Mehrangarh Fort, explore the blue-painted houses of the old city, check bikes, and gear up for our tour over a Rajasthani feast."
      },
      {
        day: 2,
        title: "Jodhpur to Pushkar",
        description: "Cycle along the Aravalli range to the sacred lake town.",
        details: "After an initial transfer to bypass heavy traffic, we ride through scenic country roads to Pushkar, one of India's oldest and most sacred towns."
      },
      {
        day: 3,
        title: "Pushkar to Roopangarh",
        description: "Quiet country roads and marble plains.",
        details: "Pedal along salt flats and marble quarry roads, observing traditional artisans. Sleep in a restored 17th-century fort palace."
      },
      {
        day: 4,
        title: "Roopangarh to Sambhar Lake",
        description: "Ride to India's largest inland salt lake.",
        details: "A flat, scenic ride to Sambhar Salt Lake. We'll ride along the shores, watch flamingos, and witness a spectacular sunset over the salt flats."
      },
      {
        day: 5,
        title: "Sambhar to Jaipur",
        description: "Ride into the Pink City.",
        details: "Navigate rustic desert tracks and small towns as we approach Jaipur. Enter the historic walled city through majestic arches."
      },
      {
        day: 6,
        title: "Jaipur Sightseeing & Farewell",
        description: "Explore Amer Fort and Hawa Mahal.",
        details: "A half-day cycle tour of Jaipur's architectural wonders before departures in the evening."
      }
    ],
    photos: [
      "/images/rajasthan-bg.jpg",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Vikram Rathore",
        location: "Delhi",
        text: "Cycling through the villages of Rajasthan and staying in heritage forts was incredible. A perfect mix of culture and cycling.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
      },
      {
        name: "Sarah Jenkins",
        location: "London",
        text: "The Sambhar Lake sunset ride was magical. The route was mostly flat, making it a very relaxed and culturally immersive trip.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#E05A47",
      accentLight: "#FDEAE6",
      primary: "#3D241C",
      gradientStart: "#E05A47",
      gradientEnd: "#F4A261"
    }
  },
  {
    id: "jaipur-udaipur",
    title: "Jaipur to Udaipur",
    subtitle: "Lakes, Palaces, and Hill Forts",
    description: "Traverse the scenic foothills of the Aravalli range. Cycle from the vibrant Pink City of Jaipur to Udaipur, the City of Lakes, stopping at ancient fortresses along the way.",
    bgImage: "/images/udaipur-bg.jpg",
    distance: "410 km",
    duration: "7 Days",
    difficulty: "Moderate",
    price: "₹42,000",
    dates: ["20 Oct - 26 Oct 2026", "22 Nov - 28 Nov 2026"],
    pdfPath: "/pdfs/jaipur-udaipur-itinerary.pdf",
    specialities: [
      "Cycle through the densely forested Kumbhalgarh Wildlife Sanctuary.",
      "Epic downhill ride to Ranakpur's famous 15th-century marble temple.",
      "Stunning finish at Lake Pichola with luxury boat cruise."
    ],
    amenities: [
      { name: "Support Car", icon: "truck", description: "Follow vehicle carrying baggage, mechanics, and medical supplies." },
      { name: "Heritage Mahals", icon: "hotel", description: "Sleep in converted palace suites with swimming pools." },
      { name: "All-Terrain Bikes", icon: "bike", description: "Front-suspension hybrid bikes suited for mountain foothills." },
      { name: "Local Mewari Food", icon: "soup", description: "Fresh farm-to-table local Rajasthani and continental meals." },
      { name: "Monument Passes", icon: "compass", description: "Includes VIP entry tickets to all historical sites." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Assemble in Jaipur",
        description: "Bike fitting and warm-up ride around Jal Mahal.",
        details: "Meet the crew at our heritage hotel, adjust your gear, and enjoy a quiet sunset ride along the Man Sagar Lake."
      },
      {
        day: 2,
        title: "Jaipur to Kishangarh",
        description: "Ride through rustic farmlands.",
        details: "Avoid highways and cycle through lush mustard fields and rural hamlets, arriving at the marble city of Kishangarh."
      },
      {
        day: 3,
        title: "Kishangarh to Deogarh",
        description: "Long day in the saddle climbing into the hills.",
        details: "The topography changes as we enter the rocky Aravalli terrain. Spend the night at the magnificent Deogarh Mahal."
      },
      {
        day: 4,
        title: "Deogarh to Kumbhalgarh",
        description: "Challenging climb to the great Mewar fortress.",
        details: "Cycle through the Kumbhalgarh Wildlife Sanctuary. The day ends with a steep climb up to the fort with the second longest wall in the world."
      },
      {
        day: 5,
        title: "Kumbhalgarh to Ranakpur",
        description: "Thrilling downhill ride to the famous Jain temples.",
        details: "An exhilarating descent through forest trails leads us to Ranakpur, home to the exquisite 15th-century marble Jain Temple."
      },
      {
        day: 6,
        title: "Ranakpur to Udaipur",
        description: "Cycle through Mewar villages to the City of Lakes.",
        details: "A beautiful ride winding past lakes and green valleys, concluding at the gorgeous Lake Pichola in Udaipur."
      }
    ],
    photos: [
      "/images/udaipur-bg.jpg",
      "https://images.unsplash.com/photo-1615469038136-1e531818274d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Bangalore",
        text: "The downhill ride to Ranakpur was an absolute blast. The scenery was stunning and the hotels we stayed in were breathtaking.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#FF9F1C",
      accentLight: "#FFF5E6",
      primary: "#1D3557",
      gradientStart: "#FF9F1C",
      gradientEnd: "#FFBF69"
    }
  },
  {
    id: "udaipur-jaisalmer",
    title: "Udaipur to Jaisalmer",
    subtitle: "The Thar Desert Caravan Route",
    description: "Pedal from the lush lake valleys of Udaipur deep into the heart of the Golden Desert of Jaisalmer, experiencing massive fortresses and camping on open sand dunes.",
    bgImage: "/images/jaisalmer-bg.jpg",
    distance: "490 km",
    duration: "8 Days",
    difficulty: "Challenging",
    price: "₹46,000",
    dates: ["05 Nov - 12 Nov 2026", "08 Dec - 15 Dec 2026"],
    pdfPath: "/pdfs/udaipur-jaisalmer-itinerary.pdf",
    specialities: [
      "Cross the desert expanse past dry scrublands and salt plateaus.",
      "Camp on soft sand dunes of Sam, under clear starry skies.",
      "Ride into the sandstone 'Golden Fort' of Jaisalmer."
    ],
    amenities: [
      { name: "Support Caravan", icon: "truck", description: "Mobile kitchen caravan, technical assistance, and medical crew." },
      { name: "Desert Tented Camps", icon: "hotel", description: "Luxurious glamping camps in Sam Sand Dunes with ensuite bathrooms." },
      { name: "Sand-Tread Hybrids", icon: "bike", description: "Custom wide-tire hybrid bikes ideal for desert sandy shoulder tarmac." },
      { name: "Dune Feasts", icon: "soup", description: "Traditional camp dinners cooked over open woodfires." },
      { name: "Camel Safaris", icon: "compass", description: "Evening camel ride to sunset spots included." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Udaipur Acclimatization",
        description: "Briefing, route preview, and warm-up ride around Lake Pichola.",
        details: "Prep hybrid/touring bikes and take a ride past the City Palace and Fateh Sagar Lake. Dine over the waters."
      },
      {
        day: 2,
        title: "Udaipur to Jodhpur (Transfer + 80km cycle)",
        description: "Cycle the foothills of Marwar.",
        details: "Avoid busy traffic with a short initial transfer, then ride past ancient rock shrines and pastoral farmlands to Jodhpur."
      },
      {
        day: 3,
        title: "Jodhpur to Khichan (125 km)",
        description: "Long flat plains to the bird sanctuary town.",
        details: "A long flat cruise past rural desert villages. We spend the evening observing migratory Demoiselle Cranes in Khichan."
      },
      {
        day: 4,
        title: "Khichan to Pokhran (75 km)",
        description: "Quiet arid tracks passing through desert scrub.",
        details: "Cycle deep into the dry landscape, reaching the historic red stone fort city of Pokhran."
      },
      {
        day: 5,
        title: "Pokhran to Jaisalmer (110 km)",
        description: "Conquer the desert flats towards the Golden Fort.",
        details: "Cycle the long smooth roads of Thar, watching the massive sandstone Jaisalmer Fort rise from the horizon like a sandcastle."
      },
      {
        day: 6,
        title: "Sam Sand Dunes Desert Camp",
        description: "Ride out to the dunes and camp under the stars.",
        details: "A 40km scenic desert ride to the Sam sand dunes. Enjoy camel rides, folk music, and sleeping in luxurious tents under a clear night sky."
      }
    ],
    photos: [
      "/images/jaisalmer-bg.jpg",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Abhinav Singh",
        location: "Gurugram",
        text: "The desert winds were a challenge, but riding towards the golden fort of Jaisalmer was majestic. Highly recommended!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#E9C46A",
      accentLight: "#FEF7E6",
      primary: "#264653",
      gradientStart: "#E9C46A",
      gradientEnd: "#F4A261"
    }
  },
  {
    id: "rann-of-kutch",
    title: "Rann of Kutch",
    subtitle: "Cycling the White Desert",
    description: "Pedal across the surreal, endless salt flats of Kutch. Experience the unique Kutchi culture, handicrafts, wildlife, and sleep under starry skies in traditional Bhungas.",
    bgImage: "/images/kutch-bg.jpg",
    distance: "280 km",
    duration: "5 Days",
    difficulty: "Easy",
    price: "₹34,000",
    dates: ["01 Dec - 05 Dec 2026", "15 Jan - 19 Jan 2027", "12 Feb - 16 Feb 2027"],
    pdfPath: "/pdfs/rann-kutch-itinerary.pdf",
    specialities: [
      "Cycle directly onto the dry, solid white salt beds at sunset.",
      "Stay in traditional circular mud huts called Bhungas.",
      "Climb Kalo Dungar (Black Hill) for views of the salt desert horizon."
    ],
    amenities: [
      { name: "Mechanic Truck", icon: "truck", description: "Bicycle backup support, extra frames, tools, and hydration." },
      { name: "Traditional Bhungas", icon: "hotel", description: "Stay in culturally authentic mud huts with modern amenities." },
      { name: "Comfort Hybrids", icon: "bike", description: "Sturdy hybrid bikes with wide tires for salt bed flats." },
      { name: "Village Cuisine", icon: "soup", description: "Simple, delicious Kathiyawadi organic vegetarian meals." },
      { name: "Artisan Visits", icon: "compass", description: "Visits to Rogan art and handloom embroidery workshops." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Bhuj",
        description: "Explore Bhuj and prepare bikes.",
        details: "Visit the Prag Mahal and Aina Mahal, followed by a trip briefing and local testing of hybrid bikes."
      },
      {
        day: 2,
        title: "Bhuj to Hodka",
        description: "Cycle towards the northern grasslands.",
        details: "A flat, breeze-assisted ride through Banni grasslands, stopping to see local leather and embroidery artisans in Hodka village."
      },
      {
        day: 3,
        title: "Hodka to Dhordo (White Desert)",
        description: "Ride into the surreal salt flats.",
        details: "A short ride to Dhordo, the gateway to the Great Rann. Spend the afternoon cycling directly onto the dry salt beds under the setting sun."
      },
      {
        day: 4,
        title: "Dhordo to Kalo Dungar (Black Hill)",
        description: "Climb to the highest point in Kutch.",
        details: "Ride to Kalo Dungar for panoramic views of the entire salt flat extending to the horizon. Includes a rewarding climb and descent."
      },
      {
        day: 5,
        title: "Kalo Dungar to Bhuj (Return Transfer)",
        description: "Explore crafts villages and depart.",
        details: "A morning ride to a craft hamlet, then transfer back to Bhuj for evening flights/trains."
      }
    ],
    photos: [
      "/images/kutch-bg.jpg",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Rahul Verma",
        location: "Delhi",
        text: "The endless white plains of the Rann under a full moon were surreal. Cycling on the salt felt like riding on another planet!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
      },
      {
        name: "Meera Nair",
        location: "Kochi",
        text: "A very accessible trip with zero intense climbs. Great for anyone who wants to enjoy cycling, photography, and local culture.",
        rating: 4.9,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#9D4EDD",
      accentLight: "#F2E9FC",
      primary: "#3C096C",
      gradientStart: "#7B2CBF",
      gradientEnd: "#C77DFF"
    }
  },
  {
    id: "goa-mumbai",
    title: "Goa to Mumbai",
    subtitle: "The Coastal Konkan Explorer",
    description: "Ride along the pristine Konkan Coast. Experience sandy beaches, historic sea forts, local ferry crossings, and the rich seafood cuisine of coastal Maharashtra.",
    bgImage: "/images/konkan-bg.jpg",
    distance: "450 km",
    duration: "8 Days",
    difficulty: "Challenging",
    price: "₹48,000",
    dates: ["10 Nov - 17 Nov 2026", "08 Jan - 15 Jan 2027"],
    pdfPath: "/pdfs/goa-mumbai-itinerary.pdf",
    specialities: [
      "Cross 4 beautiful river creeks on traditional Konkan passenger ferries.",
      "Cycle past quiet casuarina-lined beaches with soft white sand.",
      "Visit the dramatic Sindhudurg and Murud Janjira sea forts."
    ],
    amenities: [
      { name: "Support Vehicle", icon: "truck", description: "Baggage van, bike tools, energy drinks, and fresh fruits." },
      { name: "Seaside Lodges", icon: "hotel", description: "Cozy beach resorts and traditional Konkani home-stays." },
      { name: "Road Hybrid Bikes", icon: "bike", description: "Lightweight 24-speed hybrids ideal for steep coastal hills." },
      { name: "Malvani Seafood", icon: "soup", description: "Freshly caught local seafood and coconut-based curries." },
      { name: "Ferry Crossings", icon: "compass", description: "All creek boat transfers and local ferry tickets included." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in North Goa",
        description: "Bike prep and sunset ride along Mandovi River.",
        details: "Assemble in Panaji, get fitted on road/hybrid bikes, and take a short test ride along Miramar beach."
      },
      {
        day: 2,
        title: "Goa to Malvan",
        description: "Cross the state border into Maharashtra.",
        details: "Cycle through backwaters, cross the Tiracol river by ferry, and pedal along coastal villages to reach Malvan, home to the Sindhudurg Sea Fort."
      },
      {
        day: 3,
        title: "Malvan to Kunkeshwar",
        description: "Rolling coastal hills and cliffside temples.",
        details: "A scenic ride along cliffs overlooking the Arabian Sea, terminating at the beachside temple town of Kunkeshwar."
      },
      {
        day: 4,
        title: "Kunkeshwar to Ratnagiri",
        description: "Challenging climbs and mango orchard tracks.",
        details: "Ride through cashew and Alphonso mango plantations, navigating several steep coastal climbs and valleys to reach historic Ratnagiri."
      },
      {
        day: 5,
        title: "Ratnagiri to Guhagar",
        description: "Ferry rides and virgin beaches.",
        details: "Cross the Jaigad creek via ferry, then ride along pristine, deserted beaches to Guhagar, a quiet beach town."
      },
      {
        day: 6,
        title: "Guhagar to Harihareshwar",
        description: "Pedaling past traditional Konkan homes.",
        details: "Take another scenic ferry crossing from Dabhol, ride past coconut groves, and finish at the pilgrim town of Harihareshwar."
      }
    ],
    photos: [
      "/images/konkan-bg.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Siddharth Sen",
        location: "Kolkata",
        text: "The ferry crossings were delightful breaks. The coastal roads are hilly and demanding, but the scenery and hot Malvani meals made it worth it.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#2A9D8F",
      accentLight: "#E8F6F4",
      primary: "#1D3557",
      gradientStart: "#2A9D8F",
      gradientEnd: "#E9C46A"
    }
  },
  {
    id: "srinagar-leh",
    title: "Srinagar to Leh",
    subtitle: "The Highway of the Gods",
    description: "Pedal from the lush green alpine meadows of Kashmir valley, over high snow passes, and descend into the cold high-altitude desert monasteries of Ladakh.",
    bgImage: "/images/srinagar-bg.jpg",
    distance: "420 km",
    duration: "9 Days",
    difficulty: "Epic",
    price: "₹58,000",
    dates: ["20 Jun - 28 Jun 2026", "10 Jul - 18 Jul 2026"],
    pdfPath: "/pdfs/srinagar-leh-itinerary.pdf",
    specialities: [
      "Conquer the rocky heights of Zoji La Pass (3,528m).",
      "Cycle past Fotu La (4,108m), the highest point on the Srinagar-Leh highway.",
      "Explore the surreal lunar landscape valleys of Lamayuru."
    ],
    amenities: [
      { name: "Support SUV Truck", icon: "truck", description: "Follow vehicle carrying heavy baggage, water tanks, and toolkits." },
      { name: "Medical Support", icon: "shield-alert", description: "First-aid response kits, blood pressure and oxygen check equipment." },
      { name: "Touring Mountain Bikes", icon: "bike", description: "Heavy-duty hardtail mountain bikes fitted with luggage racks." },
      { name: "Kashmiri houseboats", icon: "hotel", description: "Sleep in authentic wooden houseboats on Dal Lake." },
      { name: "Hot Meals", icon: "soup", description: "Warm, energy-dense meals including local Kashmiri Wazwan dishes." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Srinagar",
        description: "Check into a traditional houseboat on Dal Lake.",
        details: "Assemble touring gear, local briefing, and a warm-up ride around Dal Lake's beautiful boulevard. Enjoy tea on the water."
      },
      {
        day: 2,
        title: "Srinagar to Sonamarg (85 km)",
        description: "Follow the gushing Sindh river up to alpine meadows.",
        details: "A beautiful climb through deep pine-forested gorges, terminating at Sonamarg ('Meadow of Gold') under the Thajiwas Glacier."
      },
      {
        day: 3,
        title: "Sonamarg to Drass via Zoji La Pass (62 km)",
        description: "Cross the mighty rock pass into Ladakh.",
        details: "A steep, unpaved rocky ascent up the legendary Zoji La (3,528m). Descend into the cold, barren Kargil district valley to reach Drass, the second coldest inhabited place on earth."
      },
      {
        day: 4,
        title: "Drass to Kargil (60 km)",
        description: "Rolling tracks alongside the Drass river to the border town.",
        details: "Smooth, scenic downhill cycling. We visit the Kargil War Memorial en route to pay tributes, ending the day in Kargil."
      },
      {
        day: 5,
        title: "Kargil to Mulbekh (40 km)",
        description: "Enter Buddhist Ladakh.",
        details: "We start seeing Buddhist flags and prayer wheels. Pedal to Mulbekh to admire the gigantic 9-meter tall rock carving of Maitreya Buddha."
      },
      {
        day: 6,
        title: "Mulbekh to Lamayuru via Namika La & Fotu La (70 km)",
        description: "Summit two massive high-altitude passes in one day.",
        details: "Cross Namika La (3,700m) and Fotu La (4,108m), the highest point on the Srinagar-Leh highway. Descend into the spectacular moonland landscapes of Lamayuru."
      }
    ],
    photos: [
      "/images/srinagar-bg.jpg",
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Kabir Dev",
        location: "Pune",
        text: "Crossing Zoji La on a bicycle is a memory I will carry to my grave. The sudden shift from green Kashmir to barren Ladakh is magical.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#48CAE4",
      accentLight: "#E8F9FD",
      primary: "#0077B6",
      gradientStart: "#48CAE4",
      gradientEnd: "#0096C7"
    }
  },
  {
    id: "sikkim-silk-route",
    title: "Sikkim Silk Route",
    subtitle: "The Ancient Indo-China Trade Path",
    description: "Cycle the legendary zigzag loops of the Old Silk Route in East Sikkim. Ride under towering views of Mt. Kanchenjunga past high alpine lakes and dense pine jungles.",
    bgImage: "/images/sikkim-bg.jpg",
    distance: "240 km",
    duration: "7 Days",
    difficulty: "Epic",
    price: "₹45,000",
    dates: ["15 Oct - 21 Oct 2026", "08 Nov - 14 Nov 2026"],
    pdfPath: "/pdfs/sikkim-silk-route-itinerary.pdf",
    specialities: [
      "Climb 32 hairpin loops of the famous Zuluk zig-zag road.",
      "Observe direct, panoramic views of Mt. Kanchenjunga from Lungthung.",
      "Ride past the Elephant-shaped Kupup Lake at 4,000m altitude."
    ],
    amenities: [
      { name: "Luggage Vehicle", icon: "truck", description: "Baggage truck carrying spares, toolkits, and clothing." },
      { name: "Acclimatization Support", icon: "shield-alert", description: "Pulse oximeters, oxygen cylinders, and high-altitude medicine." },
      { name: "East-Himalayan Geared Bikes", icon: "bike", description: "Low-gear hybrid bikes optimized for extremely steep slopes." },
      { name: "Homestays & Lodges", icon: "hotel", description: "Warm, hospitable traditional Sikkimese homestays." },
      { name: "Organic Local Food", icon: "soup", description: "Warm local stews, hand-rolled momos, and traditional teas." }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Gangtok (1,650m)",
        description: "Acclimatization, bike checks, and exploration.",
        details: "Assemble gear, enjoy tea, and take a light ride around Gangtok's clean ridge park. Acclimate to the steep East Himalayan slopes."
      },
      {
        day: 2,
        title: "Gangtok to Lingtam (75 km)",
        description: "Ride down to the valley and enter the Silk Route.",
        details: "Pedal along river valleys, passing emerald cardamom fields, before starting our ascent to the remote check-post town of Lingtam."
      },
      {
        day: 3,
        title: "Lingtam to Padamchen (30 km)",
        description: "Dense pine jungles and steep, misty hairpins.",
        details: "A short but demanding day. We climb continuously through misty forests, listening to mountain birds, arriving at Padamchen (2,430m)."
      },
      {
        day: 4,
        title: "Padamchen to Lungthung via Zuluk Loops (35 km)",
        description: "Conquer the world-famous Zuluk zig-zag loops.",
        details: "A legendary climb of 32 hairpins with vertical slopes. Watch the loops curl below you as we reach Lungthung (3,500m) for an epic sunset view of Kanchenjunga."
      },
      {
        day: 5,
        title: "Lungthung to Kupup Lake & Gnathang (40 km)",
        description: "Ride past the Elephant Lake at 4,000m.",
        details: "Pedal along the freezing high-altitude plateau, passing Kupup Lake (Elephant Lake) near the China border and the old Baba Mandir temple."
      },
      {
        day: 6,
        title: "Gnathang to Gangtok (Transfer + 45km descent)",
        description: "An epic 3000-meter descent down to the capital.",
        details: "Enjoy one of the longest downhills of your life, passing pristine waterfalls and lakes back to Gangtok for a celebratory dinner."
      }
    ],
    photos: [
      "/images/sikkim-bg.jpg",
      "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    ],
    testimonials: [
      {
        name: "Sonam Lepcha",
        location: "Gangtok",
        text: "The Zuluk loops are a cyclist's dream. Steep, breathtaking, and surrounded by snowy giants. PedalIndia made the logistics effortless.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
      }
    ],
    theme: {
      accent: "#10B981",
      accentLight: "#E6FBF3",
      primary: "#064E3B",
      gradientStart: "#10B981",
      gradientEnd: "#34D399"
    }
  }
];
