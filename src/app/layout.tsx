import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Api Art",
  description: "Api Art Museum Online Catalogue",
   viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <div className={`w-screen h-screen flex justify-center`}>
        <div className="w-full h-full flex flex-col max-w-[1440px] gap-8 p-4">
        {children}
        </div>
      </div>
      </body>
    </html>
  );
}
