/**
 * Created by abdomokhtar on 03/06/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../../shared/recipes.service';
import {ShoppingService} from '../../shared/shopping.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private RecipesService: RecipesService, private ShoppingService: ShoppingService) {
  }


  ngOnInit(): void {
    // this.recipe = this.RecipesService.recipeSelected;
  }

  addToShoppingList() {
    this.ShoppingService.addRecipeImgredients(this.recipe);
  }
}
