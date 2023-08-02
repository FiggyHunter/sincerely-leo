import type Post from "../types/Post";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://cdn.leotg.com/api/posts?populate=*");
  const { data: posts } = await res.json();

  return posts;
}
