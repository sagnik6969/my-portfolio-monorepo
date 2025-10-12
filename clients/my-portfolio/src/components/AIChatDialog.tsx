import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import ProtectedComponent from "./commmon/ProtectedComponent";
import { SSE } from "sse.js";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "./ui/card";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface AIChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AIChatDialog({
  open,
  onOpenChange,
}: AIChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm an AI assistant that can answer questions about Sagnik Jana's experience, skills, and projects. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    };
    let requestBody = { chat_history: [...messages, userMessage] };
    setMessages([...messages, userMessage]);

    setInput("");
    setIsLoading(true);

    const source = new SSE(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      method: "POST",
      payload: JSON.stringify(requestBody),
    });

    source.addEventListener("message", (e: any) => {
      if (e.data === "[DONE]") {
        console.log("Stream finished");
        source.close();
      } else {
        console.log("Received data:", e.data);
        const parsedData = JSON.parse(e.data);
        parsedData.token.forEach((token: any) => {
          setMessages((previousMessages) => {
            const newMessages = [...previousMessages];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.role === "assistant") {
              lastMessage.content += token.text;
            } else {
              setIsLoading(false);
              newMessages.push({
                id: newMessages.length + 1,
                role: "assistant",
                content: token.text,
              });
            }
            console.log("Updated messages:", newMessages);
            return newMessages;
          });
        });
      }
    });

    console.log("Message sent:", input);
  };

  const customComponents: any = {
    // Override the <table> element
    table: ({ node, ...props }: any) => {
      return (
        <Card className="my-3 p-2">
          <Table {...props} />
        </Card>
      );
    },

    // You can also override other elements like thead, tbody, tr, th, td
    thead: TableHeader,
    tbody: TableBody,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[600px] flex flex-col p-0">
        <ProtectedComponent>
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle
              className="flex items-center gap-2"
              data-testid="text-chat-title"
            >
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
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
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
                    <div className="text-sm">
                      <Markdown
                        components={customComponents}
                        remarkPlugins={[remarkGfm]}
                      >
                        {message.content}
                      </Markdown>
                    </div>
                  </div>
                  {message.role === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <span className="relative flex size-3 ml-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
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
            <p
              className="text-xs text-muted-foreground mt-2 text-center"
              data-testid="text-powered-by"
            >
              Powered by Gemini
            </p>
          </div>
        </ProtectedComponent>
      </DialogContent>
    </Dialog>
  );
}
