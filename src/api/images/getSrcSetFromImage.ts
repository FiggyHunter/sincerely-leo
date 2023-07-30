export function getSrcSetFromImage(image) {
  const base = "https://cdn.leotg.com";

  const string = `${base + image.data.attributes.formats.small.url} ${
    image.data.attributes.formats.small.width
  }w, ${base + image.data.attributes.formats.medium.url} ${
    image.data.attributes.formats.medium.width
  }w, ${base + image.data.attributes.formats.large.url} ${
    image.data.attributes.formats.large.width
  }w  `;

  return string;
}
