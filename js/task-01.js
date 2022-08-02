const categoriesItemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemEl.length}`);

const categoriesArrayEl = [...categoriesItemEl].map(category =>
  console.log(`Category: ${category.children[0].textContent} 
Elements: ${category.children[1].children.length}`)
);
