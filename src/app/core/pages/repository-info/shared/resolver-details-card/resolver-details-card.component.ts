import { Component, Input, OnInit } from '@angular/core';
import { RepoIssuesPrDataService } from 'src/app/core/services/RepoIssuesPRdata/repo-issues-pr-data.service';
import * as resolverIcons from '../../../../constants/resolvericons.json';
@Component({
  selector: 'app-resolver-details-card',
  templateUrl: './resolver-details-card.component.html',
  styleUrls: ['./resolver-details-card.component.scss'],
})
export class ResolverDetailsCardComponent implements OnInit {
  @Input() resolverDetails: any;

  //eg: Pull Request, Issues
  @Input() rtype = '';

  //Query result eg : open, close
  @Input() rresult = 'open';

  //data for the popup
  displayDetails: boolean = false;
  labels: any;
  icons: { [index: string]: any } = resolverIcons;

  constructor(private resolverDataService: RepoIssuesPrDataService) {}

  ngOnInit(): void {
    this.labels = this.resolverDataService.getRepoLabels();
  }
}
