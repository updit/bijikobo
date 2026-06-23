import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "美字工房 | びじこうぼう — コトバとデザインで、伝わりにくいものを見える形に",
  description:
    "長く休んでいた事務所を、ひっそりと再開しました。多言語対応・インバウンド向けのコトバとデザインで、伝わりにくいものを見える形に変えていきます。日本語・英語のローカライズ、ブランドコピー、UI/UXレビューなど、小規模ならではの1対1サポートでお手伝いします。",
  metadataBase: new URL("https://iljos.com"),
  openGraph: {
    title:
      "美字工房 | びじこうぼう — コトバとデザインで、伝わりにくいものを見える形に",
    description:
      "長く休んでいた事務所を、ひっそりと再開しました。多言語対応・インバウンド向けのコトバとデザインで、伝わりにくいものを見える形に変えていきます。",
    url: "https://iljos.com",
    siteName: "美字工房",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "美字工房",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "美字工房 | びじこうぼう",
    description:
      "長く休んでいた事務所を、ひっそりと再開しました。多言語対応・インバウンド向けのコトバとデザイン。",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/kobo16.png", sizes: "16x16", type: "image/png" },
      { url: "/kobo48.png", sizes: "48x48", type: "image/png" },
      { url: "/kobo192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/kobo192.png",
  },
  verification: {
    google: "LgM42nwsCkVUsNRnSR1xc3oQTJRXIuYiKhaP34N5E1A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKakuGothicNew.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
