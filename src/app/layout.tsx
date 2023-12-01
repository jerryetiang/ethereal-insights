import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import Provider from "@/utils/provider";
import NavigationBar from "@/ui/components/navbar/navbar";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ethereal Insights",
  description: "Ethereal Insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-black theme-transition`}>
        <Provider>
          <NavigationBar />
          <main className="">{children}</main>
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
