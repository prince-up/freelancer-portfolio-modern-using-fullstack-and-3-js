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
    des: "A high-performance DevOps laboratory. Engineered 100% automated CI/CD pipelines reducing deployment friction by 60%.",
    img: "/projects/lab_cicd.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    techStack: ["GitHub Actions", "Docker", "Jest", "YAML"],
    challenge: "Managing inconsistent environment deployments across multiple branches.",
    solution: "Developed a container-first strategy with multi-stage GitHub Actions workflows for production-ready builds.",
    impact: "Achieved zero-manual-intervention deployments and 40% faster test cycle times.",
    githubLink: "https://github.com/prince-up/Lab-cicd-main",
    liveLink: "https://github.com/prince-up/Lab-cicd-main",
  },
  {
    id: 2,
    title: "SysArena",
    des: "Architecture-first playground for scalable enterprise systems. Optimized for 95+ PageSpeed scores and sub-100ms API responses.",
    img: "/projects/sysarena.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    techStack: ["Next.js", "TypeScript", "Redux", "Prisma"],
    challenge: "High latency in data fetching for complex domain-driven dashboards.",
    solution: "Implemented strict Incremental Static Regeneration (ISR) and Redux Toolkit Query for intelligent client-side caching.",
    impact: "Reduced Time-to-Interactive (TTI) by 1.2s and achieved SEO-perfect performance scores.",
    githubLink: "https://github.com/prince-up/SysArena",
    liveLink: "https://github.com/prince-up/SysArena",
  },
  {
    id: 3,
    title: "Online Assessment System",
    des: "Scalable evaluation engine for secure technical testing. Featuring real-time proctoring and automated code evaluation.",
    img: "/projects/assessment.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    challenge: "Maintaining real-time socket connections for high-concurrency exams.",
    solution: "Architected a distributed event system using Socket.io and Redis for reliable real-time proctoring feeds.",
    impact: "Successfully handled 500+ simultaneous test sessions with zero data loss or connection drops.",
    githubLink: "https://github.com/prince-up/online-assesment-system",
    liveLink: "https://online-assesment-system.vercel.app/",
  },
  {
    id: 4,
    title: "Global Travel & Tourism",
    des: "Enterprise-grade hospitality platform specializing in immersive destination experiences and seamless booking workflows.",
    img: "/projects/travel.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    techStack: ["Next.js", "React", "Cloudinary", "Framer Motion"],
    challenge: "Performance bottlenecks when rendering high-res 4K destination assets.",
    solution: "Implemented Cloudinary-based adaptive image delivery and lazy-loaded interactive destination maps.",
    impact: "Achieved a 50% improvement in visual load times and 98% accessibility rating.",
    githubLink: "https://github.com/prince-up/travel-and-tourism-",
    liveLink: "https://github.com/prince-up/travel-and-tourism-",
  },
  {
    id: 5,
    title: "Automated Attendance (AAMS)",
    des: "Academic administration system for tracking attendance and reporting. Reducing manual entry errors for institutional scaling.",
    img: "/projects/aams_dashboard.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/re.svg"],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    challenge: "Handling large datasets of student records with optimized reporting flows.",
    solution: "Developed an aggregate pipeline strategy in MongoDB for rapid data summarization and role-based access control.",
    impact: "Automated tracking for 1000+ students with 100% data accuracy and real-time report generation.",
    githubLink: "https://github.com/prince-up/Automated-Attendance-Management-System-AAMS-",
    liveLink: "https://aams-attendance-system.vercel.app",
  },
  {
    id: 6,
    title: "PrinceExt Productivity",
    des: "Developer-focused browser toolset. Simplifying routine coding tasks and optimizing workflow efficiency through automation.",
    img: "/projects/princeext.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    techStack: ["JavaScript", "Chrome Extensions API", "Webpack", "CSS3"],
    challenge: "Minimizing memory overhead for persistent background worker processes.",
    solution: "Refactored to an event-based background architecture with optimized asynchronous message passing.",
    impact: "Achieved a 70% reduction in background resource usage and faster developer task execution.",
    githubLink: "https://github.com/prince-up/PrinceExt",
    liveLink: "https://github.com/prince-up/PrinceExt",
  },
];

export const openSourceContributions = [
  {
    id: 1,
    project: "MERN Stack Blueprint",
    impact: "Improved documentation and optimized build scripts for 500+ developers.",
    prLink: "https://github.com/prince-up",
    icon: "🛠️",
  },
  {
    id: 2,
    project: "Modern UI Component Library",
    impact: "Developed 3 reusable glassmorphism components with Framer Motion.",
    prLink: "https://github.com/prince-up",
    icon: "🎨",
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
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Sep 2025",
    category: "Professional Certification",
    icon: "☁️",
    image: "/Screenshot 2026-03-23 093627.png",
  },
  {
    id: 2,
    title: "HackHazards 2025 Winner/Participant",
    issuer: "The Namespace Community",
    date: "May 2025",
    category: "Competition",
    icon: "🏆",
    image: "/1748330155374.jpg",
  },
  {
    id: 3,
    title: "Full-Stack Software Engineering (70+ Hours)",
    issuer: "CipherSchools",
    date: "Jul 2025",
    category: "Technical Training",
    icon: "💻",
    image: "/cipherschools-fullstack.png",
  },
  {
    id: 4,
    title: "Advanced Data Structures & Algorithms",
    issuer: "Programming Pathshala",
    date: "Aug 2025",
    category: "Advanced Coursework",
    icon: "🧠",
    image: "/pathshala-dsa.jpg",
  },
  {
    id: 5,
    title: "Mastering Generative AI Architectures",
    issuer: "Udemy",
    date: "Aug 2025",
    category: "AI Research",
    icon: "🤖",
    image: "/udemy-generative-ai.png",
  },
  {
    id: 6,
    title: "Mobile Architecture with React Native",
    issuer: "GeeksforGeeks",
    date: "Jan 2025",
    category: "Specialized Course",
    icon: "📱",
    image: "/geeksforgeeks-react-native.png",
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
    title: "Full Stack Engineering Intern",
    desc: "Engineered robust CMS and E-commerce solutions at WorldWin Coder. Focused on optimizing database queries, improving frontend performance, and participating in full-lifecycle software development.",
    className: "md:col-span-2",
    thumbnail: "/worldwincoder-logo.png",
  },
  {
    id: 2,
    title: "Cross-Platform Mobile Developer",
    desc: "Architected scalable mobile features using React Native. Focused on bridge-native communication, highly responsive UI components, and complex API integration layers for production environments.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "DevOps & Pipeline Automation",
    desc: "Designed automated deployment ecosystems using GitHub Actions and Docker. Expertise in configuring auto-scaling environments and ensuring high-availability infrastructure deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Independent Software Consultant",
    desc: "Lead end-to-end development of custom software for diverse clients. Managing project architecture, cloud deployments, and client-side stakeholder communication for high-impact digital products.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Enterprise Web Applications",
    desc: "Building mission-critical web platforms with Next.js and React. Emphasizing modular codebases, advanced SEO strategies, and state-of-the-art security patterns.",
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
