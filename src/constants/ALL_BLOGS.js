
export const CATEGORIES = {
  SOFTWARE: {
    categoryName: "Software",
    categorySlug: "software",
    subCategories: {
      FRONT_END: {
        categoryName: "Front-End",
        categorySlug: "front-end",
      },
      BACK_END: {
        categoryName: "Back-End",
        categorySlug: "back-end",
      },
      ARCHITECTURE: {
        categoryName: "Architecture",
        categorySlug: "architecture",
      },
      DEV_OPS: {
        categoryName: "Dev-Ops",
        categorySlug: "dev-ops",
      },
    },
  },
  HARDWARE: {
    categoryName: "Hardware",
    categorySlug: "hardware",
    subCategories: {
      GENERAL: {
        categoryName: "General",
        categorySlug: "hardware-general"
      },
      CIRCUIT_THEORY: {
        categoryName: "Circuit Theory",
        categorySlug: "circuit-theory"
      },
      ANALOG_ELECTRONICS: {
        categoryName: "Analog",
        categorySlug: "analog"
      },
      DIGITAL_ELECTRONICS: {
        categoryName: "Digital",
        categorySlug: "digital"
      },
      AUDIO: {
        categoryName: "Audiop",
        categorySlug: "audio"
      },
      PCB_DESIGN: {
        categoryName: "PCB Design",
        categorySlug: "pcb-design"
      },
    },
  },
  HARDWARE_MANUFACTURING: {
    categoryName: "PCB Manufacturing",
    categorySlug: "pcb-manufacturing",
    subCategories: {
      GENERAL: {
        categoryName: "General",
        categorySlug: "pcb-manufacturing"
      },
      MANUFACTURING_MATERIALS: {
        categoryName: "PCB Materials",
        categorySlug: "pcb-materials"
      },
      MANUFACTURING_PROCESSES: {
        categoryName: "PCB Processes",
        categorySlug: "pcb-processes"
      },
    }
  },
}



