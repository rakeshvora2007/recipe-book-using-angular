import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredient: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Onion', 15)
  ];

  getIngredients = () => {
    return this.ingredient.slice();
  }

  addIngredient = (neIngredient: Ingredient) => {
    this.ingredient.push(neIngredient);
    this.ingredientsChanged.next(this.ingredient.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientsChanged.next(this.ingredient.slice());
  }
}
