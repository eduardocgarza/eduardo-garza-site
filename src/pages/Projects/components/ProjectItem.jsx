import React from "react";
import ProjectButtonRed from "./ProjectButtonRed"
import ProjectButtonBlue from "./ProjectButtonBlue"


export default function ProjectItem(props) {
  const { project } = props;
  if(!project) return null;

  const {
    title,
    description,
    imagePath,
    tools,
    extendedDescription,
    repositoryURL,
    demoURL,
    videoURL,
  } = project;

  if(!title) return null;

  return (
    <section className="mb-10">
      <section className="flex flex-col md:flex-row p-6 border rounded-3xl shadow-sm">
        {imagePath && (
          <section className="flex items-center justify-center md:items-start md:py-4">
            <img
              src={imagePath}
              alt={title}
              className="block w-[50px] rounded-full"
            />
          </section>
        )}
        <section className="ml-6 flex-1">
          <header className="mb-2 text-center md:text-left">
            <h2 className="font-medium text-[20px] text-medium">{title}</h2>
            <p className="text-sm text-gray-500 text-[14px]">{description}</p>
          </header>
          <section className="flex flex-wrap mb-2 justify-center md:justify-start">
            {tools && tools.map((toolName) => (
              <p
                className="text-xs mr-1 mb-2 bg-gray-200 rounded-full py-1 px-2 text-gray-700 hover:bg-gray-300 cursor-pointer transition duration-500 ease-in-out"
                key={toolName}
              >
                {toolName}
              </p>
            ))}
          </section>
          <section className="mb-4 text-center md:text-left">
            <p className="text-gray-900 leading-[22px] text-xs">
              {extendedDescription}
            </p>
          </section>
          <section className="flex justify-center items-center md:justify-stretch">
            {repositoryURL && <ProjectButtonRed url={repositoryURL} />}
            {demoURL && <ProjectButtonBlue url={demoURL} />}
          </section>
        </section>
      </section>
      {videoURL && (
        <section className="flex items-center justify-center mt-10">
          <iframe
            allowFullScreen
            src={videoURL}
            title={title}
            className="w-[450px] h-[300px] rounded-2xl"
          ></iframe>
        </section>
      )}
    </section>
  );
}
