import type { Metadata } from "next";
import { Kufam } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@/components/whatsappIco";
import Nav from "@/components/nav";

const inter = Kufam({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "athirwan",
  description: "athirwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <WhatsAppIcon phone="+966563385548" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
