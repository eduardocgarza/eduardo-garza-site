import SectionItem from "./SectionItem";
import {
  API_ARCHITECTURE_BLOGS,
  TESTING_ARCHITECTURE_BLOGS,
  WEB_APP_ARCHITECTURE_BLOGS,
} from "../../../constants/blogs/software/architectureBlogs";
import {
  DATABASE_BLOGS,
  PRACTICAL_DATABASE_BLOGS,
} from "../../../constants/blogs/software/databaseBlogs";
import { REACT_BLOGS } from "../../../constants/blogs/software/frontEndBlogs";
import {
  DEVELOPER_SETUP_BLOGS,
  DEVELOPER_TOOLS_BLOGS,
  POSTMAN_SERIES,
} from "../../../constants/blogs/software/generalBlogs";
import {
  NODE_BLOGS,
  PYTHON_BLOGS,
} from "../../../constants/blogs/software/backEndBlogs";

export default function SoftwareBlogs() {
  const generalCategories = [
    {
      title: "Developer Setup",
      blogs: DEVELOPER_SETUP_BLOGS,
    },
    {
      title: "Developer Tools",
      blogs: DEVELOPER_TOOLS_BLOGS,
    },
    {
      title: "Postman",
      blogs: POSTMAN_SERIES,
    },
  ];
  const architectureCategories = [
    {
      title: "Web Apps",
      blogs: WEB_APP_ARCHITECTURE_BLOGS,
    },
    {
      title: "APIs",
      blogs: API_ARCHITECTURE_BLOGS,
    },
    {
      title: "Testing",
      blogs: TESTING_ARCHITECTURE_BLOGS,
    },
  ];
  const frontEndCategories = [
    { 
      title: "React", 
      blogs: REACT_BLOGS 
    }
  ];
  const backEndCategories = [
    {
      title: "Node", 
      blogs: NODE_BLOGS 
    },
    {
      title: "Python", 
      blogs: PYTHON_BLOGS 
    },
  ];
  const databaseCategories = [
    {
      title: "Database Theory",
      blogs: DATABASE_BLOGS,
    },
    {
      title: "Practical Databases",
      blogs: PRACTICAL_DATABASE_BLOGS,
    },
  ];

  return (
    <>
      <SectionItem title="General" categories={generalCategories} />
      <SectionItem title="Architecture" categories={architectureCategories} />
      <SectionItem title="Front End" categories={frontEndCategories} />
      <SectionItem title="Back End" categories={backEndCategories} />
      <SectionItem title="Database" categories={databaseCategories} />
    </>
  );
}
