import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  //these permissions come from server and based on them user can see different UI
  permissions = ['ADMIN', 'USER'];

  constructor() {
  }

  hasPermission(value: string): boolean {
    return this.permissions.indexOf(value) !== -1;
  }
}
