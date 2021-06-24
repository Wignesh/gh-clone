import { Component, Input, OnInit } from '@angular/core';
import * as resolverData from '../../../../constants/resolver.json';

@Component({
  selector: 'app-resolver-card-container',
  templateUrl: './resolver-card-container.component.html',
  styleUrls: ['./resolver-card-container.component.scss'],
})
export class ResolverCardContainerComponent implements OnInit {
  @Input()
  rtype: string = '';
  openCount: number = 0;
  closedCount: number = 0;
  openList: any[] = [];
  rdata: { [index: string]: any } = resolverData;
  constructor() {}

  ngOnInit(): void {
    this.openCount = this.rdata[this.rtype]?.openlist?.length;
    this.closedCount = this.rdata[this.rtype]?.closedlist?.length;
    this.openList = this.rdata[this.rtype]?.openlist;
  }
}
