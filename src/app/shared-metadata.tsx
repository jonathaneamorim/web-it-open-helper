import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    template: '%s | IT Open Helper',
    default: 'IT Open Helper', 
  },
  description: "Central de conhecimento tech, anotações sobre Programação, SO e Ferramentas.",
  authors: [{ name: "Jonathan Amorim", url: "https://github.com/jonathaneamorim" }],
  keywords: ["Next.js", "React", "Programação", "Anotações", "Linux"],
  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: "IT Open Helper",
    description: "Sua central de conhecimento tech.",
    siteName: "IT Open Helper",
    locale: "pt_BR",
    type: "website",
  },
};