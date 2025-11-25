import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nautic Guard - Invernaje y Mantenimiento de Embarcaciones en Palma de Mallorca",
  description: "Servicios de invernaje de embarcaciones, mantenimiento holístico y transporte marítimo en Palma de Mallorca, España. Almacenamiento seguro 24/7, transporte y mantenimiento profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
