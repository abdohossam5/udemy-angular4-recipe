import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe-book/recipe.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import {ErrorComponent} from './error/error.component';
import {ErrorMsgResolver} from './error/error-msg-resolver.service';
import {RecipeResolver} from './recipe-book/recipe-detail/recipe-resolver.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: 'view/:id',
        component: RecipeDetailComponent,
        resolve: {recipe: RecipeResolver}
      }
    ]
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: 'error',
    component: ErrorComponent,
    resolve: {message : ErrorMsgResolver}

  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
