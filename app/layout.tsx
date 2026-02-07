import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Procurement Contracts",
  description: "Internal procurement contract management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="app-title">Procurement Contracts</div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
