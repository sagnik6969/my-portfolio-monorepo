import EducationSection from '../EducationSection';

export default function EducationSectionExample() {
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

  return <EducationSection education={education} />;
}
