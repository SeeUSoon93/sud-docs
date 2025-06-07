/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sud.co.kr",
  generateRobotsTxt: true,
  outDir: "public",
  sitemapSize: 7000,
  // 정적 경로 설정
  exclude: [
    "/api/*",
    "/_*",
    "/_lib/*" // _lib만 제외 (내부 라이브러리용)
  ],
  // 변경 빈도 설정
  changefreq: "daily",
  // 우선순위 설정
  priority: 0.7
};
