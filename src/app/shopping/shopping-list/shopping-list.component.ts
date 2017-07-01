import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingService.ingredients;
    this.ShoppingService.ingredientsChanged.subscribe(
      (i: Ingredient[]) => { this.ingredients = i; }
    );
  }
}
