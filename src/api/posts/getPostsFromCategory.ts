import { getCategoriesFromPost } from "./getCategoriesFromPost.ts";
import { getPosts } from "./getPosts.ts";

export async function getPostsFromCategory(searchedCategory) {
  const posts = await getPosts();

  const returnedPosts = [];
  for (const post of posts) {
    const categories = await getCategoriesFromPost(post);
    if (categories.includes(searchedCategory)) returnedPosts.push(post);
  }
  return returnedPosts;
}
