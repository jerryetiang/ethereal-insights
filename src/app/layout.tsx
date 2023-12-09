import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import Provider from "@/utils/provider";
import NavigationBar from "@/ui/navbar";
import { Analytics } from "@vercel/analytics/react";
import FooterSection from "@/ui/footer";
import Background from "@/ui/background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body
        className={`${poppins.className} bg-white dark:bg-black theme-transition scroll-smooth`}
      >
        <Provider>
          <NavigationBar />
          <main className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen">{children}</main>
          <Analytics />
          <section id="footer">
            <FooterSection />
          </section>
          <Background />
        </Provider>
      </body>
    </html>
  );
}
