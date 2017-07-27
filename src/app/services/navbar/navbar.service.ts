import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  SelectedMenu: string;

  constructor() { }

  GetSelectedMenu() {
    return this.SelectedMenu;
  }
  SetSelectedMenu(menu) {
    this.SelectedMenu = menu;
  }

}
