import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipesService} from '../../shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  data = new Recipe(
    '',
    this.recipesService.getNextId(),
    '',
    '',
    []
  );
  editMode = false;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params && params.hasOwnProperty('id')) {
        this.recipesService.getByID(params['id']).then(r => this.data = r);
        this.editMode = true;
      } else {
        this.data = new Recipe(
          '',
          this.recipesService.getNextId(),
          '',
          '',
          []
        );
      }
    });
  }

}
