import { UserService } from './../services/user/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, public _userService: UserService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Guard WORK !!');

      if (this._userService.GetCurrentUserData() && this._userService.GetCurrentUserData().displayName !== '' ) {
        return Observable.of(true);
      } else {
        this.router.navigate(['/login']);
        return Observable.of(false);
      }
  }
}
