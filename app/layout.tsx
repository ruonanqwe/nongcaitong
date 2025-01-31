import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import './globals.css'
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "农业金融",
    "农业科技",
    "供应链金融",
    "农户贷款",
    "农业产业链",
    "金融科技",
    "农业信贷",
  ],
  authors: [
    {
      name: "小海",
      url: "https://www.nongcaitong.com",
    },
  ],
  creator: "小海",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.nongcaitong.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nongcaitong",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
