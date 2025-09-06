// Mock data for AA Fitness app

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
  equipment: [
    {
      id: 1,
      name: "Cardio Zone",
      description: "Treadmills, bikes, ellipticals with city view",
      image: "Modern cardio equipment with large windows overlooking downtown"
    },
    {
      id: 2,
      name: "Free Weights",
      description: "Complete dumbbell and barbell collection",
      image: "Well-organized free weight area with mirrors and rubber flooring"
    },
    {
      id: 3,
      name: "Strength Machines",
      description: "Latest Technogym and Life Fitness equipment",
      image: "Row of modern strength training machines in bright lighting"
    },
    {
      id: 4,
      name: "Functional Training",
      description: "Battle ropes, kettlebells, suspension trainers",
      image: "Open functional training space with various equipment"
    }
  ],
  trainers: [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Weight Loss & Cardio",
      experience: "5 years",
      image: "Female trainer in athletic wear holding dumbbells, smiling"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialization: "Strength Training",
      experience: "8 years",
      image: "Male trainer spotting someone on bench press, professional pose"
    },
    {
      id: 3,
      name: "Lisa Chen",
      specialization: "Yoga & Flexibility",
      experience: "6 years",
      image: "Female trainer in yoga pose on mat, peaceful expression"
    }
  ],
  mapPlaceholder: "Interactive map showing downtown location with nearby parking and public transport"
};

export const branch2Data = {
  name: "Suburban Branch",
  address: "456 Oak Avenue, Suburbia",
  equipment: [
    {
      id: 1,
      name: "Olympic Lifting",
      description: "Dedicated Olympic lifting platform with competition bars",
      image: "Olympic lifting platform with barbells and bumper plates"
    },
    {
      id: 2,
      name: "Group Class Studio",
      description: "Spacious mirrored studio for group fitness classes",
      image: "Large studio room with mirrors, sound system, and exercise mats"
    },
    {
      id: 3,
      name: "CrossFit Box",
      description: "Full CrossFit setup with pull-up rigs and medicine balls",
      image: "CrossFit area with pull-up bars, boxes, and open workout space"
    },
    {
      id: 4,
      name: "Recovery Zone",
      description: "Massage chairs, stretching area, and foam rollers",
      image: "Relaxing recovery area with comfortable seating and stretch mats"
    }
  ],
  trainers: [
    {
      id: 1,
      name: "David Thompson",
      specialization: "CrossFit & HIIT",
      experience: "7 years",
      image: "Male trainer with stopwatch during high-intensity workout"
    },
    {
      id: 2,
      name: "Emma Wilson",
      specialization: "Pilates & Core",
      experience: "4 years",
      image: "Female trainer demonstrating pilates move on reformer machine"
    },
    {
      id: 3,
      name: "Carlos Martinez",
      specialization: "Olympic Lifting",
      experience: "10 years",
      image: "Male trainer teaching proper deadlift form to client"
    }
  ],
  classes: [
    {
      id: 1,
      name: "Morning HIIT",
      time: "6:00 AM - 7:00 AM",
      days: "Mon, Wed, Fri",
      instructor: "David Thompson"
    },
    {
      id: 2,
      name: "Yoga Flow",
      time: "7:30 AM - 8:30 AM",
      days: "Tue, Thu, Sat",
      instructor: "Emma Wilson"
    },
    {
      id: 3,
      name: "Olympic Lifting",
      time: "6:00 PM - 7:00 PM",
      days: "Mon, Thu",
      instructor: "Carlos Martinez"
    },
    {
      id: 4,
      name: "Pilates Core",
      time: "5:30 PM - 6:30 PM",
      days: "Tue, Fri",
      instructor: "Emma Wilson"
    },
    {
      id: 5,
      name: "Weekend Warrior",
      time: "9:00 AM - 10:00 AM",
      days: "Saturday",
      instructor: "David Thompson"
    }
  ],
  mapPlaceholder: "Interactive map showing suburban location with ample parking and family-friendly area"
};