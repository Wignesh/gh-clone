import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-item-release',
  templateUrl: './dashboard-news-item-release.component.html',
  styleUrls: ['./dashboard-news-item-release.component.scss'],
})
export class DashboardNewsItemReleaseComponent implements OnInit {
  @Input() news: any;

  constructor() {}

  ngOnInit(): void {}
}
