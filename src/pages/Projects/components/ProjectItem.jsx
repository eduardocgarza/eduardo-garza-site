import React from "react";
import { Link } from "react-router-dom";
import ProjectButtonRed from "./ProjectButtonRed";
import ProjectButtonBlue from "./ProjectButtonBlue";

export default function ProjectItem(props) {
  const { project } = props;
  if (!project) return null;

  const {
    title,
    description,
    imagePath,
    tools,
    extendedDescription,
    detailsURL,
    detailsLabel = "View archive",
    previewImagePaths = [],
    repositoryURL,
    demoURL,
    videoURLs = [],
  } = project;

  if (!title) return null;

  return (
    <section className="mb-10">
      <section className="flex flex-col md:flex-row border border-gray-200 p-6 rounded-2xl shadow-sm">
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
            {tools &&
              tools.map((toolName) => (
                <p
                  className="text-xs mr-1 mb-2 bg-gray-200 rounded-full py-1 px-2 text-gray-700 hover:bg-gray-300 cursor-pointer transition duration-500 ease-in-out"
                  key={toolName}
                >
                  {toolName}
                </p>
              ))}
          </section>
          <section className="mb-4 text-center md:text-left">
            <p className="text-gray-900 leading-[26px] text-[14px]">
              {extendedDescription}
            </p>
          </section>
          <section className="flex justify-center items-center md:justify-stretch">
            {detailsURL && (
              <Link
                className="mr-2 inline-flex items-center rounded-full bg-gray-900 px-3 py-2 text-xs text-white transition duration-200 hover:bg-gray-700"
                to={detailsURL}
              >
                <span>{detailsLabel}</span>
              </Link>
            )}
            {repositoryURL && <ProjectButtonRed url={repositoryURL} />}
            {demoURL && <ProjectButtonBlue url={demoURL} />}
          </section>
          {detailsURL && previewImagePaths.length > 0 && (
            <Link
              className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start"
              to={detailsURL}
            >
              {previewImagePaths.map((previewImagePath, index) => (
                <img
                  alt={`${title} preview ${index + 1}`}
                  className="h-14 w-14 rounded-xl object-cover shadow-sm transition duration-200 hover:scale-[1.03]"
                  key={previewImagePath}
                  src={previewImagePath}
                />
              ))}
            </Link>
          )}
        </section>
      </section>
      {videoURLs.length > 0 &&
        videoURLs.map((videoURL, index) => (
          <section
            className="flex items-center justify-center mt-10"
            key={index}
          >
            <iframe
              allowFullScreen
              src={videoURL}
              title={title}
              className="w-[450px] h-[300px] rounded-2xl"
            ></iframe>
          </section>
        ))}
    </section>
  );
}
