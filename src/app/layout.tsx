import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer";

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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
