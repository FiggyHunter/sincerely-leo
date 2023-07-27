export async function getImages() {
  const res = await fetch("https://cdn.leotg.com/api/images?populate=*");
  const { data: images } = await res.json();

  return images;
}
