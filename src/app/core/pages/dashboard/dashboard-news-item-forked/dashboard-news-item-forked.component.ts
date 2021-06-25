import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-item-forked',
  templateUrl: './dashboard-news-item-forked.component.html',
  styleUrls: ['./dashboard-news-item-forked.component.scss'],
})
export class DashboardNewsItemForkedComponent implements OnInit {
  @Input() news: any;

  constructor() {}

  ngOnInit(): void {}
}
