import ClientLayout from "./_lib/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "SUD 공식문서",
  description:
    "SUD(Soon UI Design)는 빠르고 쉽게 사용할 수 있는 UI 라이브러리입니다.",
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
    title: "SUD - Soon UI Design",
    description:
      "SUD(Soon UI Design)는 빠르고 쉽게 사용할 수 있는 UI 라이브러리입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "SUD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SUD - Soon UI Design"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SUD - Soon UI Design",
    description:
      "SUD(Soon UI Design)는 빠르고 쉽게 사용할 수 있는 UI 라이브러리입니다.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
