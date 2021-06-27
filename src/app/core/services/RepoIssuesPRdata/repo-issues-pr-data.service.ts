import { Injectable } from '@angular/core';
import * as resolverData from '../../constants/resolver.json';

@Injectable({
  providedIn: 'root',
})
export class RepoIssuesPrDataService {
  constructor() {}

  rdata = resolverData;
  getResolverData() {
    return this.rdata;
  }

  getRepoLabels() {
    return this.rdata.labellist;
  }
}
