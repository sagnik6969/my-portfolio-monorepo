import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-contact">Get In Touch</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4" data-testid="heading-contact-info">Contact Information</h3>
              <div className="flex items-center gap-3" data-testid="contact-email">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:sagnikjana2001@gmail.com" className="hover:text-primary transition-colors">
                  sagnikjana2001@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3" data-testid="contact-phone">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+919836033443" className="hover:text-primary transition-colors">
                  +91 9836033443
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4" data-testid="heading-social-links">Social Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" asChild className="hover-elevate active-elevate-2" data-testid="button-contact-github">
                  <a href="https://github.com/sagnik6969" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover-elevate active-elevate-2" data-testid="button-contact-linkedin">
                  <a href="https://www.linkedin.com/in/sagnik-jana-3452771ba/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover-elevate active-elevate-2" data-testid="button-contact-leetcode">
                  <a href="https://leetcode.com/sagnikjana2001/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="h-4 w-4" />
                    LeetCode
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover-elevate active-elevate-2" data-testid="button-contact-gfg">
                  <a href="https://auth.geeksforgeeks.org/user/sagnikjana2001/" target="_blank" rel="noopener noreferrer">
                    <SiGeeksforgeeks className="h-4 w-4" />
                    GfG
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
