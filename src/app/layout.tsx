import "./globals.scss";
import type { Metadata } from "next";
import Aside from "@/components/Elements/Aside";
import Header from "@/components/Elements/Header";

export const metadata: Metadata = {
  title: "oopsum",
  description: "Crypto Trading Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          <Aside />
          <div className='flex flex-col w-full h-fit pl-[30px] pr-[30px]'>
            <Header />
            <main className='flex flex-col items-center justify-center'>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
