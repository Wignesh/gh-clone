import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-item-commits',
  templateUrl: './dashboard-news-item-commits.component.html',
  styleUrls: ['./dashboard-news-item-commits.component.scss'],
})
export class DashboardNewsItemCommitsComponent implements OnInit {
  @Input() news: any;
  constructor() {}

  ngOnInit(): void {}
}
