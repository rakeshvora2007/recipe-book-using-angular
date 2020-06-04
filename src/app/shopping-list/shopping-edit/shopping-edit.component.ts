import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm) {
    const value = form.value;
    this.slService.addIngredient(
      new Ingredient(
        value.name,
        value.amount
      )
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
