import {Ingredient} from '../shared/ingredient.model';
export class Recipe {
  constructor(public name: string,
              public id: number,
              public description: string,
              public imgUrl: string,
              public ingredients: Ingredient[]
  ) {
  }
}
