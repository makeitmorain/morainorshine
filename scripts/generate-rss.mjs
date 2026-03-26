import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://morainorshine.pages.dev";
const SITE_TITLE = "Morain or Shine";
const SITE_DESCRIPTION =
  "Zac Morain -- baseball analytics, AI, and software development. Projects, tools, and writing.";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getAllPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return { slug, ...data };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const posts = getAllPosts();

const items = posts
  .slice(0, 20)
  .map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    const description = post.description ? escapeXml(post.description) : "";
    const title = escapeXml(post.title);
    const author = post.author_name ?? post.author ?? "Zac Morain";

    return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(author)}</author>
      ${description ? `<description>${description}</description>` : ""}
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(process.cwd(), "public", "feed.xml"), xml);
console.log(`RSS feed generated with ${posts.length} posts.`);
