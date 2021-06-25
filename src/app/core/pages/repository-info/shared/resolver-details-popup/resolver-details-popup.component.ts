import { Component, Input, OnInit } from '@angular/core';
import * as resolverData from '../../../../constants/resolver.json';
@Component({
  selector: 'app-resolver-details-popup',
  templateUrl: './resolver-details-popup.component.html',
  styleUrls: ['./resolver-details-popup.component.scss'],
})
export class ResolverDetailsPopupComponent implements OnInit {
  @Input() resolverDetails: any;
  @Input() ricon = '';
  @Input() riconcolor = '';
  labels: any;
  resolverData = resolverData;

  constructor() {}

  ngOnInit(): void {
    this.labels = this.resolverData.labellist;
  }
}
