export type Product = {
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  tone: string;
  label?: string;
};

export const products: Product[] = [
  { name: "Velocity One", category: "RUNNING / EVERYDAY", price: "$128", description: "A light-on-your-feet daily runner with a little extra spring.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", tone: "coral", label: "BEST SELLER" },
  { name: "Street Pace", category: "LIFESTYLE / CITY", price: "$110", description: "Your all-day, all-city companion. No itinerary required.", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85", tone: "sage", label: "NEW COLOR" },
  { name: "Cloudline 02", category: "RUNNING / LIGHTWEIGHT", price: "$140", description: "Soft landings and an open road kind of feeling.", image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85", tone: "sand" },
  { name: "Off Hours", category: "LIFESTYLE / DAILY", price: "$118", description: "A softer side of the everyday, made for taking it easy.", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85", tone: "lilac" },
  { name: "Court Side", category: "TRAINING / COURT", price: "$132", description: "A steady, supportive base for wherever you find your rhythm.", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85", tone: "blue" },
  { name: "Long Way", category: "RUNNING / DISTANCE", price: "$150", description: "A little more cushion for a few more miles.", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1000&q=85", tone: "yellow" },
];

export const features = [
  { title: "Light on your feet", description: "Thoughtful, lightweight materials help every step feel that bit easier.", symbol: "↗" },
  { title: "All-day comfort", description: "A soft landing for early starts, long walks, and everything in between.", symbol: "◡" },
  { title: "Made to keep up", description: "Durable details and considered construction, ready for the everyday.", symbol: "✳" },
  { title: "A style of your own", description: "Easy-to-wear silhouettes that feel right wherever you end up.", symbol: "⌁" },
];

export const values = [
  { title: "Move with purpose", description: "Good design starts by knowing where you're going—and staying open to another route.", symbol: "↗" },
  { title: "Feel good, do good", description: "Comfort isn't an extra. It's the foundation for showing up as your best self.", symbol: "♡" },
  { title: "Keep it considered", description: "We sweat the small stuff, from fit and finish to the things you notice over time.", symbol: "✳" },
];
