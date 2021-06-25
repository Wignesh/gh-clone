import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  showProfileMenu: boolean = false;
  showNewMenu: boolean = false;

  handleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
    this.showNewMenu = false;
  }

  handleNewMenu() {
    this.showNewMenu = !this.showNewMenu;
    this.showProfileMenu = false;
  }
  logout() {
    localStorage.clear();
  }

  ngOnInit() {}
}
