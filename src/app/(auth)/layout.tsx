import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode, use } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const session = use(auth());
  if (!session?.user) redirect("/");
  return children;
}
