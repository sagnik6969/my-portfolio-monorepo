import { Card } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

interface Achievement {
  id: number;
  text: string;
  highlight?: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="h-8 w-8 text-chart-2" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="heading-achievements">Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="p-6 hover-elevate" data-testid={`card-achievement-${achievement.id}`}>
              <div className="flex gap-3">
                <Award className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <p className="text-foreground" data-testid={`text-achievement-${achievement.id}`}>
                  {achievement.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
