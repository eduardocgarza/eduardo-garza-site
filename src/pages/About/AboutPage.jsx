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
      text: "Bachelor's degree, dual-degree in computer science & business (2015-2021) at University of British Columbia (UBC) Vancouver",
    },
    {
      label: "Languages",
      text: "English, Spanish, French, Italian",
    },
    {
      label: "Interests",
      text: "Philosophy and political science, playing the piano for 20 years, and learning Ancient Greek, Latin, and Mandarin",
    },
  ];

  const workExperience = [
    {
      role: "Founder",
      company: "Lucy's Circle",
      dates: "December 2024 to Present (1 year 6 months)",
      description:
        "Built and scaled a two-sided childcare marketplace, enabling parents to discover and compare trusted care while allowing providers to manage their presence, recruit staff, and connect directly with families across local communities",
      url: "http://lucyscircle.ca",
    },
    {
      role: "AI Instructor & Consultant",
      company: "Emerson Academy",
      dates: "2023 to Present (3 years 4 months)",
      description:
        "Offer online self-training courses and seminars as well as in-person workshops for groups of 50-100 and private executive coaching and consulting on artificial intelligence for associations and private groups across BC, Canada.",
      url: "https://emersonacademy.org",
    },
    {
      role: "Software Engineer Contractor",
      company: "HUGE",
      dates: "February 2025 to August 2025 (6 months)",
      description:
        "Led development of a Swift mobile app and web-based AI chat using the Vercel AI SDK, building agentic workflows with LangChain, Ollama, and open-source models (DeepSeek, Qwen, Kimi, Gemma). Designed and implemented integrations via MCP tools and sub-agents to connect external systems (Slack, Spotify, Google Home), alongside TTS/STT pipelines, enabling a fully local, privacy-first AI experience.",
      url: "https://huge.tech",
    },
    {
      role: "Software Engineer",
      company: "Spring Financial",
      dates: "September 2023 to February 2025 (1 year 6 months)",
      description:
        "Worked with Python, Docker, AWS EC2/ECS/SAM to deliver robust and stable APIs for consumer loan customer & payments management for over 1 million customers.",
      url: "https://springfinancial.ca",
    },
    {
      role: "Founder",
      company: "Mozart Pianos",
      description:
        "Raised $100k in capital, led a 10-member cross-functional team in the design, hardware and software engineering and manufacturing of a consumer electronics digital piano musical instrument and software suite, overseeing all aspects of product development from concept to market launch, including industrial design, hardware engineering, software development, supply chain management and marketing.",
      dates: "October 2020 to September 2023 (3 years)",
      url: "https://mozartpianos.com",
    },
    {
      role: "Manufacturing Engineer",
      company: "GINTARINI",
      dates: "June 2022 to January 2023 (8 months)",
      description:
        "Software, mechanical, hardware and manufacturing expert; implemented a company-wide, on-factory and in-office ERP system, inventory management software and 3D CAD factory design system for a fast-growth, mid-size cabinetry International manufacturer.",
      url: "https://gintarini.com",
    },
    {
      role: "Manufacturing Engineer Intern",
      company: "Montanari Giluio",
      description:
        "Transformed complex engineering designs into detailed technical drawings using advanced CAD software, collaborating closely with cross-functional teams to ensure seamless integration into broader project scopes, while maintaining rigorous quality control to meet industry standards and regulatory requirements.",
      dates: "April 2016 to August 2016 (5 months)",
      url: "https://www.montanarigiulio.com",
    },
  ];
  const skillSections = [
    {
      title: "Front End",
      icon: "/icons/frontend.png",
      items: [
        {
          label: "Tools",
          text: "React, Next.js, TanStack Start, Vue 3, Svelte",
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
          text: "Node.js (Express), Python (Flask, FastAPI), Java, PHP, C++, Bash",
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
      title: "Payments & Integrations",
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
          text: "email, SMS, AI providers, object storage systems",
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
            {workExperience.map((item) => (
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
