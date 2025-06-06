"use client";

import { useEffect } from "react";

export default function ThemeEventListner() {
  useEffect(() => {
    if (!("theme" in localStorage)) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: any) => {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
  }, []);
  return null;
}
