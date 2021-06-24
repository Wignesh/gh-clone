import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-item-starred',
  templateUrl: './dashboard-news-item-starred.component.html',
  styleUrls: ['./dashboard-news-item-starred.component.scss'],
})
export class DashboardNewsItemStarredComponent implements OnInit {
  @Input() news: any;

  constructor() {}

  ngOnInit(): void {}
}
