import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-item-created',
  templateUrl: './dashboard-news-item-created.component.html',
  styleUrls: ['./dashboard-news-item-created.component.scss'],
})
export class DashboardNewsItemCreatedComponent implements OnInit {
  @Input() news: any;

  constructor() {}

  ngOnInit(): void {}
}
