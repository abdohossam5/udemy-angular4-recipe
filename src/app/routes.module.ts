import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe-book/recipe.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
