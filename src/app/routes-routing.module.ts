import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe-book/recipe.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import {ErrorComponent} from './error/error.component';


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent
      }
    ]
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent

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