const BLOGS_PCB_MANUFACTURING_MATERIALS = [
  {
    "title": "A Complete Guide into All PCB Manufacturing Materials",
    "shortDescription": "Comprehensive overview of materials used in PCB manufacturing.",
    "datePublished": "2023-12-03",
    "lastEdited": "2023-12-03",
    "slug": "a-complete-guide-into-all-pcb-manufacturing-materials",
    "fileName": "a-complete-guide-into-all-pcb-manufacturing-materials.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1zFPrtJb01pRG_MvlUaU1hlIdcJS0XbZTJZ0OC9MB4lY/edit#heading=h.vpco1j5iwa37"
  },
  {
    "title": "Fiberglass in PCB Manufacturing",
    "shortDescription": "Exploring the role of fiberglass in the PCB manufacturing process.",
    "datePublished": "2023-12-10",
    "lastEdited": "2023-12-10",
    "slug": "fiberglass-in-pcb-manufacturing",
    "fileName": "fiberglass-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1KjdPpg9dqD0rKjV7TTuGkFozkpTxt9KYE6bxHCAUyIw/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Copper Foil in PCB Manufacturing",
    "shortDescription": "An in-depth look at the use of copper foil in PCB fabrication.",
    "datePublished": "2023-12-17",
    "lastEdited": "2023-12-17",
    "slug": "copper-foil-in-pcb-manufacturing",
    "fileName": "copper-foil-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1yW9SHFBZmyvCZUpdGeOBg6gZm479YEs9I81tbpYBymA/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Resin in PCB Manufacturing",
    "shortDescription": "Examining the application of resin in the PCB manufacturing process.",
    "datePublished": "2023-12-24",
    "lastEdited": "2023-12-24",
    "slug": "resin-in-pcb-manufacturing",
    "fileName": "resin-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1fjZyfnm2riG0fyItKWEP-t9vH_JwRczmMO7ild5_gxM/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Photomask in PCB Manufacturing",
    "shortDescription": "Insight into the use of photomasks in PCB fabrication.",
    "datePublished": "2023-12-31",
    "lastEdited": "2023-12-31",
    "slug": "photomask-in-pcb-manufacturing",
    "fileName": "photomask-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1zdwMQr8gyAbilMfgrkxCZ3W2S131-pzYVut8DezdEPk/edit#heading=h.1sbkrdgo3do3"
  },
  {
    "title": "Photoresist in PCB Manufacturing",
    "shortDescription": "Understanding the role of photoresist in PCB production.",
    "datePublished": "2024-01-08",
    "lastEdited": "2024-01-08",
    "slug": "photoresist-in-pcb-manufacturing",
    "fileName": "photoresist-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1vtJLCsdxev8BFCv2HDnuYFfZBpaVRRnQ1JjlN6dCOiw/edit#heading=h.1sbkrdgo3do3"
  },
  {
    "title": "Prepreg in PCB Manufacturing",
    "shortDescription": "Exploring the use of prepreg materials in PCB fabrication.",
    "datePublished": "2024-01-15",
    "lastEdited": "2024-01-15",
    "slug": "prepreg-in-pcb-manufacturing",
    "fileName": "prepreg-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1M-za42-icpnZeyIqtl2M2X6bJx9HMegxXxVW6BRt5Hk/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Base Materials in PCB Manufacturing",
    "shortDescription": "Overview of base materials used in PCB manufacturing processes.",
    "datePublished": "2024-01-22",
    "lastEdited": "2024-01-22",
    "slug": "base-materials-in-pcb-manufacturing",
    "fileName": "base-materials-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/17C6lrxpgSyC1xl7YUCIjqUBhPFbqdLdWsK1PeMiQuxI/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Solder Mask in PCB Manufacturing",
    "shortDescription": "Insight into the application and importance of solder mask in PCBs.",
    "datePublished": "2024-01-29",
    "lastEdited": "2024-01-29",
    "slug": "solder-mask-in-pcb-manufacturing",
    "fileName": "solder-mask-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/13IwUoZqgTUeQ3t6wAl7N1xxSZpAifi1B5e3ouzEr9jg/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Silkscreen in PCB Manufacturing",
    "shortDescription": "The significance of silkscreen in the PCB manufacturing process.",
    "datePublished": "2024-02-05",
    "lastEdited": "2024-02-05",
    "slug": "silkscreen-in-pcb-manufacturing",
    "fileName": "silkscreen-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1CCUsdcxmTbJOsfZhWrXnptuN7EQehHWoOvHzu9ycla8/edit#heading=h.5shc5tqie8t6"
  },
  {
    "title": "Surface Finishes in PCB Manufacturing",
    "shortDescription": "Exploring various surface finishes used in PCB manufacturing.",
    "datePublished": "2024-02-12",
    "lastEdited": "2024-02-12",
    "slug": "surface-finishes-in-pcb-manufacturing",
    "fileName": "surface-finishes-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_MATERIALS,
    "documentURL": "https://docs.google.com/document/d/1vVbP5q0M824fTm7onk2ND45KurTjdpIqtUzFo-uDG4o/edit#heading=h.5shc5tqie8t6"
  }
];


