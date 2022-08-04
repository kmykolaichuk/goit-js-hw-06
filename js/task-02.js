const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const addIngredientsItem = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  return ingredientItem;
});

ingredientsEl.append(...addIngredientsItem);
