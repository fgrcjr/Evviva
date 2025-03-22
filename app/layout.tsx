import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evviva - Guiding Young Minds",
  description:
    "A nurturing Montessori environment fostering emotional, intellectual, and social growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}