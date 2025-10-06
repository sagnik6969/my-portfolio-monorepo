import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatDialog from "@/components/AIChatDialog";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleDownloadResume = () => {
    console.log("Download resume clicked - will implement PDF download");
    alert("Resume download feature will be implemented in the full version!");
  };

  const handleAskAI = () => {
    setIsChatOpen(true);
  };

  const experiences = [
    {
      id: 1,
      role: "Software Engineer 1",
      company: "HashedIn by Deloitte",
      location: "Kolkata, West Bengal, India",
      duration: "Jan. 2025 - Present",
      achievements: [
        "Developed an HR query chatbot leveraging RAG and Langchain agents, successfully automating HR query resolution and reducing manual effort by 80%",
        "Enhanced information retrieval accuracy and relevance by 30% through the integration of advanced RAG strategies like semantic chunking and query reranking",
        "Built the solution using Python with FastAPI for the API layer, Langchain/Langgraph for agentic workflows, and pgvector for similarity search on HR knowledge data"
      ],
      technologies: ["Python", "FastAPI", "Langchain", "Langgraph", "pgvector", "RAG"]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "HashedIn by Deloitte",
      location: "Bengaluru, Karnataka, India",
      duration: "Oct. 2024 - Jan. 2025",
      achievements: [
        "Developed an AI-powered evaluation platform that automates technical assignment assessments and viva voce examinations for trainees, reducing evaluation time from 2 hours to 20 minutes",
        "Gained hands-on experience with diverse tech stacks, including Java + Spring Boot, React, and Python + FastAPI + Langchain"
      ],
      technologies: ["Python", "FastAPI", "Langchain", "React.js", "Java", "Spring Boot"]
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["C++ (with STL)", "JavaScript", "HTML", "CSS", "SQL", "Python"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "FastAPI", "Langchain", "Langgraph", "AutoGen"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "VS Code"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Task Scheduler",
      description: "A full-stack task scheduling application with lazy loading and authentication",
      technologies: ["Vue.js", "PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sagnik6969/task_scheduler_frontend",
      githubBackend: "https://github.com/sagnik6969/task_scheduler_backend/",
      details: [
        "Developed a task scheduler web application using Vue.js for frontend, Laravel for backend, and MySQL for database management",
        "Implemented lazy loading to reduce the initial loading time",
        "Implemented appropriate user authentication and authorization features to ensure secure access to the application"
      ]
    },
    {
      id: 2,
      title: "Job Portal",
      description: "A comprehensive job portal with search, posting, and application tracking",
      technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "Blade"],
      github: "https://github.com/sagnik6969/job-board",
      details: [
        "Developed a job portal using Laravel for the backend, Laravel's Blade templating engine along with HTML and CSS for the frontend and MySQL for database management",
        "Implemented features such as user authentication, job search functionality, job posting and application tracking within the web application"
      ]
    }
  ];

  const achievements = [
    {
      id: 1,
      text: "Secured 513th rank in TCS CodeVita out of 444K+ participants from 94 countries"
    },
    {
      id: 2,
      text: "Earned a Knight badge on LeetCode, i.e becoming a part of Top 4% out of 300k+ candidates"
    },
    {
      id: 3,
      text: "Solved 700+ problems on Leetcode (140+ easy, 350+ medium, 60+ hard)"
    },
    {
      id: 4,
      text: "Achieved global ranking of 188 in Codechef February Cook-Off 2023 (Div 2) contest"
    },
    {
      id: 5,
      text: "Secured a spot among the top 15 participants in the TextBase Titans Hackathon"
    },
    {
      id: 6,
      text: "Achieved all India rank 214 out of 1 lakh+ participants in Codekaze-Sep'23"
    },
    {
      id: 7,
      text: "Achieved a 5 star rating in problem solving on HackerRank"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Maulana Abul Kalam Azad University of Technology (Formerly WBUT)",
      location: "Haringhata, West Bengal",
      duration: "Nov. 2020 - June 2024",
      cgpa: "9.40"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <Hero onAskAI={handleAskAI} onDownloadResume={handleDownloadResume} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <AchievementsSection achievements={achievements} />
      <EducationSection education={education} />
      <ContactSection />
      <Footer />
      <AIChatDialog open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}
