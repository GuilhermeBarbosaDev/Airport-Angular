import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../components/services/auth.service";

export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let authenticated = this.authService.authenticated();

    if(authenticated){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
