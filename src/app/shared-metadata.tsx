import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    template: '%s | IT Open Helper',
    default: 'IT Open Helper', 
  },
  description: "Central de conhecimento tech, anotações sobre Programação, SO e Ferramentas.",
  authors: [{ name: "Jonathan Amorim", url: "https://github.com/jonathaneamorim" }],
  keywords: ["Next.js", "React", "Programação", "Anotações", "Linux"],
  openGraph: {
    title: "IT Open Helper",
    description: "Sua central de conhecimento tech. Aqui você encontra anotações sobre Programação, Sistemas Operacionais e Ferramentas. Tudo organizado para facilitar seu aprendizado e consulta rápida.",
    siteName: "IT Open Helper",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};