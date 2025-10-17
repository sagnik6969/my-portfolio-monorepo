import { useState } from "react";
import Navbar from '../Navbar';

export default function NavbarExample() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  return (
    <Navbar 
      theme={theme} 
      onThemeToggle={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log('Theme toggled to:', newTheme);
      }} 
    />
  );
}
