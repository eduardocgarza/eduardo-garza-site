import React from "react";
import RootLayout from "../../components/RootLayout";
import { RESUME_URL } from "../../components/MainNav";

export default function AboutPage() {
  const aboutMe = [
    {
      label: "Location",
      text: "Vancouver, Canada",
    },
    {
      label: "Education",
      text: "Bachelor's dual-degree in Computer Science & Business (2015-2021) at UBC Vancouver",
    },
    {
      label: "Speak",
      text: "English, Spanish, French & Italian",
    },
    {
      label: "Interests",
      text: "Playing piano (20 years), learning Ancient Greek & Latin, reading philosophy & political theory, electronics & hardware homelab",
    },
  ];

  const workExperience = [
    {
      role: "Software Lead",
      company: "Lucy's Circle",
      dates: "December 2024 to May 2026 (1 year 6 months)",
      description:
        "Architected and built a two-sided childcare marketplace on Node.js, PostgreSQL, Redis/Valkey, AWS, and Cloudflare, spanning geospatial discovery, provider onboarding, billing, notifications, internal analytics, production infrastructure, security, CI/CD, migrations, and observability.",
      url: "http://lucyscircle.ca",
    },
    {
      role: "Senior Software Engineer (Contract)",
      company: "HUGE",
      dates: "March 2025 to August 2025 (6 months)",
      description:
        "Built Swift and Next.js applications for a privacy-first AI hardware product, using Vercel AI SDK, LangChain, Ollama, MCP, RAG, and local LLM orchestration for agentic workflows. Implemented MCP tool and sub-agent integrations for Slack, Spotify, and Google Home, plus TTS/STT pipelines for local voice- and tool-driven AI interactions.",
      url: "https://huge.tech",
    },

    {
      role: "Software Engineer",
      company: "Spring Financial",
      dates: "August 2023 to January 2025 (1 year 6 months)",
      description:
        "Built data synchronization services between third-party loan management software and internal CRM systems, reducing loan origination handoffs from about 1 week to under 8 hours and supporting $25M+ in revenue across 100+ sales employees. Led development of an API-based underwriting automation system that replaced 80%+ of manual review tasks for 50+ consumer-loan underwriters.",
      url: "https://springfinancial.ca",
    },
    {
      role: "AI Instructor & Consultant",
      company: "Emerson Academy",
      dates: "2023 to 2026 (4 years)",
      description:
        "Taught practical AI and machine learning implementation to business, school, and association audiences; founded Vancouver AI Society and led weekly AI and software events for two years.",
      url: "https://emersonacademy.org",
    },
    {
      role: "Founder",
      company: "Mozart Pianos",
      description:
        "Led a 10+ member cross-functional team building digital-piano hardware and software prototypes, spanning embedded electronics, industrial and mechanical design, manufacturing, supplier negotiation, and companion software.",
      dates: "October 2020 to September 2023 (3 years)",
      url: "https://mozartpianos.com",
    },
    {
      role: "ERP & Operations Systems Engineer",
      company: "GINTARINI",
      dates: "June 2022 to January 2023 (8 months)",
      description:
        "Software, mechanical, hardware and manufacturing expert; implemented a company-wide, on-factory and in-office ERP system, inventory management software and 3D CAD factory design system for a fast-growth, mid-size cabinetry International manufacturer.",
      url: "https://gintarini.com",
    },
    {
      role: "Full Stack Engineer (Co-op)",
      company: "Bioconscious Research Foundation",
      dates: "May 2019 to September 2019 (5 months)",
      description:
        "Led the migration of an iOS application from Swift to a cross-platform React Native mobile app, helping modernize the product and expand development efficiency across platforms. Responsible for designing and implementing core architectural layers, including React Native lifecycle patterns, Redux state management, third-party API integrations, unit testing, offline support, and persistent storage. In addition to hands-on development, mentored junior developers, led code reviews, and guided the team across development, design, testing, and overall engineering best practices.",
      url: "https://www.bioconscious.tech",
    },
    {
      role: "Mechanical Systems Engineer",
      company: "Montanari Giluio",
      description:
        "Transformed complex engineering designs into detailed technical drawings using advanced CAD software, collaborating closely with cross-functional teams to ensure seamless integration into broader project scopes, while maintaining rigorous quality control to meet industry standards and regulatory requirements.",
      dates: "April 2016 to August 2016 (5 months)",
      url: "https://www.montanarigiulio.com",
    },
  ];

  const hiddenWorkExperienceCompanies = new Set([
    "GINTARINI",
    "Montanari Giluio",
  ]);
  const visibleWorkExperience = workExperience.filter(
    (item) => !hiddenWorkExperienceCompanies.has(item.company),
  );

  const skillSections = [
    {
      title: "Front End",
      icon: "/icons/frontend.png",
      items: [
        {
          label: "Tools",
          text: "React, Next.js, Vue, Svelte, TypeScript, Tailwind, TanStack Query, client caching (IndexedDB, Cache API)",
        },
        {
          text: "Advanced client-side state management and data fetching strategies",
        },
        {
          label: "Browser storage & caching",
          text: "Cookies, LocalStorage, Cache API, IndexedDB, SQLite (DexieJS)",
        },
        {
          text: "Session management, browser fingerprinting, abuse prevention, client-side rate limiting",
        },
        {
          label: "Client integrations",
          text: "Google Maps, Stripe Elements",
        },
        {
          label: "Performance optimization",
          text: "rendering, caching, asset delivery, network efficiency",
        },
      ],
    },
    {
      title: "Back End",
      icon: "/icons/backend.png",
      items: [
        {
          label: "Tools",
          text: "Node.js/Express, Python/FastAPI/Flask, distributed systems, event-driven workflows, Kafka, RabbitMQ, BullMQ",
        },
        {
          label: "RESTful API design",
          text: "versioning, idempotency, pagination, validation, error handling",
        },
        {
          text: "Distributed systems design and service-oriented architecture",
        },
        {
          text: "Event-driven architecture and asynchronous processing",
        },
        {
          text: "Background job systems and workflow orchestration",
        },
        {
          label: "Messaging & Queues",
          text: "Kafka (Raft, Connect, ksqlDB, Schema Registry), RabbitMQ, BullMQ",
        },
        {
          label: "Caching",
          text: "Redis, Valkey, DragonflyDB, Multi-layer caching strategies (application, database, edge)",
        },
      ],
    },
    {
      title: "Data Engineering & Databases",
      icon: "/icons/databases.png",
      items: [
        {
          label: "Tools",
          text: "PostgreSQL, MySQL, MongoDB, ClickHouse, Supabase, Convex",
        },
        {
          text: "OLTP and OLAP schema design (large-scale relational systems, 100+ tables)",
        },
        {
          text: "Data modeling for analytics and high-ingestion systems",
        },
        {
          text: "Batch and streaming data pipeline design",
        },
        {
          label: "Query optimization",
          text: "execution plans, indexing strategies, partial and composite indexes",
        },
        {
          label: "Migrations & Tooling",
          text: "Flyway, Liquibase",
        },
      ],
    },
    {
      title: "Dev Ops",
      icon: "/icons/devops.png",
      items: [
        {
          label: "AWS",
          text: "EC2, ALB/ELB, ECS, SQS, SES, Lambda, CloudFormation",
        },
        {
          label: "Cloudflare",
          text: "Workers, Pages, R2",
        },
        {
          label: "Platforms",
          text: "DigitalOcean, Vercel, Railway, Heroku",
        },
        {
          label: "Containerization & Orchestration",
          text: "Docker, Dockerode, Testcontainers, Podman, Kubernetes",
        },
        {
          text: "Infrastructure as Code (IaC)",
        },
        {
          text: "CI/CD pipelines and deployment automation",
        },
        {
          text: "Load balancing, reverse proxies, and VPC networking",
        },
        {
          text: "Zero-downtime deployments and rollout strategies",
        },
      ],
    },
    {
      title: "Observability & Monitoring",
      icon: "/icons/observability.png",
      items: [
        {
          label: "Grafana stack",
          text: "Prometheus, Loki, Tempo, Mimir",
        },
        {
          label: "Logging systems",
          text: "BetterStack, Papertrail",
        },
        {
          text: "Metrics, tracing, and alerting system design",
        },
        {
          text: "Performance monitoring and incident debugging",
        },
      ],
    },
    {
      title: "Security & Authentication",
      icon: "/icons/security.png",
      iconSize: 65,
      items: [
        {
          text: "Custom authentication systems and RBAC",
        },
        {
          label: "API security",
          text: "rate limiting, abuse detection, session control",
        },
        {
          text: "Secure system design and access control strategies",
        },
      ],
    },
    {
      title: "Integrations & AI Systems",
      icon: "/icons/payments.png",
      items: [
        {
          text: "Stripe Subscriptions and Payments",
        },
        {
          text: "Stripe Connect (marketplace architectures)",
        },
        {
          label: "External APIs",
          text: "webhooks, email and SMS APIs, object storage systems",
        },
        {
          label: "AI systems",
          text: "OpenAI, Claude, Gemini, Vercel AI SDK, LangChain, MCP, RAG",
        },
      ],
    },
    {
      title: "Advanced System Design",
      icon: "/icons/systems.png",
      items: [
        {
          text: "High-scale API and backend architecture",
        },
        {
          text: "Event-driven and real-time system design",
        },
        {
          text: "Multi-layer caching architectures and invalidation strategies",
        },
        {
          text: "Notification systems: push, in-app, email, SMS",
        },
        {
          text: "Data lifecycle and deletion framework design across large schemas",
        },
        {
          text: "Fault-tolerant and horizontally scalable system design",
        },
      ],
    },
  ];

  return (
    <RootLayout>
      <section className="py-14">
        <section className="mb-14">
          <h2 className="font-libreBaskerville text-[28px] mb-4">About</h2>
          {aboutMe.map((item, index) => (
            <li className="text-gray-900 mt-2 mb-3 text-[16px]" key={index}>
              <span className="font-medium">{item.label}:</span>{" "}
              <span>{item.text}</span>
            </li>
          ))}
        </section>
        <section className="mb-14">
          <h2 className="font-libreBaskerville text-[28px] mb-4">
            Work Experience
          </h2>
          <p className="text-gray-900 mt-2 text-[16px] mb-4">
            Full work experience on{" "}
            <a
              href="https://www.linkedin.com/in/eduardocgarza"
              className="text-md text-blue-600 underline hover:text-blue:800"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <div>
            {visibleWorkExperience.map((item) => (
              <div
                className="text-gray-900 mt-2 mb-6 text-[16px] border-l border-l-gray-300 pl-4"
                key={`${item.role}-${item.company}`}
              >
                <div className="flex gap-x-1.5">
                  <span className="font-medium">{item.role}</span>
                  <span>at</span>
                  <a
                    className="flex font-medium no-underline"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
                <div className="text-gray-500 text-[15px] mb-1">
                  {item.dates}
                </div>
                <p className="block text-gray-900 leading-[175%] text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-14">
          <h2 className="font-libreBaskerville text-[28px] mb-4">Skills</h2>
          <p className="text-gray-900 mt-2 text-[16px] mb-4">
            All skills on{" "}
            <a
              href={RESUME_URL}
              className="text-md text-blue-600 underline hover:text-blue:800"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </p>
          <div>
            {skillSections.map((section) => (
              <section className="mb-8" key={section.title}>
                <img
                  alt={`${section.title} icon`}
                  className={`mb-3 h-[${section.iconSize || 50}px] w-[${section.iconSize || 50}px]`}
                  src={section.icon}
                  height={section.iconSize || 50}
                  width={section.iconSize || 50}
                />
                <h3 className="text-gray-500 uppercase font-medium mt-2 mb-2 text-[16px]">
                  {section.title}
                </h3>
                {section.items.map((item, index) => (
                  <li
                    className="text-gray-900 mt-2 mb-3 text-[16px]"
                    key={index}
                  >
                    {item.label ? (
                      <>
                        <span className="font-medium">{item.label}:</span>{" "}
                        <span>{item.text}</span>
                      </>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </section>
            ))}
          </div>
        </section>
      </section>
    </RootLayout>
  );
}
