import { Component, OnInit } from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test1", "This is test", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"),
    new Recipe("Test1", "This is test", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
