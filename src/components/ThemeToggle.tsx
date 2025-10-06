"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
        setIsMounted(true);
    }, []);

    const handleThemeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (!isMounted) return null;

    return (
        <button
            onClick={handleThemeToggle}
            className="flex items-center outline-none justify-center transition duration-300"
        >
            {theme === "light" ? (
                <Sun className="w-6 h-6 text-foreground" />
            ) : (
                <Moon className="w-6 h-6 text-foreground" />
            )}
        </button>
    );
}
