import { Injectable } from '@angular/core';
import * as resolverData from '../../constants/resolver.json';

@Injectable({
  providedIn: 'root',
})
export class RepoIssuesPrDataService {
  constructor() {}

  rdata: { [index: string]: any } = resolverData;
  getResolverData() {
    return this.rdata;
  }

  getRepoLabels() {
    return this.rdata.labellist;
  }

  getOpenOrCloseData(rtype: string, rresult: string) {
    if (rresult == 'onc') {
      const dummy = [...this.rdata[rtype]['open']];
      dummy.push(...this.rdata[rtype]['closed']);
      return dummy;
    }
    const dummy = this.rdata[rtype];
    return dummy[rresult];
  }
}
