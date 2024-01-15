import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLeaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: import("@angular/router").ActivatedRouteSnapshot,
    currentState: import("@angular/router").RouterStateSnapshot,
    nextState?: import("@angular/router").RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    // Your logic to check for unsaved changes goes here
    const hasUnsavedChanges = true;

    if (hasUnsavedChanges) {
      return confirm('Are you sure you want to leave? Your changes will be lost.');
    } else {
      return true;
    }
  }
}
