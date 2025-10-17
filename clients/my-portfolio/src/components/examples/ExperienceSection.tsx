import ExperienceSection from '../ExperienceSection';

export default function ExperienceSectionExample() {
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

  return <ExperienceSection experiences={experiences} />;
}
