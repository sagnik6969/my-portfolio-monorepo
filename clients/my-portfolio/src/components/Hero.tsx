import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Award, Download, MessageSquare } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

interface HeroProps {
  onAskAI?: () => void;
  onDownloadResume?: () => void;
}

export default function Hero({ onAskAI, onDownloadResume }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 -z-10" />
      
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
            Sagnik Jana
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground" data-testid="text-hero-title">
            Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-tagline">
            Specializing in AI, Python, FastAPI, Langchain & React.js
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Button 
            variant="outline" 
            size="default" 
            asChild 
            className="hover-elevate active-elevate-2"
            data-testid="link-github"
          >
            <a href="https://github.com/sagnik6969" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="default" 
            asChild 
            className="hover-elevate active-elevate-2"
            data-testid="link-linkedin"
          >
            <a href="https://www.linkedin.com/in/sagnik-jana-3452771ba/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="default" 
            asChild 
            className="hover-elevate active-elevate-2"
            data-testid="link-leetcode"
          >
            <a href="https://leetcode.com/sagnikjana2001/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="h-4 w-4" />
              LeetCode
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="default" 
            asChild 
            className="hover-elevate active-elevate-2"
            data-testid="link-geeksforgeeks"
          >
            <a href="https://auth.geeksforgeeks.org/user/sagnikjana2001/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks className="h-4 w-4" />
              GeeksforGeeks
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button 
            variant="default" 
            size="lg" 
            onClick={onDownloadResume}
            className="hover-elevate active-elevate-2"
            data-testid="button-download-resume"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onAskAI}
            className="hover-elevate active-elevate-2 backdrop-blur-sm"
            data-testid="button-ask-ai"
          >
            <MessageSquare className="h-4 w-4" />
            Ask AI About Me
          </Button>
        </div>

        <div className="flex justify-center gap-12 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2" data-testid="text-email">
            <span>sagnikjana2001@gmail.com</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-phone">
            <span>+91 9836033443</span>
          </div>
        </div>
      </div>
    </section>
  );
}
