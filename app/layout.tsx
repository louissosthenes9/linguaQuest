import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ExitModal from "@/components/modals/ExitModal";


export const metadata: Metadata = {
  title: "Lingua Quest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
          <html lang="en">
            <body>
              <Toaster/>
              <ExitModal />
              {children}
            </body>
          </html>     
   </ClerkProvider>
  );
}