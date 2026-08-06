export function getFullSlidePath(slideNumber) {
  return `/mozart/full/slide-${slideNumber}.png`;
}

export function getPreviewPath(photoPath) {
  return photoPath.replace("/full/", "/preview/").replace(".png", "-1.png");
}

export function getSlideNumber(photoPath) {
  const match = photoPath.match(/slide-(\d+)\.png$/);
  return match ? Number(match[1]) : null;
}

export function makeFullSlidePaths(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => getFullSlidePath(start + index));
}

export const mozartBlocks = [
  {
    type: "gallery",
    name: "Opening Design Views",
    photoPaths: makeFullSlidePaths(1, 3),
  },
  {
    type: "paragraphs",
    name: "Opening Notes",
    paragraphs: [
      "This is the story about how one-time, I built a piano and dreamt of changing the world … or at least, changing the musical instruments landscape.",
      "Like the vast majority of young people in technology today, I grew up with great entrepreneurial giants to look up to - Steve Jobs & Steve Wozniak, the Google guys, and all the great people that went on to create many of the platforms and apps that we use today. Definitely less present now in the culture zeitgeist, the early 2000s truly felt like a powerfully energetic renaissance where the coder geek in his dorm room could build something truly great and change the world. Beyond the myth of the story, we saw many cases that produced these Alexander the Great-like characters - that could slay every dragon, bring a collective set of people together from unique and diverse backgrounds, and build these outstanding companies. It was captivating to witness - and provided no obstacle for anyone else who wanted to get in the ring and give it a shot.",
    ],
  },
  {
    type: "gallery",
    name: "Early Product Angles",
    photoPaths: makeFullSlidePaths(4, 8),
  },
  {
    type: "paragraphs",
    name: "Early Product Notes",
    paragraphs: [
      "Write about the first product direction here. This section can describe what the early photos are meant to show and why those decisions mattered.",
    ],
  },
  {
    type: "gallery",
    name: "Interface Exploration",
    photoPaths: makeFullSlidePaths(9, 14),
  },
  {
    type: "paragraphs",
    name: "Interface Notes",
    paragraphs: [
      "Write about the interface exploration here. This paragraph can cover the screen experience, the teaching flow, or the assumptions that changed while testing.",
      "Use this paragraph for any details about interaction design, visual hierarchy, or the way the software needed to support playing music in real time.",
    ],
  },
  {
    type: "gallery",
    name: "Prototype Details",
    photoPaths: makeFullSlidePaths(15, 21),
  },
  {
    type: "paragraphs",
    name: "Prototype Notes",
    paragraphs: [
      "Write about the prototype details here. This can be where you explain the work behind turning the concept into a physical instrument.",
      "Use this second paragraph for what broke, what improved, or what you learned from the first assembled version.",
    ],
  },
  {
    type: "gallery",
    name: "Keyboard Close-Ups",
    photoPaths: makeFullSlidePaths(22, 23),
  },
  {
    type: "paragraphs",
    name: "Keyboard Notes",
    paragraphs: [
      "Write about the keyboard and playing surface here. This can explain how the tactile experience, electronics, and enclosure had to come together.",
    ],
  },
  {
    type: "gallery",
    name: "Control Surface Notes",
    photoPaths: makeFullSlidePaths(24, 25),
  },
  {
    type: "paragraphs",
    name: "Controls Notes",
    paragraphs: [
      "Write about the control surface here. This section can cover the decisions around access, clarity, and what needed to be available during a lesson or performance.",
    ],
  },
  {
    type: "gallery",
    name: "Cabinet Form Study",
    photoPaths: makeFullSlidePaths(26, 30),
  },
  {
    type: "paragraphs",
    name: "Cabinet Notes",
    paragraphs: [
      "Write about the cabinet and physical form here. This can include industrial design, dimensions, materials, or the balance between a furniture object and an electronic product.",
      "Add manufacturing or sourcing context here if this section needs a second paragraph before the next photo row.",
    ],
  },
  {
    type: "gallery",
    name: "Assembly and Fit",
    photoPaths: makeFullSlidePaths(31, 37),
  },
  {
    type: "paragraphs",
    name: "Assembly Notes",
    paragraphs: [
      "Write about assembly and fit here. This can describe how parts came together, what tolerances mattered, and which decisions were driven by manufacturability.",
    ],
  },
  {
    type: "gallery",
    name: "Display Interaction",
    photoPaths: makeFullSlidePaths(38, 41),
  },
  {
    type: "paragraphs",
    name: "Display Notes",
    paragraphs: [
      "Write about the display interaction here. This can explain how the touch interface connected to the piano experience and what the screen needed to communicate at a glance.",
      "Use this paragraph for any notes about visual feedback, lesson timing, or the relationship between the display and the keys.",
    ],
  },
  {
    type: "gallery",
    name: "Hardware Build",
    photoPaths: makeFullSlidePaths(42, 53),
  },
  {
    type: "paragraphs",
    name: "Hardware Notes",
    paragraphs: [
      "Write about the hardware build here. This can include boards, wiring, suppliers, testing, and the practical problems of making the electronics reliable.",
      "Add a second hardware paragraph here for tradeoffs, revisions, or the details that made the product difficult to build well.",
    ],
  },
  {
    type: "gallery",
    name: "Instrument Profile",
    photoPaths: makeFullSlidePaths(54, 57),
  },
  {
    type: "paragraphs",
    name: "Profile Notes",
    paragraphs: [
      "Write about the instrument profile here. This section can explain the final silhouette, proportions, or how the product was meant to sit in a room.",
    ],
  },
  {
    type: "headerPhoto",
    photoPath: getFullSlidePath(58),
  },
  {
    type: "gallery",
    name: "Materials and Finish",
    photoPaths: makeFullSlidePaths(59, 61),
  },
  {
    type: "paragraphs",
    name: "Materials Notes",
    paragraphs: [
      "Write about materials and finish here. This can include the surface finish, color choices, durability concerns, and any factory constraints.",
    ],
  },
  {
    type: "headerPhoto",
    photoPath: getFullSlidePath(62),
  },
  {
    type: "gallery",
    name: "Music Library Screens",
    photoPaths: makeFullSlidePaths(63, 64),
  },
  {
    type: "paragraphs",
    name: "Library Notes",
    paragraphs: [
      "Write about the music library here. This can cover song selection, browsing, search, lesson organization, or how the software made the piano approachable.",
      "Use this paragraph for notes about content structure, playback, MIDI behavior, or anything that connects the library to learning.",
    ],
  },
  {
    type: "headerPhoto",
    photoPath: getFullSlidePath(65),
  },
  {
    type: "gallery",
    name: "Lesson Flow",
    photoPaths: makeFullSlidePaths(66, 67),
  },
  {
    type: "paragraphs",
    name: "Lesson Notes",
    paragraphs: [
      "Write about the lesson flow here. This can explain how a user starts, follows along, gets feedback, and moves from practice into playing.",
    ],
  },
  {
    type: "headerPhoto",
    photoPath: getFullSlidePath(68),
  },
  {
    type: "gallery",
    name: "Practice Mode",
    photoPaths: makeFullSlidePaths(69, 71),
  },
  {
    type: "paragraphs",
    name: "Practice Notes",
    paragraphs: [
      "Write about practice mode here. This can cover repetition, tempo, mistakes, progression, or the decisions behind helping someone improve without friction.",
    ],
  },
  {
    type: "gallery",
    name: "Companion App",
    photoPaths: makeFullSlidePaths(72, 79),
  },
  {
    type: "paragraphs",
    name: "App Notes",
    paragraphs: [
      "Write about the companion app here. This can describe what belonged on the phone, what belonged on the piano, and how those surfaces worked together.",
      "Add any account, social, or remote-control context here if it belongs before the manufacturing photos.",
    ],
  },
  {
    type: "gallery",
    name: "Manufacturing Process",
    photoPaths: makeFullSlidePaths(80, 95),
  },
  {
    type: "paragraphs",
    name: "Manufacturing Notes",
    paragraphs: [
      "Write about manufacturing here. This can include factory coordination, supplier communication, quality checks, packaging, or what changed when the product had to be built repeatedly.",
      "Use this paragraph for a specific production story, constraint, mistake, or decision that shaped the final product.",
    ],
  },
  {
    type: "gallery",
    name: "Team and Workshop",
    photoPaths: makeFullSlidePaths(96, 98),
  },
  {
    type: "paragraphs",
    name: "Team Notes",
    paragraphs: [
      "Write about the team and workshop here. This can cover collaboration, roles, iteration cycles, or the people who helped turn the work into a real product.",
    ],
  },
  {
    type: "gallery",
    name: "Launch Assets",
    photoPaths: makeFullSlidePaths(99, 104),
  },
  {
    type: "paragraphs",
    name: "Launch Notes",
    paragraphs: [
      "Write about the launch assets here. This can explain how the product was presented, photographed, filmed, or positioned for customers and investors.",
      "Add another paragraph here if the launch story needs more context before the website section.",
    ],
  },
  {
    type: "gallery",
    name: "Marketing Website",
    photoPaths: makeFullSlidePaths(105, 111),
  },
  {
    type: "paragraphs",
    name: "Website Notes",
    paragraphs: [
      "Write about the marketing website here. This can cover copy, visual direction, product education, conversion goals, or how the online presence supported the product.",
    ],
  },
  {
    type: "gallery",
    name: "Product Photography",
    photoPaths: makeFullSlidePaths(112, 121),
  },
  {
    type: "paragraphs",
    name: "Photography Notes",
    paragraphs: [
      "Write about the product photography here. This can describe what the images were meant to communicate and how they fit into the larger story of Mozart.",
      "Use this paragraph for any details about staging, lighting, audience, or final presentation.",
    ],
  },
  {
    type: "gallery",
    name: "Final Prototype",
    photoPaths: makeFullSlidePaths(122, 128),
  },
  {
    type: "paragraphs",
    name: "Final Prototype Notes",
    paragraphs: [
      "Write about the final prototype here. This can be where you summarize what the product became, what worked, and what still needed to improve.",
    ],
  },
  {
    type: "gallery",
    name: "Closing Details",
    photoPaths: makeFullSlidePaths(129, 132),
  },
];
