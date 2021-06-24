import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  isOverview:boolean = true;
  isRepo:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
