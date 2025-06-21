import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#4F46E5", // Custom primary color
          colorText: "#E5E7EB", // Custom text color
          colorBackground: "#1F2937", // Custom background color
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="bg-gray-700">{children}</main>
            <footer className="bg-gray-800 text-white py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} My Website. All rights
                  reserved.
                </p>
                <p className="text-xs mt-2">Made by Partha</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
