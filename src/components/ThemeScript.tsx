import Script from "next/script";

export default function ThemeScript() {
  return (
    <Script>
      {`document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);`}
    </Script>
  );
}
