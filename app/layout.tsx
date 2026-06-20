import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Noto_Serif_JP } from "next/font/google";
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
  title: "美字工房 | BIJIKOBO",
  description: "コトバのチカラ。ローカライズ・インバウンド対応のコトバとデザイン。",
  metadataBase: new URL("https://iljos.com"),
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
