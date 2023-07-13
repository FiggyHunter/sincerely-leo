export function slugify(postTitle: string): string {
  return postTitle
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-word characters (excluding hyphens)
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove hyphens from the beginning and end of the slug
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return date.toLocaleDateString(undefined, options);
}
