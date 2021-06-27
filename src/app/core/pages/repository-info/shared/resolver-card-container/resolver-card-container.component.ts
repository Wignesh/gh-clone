import { Component, Input, OnInit } from '@angular/core';
import * as resolverData from '../../../../constants/resolver.json';
import * as resolverIcons from '../../../../constants/resolvericons.json';
import { ActivatedRoute } from '@angular/router';

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
  rList: any[] = [];
  rdata: { [index: string]: any } = resolverData;
  rresult = 'open';
  currentPage: number = 1;

  icons: { [index: string]: any } = resolverIcons;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.rresult = params['query'] ? params['query'] : 'open';
      const dummy = this.rdata[this.rtype];
      this.rList = dummy[this.rresult];

      const pg = params['pgno'] ? parseInt(params['pgno']) : 1;
      if (pg) this.currentPage = pg;
    });

    this.openCount = (this.openCount = this.rdata[this.rtype])?.open?.length;
    this.closedCount = this.rdata[this.rtype]?.closed?.length;
  }

  isActive(btype: string) {
    return this.rresult == btype;
  }

  counter() {
    return Array(Math.floor((this.rList.length - 1) / 5) + 1).fill(4);
  }
}
