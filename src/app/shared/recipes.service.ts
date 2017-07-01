import {Recipe} from '../recipe-book/recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from './ingredient.model';

export class RecipesService {
  private _recipes = [
    new Recipe('Mac & Cheese',
      'Simply Mac & cheese',
      'https://static01.nyt.com/images/2014/11/19/dining/19MAINE/19MAINE-superJumbo.jpg',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Macaroni', 1),
        new Ingredient('Cheese', 1),
      ]
    )
  ];
  recipeSelected = new EventEmitter<Recipe>();


  get recipes(): Recipe[] {
    return this._recipes.slice();
  }
}
