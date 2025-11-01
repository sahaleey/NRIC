import { FiHome, FiInfo, FiBook } from "react-icons/fi";
import { MdReadMore } from "react-icons/md";

export const siteSections = [
  {
    section: "Main Navigation",
    icon: FiHome,
    color: "emerald",
    pages: [
      {
        name: "Home",
        path: "/",
        description: "College homepage with overview and key information",
      },
      {
        name: "About College",
        path: "/about",
        description: "Overview of our institution and mission",
      },
      {
        name: "Academic Programs",
        path: "/academics",
        description: "Educational programs and curriculum",
      },
      {
        name: "Departments",
        path: "/departments",
        description: "Academic departments and faculties",
      },
      {
        name: "Contact Us",
        path: "/contact",
        description: "Get in touch with our administration",
      },
    ],
  },
  {
    section: "About College",
    icon: FiInfo,
    color: "blue",
    pages: [
      {
        name: "About Overview",
        path: "/about",
        description: "Comprehensive college introduction",
      },
      {
        name: "History & Vision",
        path: "/about/history",
        description: "Our founding story and future goals",
      },
      {
        name: "Leadership Team",
        path: "/about/leadership",
        description: "Management and faculty leadership",
      },
      {
        name: "Campus Life",
        path: "/about/campus",
        description: "Campus facilities and student life",
      },
      {
        name: "Accreditation",
        path: "/about/accreditation",
        description: "Affiliations and recognition",
      },
    ],
  },
  {
    section: "Academics",
    icon: FiBook,
    color: "amber",
    pages: [
      {
        name: "Academic Overview",
        path: "/academics",
        description: "Educational programs summary",
      },
      {
        name: "Curriculum Details",
        path: "/academics/curriculum",
        description: "Detailed syllabus structure",
      },
      {
        name: "Faculty Directory",
        path: "/academics/faculty",
        description: "Our teaching staff and scholars",
      },
    ],
  },
  {
    section: "Others",
    icon: MdReadMore,
    color: "violet",
    pages: [
      {
        name: "Alumni Network",
        path: "/alumni",
        description: "Connect with our graduates",
      },
      {
        name: "Sitemap",
        path: "/sitemap",
        description: "Full site structure overview",
      },
      {
        name: "Privacy Policy",
        path: "/privacy",
        description: "Our commitment to your privacy",
      },
      {
        name: "Terms",
        path: "/terms",
        description: "Website usage terms and conditions",
      },
    ],
  },
];
