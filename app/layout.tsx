import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";


const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord App",
  description: "Created by Sameer Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="discord-theme">
            {children}
          </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
