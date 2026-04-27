import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vantureladvisory.co"),
  title: {
    default: "Vanturel Consultoria",
    template: "%s | Vanturel Consultoria",
  },
  description:
    "Consultoria financeira independente para empresas que buscam mais controle de caixa, melhor disciplina de gestão e decisões mais previsíveis.",
  openGraph: {
    title: "Vanturel Consultoria",
    description:
      "Consultoria financeira para empresas que precisam de números mais claros, prioridades melhor definidas e decisões de liderança com mais segurança.",
    url: "https://vantureladvisory.co",
    siteName: "Vanturel Consultoria",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanturel Consultoria",
    description:
      "Consultoria financeira para empresas que precisam de números mais claros, prioridades melhor definidas e decisões de liderança com mais segurança.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
