import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Reyes — Desarrollador de Software Full Stack & IA",
  description:
    "Desarrollador de Software full stack y cofundador de Solucionalo.co. Construyo aplicaciones web, automatizaciones y soluciones con IA (agentes, asistentes inteligentes, búsqueda semántica) con React, Angular, NestJS, Python y PostgreSQL. Tecnólogo en Análisis y Desarrollo de Software del SENA.",
  keywords: [
    "Desarrollador de Software",
    "Full Stack",
    "Inteligencia Artificial",
    "Agentes de IA",
    "React",
    "Angular",
    "NestJS",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Ibagué",
    "Colombia",
  ],
  authors: [{ name: "Juan Reyes", url: "https://arryxl.me" }],
  openGraph: {
    title: "Juan Reyes — Desarrollador de Software Full Stack & IA",
    description:
      "Cofundador de Solucionalo.co. Aplicaciones web, automatización e inteligencia artificial que optimizan procesos reales de negocio.",
    url: "https://arryxl.me",
    siteName: "Juan Reyes · Portafolio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
