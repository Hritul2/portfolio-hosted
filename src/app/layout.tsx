import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Appbar from "@/components/Header/Appbar";

const jetbrainsMono = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hritul's Portfolio",
  description: "Contact for Web Development and Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Appbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
