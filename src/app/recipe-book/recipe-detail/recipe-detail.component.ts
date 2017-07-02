/**
 * Created by abdomokhtar on 03/06/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../../shared/recipes.service';
import {ShoppingService} from '../../shared/shopping.service';
import {ActivatedRoute, Data} from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private RecipesService: RecipesService,
              private ShoppingService: ShoppingService,
              private ActivatedRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {
    // this.recipe = this.RecipesService.recipeSelected;
    this.ActivatedRoute.data.subscribe(
      (data: Data) => {
        console.log(data['recipe']);
        this.recipe = data['recipe'];
      }
    );
  }

  addToShoppingList() {
    this.ShoppingService.addRecipeImgredients(this.recipe);
  }
}
