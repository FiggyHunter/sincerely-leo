export function getPhotographUrl(photo) {
  const base = "https://cdn.leotg.com";
  const imageURL = photo.attributes.image.data.attributes.formats.large.url;

  return base + imageURL;
}
