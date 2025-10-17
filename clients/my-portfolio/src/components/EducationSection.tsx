import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa?: string;
}

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="heading-education">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="p-6 hover-elevate" data-testid={`card-education-${edu.id}`}>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold" data-testid={`text-degree-${edu.id}`}>{edu.degree}</h3>
                <p className="text-lg text-muted-foreground" data-testid={`text-institution-${edu.id}`}>
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span data-testid={`text-location-${edu.id}`}>{edu.location}</span>
                  <span>•</span>
                  <span data-testid={`text-education-duration-${edu.id}`}>{edu.duration}</span>
                  {edu.cgpa && (
                    <>
                      <span>•</span>
                      <span className="text-chart-2 font-semibold" data-testid={`text-cgpa-${edu.id}`}>{edu.cgpa} CGPA</span>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
