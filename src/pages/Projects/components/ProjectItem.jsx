import React from "react";
import { Link } from "react-router-dom";
import ProjectButtonRed from "./ProjectButtonRed";
import ProjectButtonBlue from "./ProjectButtonBlue";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedText(text, highlightTerms) {
  if (!highlightTerms.length) return text;

  const terms = [...highlightTerms].sort((a, b) => b.length - a.length);
  const termSet = new Set(terms);
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");

  return text.split(pattern).map((part, index) =>
    termSet.has(part) ? (
      <strong className="font-medium text-gray-950" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function ProjectBulletList({ bulletPoints, highlightTerms, className = "mt-2" }) {
  if (!bulletPoints.length) return null;

  return (
    <ul
      className={`${className} list-inside list-disc text-[14.5px] leading-[200%] text-gray-900`}
    >
      {bulletPoints.map((bulletPoint) => (
        <li key={bulletPoint}>
          {renderHighlightedText(bulletPoint, highlightTerms)}
        </li>
      ))}
    </ul>
  );
}

function ProjectBulletSections({ bulletPointSections, highlightTerms }) {
  if (!bulletPointSections.length) return null;

  return (
    <section className="mt-3 space-y-3">
      {bulletPointSections.map((bulletPointSection) => (
        <section key={bulletPointSection.title}>
          <h3 className="mb-1 text-[11px] font-semibold uppercase text-gray-400">
            {bulletPointSection.title}
          </h3>
          <ProjectBulletList
            bulletPoints={bulletPointSection.items}
            className=""
            highlightTerms={highlightTerms}
          />
        </section>
      ))}
    </section>
  );
}

function ProjectDetails({
  bulletPoints,
  bulletPointSections,
  extendedDescription,
  highlightTerms,
}) {
  return (
    <section className="mt-4 text-center md:text-left">
      <p className="text-gray-900 leading-[200%] text-[14.5px]">
        {extendedDescription}
      </p>
      <ProjectBulletList
        bulletPoints={bulletPoints}
        highlightTerms={highlightTerms}
      />
      <ProjectBulletSections
        bulletPointSections={bulletPointSections}
        highlightTerms={highlightTerms}
      />
    </section>
  );
}

export default function ProjectItem(props) {
  const { project } = props;
  if (!project) return null;

  const {
    title,
    description,
    bulletPoints = [],
    bulletPointSections = [],
    highlightTerms = [],
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
      <section className="border border-gray-200 p-6 rounded-2xl shadow-sm">
        <section className="flex flex-col md:flex-row">
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
        <ProjectDetails
          bulletPoints={bulletPoints}
          bulletPointSections={bulletPointSections}
          extendedDescription={extendedDescription}
          highlightTerms={highlightTerms}
        />
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
