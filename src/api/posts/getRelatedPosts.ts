import { getPosts } from "./getPosts";
import type Post from "../types/Post";
import { sortPosts } from "./sortedPosts";
import { getPostsFromCategory } from "./getPostsFromCategory";
import { getCategoriesFromPost } from "./getCategoriesFromPost";
import { areArraysEqual } from "@/ts/areArraysEqual";
import { checkIfPostExists } from "./checkIfPostExists";

export async function getRelatedPosts(
  recievedPost: Post,
  numberOfPosts: number
) {
  const postCategories = getCategoriesFromPost(recievedPost);

  const posts: Post[] = await getPosts();
  const sortedPosts: Post[] = await sortPosts(posts);

  const returnedPosts: Post[] = [];

  const filteredPosts = sortedPosts.filter(
    (filteredPost) => recievedPost.id !== filteredPost.id
  );

  filteredPosts.forEach((post) => {
    if (
      areArraysEqual(getCategoriesFromPost(post), postCategories) &&
      returnedPosts.length < numberOfPosts
    ) {
      returnedPosts.push(post);
    }
  });

  if (returnedPosts.length === numberOfPosts) return returnedPosts;

  for (const category of postCategories) {
    const postsFromCategory = await getPostsFromCategory(category);

    for (const post of postsFromCategory) {
      if (
        returnedPosts.length < numberOfPosts &&
        !checkIfPostExists(post, returnedPosts) &&
        post.id !== recievedPost.id
      )
        returnedPosts.push(post);
    }
  }

  for (const filteredPost of filteredPosts) {
    if (
      returnedPosts.length < numberOfPosts &&
      !checkIfPostExists(filteredPost, returnedPosts)
    )
      returnedPosts.push(filteredPost);
  }

  return returnedPosts;
}
