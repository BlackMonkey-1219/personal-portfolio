import
{
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6
} from "../assets";

const bio =
  "Hi! I'm Allen (not my real name). I'm a self-taught developer who codes for fun and profession. I've been into programming since my first computer. That is since I was 14 years old. I'm so passionate about programming and computers that I tend to spend days automating a task that simply takes a few minutes to complete manually.\n\nI'm currently using JavaScript, TypeScript, ReactJS, NextJS, and ExpressJS for web development. I've built from simple static web pages to a fully functional pc game search engine that uses data I scraped from steam using my python scripts.\n\nNow I'm developing a small social media application.\n\nI can also develop desktop applications using ElectronJS.\n\nI'm constantly learning new things. Currently, I'm learning C++ and Flutter.\n\nI'm excited to know what kind of project you have for me.";

const projects = [
  {
    title: "Personal Portfolio",
    image: project_1,
    desc: "A simple portfolio project developed with ReactJS.",
    link: "https://portfolio-portfolio-01.netlify.app/",
  },
  {
    title: "SaaS Landing Page",
    image: project_2,
    desc: "Landing page of a SaaS company. Developed with ReacJS.",
    link: "https://portfolio-saas-01.netlify.app/",
  },
  {
    title: "Common Landing Page",
    image: project_3,
    desc: "Simple landing page with ReactJS.",
    link: "https://portfolio-landingpage-01.netlify.app/",
  },
  {
    title: "Blog",
    image: project_4,
    desc: "Simple blog developed with ReactJS and NextJS.",
    link: "https://youtu.be/CPFaFNNymDM",
  },
  {
    title: "Resume Bulider",
    image: project_5,
    desc: "Resume Bulder Application with ReactJS.",
    link: "https://youtu.be/mjyeNj06Z4c",
  },
  {
    title: "Real Estate Listing Viewer",
    image: project_6,
    desc: "Real Estate Property Lister With Interactive Map and Bookmarking Capability.",
    link: "https://youtu.be/ABAPC6gsKw4"

  }
];

const skills = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    title: "ReactJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
    title: "NodeJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png",
    title: "NextJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png?20170429090805",
    title: "ExpressJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
    title: "JavaScript",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
    title: "TypeScript",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029",
    title: "Python",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png?20190626143224",
    title: "MongoDB",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1024px-MySQL_logo.svg.png",
    title: "MySQL",
  },
  {
    image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F320px-React-icon.svg.png&sp=1671253569Td6e037b1e64056980e69e136f111ae813d1242e5dde1812d85eb01aac77c6d52",
    title: "React Native"
  },
  {
    image: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
    title: "Tailwind Css"
  }, {
    image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fba%2FStripe_Logo%252C_revised_2016.svg%2F1280px-Stripe_Logo%252C_revised_2016.svg.png&sp=1671253838Tfffe7aca5a0673e4ab1c18b7f40bb5e334690277b16b8bc0f53ec98334aedd61",
    title: "Stripe API"
  }
];

export { bio, skills, projects };
