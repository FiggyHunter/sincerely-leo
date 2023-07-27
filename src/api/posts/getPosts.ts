export async function getPosts() {
  const res = await fetch(
    "https://cdn.leotg.com/api/posts?populate=categories"
  );
  const { data: posts } = await res.json();

  return posts;
}
