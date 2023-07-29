import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/UI/navbar/Navbar";
import Providers from "./src/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "giaco-dev",
  description: "Giacomo Tolari's portfolio",
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        width: 1200,
        height: 630,
        alt: "giaco.dev",
        secureUrl:
          "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      /*suppressHydrationWarning*/
    >
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
