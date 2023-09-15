export function filterProductsByCategory(products, category) {
  if (!category) {
    return products;
  }

  return products.filter((product) => {
    return product.category === category;
  });
}
