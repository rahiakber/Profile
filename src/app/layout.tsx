import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://akberhossin.dev'),
  title: "Akber Hossin | Senior Software Developer | .NET & SQL Server",
  description: "Portfolio of Akber Hossin, a senior software developer specializing in .NET, C#, SQL Server, enterprise applications, APIs, reporting systems, and AI-powered software.",
  openGraph: {
    title: "Akber Hossin Portfolio",
    description: "Senior Full-Stack .NET Developer Portfolio.",
    url: "https://akberhossin.dev",
    images: ["/og-image.png"],
    type: "website",
  },
  alternates: {
    canonical: "https://akberhossin.dev",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background-dark text-text-light min-h-screen`}>
        {/* Global container for padding and max width */}
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
