import commaIcon from "../../assets/projects/commaai.jpg";
import lucyLogo from "../../assets/projects/lucyLogo.png";
import mozartIcon from "../../assets/projects/mozart.jpg";
import emersonIcon from "../../assets/projects/emerson.jpg";
import copyPandaIcon from "../../assets/projects/copypanda.png";
import shakesearchIcon from "../../assets/projects/shakespeare.jpg";
import recruitFruitIcon from "../../assets/projects/recruitfruit.png";
import jobBoardsDataScraperIcon from "../../assets/projects/recruitment.png";
import universityFriendsMatcherIcon from "../../assets/projects/spotify.png";
import creativeChroniclesIcon from "../../assets/projects/creativechronicles.png";

export const ALL_PROJECTS = [
  {
    title: "Lucy’s Circle",
    description: "Childcare discovery and marketplace platform",
    imagePath: lucyLogo,
    tools: ["Node.js", "PostgreSQL", "Redis", "AWS", "Cloudflare", "Stripe"],
    extendedDescription:
      "A full-stack childcare marketplace connecting parents with daycares and caregivers, featuring geospatial search, advanced filtering, provider management tools, and integrated billing and notification systems.",
    repositoryURL: "",
    demoURL: "http://lucyscircle.ca",
    videoURLs: [],
  },
  {
    title: "Mozart",
    description: "An all-in-one touch display piano",
    imagePath: mozartIcon,
    tools: [
      "Consumer Electronics",
      "Industrial Design",
      "Hardware",
      "Software",
      "Manufacturing",
      "Music",
    ],
    extendedDescription:
      "A touch display piano that teaches you how to play piano, with a built-in music library, MIDI input/output, and a mobile app to learn and play with friends.",
    detailsURL: "/projects/mozart",
    detailsLabel: "View project story",
    previewImagePaths: [
      "/mozart/preview/slide-1-1.png",
      "/mozart/preview/slide-21-1.png",
      "/mozart/preview/slide-64-1.png",
      "/mozart/preview/slide-112-1.png",
    ],
    repositoryURL: "",
    demoURL: "https://mozartpianos.com",
    videoURLs: [
      "https://www.youtube.com/embed/agvqiroXbkw",
      "https://www.youtube.com/embed/w8VtKCQjMUs",
    ],
  },
  {
    title: "Emerson Academy",
    description: "Vancouver's #1 AI academy",
    imagePath: emersonIcon,
    tools: [
      "Teaching",
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Midjourney",
      "Stable Diffusion",
    ],
    extendedDescription:
      "A Vancouver-based AI academy that teaches AI and machine learning to students of all ages, with a focus on practical applications and real-world projects.",
    repositoryURL: "",
    demoURL: "https://emersonacademy.org",
    videoURLs: [
      "https://www.youtube.com/embed/q91W_FFr4NI",
      "https://www.youtube.com/embed/CxcMokdLUQ0",
    ],
  },
  {
    title: "Creative Chronicles",
    description: "A chronological video history of creative works",
    imagePath: creativeChroniclesIcon,
    tools: [
      "React",
      "Next.js",
      "Node/Express",
      "Amazon EC2",
      "Google Firebase",
      "PostgreSQL",
      "YouTube API",
    ],
    extendedDescription:
      "Get the YouTube videos of inventors, founders, and key executives at top companies in chronological order, understanding their evolving ideas and advice throughout their own careers.",
    repositoryURL:
      "https://github.com/eduardocgarza/app-public-creativechronicles-client",
    demoURL: "",
    videoURLs: ["https://www.loom.com/embed/5601229e3fbe4d6ab8c9b795ab5e80c3"],
  },
  {
    title: "Comma.ai OpenPilot Dashboard",
    description: "Self-driving car rides data & visualization platform",
    imagePath: commaIcon,
    tools: ["React", "Google Maps API", "Web Storage API"],
    extendedDescription:
      "A dashboard for viewing and analyzing your rides using the Comma.ai self-driving car navigator. Manage your data in JSON and ZIP files, view your trips in tabular format, search and query trips with advanced parameters, and analyze specific trips with a Google Maps route viewer and advanced aggregate analysis.",
    repositoryURL:
      "https://github.com/eduardocgarza/openpilot-dashboard-comma.ai",
    demoURL: "https://openpilot.netlify.app",
    videoURLs: ["https://www.loom.com/embed/e7861f2ea4ef4758acbfc50bf93e62ac"],
  },
  // {
  //   title: "Copy Panda",
  //   description: "Save collections of message templates for quick access.",
  //   imagePath: copyPandaIcon,
  //   tools: [
  //     "React",
  //     "Netlify",
  //     "Google Login",
  //     "Web Storage API",
  //     "Node/Express",
  //     "Heroku",
  //     "PostgreSQL",
  //     "Sendgrid",
  //   ],
  //   extendedDescription: `A web app to create message templates, like "Hey {FirstName}, checking in for our morning meeting today. Ready to go?", with the ability to copy them instantly into any input on any site.`,
  //   repositoryURL: "",
  //   // demoURL: "https://copypanda.co",
  //   demoURL: "",
  //   videoURLs: ["https://www.loom.com/embed/ac1712d5e9f546598ec68a5a287f63bb"],
  // },
  // {
  //   title: "Recruit Fruit",
  //   description:
  //     "The Uber Eats job order-tracking platform for independent recruiters.",
  //   imagePath: recruitFruitIcon,
  //   tools: [
  //     "React",
  //     "Netlify",
  //     "Google Login",
  //     "Web Storage API",
  //     "Node/Express",
  //     "Heroku",
  //     "PostgreSQL",
  //     "Sendgrid API",
  //     "Calendly API",
  //     "Loom API",
  //     "Twilio API",
  //     "Zapier API",
  //   ],
  //   extendedDescription:
  //     "A web platform for independent recruiters to manage their independent recruitment agencyes, Includes sales search, beautifully-designed job postings, an applicant tracking system (ATS), and shortlisted candidates on a shared admin-employer portal.",
  //   repositoryURL: "",
  //   demoURL: "https://recruitfruit.netlify.app",
  //   videoURLs: [""],
  // },
  // {
  //   title: "Shakesearch",
  //   description: "Search engine of Shakespeare's plays and poems",
  //   imagePath: shakesearchIcon,
  //   tools: ["React", "Netlify"],
  //   extendedDescription:
  //     "A web app search engine for all of Shakespeare's plays, poems and sonnets. Find specific quotes and verses, highlighted with its precise location matched to your search input.",
  //   repositoryURL: "https://github.com/eduardocgarza/shakespeare-search",
  //   demoURL: "https://shakespeare-search.netlify.app/",
  //   videoURLs: ["https://www.loom.com/embed/e7a9878ba727478589f2a12e9988eeb1"],
  // },
  // {
  //   title: "Job Boards Data Scraper",
  //   description:
  //     "Automated job board scraper generates leads from company websites for outreach",
  //   imagePath: jobBoardsDataScraperIcon,
  //   tools: ["Node/Express", "Puppeteer", "PostgreSQL"],
  //   extendedDescription:
  //     "Built an automated code job boards scraper (Indeed, Glassdoor, Linkedin, Monster) that gets job postings and uses the company websites with Apollo’s API to generate a set of people leads, with full Linkedin, emails, and phones for outreach.",
  //   repositoryURL:
  //     "https://github.com/eduardocgarza/app-job-boards-scraper-server",
  //   demoURL: "",
  //   videoURLs: [""],
  // },
  // {
  //   title: "University Friends Matcher",
  //   description:
  //     "Match with students at UBC based on course schedule, Spotify interest and Instagram feeds",
  //   imagePath: universityFriendsMatcherIcon,
  //   tools: ["React", "Node.js", "Express", "MongoDB", "Heroku"],
  //   extendedDescription:
  //     "Enter your courses schedule for the upcoming semester and match with classmates based on hundreds of category-points related to their Facebook friends, followers, friends in common, etc.; Spotify music, top artists and songs, etc.; and Instagram follows and followers, and likes.",
  //   repositoryURL: "https://github.com/eduardocgarza/app-educonnections-client",
  //   demoURL:
  //     "https://www.figma.com/proto/jimGOKPJGOqhJfwhffMLPe/App---Educonnections?type=design&node-id=48-590&t=AgpqjLyWSnlct2DC-0&scaling=min-zoom&page-id=0%3A1",
  //   videoURLs: [""],
  // },
];
