import React from "react";
import { ALL_PROJECTS } from "./allProjects";
import RootLayout from "../../components/RootLayout";
import ProjectItem from "./components/ProjectItem";


export default function ProjectsPage(props) {

  console.log("-- projects: ", ALL_PROJECTS)

  return (
    <RootLayout>
      <section className="mt-10 mb-8">
        {ALL_PROJECTS.map(projectItem => (
          <ProjectItem project={projectItem} />
        ))}
      </section>
    </RootLayout>
  );
}
