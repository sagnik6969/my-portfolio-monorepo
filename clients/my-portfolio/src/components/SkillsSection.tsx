import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

interface Skill {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="heading-skills">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <Card key={idx} className="p-6 hover-elevate" data-testid={`card-skill-${idx}`}>
              <h3 className="text-xl font-semibold mb-4 text-primary" data-testid={`text-skill-category-${idx}`}>
                {skill.category}
              </h3>
              <p className="text-foreground" data-testid={`text-skill-items-${idx}`}>{skill.items.join(", ")}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
