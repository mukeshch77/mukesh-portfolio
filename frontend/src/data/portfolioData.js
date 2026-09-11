// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const profile = {
  name: "Mukesh Choudhary",
  tagline: "Software Developer & AI/ML Engineer",
  headline: "Building reliable software and intelligent systems",
  bio: "I'm a Software Developer and AI/ML Engineer from Jaipur, Rajasthan. I hold an MCA in Artificial Intelligence from UPES (Graduated July 2026) and specialize in Java, Python, Spring Boot, Data Structures & Algorithms, and Machine Learning — combining strong backend engineering with a depth in AI/ML to build solutions that are both robust and intelligent.",
  location: "Jaipur, Rajasthan, India",
  email: "mukeshch1767@gmail.com",
  phone: "+91 9694971767",
  resumePath: "/resume.pdf",

  // Profile photo (optional).
  // Place your photo at: frontend/public/assets/profile/photo.jpg
  // Then uncomment the line below and set the correct path.
  profileImage: "/assets/profile/photo.jpeg",
  // profileImage: "/assets/profile/photo.jpg",
};

export const social = {
  github: "https://github.com/mukeshch77",
  linkedin: "https://linkedin.com/in/mukeshch77",
  leetcode: "https://leetcode.com/mukeshch77",
};

export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Spring Boot", "RESTful APIs", "Node.js"],
  },
  {
    category: "Database",
    icon: "Database",
    skills: ["MySQL", "SQL"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: ["Machine Learning", "PyTorch", "BERT", "ResNet"],
  },
  {
    category: "Computer Science",
    icon: "BookOpen",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
  },
];

// ============================================================
// PROJECTS
// Fields:
//   github : "https://github.com/mukeshch77/repo-name" or null
//   live   : "https://your-live-demo.com" or null
//   image  : "/assets/projects/project-name.png" or null
//            Place images in: frontend/public/assets/projects/
// ============================================================
export const projects = [
  {
    id: 1,
    title: "Bank Management System",
    description: [
      "Developed a desktop-based banking application using Java Swing, AWT, JDBC, and MySQL.",
      "Implemented customer registration, login authentication, deposit, withdrawal, balance enquiry, PIN change, and fast cash transactions.",
      "Integrated MySQL via JDBC to securely store and manage customer account and transaction records.",
      "Applied OOP principles and exception handling to build a modular, user-friendly banking system.",
    ],
    tech: ["Java", "Swing", "AWT", "JDBC", "MySQL"],
    duration: "Jun 2025 – Aug 2025",
    github: null,           // e.g. "https://github.com/mukeshch77/bank-management"
    live: null,             // e.g. "https://your-demo.com"
    image: null,            // e.g. "/assets/projects/bank-management.png"
  },
  {
    id: 2,
    title: "Multimodal Emotion Recognition System",
    description: [
      "Built a multimodal emotion recognition system using fused text and image features.",
      "Implemented a custom BERT + ResNet fusion model in PyTorch for cross-modal feature fusion.",
      "Handled class imbalance using weighted loss functions and optimized training with GPU acceleration.",
    ],
    tech: ["Python", "PyTorch", "BERT", "ResNet", "Deep Learning"],
    duration: "Aug 2025 – Nov 2025",
    github: null,
    live: null,
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    company: "Xebia IT Architects",
    role: "AI/ML Developer Intern",
    duration: "Jan 2026 – May 2026",
    // location: "Remote",   // Uncomment this line to show location on the website
    type: "Internship",
    points: [
      "Contributed to the development of the Project Profitability & Margin Risk Intelligence System.",
      "Utilized Machine Learning and data models to predict, analyze, and mitigate financial and margin risks.",
      "Collaborated closely with industry mentors to architect intelligence pipelines and maintain high standards of code quality.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    specialization: "Artificial Intelligence",
    institution: "University of Petroleum and Energy Studies (UPES)",
    duration: "Jul 2024 – Jul 2026",
    score: "CGPA: 8.3",
    location: "Dehradun, Uttarakhand",
    current: false,
    graduated: true,        // Shows "Graduated July 2026" badge
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "",
    institution: "Maharishi Arvind School of Management Studies",
    duration: "Jul 2021 – May 2024",
    score: "73.17%",
    location: "Jaipur, Rajasthan",
    current: false,
  },
];

// ============================================================
// CERTIFICATIONS
// Fields:
//   url   : credential/certificate URL or null
//   image : local image path from /public/ or null
// ============================================================
export const certifications = [
  {
    id: 1,
    title: "AWS Artificial Intelligence Practitioner",
    issuer: "Amazon Web Services (AWS) · FutureLearn",
    date: "19 June 2026",
    topics: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Amazon SageMaker", "Amazon Bedrock"],
    url: "https://www.futurelearn.com/certificates/hrpkci9",
    image: "/assets/certs/aws-certificate.jpg",
    badge: "AWS",
  },
  {
    id: 2,
    title: "Certificate of Merit — Space Science and Technology Awareness Training (START)",
    issuer: "Indian Space Research Organisation (ISRO)",
    date: "18 February 2025",
    topics: ["Space Science", "Space Technology", "Exam Grade: A+", "Attendance: 85%"],
    url: "https://elearning.iirs.gov.in/edusat_lms/public/studentCertificate/MjAyNDE1NTI2NTcxNzc=/MTU1",
    image: "/assets/certs/isro-certificate.png",
    badge: "ISRO",
  },
  {
    id: 3,
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    date: "January 2025",
    topics: ["Problem Solving", "SQL", "Software Engineering"],
    url: "https://www.hackerrank.com/certificates/f11d2a9a33b5",
    image: "/assets/certs/HackerRank.png",
    badge: "HackerRank",
  },
  {
    id: 4,
    title: "Hackathon 4.0 Participation Certificate",
    issuer: "GiveMyCertificate",
    date: "2025",
    topics: ["Hackathon", "Problem Solving", "Innovation"],
    url: "https://certificate.givemycertificate.com/c/0b534d69-512e-466e-8acc-29ccb1632db6",
    image: "/assets/certs/Hackathon-certificate.png",
    badge: "Hackathon",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
