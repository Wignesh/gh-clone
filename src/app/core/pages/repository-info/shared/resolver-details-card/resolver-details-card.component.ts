import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolver-details-card',
  templateUrl: './resolver-details-card.component.html',
  styleUrls: ['./resolver-details-card.component.scss'],
})
export class ResolverDetailsCardComponent implements OnInit {
  @Input() resolverDetails: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.resolverDetails.assignee);
  }
}
