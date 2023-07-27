export async function getPhotographs() {
  const res = await fetch("https://cdn.leotg.com/api/photographs?populate=*");
  const { data: photos } = await res.json();

  return photos;
}
