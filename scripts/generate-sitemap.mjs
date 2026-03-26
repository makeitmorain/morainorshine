import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://morainorshine.pages.dev";
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function getAllPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return { slug, ...data };
  });
}

const posts = getAllPosts();
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/projects", priority: "0.9", changefreq: "weekly" },
  { url: "/projects/rlm", priority: "0.8", changefreq: "weekly" },
  { url: "/projects/coachai", priority: "0.7", changefreq: "monthly" },
  { url: "/projects/fl-mens-league", priority: "0.8", changefreq: "weekly" },
  { url: "/projects/matchup-plus", priority: "0.7", changefreq: "monthly" },
  { url: "/projects/fantasy-baseball", priority: "0.6", changefreq: "monthly" },
  { url: "/tools", priority: "0.7", changefreq: "monthly" },
  { url: "/blog", priority: "0.9", changefreq: "daily" },
  { url: "/contact", priority: "0.5", changefreq: "yearly" },
];

const urls = staticPages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .concat(
    posts.map(
      (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml);
console.log(
  `Sitemap generated with ${staticPages.length + posts.length} URLs.`
);
