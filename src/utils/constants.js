import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql, BiLogoGmail } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "UI/UX",
    icon: AiFillCode,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
];

export const workData = [
  {
    company: "Zelarsoft",
    designation: "Software Engineer",
    duration: "July 2022 - Present",
    companyImg: "zelarsoft.jpg",
    description: (
      <>
        <ul>
          <li>
            worked on Celito- Life Science DomainProduct, Celito clinical and quality suites are cloud-based solutions materialized by
            Celito tech for managing the full lifecycle of the clinical & quality processes
            specifically designed in the context of the life sciences industry. Celito has
            designed the low-cost solution with innovation and collaborative features of
            Microsoft Power platform, SharePoint, and tools such as muhimbi for
            document conversion and DocuSign for electronic signature by following
            complete GxP compliances and regulations in accordance with FDA’s 21 CFR
            Part 11.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Mainavi Global Solutions",
    designation: "Web Developer",
    duration: "Jan 2021 - Jun 2022",
    companyImg: "mgs-logo.jpeg",
    description: (
      <>
        <ul>
          <li>
            Financial Reporting is the system in which the revenue and expenses are
            calculated for each month for different location, so that the end user will get
            to know the exact revenue or expense which happened during the entire
            month. This is also followed by an approval process in which each level of user
            validated the number of revenue or expense, and they can approve or reject
            the documents for a particular month depending on the numbers which
            systems shows.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "M365 Dashboard",
    image: "m365Dashboard",
    link: null,
    source: "https://github.com/sajithshaik/M365-Health-Report",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/sajithshaik/portfolio-website.git",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    source: "",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/sajithshaik",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/sajidratedr/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/sajith-shaik-5aa709203/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "mailto:sajithshaik95@gmail.com",
    icon: BiLogoGmail,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
