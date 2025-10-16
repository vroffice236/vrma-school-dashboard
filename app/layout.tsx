// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "VRMA School Dashboard",
  description: "School Management for Vedic Roots Montessori Academy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased bg-brand-primary text-brand-secondary font-inter flex">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
