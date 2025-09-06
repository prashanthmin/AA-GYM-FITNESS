// Mock data for AA Fitness app
import { Utensils, Coffee, Apple, Salad, Target, Droplets, Zap, Clock } from 'lucide-react';

export const contactInfo = {
  profile: {
    name: "John Smith",
    title: "Head Trainer & Manager",
    image: "Profile photo placeholder - Head trainer with fitness background"
  },
  details: {
    phone: "+1 (555) 123-4567",
    email: "info@aafitness.com",
    address: "123 Fitness Street, Gym City, GC 12345",
    hours: {
      weekdays: "5:00 AM - 11:00 PM",
      weekends: "6:00 AM - 10:00 PM"
    }
  }
};

export const branch1Data = {
  name: "Downtown Branch",
  address: "123 Main Street, Downtown",
  mapLink: "https://maps.google.com/?q=40.7589,-73.9851",
  qrCode: {
    description: "QR Code for Downtown Branch",
    url: "/branch1",
    label: "Visit Downtown Branch Page"
  },
  galleryImages: [
    {
      id: 1,
      description: "Modern cardio equipment with city skyline view",
      alt: "Cardio area with treadmills and city view"
    },
    {
      id: 2,
      description: "Professional free weights section with mirrors",
      alt: "Free weights area with organized dumbbells"
    },
    {
      id: 3,
      description: "Group fitness studio with hardwood floors",
      alt: "Studio room for group classes"
    },
    {
      id: 4,
      description: "Modern strength training machines",
      alt: "Strength equipment area"
    },
    {
      id: 5,
      description: "Reception and lounge area",
      alt: "Clean reception area with comfortable seating"
    }
  ],
  services: [
    {
      name: "Cardio Training",
      description: "Treadmills, ellipticals, and stationary bikes",
      icon: "💓"
    },
    {
      name: "Zumba Classes",
      description: "High-energy dance fitness sessions",
      icon: "💃"
    },
    {
      name: "Strength Training",
      description: "Free weights and resistance machines",
      icon: "💪"
    },
    {
      name: "Yoga & Pilates",
      description: "Mind-body fitness classes",
      icon: "🧘"
    },
    {
      name: "Personal Training",
      description: "One-on-one fitness coaching",
      icon: "👨‍🏫"
    },
    {
      name: "Spinning Classes",
      description: "Indoor cycling workouts",
      icon: "🚴"
    }
  ]
};

export const branch2Data = {
  name: "Suburban Branch",
  address: "456 Oak Avenue, Suburbia",
  mapLink: "https://maps.google.com/?q=40.7505,-73.9934",
  qrCode: {
    description: "QR Code for Suburban Branch",
    url: "/branch2",
    label: "Visit Suburban Branch Page"
  },
  galleryImages: [
    {
      id: 1,
      description: "Spacious CrossFit area with pull-up rigs",
      alt: "CrossFit training area with equipment"
    },
    {
      id: 2,
      description: "Olympic lifting platform with competition bars",
      alt: "Olympic weightlifting area"
    },
    {
      id: 3,
      description: "Large group class studio with mirrored walls",
      alt: "Group fitness studio with mirrors"
    },
    {
      id: 4,
      description: "Recovery zone with massage chairs",
      alt: "Relaxation and recovery area"
    },
    {
      id: 5,
      description: "Outdoor training area with artificial turf",
      alt: "Outdoor functional training space"
    }
  ],
  services: [
    {
      name: "CrossFit Training",
      description: "High-intensity functional movement workouts",
      icon: "🏋️"
    },
    {
      name: "Zumba Fitness",
      description: "Latin-inspired dance fitness classes",
      icon: "💃"
    },
    {
      name: "Olympic Lifting",
      description: "Professional weightlifting coaching",
      icon: "🥇"
    },
    {
      name: "HIIT Classes",
      description: "High-intensity interval training",
      icon: "⚡"
    },
    {
      name: "Family Fitness",
      description: "Parent-child workout sessions",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      name: "Recovery Therapy",
      description: "Massage and stretching services",
      icon: "🧘‍♂️"
    }
  ]
};

export const nutritionData = {
  branch1: {
    meals: [
      {
        name: "Power Breakfast",
        icon: Coffee,
        calories: "450",
        prepTime: "10 mins",
        imageDescription: "Colorful breakfast bowl with oats, berries, and nuts",
        ingredients: [
          "Steel-cut oats",
          "Fresh blueberries",
          "Almond butter",
          "Chia seeds",
          "Greek yogurt"
        ]
      },
      {
        name: "Urban Lunch",
        icon: Salad,
        calories: "520",
        prepTime: "15 mins",
        imageDescription: "Fresh salad bowl with grilled protein and quinoa",
        ingredients: [
          "Grilled chicken breast",
          "Quinoa",
          "Mixed greens",
          "Avocado",
          "Cherry tomatoes"
        ]
      },
      {
        name: "Express Dinner",
        icon: Utensils,
        calories: "480",
        prepTime: "20 mins",
        imageDescription: "Balanced plate with salmon, vegetables, and sweet potato",
        ingredients: [
          "Baked salmon fillet",
          "Roasted sweet potato",
          "Steamed broccoli",
          "Brown rice",
          "Lemon herb seasoning"
        ]
      }
    ],
    guidelines: [
      {
        icon: Target,
        title: "Calorie Balance",
        description: "1,800-2,200 calories per day for optimal energy"
      },
      {
        icon: Droplets,
        title: "Hydration",
        description: "8-10 glasses of water daily"
      },
      {
        icon: Zap,
        title: "Pre-Workout",
        description: "Light snack 30-60 minutes before exercise"
      }
    ]
  },
  branch2: {
    meals: [
      {
        name: "Family Breakfast",
        icon: Apple,
        calories: "380",
        prepTime: "12 mins",
        imageDescription: "Wholesome breakfast with whole grain toast and fruit",
        ingredients: [
          "Whole grain bread",
          "Natural peanut butter",
          "Sliced banana",
          "Honey",
          "Orange juice"
        ]
      },
      {
        name: "Athlete's Lunch",
        icon: Utensils,
        calories: "650",
        prepTime: "18 mins",
        imageDescription: "High-protein bowl with lean meat and complex carbs",
        ingredients: [
          "Lean ground turkey",
          "Brown rice",
          "Black beans",
          "Bell peppers",
          "Greek yogurt sauce"
        ]
      },
      {
        name: "Recovery Dinner",
        icon: Salad,
        calories: "550",
        prepTime: "25 mins",
        imageDescription: "Nutrient-dense meal with lean protein and vegetables",
        ingredients: [
          "Grilled lean beef",
          "Quinoa pilaf",
          "Roasted vegetables",
          "Spinach salad",
          "Olive oil dressing"
        ]
      }
    ],
    guidelines: [
      {
        icon: Target,
        title: "Balanced Macros",
        description: "40% carbs, 30% protein, 30% healthy fats"
      },
      {
        icon: Clock,
        title: "Meal Timing",
        description: "Eat every 3-4 hours for sustained energy"
      },
      {
        icon: Zap,
        title: "Post-Workout",
        description: "Protein and carbs within 30 minutes after training"
      }
    ]
  },
  generalTips: [
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink water throughout the day, especially during workouts"
    },
    {
      icon: Apple,
      title: "Whole Foods",
      description: "Choose minimally processed, nutrient-dense foods"
    },
    {
      icon: Clock,
      title: "Consistent Timing",
      description: "Maintain regular meal schedules for better metabolism"
    },
    {
      icon: Target,
      title: "Portion Control",
      description: "Use proper serving sizes to maintain energy balance"
    }
  ]
};