/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ghostgram.nayalsaurav.tech", // ✅ change this to your actual domain
  generateRobotsTxt: true, // (optional) ✅ generate robots.txt file
  sitemapSize: 5000, // (optional) max entries per sitemap file
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
  experimental: {
    appDir: true, // enable app directory support
  },
};
