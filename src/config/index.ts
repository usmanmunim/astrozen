import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Usman | CS Student & Developer",
  author: "Muhammad Usman",
  description:
    "CS student at APU Malaysia. I build Flutter apps, write Python and Java, and spend too much time in Linux terminals. Looking for an internship.",
  lang: "en",
  siteLogo: "/header.jpg",

  navLinks: [
    { text: "Home", href: "#home" },
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
      "Computer Science student at Asia Pacific University, Kuala Lumpur, with hands-on experience in Flutter app development, C, C++, Java, Python, and Linux server configuration. I am seeking an internship where I can contribute to real-world projects and continue developing my technical skills.",
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
        "Kept daily IT operations running smoothly so classes weren't disrupted. Basically on-call for anything that went wrong.",
      ],
    },
  ],

  skills: [
    {
      group: "Development",
      items: ["Flutter", "Firebase", "Java", "Python", "C", "CSV / File Handling"],
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
        "A budget app for students, built with Flutter and Firebase. Has role-based logins, expense tracking, charts, funding requests, and dark mode. Started as a uni assignment, ended up actually using it.",
      linkSource: "https://github.com/usmanmunim",
      image: "/project-unibudget.png",
    },
    {
      name: "Course Recovery System",
      summary:
        "A Java Swing desktop app for managing course recovery applications. Students can check eligibility, submit OTP-verified requests, and recover failed modules. Built around OOP from scratch.",
      linkSource: "https://github.com/usmanmunim/Java-Course-Recovery-System",
      image: "/project-course-recovery.png",
    },
    {
      name: "University Management System",
      summary:
        "A Python CLI system for managing student records, enrolments, and grades. Uses CSV files for storage, no database, just file handling and role-based menus.",
      linkSource: "https://github.com/usmanmunim/University-Management-System",
      image: "/project-uni-management.svg",
    },
    {
      name: "Inventory Management System",
      summary:
        "A C program for tracking product stock, prices, and reports. Modular code with file I/O, no libraries, all manual. One of the harder projects to debug.",
      linkSource: "https://github.com/usmanmunim/Inventory-Management-System",
      image: "/project-inventory.png",
    },
    {
      name: "AI Chatbot for Property Agents",
      summary:
        "A Python chatbot that handles property inquiries using basic NLP. Not GPT, more like pattern matching and intent detection. Learned a lot about how chatbots actually work.",
      linkSource: "https://github.com/usmanmunim",
      image: "/project-chatbot.svg",
    },
    {
      name: "Network Design & Simulation",
      summary:
        "Designed a multi-subnet LAN/WAN network in Cisco Packet Tracer. Covers routing, switching, VLANs, and subnetting. Spent way too long getting the routing tables right.",
      linkSource: "https://github.com/usmanmunim/Cisco-Packet-Tracer-Network-Project",
      image: "/project-network.svg",
    },
    {
      name: "Linux Server Administration",
      summary:
        "Set up a Linux server from scratch using Rocky Linux in VirtualBox. Configured DNS, web hosting, email, user accounts, and firewall rules. Broke it multiple times, fixed it every time.",
      linkSource: "https://github.com/usmanmunim",
      image: "/project-linux.svg",
    },
  ],

  certificates: [
    {
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat",
      image: "/cert-redhat.png",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      image: "/cert-cisco.png",
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
      image: "/cert-mircosoft.png",
    },
  ],

  about: {
    description: `
      I am a Computer Science student at Asia Pacific University in Kuala Lumpur, Malaysia, with a strong interest in software development and mobile application development.

      I have hands-on experience building academic and practical projects using Flutter, Firebase, C, C++, Java, Python, and SQL. I have also worked with Linux server configuration, DNS setup, networking labs, and system administration tasks, which helped me understand how software and infrastructure work together.

      Through my projects, I have learned to solve problems, debug issues, work with different technologies, and build user-focused solutions. I am currently looking for an internship where I can contribute to real-world projects, learn from experienced developers, and continue improving as a software developer.
    `,
    image: "/profile.jpg",
  },
};
