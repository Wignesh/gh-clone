import { Component, Input, OnInit } from '@angular/core';
import * as resolverData from '../../../../constants/resolver.json';
import * as resolverIcons from '../../../../constants/resolvericons.json';
@Component({
  selector: 'app-resolver-details-card',
  templateUrl: './resolver-details-card.component.html',
  styleUrls: ['./resolver-details-card.component.scss'],
})
export class ResolverDetailsCardComponent implements OnInit {
  @Input() resolverDetails: any;
  @Input() rtype = '';
  @Input() rresult = 'open';
  displayDetails: boolean = false;

  resolverData = resolverData;
  labels: any;
  icons: { [index: string]: any } = resolverIcons;

  constructor() {}

  ngOnInit(): void {
    this.labels = this.resolverData.labellist;
  }
}
