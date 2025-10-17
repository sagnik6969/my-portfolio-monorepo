import ProjectsSection from '../ProjectsSection';

export default function ProjectsSectionExample() {
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

  return <ProjectsSection projects={projects} />;
}
