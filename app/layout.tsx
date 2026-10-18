import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Faro Casino – Официальный сайт и рабочее зеркало казино Фаро',
  description: 'Faro casino официальный сайт: вход и регистрация через актуальное рабочее зеркало Фаро казино. Играйте онлайн на реальные деньги в слоты с бонусами.',
  metadataBase: new URL('https://farocasino29.vercel.app'),
  alternates: {
    canonical: 'https://farocasino29.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Faro Casino – Официальный сайт и рабочее зеркало казино Фаро',
    description: 'Вход на официальный сайт Faro Casino через рабочее зеркало. Бонусы на первый депозит, быстрые выплаты и лицензионные слоты.',
    url: 'https://farocasino29.vercel.app',
    siteName: 'Faro Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino – Официальный сайт и рабочее зеркало',
    description: 'Актуальное рабочее зеркало Faro Casino. Играть онлайн на официальном сайте казино Фаро.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0c10',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`dark bg-[#0b0c10] ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://farocasino29.vercel.app" />
        <meta name="theme-color" content="#0b0c10" />
      </head>
      <body className="font-sans antialiased bg-[#0b0c10] text-[#e5e7eb] selection:bg-[#f59e0b] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
