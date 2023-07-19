export function sortPosts(posts) {
  const sortedPosts = posts.sort((a, b) => {
    const dateA: Date = new Date(a.attributes.publishedAt);
    const dateB: Date = new Date(b.attributes.publishedAt);
    return dateB - dateA;
  });
  return sortedPosts;
}

export function getLatestPost(posts, { sort = undefined } = {}) {
  if (sort) {
    const sortedPosts = sortPosts(posts);
    return sortedPosts[0];
  }
  return posts[posts.length - 1];
}
