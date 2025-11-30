import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Importando todos os pesos
});

export const metadata: Metadata = {
  title: "T1TAN VAULT | Viralize Sem Aparecer",
  description: "O maior acervo de cortes virais para vender no automático.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}