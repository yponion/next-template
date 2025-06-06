"use client";

import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const setLightMode = () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  };

  const setDarkMode = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  };

  const setSystemMode = () => {
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button onClick={setLightMode}>라이트 모드</Button>
      <Button onClick={setDarkMode}>다크 모드</Button>
      <Button onClick={setSystemMode}>시스템 모드</Button>
    </div>
  );
}
