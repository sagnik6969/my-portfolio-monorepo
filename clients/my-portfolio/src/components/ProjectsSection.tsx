import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  githubBackend?: string;
  details: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="heading-projects">Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover-elevate flex flex-col" data-testid={`card-project-${project.id}`}>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="rounded-full font-mono text-xs" data-testid={`badge-project-tech-${project.id}-${idx}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-foreground" data-testid={`text-project-detail-${project.id}-${idx}`}>
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-4 mt-4 border-t">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="hover-elevate active-elevate-2"
                    data-testid={`link-project-github-${project.id}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Frontend
                    </a>
                  </Button>
                )}
                {project.githubBackend && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="hover-elevate active-elevate-2"
                    data-testid={`link-project-github-backend-${project.id}`}
                  >
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Backend
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
