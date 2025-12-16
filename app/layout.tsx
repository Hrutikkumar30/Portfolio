import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Portfolio - N T HRUTIKKUMAR',
  description: 'Personal portfolio website showcasing projects, skills, and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className="bg-body dark:bg-gray-900 transition-colors duration-300">
        <Script 
          src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" 
          strategy="beforeInteractive"
        />
        {children}
        <Script src="https://unpkg.com/scrollreveal" strategy="afterInteractive" />
      </body>
    </html>
  )
}

