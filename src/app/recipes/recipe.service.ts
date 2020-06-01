import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test1',
      'This is test',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&w=1000&q=80',
      [new Ingredient('Banana', 10), new Ingredient('Tomatoes', 12)]
    ),
    new Recipe(
      'Test2',
      'This is test 2',
      'https://m.economictimes.com/thumb/msid-72299767,width-1200,height-900,resizemode-4,imgsize-365179/indian-food-bccl.jpg',
      [new Ingredient('Watermelon', 5), new Ingredient('Okra', 14)]
    )
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.slService.addIngredients(ingredients);
  }

  selectBasedOnIndex(index: number) {
    // this.recipeSelected.emit(this.recipes[index]);
    return this.recipes.slice()[index];
  }
}
