import ClientLayout from "./_lib/components/ClientLayout";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata = {
  metadataBase: new URL("https://sud.co.kr"),
  title: "SUD - Soon UI Development | React UI 라이브러리",
  description:
    "SUD(Soon UI Development)는 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다. 컴포넌트, 아이콘, 스타일 등 웹 개발에 필요한 모든 것을 제공합니다.",
  keywords:
    "SUD, Soon UI, React, UI 라이브러리, 웹 개발, 컴포넌트, 아이콘, 스타일, 리액트 아이콘, 리액트 라이브러리, React Library, React UI, React Icon, React UI Development, React UI Library, React UI Component, React UI Icon, React UI Style",
  icons: {
    icon: "/sud.svg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "SUD - Soon UI Development | React UI 라이브러리",
    description:
      "SUD(Soon UI Development)는 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다. 컴포넌트, 아이콘, 스타일 등 웹 개발에 필요한 모든 것을 제공합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "SUD - Soon UI Development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SUD - Soon UI Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SUD - Soon UI Development | React UI 라이브러리",
    description:
      "SUD(Soon UI Development)는 쉽고 빠르게 사용할 수 있는 React UI 라이브러리입니다. 컴포넌트, 아이콘, 스타일 등 웹 개발에 필요한 모든 것을 제공합니다.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://sud.co.kr"
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
