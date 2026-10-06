import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sprinter — Find Your Forward", template: "%s | Sprinter" },
  description: "Thoughtful everyday shoes for the miles, moments, and little detours that make a day yours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" data-scroll-behavior="smooth"><body id="top">{children}</body></html>;
}
