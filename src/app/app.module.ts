import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipe-book/recipe.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {RecipesService} from './shared/recipes.service';
import {ShoppingService} from './shared/shopping.service';
import {RoutesModule} from './routes-routing.module';
import { ErrorComponent } from './error/error.component';
import {ErrorMsgResolver} from './error/error-msg-resolver.service';
import {RecipeResolver} from './recipe-book/recipe-detail/recipe-resolver.service';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    DropdownDirective,
    ErrorComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [
    RecipesService,
    ShoppingService,
    ErrorMsgResolver,
    RecipeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
