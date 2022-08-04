const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

const categoriesList = categoriesItems.forEach(category =>
  console.log(`Category: ${category.children[0].textContent} 
Elements: ${category.children[1].children.length}`)
);
