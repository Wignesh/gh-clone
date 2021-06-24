import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar-left',
  templateUrl: './dashboard-sidebar-left.component.html',
  styleUrls: ['./dashboard-sidebar-left.component.scss'],
})
export class DashboardSidebarLeftComponent implements OnInit {
  isSidebarLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isSidebarLoading = false;
    }, 500);
  }
}
