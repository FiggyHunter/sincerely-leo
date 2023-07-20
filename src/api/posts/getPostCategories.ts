export function getCategoriesFromPost(post) {
  const allCategoryData = post.attributes.categories.data;
  const returnedCategories = [];
  allCategoryData.forEach((category) => {
    returnedCategories.push(category.attributes.category_name);
  });

  return returnedCategories;
}
