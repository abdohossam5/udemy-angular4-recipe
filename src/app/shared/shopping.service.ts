import {Ingredient} from './ingredient.model';
import {EventEmitter} from '@angular/core';
import {Recipe} from '../recipe-book/recipe.model';
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] = [];

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  add(i: Ingredient) {
    this._ingredients.push(i);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  addRecipeImgredients(r: Recipe) {
    if (!r) {
      return;
    }
    // r.ingredients.forEach((i: Ingredient) => {
    //   this.add(i);
    // });
    this._ingredients.push(...r.ingredients); // spread operator convert array to list of items
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}
