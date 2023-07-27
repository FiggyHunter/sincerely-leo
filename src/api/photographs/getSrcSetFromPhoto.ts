export function getSrcSetFromPhoto(photo) {
  const base = "https://cdn.leotg.com";

  const string = `${
    base + photo.attributes.image.data.attributes.formats.small.url
  } ${photo.attributes.image.data.attributes.formats.small.width}w, ${
    base + photo.attributes.image.data.attributes.formats.medium.url
  } ${photo.attributes.image.data.attributes.formats.medium.width}w, ${
    base + photo.attributes.image.data.attributes.formats.large.url
  } ${photo.attributes.image.data.attributes.formats.large.width}w  `;

  return string;
}
