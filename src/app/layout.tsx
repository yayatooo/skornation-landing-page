import type { Metadata } from "next";
import "./globals.css";
import { MavenPro } from "./fonts/font";



export const metadata: Metadata = {
  title: "SKORNATION",
  description: "Skornation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={MavenPro.className}
      >
        {children}
      </body>
    </html>
  );
}
