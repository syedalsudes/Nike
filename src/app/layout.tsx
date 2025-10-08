import GlobalLoader from "@/components/GlobalLoader"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { CartProvider } from "@/contexts/CartContext"
import { FavoritesProvider } from "@/contexts/FavoritesContext"
import Script from "next/script"

const Header = dynamic(() => import("@/components/Header"))
const Footer = dynamic(() => import("@/components/Footer"))

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://soleflex.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nike Store | Just Do It",
    template: "%s | Nike",
  },
  description:
    "Shop the latest Nike shoes, apparel, and accessories. Designed for performance, comfort, and style. Just Do It.",
  authors: [
    { name: "Syed Al-sudes", url: baseUrl },
  ],
  creator: "Syed Al-sudes",
  publisher: "Nike Official Store",
  icons: {
    icon: "/nike.svg",
    shortcut: "/nike.svg",
    apple: "/nike.svg",
  },
  openGraph: {
    title: "Nike Official Store | Just Do It",
    description:
      "Shop the latest Nike shoes, apparel, and accessories. Designed for performance, comfort, and style.",
    url: baseUrl,
    siteName: "Nike",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nike Official Store Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nike Official Store | Just Do It",
    description:
      "Explore the world of Nike — shoes, clothing, and accessories for every athlete.",
    images: ["/og-image.jpg"],
    creator: "@nike",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Run theme script before anything else */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (_) {}
            })();
          `}
        </Script>

        <CartProvider>
          <FavoritesProvider>
            <GlobalLoader />
            <Header />
            {children}
            <Footer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  )
}