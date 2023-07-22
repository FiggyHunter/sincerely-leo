export async function getCategories() {
  const res = await fetch("http://localhost:1337/api/categories");
  const { data: categories } = await res.json();

  const returnedCategories = [];

  categories.forEach((category) =>
    returnedCategories.push({
      category_name: category.attributes.category_name,
      category_image: category.attributes.category_image,
    })
  );

  return returnedCategories;
}
