import { useState } from "react";
import AIChatDialog from '../AIChatDialog';
import { Button } from "@/components/ui/button";

export default function AIChatDialogExample() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Chat</Button>
      <AIChatDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
