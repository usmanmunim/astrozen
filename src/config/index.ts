import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Usman | CS Student & Developer",
  author: "Muhammad Usman",
  description:
    "CS student at APU Malaysia. I build Flutter apps, write Python and Java, and work with Linux servers. Passionate about building practical software.",
  lang: "en",
  siteLogo: "/Header.jpg",
  statusColor: "#22c55e",

  navLinks: [
    { text: "Home", href: "#home" },
    { text: "Education", href: "#education" },
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Certificates", href: "#certificates" },
    { text: "About", href: "#about" },
  ],

  socialLinks: [
    { text: "Email", href: "mailto:usmanmunim30@gmail.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-usman-9712b7336/" },
    { text: "GitHub", href: "https://github.com/usmanmunim" },
  ],

  socialImage: "/profile.jpg",
  canonicalURL: "https://astrozen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Usman",
    specialty: "Computer Science Student",
    summary:
      "Computer Science student at Asia Pacific University, Kuala Lumpur, with hands-on experience in Flutter app development, C, C++, Java, Python, and Linux server configuration. Passionate about building practical software and learning through real projects.",
    email: "usmanmunim30@gmail.com",
  },

  experience: [
    {
      company: "Asia Pacific University",
      position: "Technical Assistant Trainee",
      startDate: "Sep 2025",
      endDate: "Nov 2025",
      summary: [
        "Helped students and staff fix everyday IT issues: crashed computers, broken logins, software not loading. Not glamorous, but I learned how a real lab environment runs.",
        "Diagnosed hardware and software problems across classroom PCs and lab machines. Got good at spotting issues fast.",
        "Kept daily IT operations running smoothly so classes weren't disrupted. Basically on call for anything that went wrong.",
      ],
    },
  ],

  education: [
    {
      institution: "Asia Pacific University | Kuala Lumpur, Malaysia",
      degree: "Bachelor of Computer Science",
      startDate: "2024",
      endDate: "Present",
      details: [
        "Relevant coursework includes Data Structures, Object-Oriented Programming, Networking, and Operating Systems.",
        "Building practical projects using Flutter, Firebase, Java, Python, C, C++, and SQL.",
        "Learning software development, database systems, networking, and system administration.",
      ],
    },
    {
      institution: "NCC UK – TMUC Bahria Springs | Rawalpindi, Pakistan",
      degree: "Level 3 International Foundation Diploma in Computer Science",
      startDate: "2023",
      endDate: "2024",
      details: [
        "Completed a foundation pathway in Computer Science.",
        "Studied programming fundamentals, computing concepts, and academic skills.",
        "Prepared for progression into Bachelor of Computer Science at Asia Pacific University.",
      ],
    },
  ],

  skills: [
    {
      group: "Development",
      items: ["Flutter", "Firebase", "Java", "Python", "C", "C++", "CSV / File Handling"],
    },
    {
      group: "Systems & Networking",
      items: ["Linux Admin", "Rocky Linux", "Ubuntu", "DNS", "Cisco Packet Tracer", "Subnetting"],
    },
    {
      group: "Professional",
      items: ["Technical Support", "Troubleshooting", "Documentation", "Lab Support"],
    },
  ],

  projects: [
    {
      name: "UniBudget+ Flutter & Firebase",
      summary:
        "A student budget management app built with Flutter and Firebase, featuring role based login, expense tracking, analytics, funding requests, and dark mode.",
      linkSource: "https://github.com/usmanmunim/UniBudgetPlus",
      image: "/project-unibudget.png",
    },
    {
      name: "Course Recovery System",
      summary:
        "A Java Swing desktop application for managing course recovery requests, eligibility checks, OTP verification, and student recovery plans using OOP principles.",
      linkSource: "https://github.com/usmanmunim/Course-Recovery-System",
      image: "/project-course-recovery.png",
    },
    {
      name: "University Management System",
      summary:
        "A Python CLI system for managing students, courses, enrolments, and grades using role based menus and CSV file storage.",
      linkSource: "https://github.com/usmanmunim/University-Management-System",
      image: "/project-uni-management.png",
    },
    {
      name: "Inventory Management System",
      summary:
        "A C based inventory management system for tracking products, stock levels, suppliers, transactions, and reports using modular programming and file handling.",
      linkSource: "https://github.com/usmanmunim/Inventory-Management-System",
      image: "/project-inventory.png",
    },
    {
      name: "Homy Real Estate Chatbot",
      summary:
        "A real estate chatbot that handles property inquiries using basic NLP, intent detection, and predefined response flows.",
      linkSource: "https://github.com/usmanmunim/Homy-Real-Estate-Chatbot",
      image: "/project-homy.png",
    },
    {
      name: "Network Design & Simulation",
      summary:
        "A multi-subnet LAN and WAN network designed in Cisco Packet Tracer, covering routing, switching, VLANs, subnetting, and device configuration.",
      linkSource: "https://github.com/usmanmunim/Cisco-Packet-Tracer-Network-Project",
      image: "/project-network.png",
    },
    {
      name: "Linux Server Administration",
      summary:
        "Set up a Linux server from scratch using Rocky Linux in VirtualBox. Configured DNS, web hosting, email, user accounts, and firewall rules. Broke it multiple times, fixed it every time.",
      linkSource: "https://github.com/usmanmunim/Linux-Server-Administration",
      image: "/project-linux.svg",
    },
  ],

  certificates: [
    {
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat",
      image: "/cert-redhat.png",
      link: "/cert-redhat.png",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      image: "/cert-cisco.png",
      link: "/cert-cisco.png",
    },
    {
      name: "5G Pioneers Program MY5G Ericsson Malaysia",
      issuer: "DNB & Ericsson",
      image: "/cert-5g1.png",
      links: [
        { text: "View Module 01", href: "/cert-5g1.png" },
        { text: "View Module 03", href: "/cert-5g2.png" },
      ],
    },
    {
      name: "Microsoft Office Specialist: Word 2019 Associate",
      issuer: "Microsoft",
      image: "/cert-microsoft.png",
      link: "/cert-microsoft.png",
    },
  ],

  about: {
    description: `
      I am a second year Computer Science student at Asia Pacific University in Kuala Lumpur, Malaysia, with a strong interest in software development and mobile application development.

      I have hands-on experience building academic and practical projects using Flutter, Firebase, C, C++, Java, Python, and SQL. I have also worked with Linux server configuration, DNS setup, networking labs, and system administration tasks, which helped me understand how software and infrastructure work together.

      Through my projects, I have learned to solve problems, debug issues, work with different technologies, and build user focused solutions.
    `,
    image: "/profile.jpg",
  },
};
