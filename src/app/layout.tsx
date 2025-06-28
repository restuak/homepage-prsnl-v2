import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Restu Aka Personal Website",
  description: "Restu Aka Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body>
        {children}
      </body>
    </html>
  );
}
