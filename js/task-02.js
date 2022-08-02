const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const allIngredientsEl = document.querySelector('#ingredients');

const addIngredientsItemEl = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  return ingredientItem;
});

allIngredientsEl.append(...addIngredientsItemEl);
