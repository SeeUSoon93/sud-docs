import ClientLayout from "./_lib/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Soon UI Design",
  description:
    "Soon UI Design(SUD)은 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다.",
  icons: {
    icon: "/sud.svg"
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Soon UI Design",
    description:
      "Soon UI Design(SUD)은 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "Soon UI Design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soon UI Design"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soon UI Design",
    description:
      "Soon UI Design(SUD)은 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
