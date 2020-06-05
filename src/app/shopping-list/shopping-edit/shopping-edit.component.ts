import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('fo') slForm: NgForm;
  editMode = false;
  selectedItemIndex: number;

  constructor(private slService: ShoppingListService) {
    this.subscription = this.slService.selectedIngredientItem.subscribe((selectedItem) => {
      this.selectedItemIndex = selectedItem.index;
      this.editMode = true;
      this.slForm.setValue({
        name: selectedItem.ingredient.name,
        amount: selectedItem.ingredient.amount
      });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.selectedItemIndex);
    this.clearForm();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.selectedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.clearForm();
  }
}
