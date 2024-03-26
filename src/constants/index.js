import { Edunet_Foundation, Oasis_Infobyte } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Oasis Infobyte",
        icon: Oasis_Infobyte,
        iconBg: "#accbe1",
        date: "July 2023 - August 2023",
        points: [
            "Enhanced website interaction, driving a 25% increase in user involvement through strategic JavaScript enhancements.",
            "Simultaneously optimized page load times by 20% through CSS and code refinements.",
            "Drove a 30% rise in mobile user retention by implementing responsive design strategies, collaborating crossfunctionally to craft pixel-perfect, intuitive web interfaces.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer IBM SkillsBuild",
        company_name: "Edunet Foundation",
        icon: Edunet_Foundation,
        iconBg: "#fbc3bc",
        date: "August 2023 - October 2023",
        points: [
            "Transformed designs into responsive web layouts, driving a 25% boost in cross-device engagement.",
            "while integrated user-focused features elevated user satisfaction by 30%.",
            "Implemented compelling animations, resulting in heightened user engagement; Optimized website performance, reducing loading times by 15%,",
            "ensuring improved user accessibility; Acknowledged for high-quality code and designs.",
        ],
    },  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ramalloc',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/roshan-kumar-0b400213a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MeraBlog - Blogging Web App',
        description: 'Developed a ReactJS-based web app, resulting in a significant surge in user interaction and noticeable enhancements in load times through Redux implementation.',
        link: 'https://mera-blog.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'UTube Backend',
        description: 'A MERN-based video streaming platform featuring Cloudinary integration and JWT authentication for secure, seamless video sharing and viewing',
        link: 'https://github.com/ramalloc/UTube-Backend',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Cryptocurrency Tracker',
        description: 'Developed a Real-Time Cryptocurrency Tracker Web App using React.js, Material UI, and Chart.js, with Context API for state management and Coin Gecko API integration. ',
        link: 'https://crypto-trackerz.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Collaborative Code Editor',
        description: 'Users collaboratively edit code in real-time using the web application, leveraging features like CodeMirror for enhanced editing, while the backend manages session state and communication, facilitating seamless collaboration and sharing.',
        link: 'https://github.com/ramalloc/Collaboratie-Code-Editor',
    }
];