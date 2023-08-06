export function checkIfPostExists(postToBeChecked, postArray) {
  for (const post in postArray) {
    if (post.id === postToBeChecked.id) return true;
  }

  return false;
}
