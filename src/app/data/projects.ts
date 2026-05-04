export interface Project {
  id: string;
  title: string;
  subject: string;
  level: string;
  progress: number;
  emoji: string;
  color: string;
  description: string;
  items: { name: string; category: string; checked: boolean }[];
  milestones: { id: number; title: string; status: 'completed' | 'current' | 'upcoming'; emoji: string; description: string }[];
}

export const sampleProjects: Project[] = [
  {
    id: "sustainable-city",
    title: "Sustainable City Model",
    subject: "Environmental Science",
    level: "Class 10",
    progress: 0,
    emoji: "🏙️",
    color: "var(--soft-blue)",
    description: "Design a futuristic city that runs on 100% renewable energy and zero waste management systems.",
    items: [
      { name: "Solar Panel Miniature Kit", category: "Hardware", checked: false },
      { name: "Recycled Cardboard", category: "Stationery", checked: true },
      { name: "LED Lights (3V)", category: "Electronics", checked: false },
      { name: "Eco-friendly Paint Set", category: "Art", checked: false },
    ],
    milestones: [
      { id: 1, title: "City Layout Plan", status: "current", emoji: "📐", description: "Sketching the zones for residential, industrial, and green areas." },
      { id: 2, title: "Energy Grid Setup", status: "upcoming", emoji: "⚡", description: "Wiring the miniature solar panels to the buildings." },
      { id: 3, title: "Waste Management System", status: "upcoming", emoji: "♻️", description: "Creating a mock-up of the recycling plant." },
    ]
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    subject: "Science & Tech",
    level: "Class 12",
    progress: 45,
    emoji: "🌱",
    color: "var(--soft-purple)",
    description: "A soil-moisture based automated watering system for small-scale farming.",
    items: [
      { name: "Soil Moisture Sensor", category: "Electronics", checked: true },
      { name: "Water Pump (Mini)", category: "Hardware", checked: true },
      { name: "Jumper Wires", category: "Electronics", checked: false },
      { name: "Plastic Tubing", category: "Hardware", checked: false },
    ],
    milestones: [
      { id: 1, title: "Circuit Design", status: "completed", emoji: "🔌", description: "Connecting the sensor to the microcontroller." },
      { id: 2, title: "Coding Logic", status: "current", emoji: "💻", description: "Writing the threshold values for water activation." },
      { id: 3, title: "Field Test", status: "upcoming", emoji: "🚜", description: "Testing the system with a potted plant." },
    ]
  },
  {
    id: "folk-dances-india",
    title: "Folk Dances of India",
    subject: "Art Integration",
    level: "Class 9",
    progress: 75,
    emoji: "💃",
    color: "var(--soft-pink)",
    description: "An exploration of Indian heritage through traditional dance forms of paired states.",
    items: [
      { name: "Traditional Fabrics (Swatches)", category: "Art", checked: true },
      { name: "State History Map", category: "Resources", checked: true },
      { name: "Video Recording Device", category: "Tech", checked: false },
      { name: "Bibliography Cards", category: "Stationery", checked: false },
    ],
    milestones: [
      { id: 1, title: "State Selection", status: "completed", emoji: "📍", description: "Choosing the paired state as per CBSE guidelines." },
      { id: 2, title: "Performance Recording", status: "completed", emoji: "🎥", description: "Recording a 2-minute dance demonstration." },
      { id: 3, title: "Final Documentation", status: "current", emoji: "📂", description: "Writing the cultural significance report." },
    ]
  },
  {
    id: "math-in-architecture",
    title: "Math in Architecture",
    subject: "Mathematics",
    level: "Class 11",
    progress: 10,
    emoji: "🏛️",
    color: "var(--soft-yellow)",
    description: "Analyzing the geometric symmetry and structural mathematics of the Taj Mahal.",
    items: [
      { name: "Protractor & Compass Set", category: "Stationery", checked: true },
      { name: "3D Geometric Blocks", category: "Tools", checked: false },
      { name: "Architectural Blueprints", category: "Resources", checked: false },
      { name: "Tracing Paper", category: "Stationery", checked: false },
    ],
    milestones: [
      { id: 1, title: "Historical Research", status: "completed", emoji: "🔍", description: "Understanding the origins and construction period." },
      { id: 2, title: "Geometry Analysis", status: "current", emoji: "📏", description: "Identifying conic sections and symmetries in the design." },
      { id: 3, title: "Calculations Report", status: "upcoming", emoji: "🔢", description: "Compiling the mathematical proofs and area calculations." },
    ]
  }
];
