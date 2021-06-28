import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import * as resolverIcons from '../../../../constants/resolvericons.json';
import { ActivatedRoute } from '@angular/router';
import { RepoIssuesPrDataService } from 'src/app/core/services/RepoIssuesPRdata/repo-issues-pr-data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resolver-card-container',
  templateUrl: './resolver-card-container.component.html',
  styleUrls: ['./resolver-card-container.component.scss'],
})
export class ResolverCardContainerComponent implements OnInit {
  @Input()
  rtype: string = ''; //eg : issue, Pull Request

  openCount: number = 0;
  closedCount: number = 0;

  //List after query, eg: open / closed list
  rList: any[] = [];

  //local copy of data as list from service
  //rdata: { [index: string]: any };

  //Query result eg : open, close
  rresult = 'open';

  currentPage: number = 1;
  itemsPerPage: number = 10;

  icons: { [index: string]: any } = resolverIcons;
  validQuery: boolean = true;

  //To store the lenght of data from filter pipe
  filterMetaData = { count: 0 };

  queryByAuthor = '';

  constructor(
    private route: ActivatedRoute,
    private resolverDataService: RepoIssuesPrDataService
  ) {
    // this.rdata = resolverDataService.getResolverData();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.rresult = params['query'] ? params['query'] : 'open';

      //valid query?
      if (
        this.rresult == 'open' ||
        this.rresult == 'closed' ||
        this.rresult == 'onc'
      ) {
        //getDataFromService
        this.rList = this.resolverDataService.getOpenOrCloseData(
          this.rtype,
          this.rresult
        );
        this.validQuery = true;
      } else this.validQuery = false;

      const pg = params['pgno'] ? parseInt(params['pgno']) : 1;

      //Valid pgno?
      if (pg)
        this.currentPage =
          pg > 0 &&
          pg <=
            Math.floor((this.filterMetaData.count - 1) / this.itemsPerPage) + 1
            ? pg
            : 1;

      this.queryByAuthor = params['author'] ? params['author'] : '';
    });

    this.openCount = this.resolverDataService.getOpenOrCloseData(
      this.rtype,
      'open'
    ).length;

    this.closedCount = this.resolverDataService.getOpenOrCloseData(
      this.rtype,
      'closed'
    ).length;
  }

  // open/close active btn
  isActive(btype: string) {
    return this.rresult == btype;
  }

  // Helper function - for pagination
  counter() {
    return Array(
      Math.floor((this.filterMetaData.count - 1) / this.itemsPerPage) + 1
    ).fill(4);
  }
}