const BLOGS_PCB_MANUFACTURING_PROCESSES = [
  {
    "title": "A Complete Guide of the PCB Manufacturing Process",
    "shortDescription": "Comprehensive overview of the entire PCB manufacturing process.",
    "datePublished": "2024-02-19",
    "lastEdited": "2024-02-19",
    "slug": "a-complete-guide-of-the-pcb-manufacturing-process",
    "fileName": "a-complete-guide-of-the-pcb-manufacturing-process.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1zFPrtJb01pRG_MvlUaU1hlIdcJS0XbZTJZ0OC9MB4lY/edit#heading=h.hoz9ult2et0m"
  },
  {
    "title": "Lamination in PCB Manufacturing",
    "shortDescription": "Exploring the lamination stage in PCB fabrication.",
    "datePublished": "2024-02-26",
    "lastEdited": "2024-02-26",
    "slug": "lamination-in-pcb-manufacturing",
    "fileName": "lamination-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1aH0bagSLh0MbZrJsoWaDsjWLkJBA51tPyQBHrunyBks/edit#heading=h.lzbtbscpzje"
  },
  {
    "title": "Drilling in PCB Manufacturing",
    "shortDescription": "Overview of the drilling process in PCB fabrication.",
    "datePublished": "2024-03-04",
    "lastEdited": "2024-03-04",
    "slug": "drilling-in-pcb-manufacturing",
    "fileName": "drilling-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1psjqYjCv2vBxJxKjzmAX2iIcXm53QbmSSaJkiEkLCNI/edit#heading=h.cl9iue6f8z7k"
  },
  {
    "title": "Electroplating in PCB Manufacturing",
    "shortDescription": "Insight into electroplating techniques in PCB production.",
    "datePublished": "2024-03-11",
    "lastEdited": "2024-03-11",
    "slug": "electroplating-in-pcb-manufacturing",
    "fileName": "electroplating-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1FpTEeD4AyAd8dKqMt4--t3r2h6H9KHSI0FsW2T4T1Ko/edit#heading=h.gjdgxs"
  },
  {
    "title": "Electroless Plating in PCB Manufacturing",
    "shortDescription": "Insight into electroless plating techniques in PCB production.",
    "datePublished": "2024-03-11",
    "lastEdited": "2024-03-11",
    "slug": "electroless-plating-in-pcb-manufacturing",
    "fileName": "electroless-plating-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1psoUh48mmPixEuKuyYjTFPKA7ACh5_hgRfMi5XyJeRw/edit#heading=h.gjdgxs"
  },
  {
    "title": "Imaging in PCB Manufacturing",
    "shortDescription": "Examining the imaging step in PCB fabrication.",
    "datePublished": "2024-03-18",
    "lastEdited": "2024-03-18",
    "slug": "imaging-in-pcb-manufacturing",
    "fileName": "imaging-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/1p_NTea_I1SRNBaFvwZYDW7FAl7b4ZRNgUqpkDG3dbBY/edit#heading=h.cw4lw78uj5co"
  },
  {
    "title": "Etching and Stripping in PCB Manufacturing",
    "shortDescription": "Examining the etching and stripping steps in PCB fabrication.",
    "datePublished": "2024-03-18",
    "lastEdited": "2024-03-18",
    "slug": "etching-and-stripping-in-pcb-manufacturing",
    "fileName": "etching-and-stripping-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/15B_6XWm6gBHVFZcv_Kj2WRD5lYdV1gWCzVVAdTisCU4/edit"
  },
  {
    "title": "Inspection and Testing in PCB Manufacturing",
    "shortDescription": "Overview of the inspection and testing phase in PCB fabrication.",
    "datePublished": "2024-03-25",
    "lastEdited": "2024-03-25",
    "slug": "inspection-and-testing-in-pcb-manufacturing",
    "fileName": "inspection-and-testing-in-pcb-manufacturing.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/16Bbg4VqxxSDTFwhPgHvKSjY6PyQOro5QHcwpFC9ph0Q/edit#heading=h.6jpk7apmk46z"
  },
  {
    "title": "A Complete Guide of the PCB Assembly Process",
    "shortDescription": "Comprehensive overview of the entire PCB assembly process.",
    "datePublished": "2024-04-01",
    "lastEdited": "2024-04-01",
    "slug": "a-complete-guide-of-the-pcb-assembly-process",
    "fileName": "a-complete-guide-of-the-pcb-assembly-process.md",
    "category": CATEGORIES.HARDWARE_MANUFACTURING.categorySlug,
    "subCategory": CATEGORIES.HARDWARE_MANUFACTURING.subCategories.MANUFACTURING_PROCESSES,
    "documentURL": "https://docs.google.com/document/d/19lW1Gr2DErDvZ6iXpx0ZITeNKQbpnIghlEMwGc4HssQ/edit"
  }
];


export const ALL_BLOGS = [
  ...BLOGS_PCB_MANUFACTURING_MATERIALS,
  ...BLOGS_PCB_MANUFACTURING_PROCESSES,
];
