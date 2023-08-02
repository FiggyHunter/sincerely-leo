import type Post from "@/api/types/Post";

interface PaginationResult {
  posts: Post[];
  nextPage: number | null;
  previousPage: number | null;
}

export function paginate(
  posts: Post[],
  pageNumber: number,
  numberOfPostsPerPage: number
): PaginationResult {
  const startIndex = (pageNumber - 1) * numberOfPostsPerPage;
  const endIndex = startIndex + numberOfPostsPerPage;

  // Slice the posts array to get the posts for the current page
  const paginatedPosts = posts.slice(startIndex, endIndex);

  let previousPage = pageNumber <= 1 ? null : pageNumber - 1;
  let nextPage = posts.length <= endIndex ? null : pageNumber + 1;

  return {
    posts: paginatedPosts,
    nextPage: nextPage,
    previousPage: previousPage,
  };
}
