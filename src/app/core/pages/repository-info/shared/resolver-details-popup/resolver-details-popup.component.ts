import { Component, Input, OnInit } from '@angular/core';
import { RepoIssuesPrDataService } from 'src/app/core/services/RepoIssuesPRdata/repo-issues-pr-data.service';

@Component({
  selector: 'app-resolver-details-popup',
  templateUrl: './resolver-details-popup.component.html',
  styleUrls: ['./resolver-details-popup.component.scss'],
})
export class ResolverDetailsPopupComponent implements OnInit {
  //Popup data
  @Input() resolverDetails: any;

  //Icon type and color as a string
  @Input() ricon = '';
  @Input() riconcolor = '';

  //Labels assosiated
  labels: any;

  constructor(private resolverDataService: RepoIssuesPrDataService) {}

  ngOnInit(): void {
    this.labels = this.resolverDataService.getRepoLabels();
  }
}
