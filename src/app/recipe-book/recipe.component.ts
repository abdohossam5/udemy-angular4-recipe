import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from '../shared/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  constructor(public RecipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.RecipesService.recipes;
    this.RecipesService.recipeSelected.subscribe(
      (r: Recipe) => { this.selectedRecipe = r; }
    );
  }


}
