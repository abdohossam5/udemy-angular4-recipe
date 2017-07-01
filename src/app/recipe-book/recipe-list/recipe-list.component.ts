import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../../shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter();
  @Input() recipes: Recipe[];
  constructor(private RecipesService: RecipesService) {
  }

  ngOnInit() {
    console.log(this.recipes);
  }

  recipeChanged(r: Recipe) {
    // this.recipeSelected.emit(r);
    this.RecipesService.recipeSelected.emit(r);
  }

}
