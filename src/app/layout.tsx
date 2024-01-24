import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import "animate.css";
import CustomThemeProvider from "@/providers/customThemeProvider";
import NavigationBar from "@/ui/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import FooterSection from "@/ui/footer";
import Background from "@/ui/background";
import AuthProvider from "@/providers/authProvider";

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
        <AuthProvider>
          <CustomThemeProvider>
            <NavigationBar />
            <main className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen">
              {children}
            </main>
            <Analytics />
            <section id="footer">
              <FooterSection />
            </section>
            <Background />
          </CustomThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
