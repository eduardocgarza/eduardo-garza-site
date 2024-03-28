const TYPES = {
  SOFTWARE: "software",
  HARDWARE: "hardware",
}

const SOFTWARE_CATEGORIES = {
  FRONT_END: "front-end",
  BACK_END: "back-end",
  ARCHITECTURE: "architecture",
  DEV_OPS: "dev-ops",
}

const HARDWARE_CATEGORIES = {
  CIRCUIT_THEORY: "circuit-theory",
  ANALOG_ELECTRONICS: "analog",
  DIGITAL_ELECTRONICS: "digital",
  AUDIO: "audio",
  PCB_DESIGN: "pcb-design",
  PCB_MANUFACTURING: "pcb-manufacturing",
}

export const ALL_BLOGS = [
  {
    "id": 1,
    "title": "Introduction to Arduino Programming",
    "shortDescription": "Learn the basics of Arduino programming and start building your own projects.",
    "datePublished": "2024-03-15",
    "lastEdited": "2024-03-20",
    "slug": "introduction-to-arduino-programming",
    "fileName": "introduction_to_arduino_programming.md",
    "type": TYPES.SOFTWARE,
    "categories": [SOFTWARE_CATEGORIES.FRONT_END]
  },
  {
    "id": 2,
    "title": "Building Your First Raspberry Pi Project",
    "shortDescription": "Step-by-step guide to creating your first Raspberry Pi project from scratch.",
    "datePublished": "2024-02-28",
    "lastEdited": "2024-03-05",
    "slug": "building-your-first-raspberry-pi-project",
    "fileName": "building_your_first_raspberry_pi_project.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.PCB_DESIGN]
  },
  {
    "id": 3,
    "title": "Understanding Integrated Circuits",
    "shortDescription": "An overview of integrated circuits and their applications in modern electronics.",
    "datePublished": "2024-01-10",
    "lastEdited": "2024-01-15",
    "slug": "understanding-integrated-circuits",
    "fileName": "understanding_integrated_circuits.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "id": 4,
    "title": "Exploring IoT (Internet of Things)",
    "shortDescription": "Discover the world of IoT and its impact on electronics and hardware development.",
    "datePublished": "2023-12-05",
    "lastEdited": "2023-12-10",
    "slug": "exploring-iot-internet-of-things",
    "fileName": "exploring_iot_internet_of_things.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.ANALOG_ELECTRONICS]
  },
  {
    "id": 5,
    "title": "Introduction to PCB Design",
    "shortDescription": "Learn the basics of PCB design and how to create your own printed circuit boards.",
    "datePublished": "2023-11-20",
    "lastEdited": "2023-11-25",
    "slug": "introduction-to-pcb-design",
    "fileName": "introduction_to_pcb_design.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.PCB_MANUFACTURING]
  },
  {
    "id": 6,
    "title": "Understanding Analog vs. Digital Signals",
    "shortDescription": "Dive into the differences between analog and digital signals in electronics.",
    "datePublished": "2023-10-15",
    "lastEdited": "2023-10-20",
    "slug": "understanding-analog-vs-digital-signals",
    "fileName": "understanding_analog_vs_digital_signals.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.DIGITAL_ELECTRONICS]
  },
  {
    "id": 7,
    "title": "Getting Started with Microcontrollers",
    "shortDescription": "A beginner's guide to microcontrollers and how to use them in your projects.",
    "datePublished": "2023-09-05",
    "lastEdited": "2023-09-10",
    "slug": "getting-started-with-microcontrollers",
    "fileName": "getting_started_with_microcontrollers.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.AUDIO]
  },
  {
    "id": 8,
    "title": "Introduction to Sensors",
    "shortDescription": "Explore different types of sensors and their applications in electronics.",
    "datePublished": "2023-08-20",
    "lastEdited": "2023-08-25",
    "slug": "introduction-to-sensors",
    "fileName": "introduction_to_sensors.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.ANALOG_ELECTRONICS]
  },
  {
    "id": 9,
    "title": "DIY Electronics Projects for Beginners",
    "shortDescription": "Easy-to-follow electronics projects for beginners to kickstart their learning journey.",
    "datePublished": "2023-07-10",
    "lastEdited": "2023-07-15",
    "slug": "diy-electronics-projects-for-beginners",
    "fileName": "diy_electronics_projects_for_beginners.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.PCB_DESIGN]
  },
  {
    "id": 10,
    "title": "Troubleshooting Common Hardware Issues",
    "shortDescription": "Tips and techniques to diagnose and fix common hardware problems.",
    "datePublished": "2023-06-01",
    "lastEdited": "2023-06-05",
    "slug": "troubleshooting-common-hardware-issues",
    "fileName": "troubleshooting_common_hardware_issues.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  }
];
