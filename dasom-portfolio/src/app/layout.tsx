import type { Metadata } from "next";
import "./globals.css";

import GlobalLayout from "./layouts/GlobalLayout";

export const metadata: Metadata = {
  title: "SODASOM",
  description: "🐮DASOM Portfolio",
  icons: {
    icon: "/images/babyDasom.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
