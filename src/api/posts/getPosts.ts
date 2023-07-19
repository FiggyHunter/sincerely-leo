export async function getPosts() {
  const res = await fetch(
    "http://localhost:1337/api/posts?populate=categories"
  );
  const { data: posts } = await res.json();

  return posts;
}
