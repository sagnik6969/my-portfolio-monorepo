import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface AIChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AIChatDialog({ open, onOpenChange }: AIChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi! I'm an AI assistant that can answer questions about Sagnik Jana's experience, skills, and projects. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      role: "assistant",
      content: "This is a demo response. In the full application, I'll provide detailed answers about Sagnik's experience, achievements, and technical expertise using AI."
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
    console.log('Message sent:', input);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="flex items-center gap-2" data-testid="text-chat-title">
            <Bot className="h-5 w-5 text-primary" />
            Ask AI About Sagnik
          </DialogTitle>
          <DialogDescription data-testid="text-chat-description">
            Get instant answers about experience, skills, and achievements
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                data-testid={`message-${message.id}`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm" data-testid={`text-message-content-${message.id}`}>{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about experience, skills, projects..."
              className="flex-1"
              data-testid="input-chat-message"
            />
            <Button 
              onClick={handleSend} 
              size="icon"
              className="hover-elevate active-elevate-2"
              data-testid="button-send-message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center" data-testid="text-powered-by">
            Powered by OpenAI
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
