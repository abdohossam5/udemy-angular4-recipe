import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Observable} from 'rxjs/Observable';
import {RecipesService} from '../../shared/recipes.service';
import {ErrorMsgResolver} from '../../error/error-msg-resolver.service';
@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(
    private RecipesService: RecipesService,
    private router: Router,
    private ErrorMsgResolver: ErrorMsgResolver
  ) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
        return new Promise((resolve, reject) => {
          this.RecipesService.getByID(route.params['id']).then((recipe) => {
            resolve(recipe);
          }, (err) => {
            this.ErrorMsgResolver.setMessage(err.msg);
            this.router.navigate(['error']);
            reject(err);
          });
        });
  }
}
