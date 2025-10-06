import SkillsSection from '../SkillsSection';

export default function SkillsSectionExample() {
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

  return <SkillsSection skills={skills} />;
}
