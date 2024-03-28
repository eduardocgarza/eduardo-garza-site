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

const CIRCUIT_THEORY_BLOGS = [
  {
    "title": "Basic Concepts",
    "shortDescription": "Introduction to fundamental concepts in electronics.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "basic-concepts",
    "fileName": "basic_concepts.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Basic Laws",
    "shortDescription": "Introduction to basic laws governing electrical circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "basic-laws",
    "fileName": "basic_laws.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Methods of Analysis",
    "shortDescription": "Various methods for analyzing electrical circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "methods-of-analysis",
    "fileName": "methods_of_analysis.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Circuit Theorems",
    "shortDescription": "Overview of circuit theorems used in circuit analysis.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "circuit-theorems",
    "fileName": "circuit_theorems.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Operational Amplifiers",
    "shortDescription": "Introduction to operational amplifiers and their applications.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "operational-amplifiers",
    "fileName": "operational_amplifiers.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.ANALOG_ELECTRONICS]
  },
  {
    "title": "Capacitors and Inductors",
    "shortDescription": "Overview of capacitors and inductors in electronic circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "capacitors-and-inductors",
    "fileName": "capacitors_and_inductors.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.ANALOG_ELECTRONICS]
  },
  {
    "title": "First-Order Circuits",
    "shortDescription": "Analysis of circuits containing first-order elements.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "first-order-circuits",
    "fileName": "first_order_circuits.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Second-Order Circuits",
    "shortDescription": "Analysis of circuits containing second-order elements.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "second-order-circuits",
    "fileName": "second_order_circuits.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Sinusoids and Phasors",
    "shortDescription": "Introduction to sinusoids and phasors in electrical circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "sinusoids-and-phasors",
    "fileName": "sinusoids_and_phasors.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Sinusoidal Steady-State Analysis",
    "shortDescription": "Analysis of circuits in sinusoidal steady-state conditions.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "sinusoidal-steady-state-analysis",
    "fileName": "sinusoidal_steady_state_analysis.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "AC Power Analysis",
    "shortDescription": "Analysis of power in alternating current (AC) circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "ac-power-analysis",
    "fileName": "ac_power_analysis.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Three-Phase Circuits",
    "shortDescription": "Analysis of circuits involving three-phase electrical systems.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "three-phase-circuits",
    "fileName": "three_phase_circuits.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Magnetically Coupled Circuits",
    "shortDescription": "Analysis of circuits with magnetically coupled elements.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "magnetically-coupled-circuits",
    "fileName": "magnetically_coupled_circuits.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Frequency Response",
    "shortDescription": "Analysis of circuit response to varying frequencies.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "frequency-response",
    "fileName": "frequency_response.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Introduction to the Laplace Transform",
    "shortDescription": "Introduction to the Laplace transform and its applications in circuit analysis.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "introduction-to-laplace-transform",
    "fileName": "introduction_to_laplace_transform.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Applications of the Laplace Transform",
    "shortDescription": "Applications of the Laplace transform in solving differential equations in circuits.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "applications-of-laplace-transform",
    "fileName": "applications_of_laplace_transform.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "The Fourier Series",
    "shortDescription": "Introduction to the Fourier series and its application in circuit analysis.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "fourier-series",
    "fileName": "fourier_series.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Fourier Transform",
    "shortDescription": "Introduction to the Fourier transform and its application in circuit analysis.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "fourier-transform",
    "fileName": "fourier_transform.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  },
  {
    "title": "Two-Port Networks",
    "shortDescription": "Introduction to two-port networks and their analysis techniques.",
    "datePublished": "2024-03-28",
    "lastEdited": "2024-03-28",
    "slug": "two-port-networks",
    "fileName": "two_port_networks.md",
    "type": TYPES.HARDWARE,
    "categories": [HARDWARE_CATEGORIES.CIRCUIT_THEORY]
  }
]

export const ALL_BLOGS = [
  ...CIRCUIT_THEORY_BLOGS,
  {
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
