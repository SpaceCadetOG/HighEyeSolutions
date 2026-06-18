"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard =
    pathname.startsWith("/portal/dashboard") ||
    pathname.startsWith("/admin/dashboard");

  if (isDashboard) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
