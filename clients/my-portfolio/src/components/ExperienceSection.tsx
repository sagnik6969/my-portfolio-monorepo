import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="heading-experience">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="p-6 hover-elevate" data-testid={`card-experience-${exp.id}`}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold" data-testid={`text-role-${exp.id}`}>{exp.role}</h3>
                  <p className="text-lg text-muted-foreground" data-testid={`text-company-${exp.id}`}>
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-duration-${exp.id}`}>{exp.duration}</p>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-foreground" data-testid={`text-achievement-${exp.id}-${idx}`}>
                      <span className="text-primary mt-1.5">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="rounded-full" data-testid={`badge-tech-${exp.id}-${idx}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
