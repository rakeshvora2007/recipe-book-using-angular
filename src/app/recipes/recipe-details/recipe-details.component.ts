import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";

import {Route, ActivatedRoute, Params} from "@angular/router";
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.selectBasedOnIndex(this.id);
    });
    // this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   console.log(recipe);
    //   this.recipe = recipe;
    // });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
