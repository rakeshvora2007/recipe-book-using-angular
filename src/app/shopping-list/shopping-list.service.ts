import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredient: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Onion', 15)
  ];

  getIngredients = () => {
    return this.ingredient.slice();
  }

  addIngredient = (neIngredient: Ingredient) => {
    this.ingredient.push(neIngredient);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }
}
