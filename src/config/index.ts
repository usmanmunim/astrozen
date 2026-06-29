import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Usman | CS Student & Developer",
  author: "Muhammad Usman",
  description:
    "CS student at APU Malaysia. I build Flutter apps, write Python and Java, and work with Linux servers. Passionate about building practical software.",
  lang: "en",
  siteLogo: "/header.jpg",
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
  canonicalURL: "https://muhammadusman.app",
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
      items: ["Dart", "Flutter", "Firebase", "Firestore", "Java", "Python", "C", "C++", "ASP.NET", "C#", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      group: "Systems & Networking",
      items: ["Linux Admin", "Rocky Linux", "Ubuntu", "DNS", "Cisco Packet Tracer", "Subnetting"],
    },
    {
      group: "Professional",
      items: ["Technical Support", "Troubleshooting", "Documentation", "Git", "GitHub", "Android Studio", "VirtualBox", "SAP ERP", "NetBeans"],
    },
    {
      group: "Concepts",
      items: ["OOP", "Data Structures & Algorithms", "Database Management", "Software Testing"],
    },
  ],

  projects: [
    {
      name: "QueueCare",
      summary:
        "A Flutter and Firebase mobile app for smart queue management, supporting 3 roles (Patient, Receptionist, Doctor) with live queue tracking, QR check-in, appointment management, notifications, and real-time updates.",
      linkSource: "https://github.com/usmanmunim/queuecare",
      image: "/project-queuecare.png",
    },
    {
      name: "UniBudget+",
      summary:
        "A student budget management app built with Flutter and Firebase, featuring role based login, expense tracking, monthly budgets, analytics, funding requests, and a deployed web version via Firebase Hosting.",
      linkSource: "https://github.com/usmanmunim/UniBudgetPlus",
      image: "/project-unibudget.png",
    },
    {
      name: "LearnQuest",
      summary:
        "An interactive learning platform built with ASP.NET, C#, JavaScript, and TSQL, featuring user registration, login, learning content access, quizzes, progress tracking, and admin management.",
      linkSource: "https://github.com/usmanmunim/LearnQuest",
    },
    {
      name: "NASM POS System",
      summary:
        "A Point of Sale system built in NASM x86-64 Assembly Language on Ubuntu Linux, featuring login, inventory management, shopping cart, checkout, coupon discounts, and daily sales reporting.",
      linkSource: "#",
    },
    {
      name: "Warehouse Robot Navigation System",
      summary:
        "A C++ warehouse robot navigation system built in Visual Studio, implementing pathfinding and navigation algorithms to simulate robot movement and route planning in a warehouse environment.",
      linkSource: "https://github.com/usmanmunim/Warehouse-Robot-Navigation-System",
    },
    {
      name: "Course Recovery System",
      summary:
        "A Java Swing desktop application for managing course recovery requests, eligibility checks, OTP verification, and student recovery plans applying OOP principles.",
      linkSource: "https://github.com/usmanmunim/Course-Recovery-System",
      image: "/project-course-recovery.png",
    },
    {
      name: "AI Chatbot for Property Agents",
      summary:
        "A Python AI chatbot that handles property inquiries, user preferences, and recommendation flows using NLP and predefined conversational response automation.",
      linkSource: "https://github.com/usmanmunim/Homy-Real-Estate-Chatbot",
      image: "/project-homy.png",
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
