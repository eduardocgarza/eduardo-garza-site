import SectionItem from "./SectionItem";
import { BEGINNER_CIRCUIT_THEORY } from "../../../constants/blogs/hardware/analogElectronicsBlogs";
import {
  HARDWARE_EQUIPMENT_BLOGS,
  HARDWARE_INDUSTRY_BLOGS,
  HARDWARE_RECOMMENDATIONS_BLOGS,
  HARDWARE_TOOLS_BLOGS,
} from "../../../constants/blogs/hardware/generalBlogs";
import { 
  PCB_DESIGN_BLOGS, 
  PCB_DESIGN_STANDARDS_BLOGS 
} from "../../../constants/blogs/hardware/pcbDesignBlogs";
import {
  PCB_MANUFACTURING_MAIN_GUIDES_BLOGS,
  PCB_MANUFACTURING_DETAILED_GUIDES_BLOGS,
  PCB_MANUFACTURING_PROCESSES_BLOGS,
} from "../../../constants/blogs/hardware/pcbManufacturingBlogs";


export default function HardwareBlogs() {
  const generalCategories = [
    {
      title: "Recommendations",
      blogs: HARDWARE_RECOMMENDATIONS_BLOGS,
    },
    {
      title: "Equipment",
      blogs: HARDWARE_EQUIPMENT_BLOGS,
    },
    {
      title: "Industry",
      blogs: HARDWARE_INDUSTRY_BLOGS,
    },
    {
      title: "Tools",
      blogs: HARDWARE_TOOLS_BLOGS,
    },
  ];

  const circuitTheoryCategories = [
    {
      title: "Beginner",
      blogs: BEGINNER_CIRCUIT_THEORY,
    },
  ]

  const pcbDesignCategories = [
    {
      title: "Design and Engineering",
      blogs: PCB_DESIGN_BLOGS,
    },
    {
      title: "Standards and Certifications",
      blogs: PCB_DESIGN_STANDARDS_BLOGS,
    },
  ]

  const pcbManufacturingCategories = [
    {
      title: "Main Guides",
      blogs: PCB_MANUFACTURING_MAIN_GUIDES_BLOGS,
    },
    {
      title: "Detailed Guides",
      blogs: PCB_MANUFACTURING_DETAILED_GUIDES_BLOGS,
    },
    {
      title: "Manufacturing Processes",
      blogs: PCB_MANUFACTURING_PROCESSES_BLOGS,
    },
  ]
  
  return (
    <>
      <SectionItem title="General" categories={generalCategories} />
      <SectionItem title="Circuit Theory " categories={circuitTheoryCategories} />
      <SectionItem title="Analog Electronics " categories={[]} />
      <SectionItem title="Digital Electronics" categories={[]} />
      <SectionItem title="Audio and Signals " categories={[]} />
      <SectionItem title="PCB Design" categories={pcbDesignCategories} />
      <SectionItem title="PCB Manufacturing " categories={pcbManufacturingCategories} />
    </>
  );
}
