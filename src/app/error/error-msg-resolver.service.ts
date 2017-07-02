import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ErrorMsgResolver implements Resolve<string> {
  message: string;

  constructor() {
  }


  setMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    return this.message || 'Unknown Error: Are you sure you are using the correct url?';
  }
}
