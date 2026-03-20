export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blog", link: "#blog" },
  { name: "GitHub", link: "#github" },
  { name: "Certifications", link: "#certifications" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am Prince Yadav, a B.Tech 3rd year student focused on building practical web projects.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am open to collaborations, internships, and freelance opportunities.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a strong interest in full stack development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building projects with Next.js, React, and TypeScript",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to work together? Send me a message.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Lab-cicd-main",
    des: "A complete CI/CD practice project where I automated build, test, and deployment flow to simulate real DevOps pipelines.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    techStack: ["GitHub Actions", "Docker", "Node.js", "YAML"],
    features: [
      "Automated build-test pipeline with branch-based triggers",
      "Dockerized workflow for consistent deployments",
      "Version-controlled CI/CD templates for reuse",
    ],
    githubLink: "https://github.com/prince-up/Lab-cicd-main",
    liveLink: "https://github.com/prince-up/Lab-cicd-main",
  },
  {
    id: 2,
    title: "SysArena",
    des: "A system-design oriented project where I implemented modular architecture and performance-focused frontend engineering patterns.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Modular codebase with reusable domain components",
      "Optimized rendering and clean state flow",
      "Scalable folder structure for team collaboration",
    ],
    githubLink: "https://github.com/prince-up/SysArena",
    liveLink: "https://github.com/prince-up/SysArena",
  },
  {
    id: 3,
    title: "PrinceExt",
    des: "A productivity extension project focused on reducing repetitive tasks and improving daily development workflow.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    techStack: ["JavaScript", "Browser APIs", "HTML", "CSS"],
    features: [
      "Custom browser actions to speed up routine tasks",
      "Lightweight architecture with low memory usage",
      "Easy installation and quick configuration",
    ],
    githubLink: "https://github.com/prince-up/PrinceExt",
    liveLink: "https://github.com/prince-up/PrinceExt",
  },
  {
    id: 4,
    title: "princeio",
    des: "An experimental engineering space where I build, test, and iterate practical UI and full-stack implementation ideas.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Rapid prototyping for real implementation ideas",
      "Reusable component and UI interaction library",
      "Continuous iteration with clean code refactors",
    ],
    githubLink: "https://github.com/prince-up/princeio",
    liveLink: "https://github.com/prince-up/princeio",
  },
  {
    id: 5,
    title: "AAMS",
    des: "Automated Attendance Management System designed to simplify student attendance tracking, reporting, and academic monitoring.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/re.svg"],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Attendance automation with reduced manual errors",
      "Role-based dashboard for admins, faculty, and students",
      "Report generation for quick academic insights",
    ],
    githubLink: "https://github.com/prince-up/Automated-Attendance-Management-System-AAMS-",
    liveLink: "https://aams-attendance-system.vercel.app",
  },
  {
    id: 6,
    title: "Meditrack",
    des: "A healthcare connectivity platform to bridge doctors and patients with appointments, records, and streamlined communication.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/re.svg"],
    techStack: ["React", "Next.js", "Node.js", "MongoDB"],
    features: [
      "Doctor-patient onboarding and profile workflows",
      "Appointment management with clear scheduling flow",
      "Medical data handling with clean user experience",
    ],
    githubLink: "https://github.com/prince-up/meditrack-medical-pattient-and-doctor-connected-",
    liveLink: "https://github.com/prince-up/meditrack-medical-pattient-and-doctor-connected-",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "How I Built Lab-cicd-main: CI/CD From Scratch",
    excerpt:
      "A step-by-step breakdown of my CI/CD setup, challenges I faced, and how I automated deployments.",
    tag: "DevOps",
    link: "https://github.com/prince-up/Lab-cicd-main",
  },
  {
    id: 2,
    title: "System Design Notes While Building SysArena",
    excerpt:
      "Architecture decisions, trade-offs, and what I learned while structuring a scalable system project.",
    tag: "System Design",
    link: "https://github.com/prince-up/SysArena",
  },
  {
    id: 3,
    title: "Placement Ready - Interview Prep Platform",
    excerpt:
      "A placement-focused platform I built to organize preparation resources, track progress, and help students stay interview ready. GitHub: github.com/prince-up/placement-ready",
    tag: "Project",
    link: "https://sylablink.vercel.app/",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Sep 2025",
    category: "Certification",
    icon: "🏆",
  },
  {
    id: 2,
    title: "HackHazards 2025 - Certificate of Participation",
    issuer: "The Namespace Community",
    date: "May 2025",
    category: "Hackathon",
    icon: "🚀",
  },
  {
    id: 3,
    title: "Full-Stack Development (70 Hours)",
    issuer: "CipherSchools",
    date: "Jul 2025",
    category: "Training",
    icon: "💻",
  },
  {
    id: 4,
    title: "DSA Training Program",
    issuer: "Programming Pathshala",
    date: "Aug 2025",
    category: "Course",
    icon: "📚",
  },
  {
    id: 5,
    title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
    issuer: "Udemy",
    date: "Aug 2025",
    category: "Course",
    icon: "✨",
  },
  {
    id: 6,
    title: "React Native Mobile App Development - Self Paced",
    issuer: "GeeksforGeeks",
    date: "2025",
    category: "Course",
    icon: "📱",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Internship - WorldWin Coder Pvt. Ltd.",
    desc: "Worked on CMS (Content Management Systems) and E-commerce Development. Demonstrated dedication, enthusiasm, and professionalism while delivering high-quality solutions. (May 20, 2025 - July 16, 2025)",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer - React Native",
    desc: "Designed and developed cross-platform mobile app features for Android and iOS using React Native, focusing on clean UI, reusable components, and API-based integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "DevOps & CI/CD Developer",
    desc: "Architecting automated deployment pipelines, containerization strategies, and infrastructure-as-code solutions. Expertise in GitHub Actions, Docker, and cloud deployment patterns for scalable applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelancer Developer",
    desc: "Building custom web & mobile projects for clients. Available for freelance collaborations, startup projects, and full-stack development work.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    desc: "Developing end-to-end solutions with Next.js, React, Node.js, and modern cloud technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/prince-up",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/prince__up",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/prince-yadav-4t/",
  },
];
