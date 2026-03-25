import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  author: string;
  date: string;
  tags?: string[];
  category?: string;
  description?: string;
  // RLM-specific persona fields
  author_name?: string;
  author_role?: string;
  author_team?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      content,
      ...(data as PostFrontmatter),
    };
  });

  // Sort newest first
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    ...(data as PostFrontmatter),
  };
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.tags?.includes(tag));
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === category);
}

export async function getAllTags(): Promise<string[]> {
  const all = await getAllPosts();
  const tagSet = new Set<string>();
  all.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
