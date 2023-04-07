import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LicService } from 'src/app/services/lics/lic.service';
import { AuthService } from 'src/app/services/auths/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor(private authService: AuthService, private licService: LicService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Get the user's authentication token from the auth service
    const authToken = this.authService.getAuthToken();

    // Call the data service to get the user data with the authentication token
    return this.licService.get(authToken ?? '');
  }
}
