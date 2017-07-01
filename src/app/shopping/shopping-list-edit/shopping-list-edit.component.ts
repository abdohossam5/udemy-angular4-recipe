import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../../shared/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameEl: ElementRef;
  @ViewChild('amountInput') amountEl: ElementRef;
  @Output('ingredientToAdd') ingredientToAdd = new EventEmitter<Ingredient>();

  constructor(private ShoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  add() {
    if (!(<HTMLInputElement>this.nameEl.nativeElement).value || !(<HTMLInputElement>this.amountEl.nativeElement).value) {
      console.log('NO WAY');
      return;
    }

    this.ShoppingService.add({
      name: (<HTMLInputElement>this.nameEl.nativeElement).value,
      amount: parseInt((<HTMLInputElement>this.amountEl.nativeElement).value, 10)
    });
  }


}
