import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class PersGuardService implements CanActivate{

  realRole: string = 'user';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const expectedRole = route.data["expectedRole"];
    this.realRole = this.tokenService.isAdmin() ? 'admin' : 'user';
    if(!this.tokenService.isLogged || expectedRole.indexOf(this.realRole) < 0){
      this.router.navigate(['/portfolio/home']);
      return false;
    }
    return true;
  }
}
